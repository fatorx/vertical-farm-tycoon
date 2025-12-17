'''
# Guia Técnico: Otimização de Renderização com Dirty Flagging

## 1. O Conceito de Dirty Flagging

**Dirty Flagging** (ou "marcação suja") é uma técnica de otimização de performance usada em computação gráfica e desenvolvimento de jogos. A ideia central é simples: em vez de redesenhar todos os objetos na tela a cada quadro (frame), o que é computacionalmente caro, nós apenas redesenhamos os objetos que **mudaram** desde o último quadro.

Para rastrear quais objetos mudaram, usamos um "flag" (marcador), que é tipicamente uma propriedade booleana (por exemplo, `isDirty = true`).

> **Definição:** Um objeto é considerado "sujo" (dirty) se seu estado visual foi alterado e ele precisa ser redesenhado. Uma vez que ele é redesenhado, ele é marcado como "limpo" (clean) novamente.

### Fluxo de Trabalho

1.  **Inicialização:** Todos os objetos começam como "sujos" para garantir que sejam desenhados no primeiro quadro.
2.  **Loop de Jogo (Update):** A lógica do jogo é executada. Se uma ação modifica a aparência de um objeto (por exemplo, uma planta cresce, um personagem se move), a flag `isDirty` desse objeto é definida como `true`.
3.  **Loop de Jogo (Render):** O motor de renderização itera por todos os objetos. Ele verifica a flag `isDirty`. Se for `true`, o objeto é redesenhado na tela. Após o redesenho, a flag é imediatamente definida como `false`.
4.  **Repetição:** O processo se repete. Nos quadros seguintes, se nenhum objeto mudar, o motor de renderização não fará nenhum trabalho pesado, economizando preciosos ciclos de CPU/GPU.

--- 

## 2. Exemplo Prático em JavaScript

Vamos aplicar este conceito ao nosso jogo **Vertical Farm Tycoon**. Imagine que temos 100 plantas na tela, mas apenas uma ou duas crescem a cada segundo. Seria um desperdício redesenhar todas as 100 plantas a cada quadro.

### Cenário A: A Abordagem Ineficiente (Naive Rendering)

Neste cenário, redesenhamos tudo, o tempo todo. É mais simples de codificar, mas não escala.

```javascript
// --- setup.js ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Classe da Planta (sem dirty flag)
class Plant {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.growthStage = 1;
        this.color = '#6A824C'; // Verde inicial
    }

    grow() {
        if (this.growthStage < 5) {
            this.growthStage++;
            // A cor muda para indicar crescimento
            this.color = `hsl(100, 50%, ${50 - this.growthStage * 5}%)`;
        }
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, 20, 20 + this.growthStage * 10);
    }
}

// --- main_naive.js ---
const plants = [];
for (let i = 0; i < 100; i++) {
    plants.push(new Plant(Math.random() * 780, Math.random() * 580));
}

function update() {
    // A cada segundo, uma planta aleatória cresce
    if (Math.random() < 0.01) { // Simula uma chance de crescimento
        const randomIndex = Math.floor(Math.random() * plants.length);
        plants[randomIndex].grow();
    }
}

function renderNaive() {
    // 1. Limpa a tela inteira
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Redesenha TODAS as 100 plantas, mesmo que 99 não tenham mudado
    for (const plant of plants) {
        plant.draw(ctx);
    }
    console.log("Renderizando todas as 100 plantas...");
}

function gameLoop() {
    update();
    renderNaive();
    requestAnimationFrame(gameLoop);
}

// gameLoop(); // Inicia o loop
```

**Problema:** A função `renderNaive` faz 100 chamadas de `draw` a cada quadro, mesmo que nenhuma planta tenha crescido. Isso é um desperdício.

### Cenário B: A Abordagem Otimizada com Dirty Flagging

Agora, vamos adicionar a `isDirty` flag.

```javascript
// --- setup.js (mesmo de antes) ---

// Classe da Planta (COM dirty flag)
class PlantWithFlag {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.growthStage = 1;
        this.color = '#6A824C';
        this.isDirty = true; // Começa como "suja" para o primeiro desenho
    }

    grow() {
        if (this.growthStage < 5) {
            this.growthStage++;
            this.color = `hsl(100, 50%, ${50 - this.growthStage * 5}%)`;
            this.isDirty = true; // MARCAÇÃO: A planta mudou, precisa ser redesenhada!
        }
    }

    draw(context) {
        // A lógica de desenho é a mesma
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, 20, 20 + this.growthStage * 10);
    }
}

// --- main_optimized.js ---
const plantsWithFlags = [];
for (let i = 0; i < 100; i++) {
    plantsWithFlags.push(new PlantWithFlag(Math.random() * 780, Math.random() * 580));
}

// A função de update agora marca os objetos como "sujos"
function updateOptimized() {
    if (Math.random() < 0.01) {
        const randomIndex = Math.floor(Math.random() * plantsWithFlags.length);
        plantsWithFlags[randomIndex].grow(); // .grow() já define isDirty = true
    }
}

function renderOptimized() {
    // 1. Encontra apenas as plantas "sujas"
    const dirtyPlants = plantsWithFlags.filter(p => p.isDirty);

    if (dirtyPlants.length === 0) {
        // Nenhuma planta mudou, não fazemos NADA!
        console.log("Nenhuma planta para renderizar.");
        return;
    }

    console.log(`Renderizando apenas ${dirtyPlants.length} planta(s)...`);

    // 2. Para cada planta suja, limpa APENAS a área que ela ocupava
    // (Isso é uma otimização adicional, requer saber o tamanho antigo)
    for (const plant of dirtyPlants) {
        // Simplificação: limpamos uma área um pouco maior
        ctx.clearRect(plant.x, plant.y, 25, 75);
    }

    // 3. Redesenha apenas as plantas sujas e as marca como "limpas"
    for (const plant of dirtyPlants) {
        plant.draw(ctx);
        plant.isDirty = false; // LIMPEZA: A planta está atualizada na tela
    }
}

function gameLoopOptimized() {
    updateOptimized();
    renderOptimized();
    requestAnimationFrame(gameLoopOptimized);
}

// gameLoopOptimized(); // Inicia o loop otimizado
```

--- 

## 3. Comparação de Performance

| Aspecto | Abordagem Ineficiente | Dirty Flagging Otimizado |
| :--- | :--- | :--- |
| **Carga de Renderização** | Constante e Alta (100 draws/quadro) | Variável e Baixa (0-2 draws/quadro) |
| **Uso de CPU/GPU** | Alto e contínuo | Baixo, com picos apenas quando algo muda |
| **Consumo de Bateria** | Alto | Significativamente menor |
| **Complexidade do Código** | Muito simples | Ligeiramente mais complexo (gerenciar flags) |

**Conclusão:** Para cenas complexas com muitas entidades estáticas ou que mudam com pouca frequência, o Dirty Flagging é uma das otimizações mais impactantes que você pode implementar. O pequeno aumento na complexidade do código é mais do que compensado pelo ganho massivo de performance.
'''
