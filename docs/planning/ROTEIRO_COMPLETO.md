# Roteiro Completo: Vertical Farm Tycoon
## Jogo de Fazenda Vertical em HTML/CSS/JavaScript

---

## 1. Introdução e Visão Geral

**Vertical Farm Tycoon** é um jogo de simulação de gerenciamento onde o jogador controla uma fazenda vertical de alta tecnologia. O objetivo é cultivar alimentos em diferentes andares de um prédio, gerenciar recursos limitados, manter equipamentos críticos e expandir a operação ao longo de semanas de jogo. O projeto é desenvolvido em HTML5, CSS3 e JavaScript puro, garantindo compatibilidade total com navegadores modernos e responsividade para dispositivos desktop e mobile.

---

## 2. Conceito de Jogo e Estrutura Física

### 2.1 O Prédio Fazenda Vertical

O jogo se passa em um prédio com **5 a 6 andares**, cada um especializado em um tipo específico de cultivo. Cada andar contém uma grade de células (por exemplo, 4x4 ou 5x5) onde as plantas podem ser cultivadas. A estrutura física é fundamental para a mecânica de jogo, pois cada andar possui características ambientais únicas que determinam quais alimentos podem ser cultivados com sucesso.

### 2.2 Especialização de Andares

A tabela a seguir apresenta a estrutura de especialização dos andares, os alimentos apropriados para cada um e as penalidades por cultivo inadequado:

| Andar | Tipo de Cultivo | Alimentos Apropriados | Alimentos Inapropriados | Bônus Especial |
| :--- | :-------------- | :-------------------- | :---------------------- | :------------- |
| 1 (Térreo) | Raízes | Cenoura, Batata, Beterraba, Nabo | Tomate, Alface, Morango, Milho | Crescimento 20% mais rápido |
| 2 | Folhosas | Alface, Espinafre, Couve, Rúcula | Cenoura, Tomate, Milho, Abóbora | Maior resistência a pragas |
| 3 | Frutas | Tomate, Morango, Melão, Pêssego | Cenoura, Alface, Batata, Brócolis | Preço de venda 15% maior |
| 4 | Legumes | Brócolis, Abóbora, Pimentão, Feijão | Alface, Morango, Milho, Cenoura | Menor consumo de água (30%) |
| 5 (Topo) | Ervas | Manjericão, Salsa, Hortelã, Tomilho | Cenoura, Tomate, Abóbora, Melão | Ciclo de crescimento 25% mais curto |

Quando um alimento é plantado no andar inadequado, a planta não cresce normalmente. Ao invés disso, ela murcha gradualmente e a colheita é perdida, ensinando ao jogador a importância do planejamento estratégico.

---

## 3. Mecânicas Principais de Jogo

### 3.1 Sistema de Cultivo

O cultivo é o coração do jogo. Cada planta passa por um ciclo de crescimento bem definido:

**Estágios de Crescimento:**
1. **Semente (Dia 0):** A planta é plantada e ocupa uma célula.
2. **Brotação (Dia 1-2):** A planta começa a germinar; aparência visual muda.
3. **Crescimento (Dia 3-5):** A planta cresce; requer água e luz adequadas.
4. **Madura (Dia 6-7):** A planta está pronta para colheita; ícone muda para indicar prontidão.
5. **Colheita (Ação do Jogador):** O jogador clica para colher; a planta é removida e dinheiro é adicionado.

**Requisitos de Manutenção:**
- **Água:** Plantas precisam de irrigação regular. Sem água por mais de 2 dias, a saúde diminui 20% por dia.
- **Luz:** Plantas precisam de iluminação LED. Sem luz, o crescimento para completamente.
- **Temperatura:** Plantas precisam de temperatura controlada pelo ar condicionado. Temperatura inadequada reduz saúde em 15% por dia.

**Validação de Andar:**
Quando um alimento é plantado, o sistema verifica se é apropriado para o andar. Se apropriado, a planta cresce normalmente. Se inapropriado, a planta cresce 50% mais lentamente e tem 30% menos saúde, tornando-a mais propensa a morrer.

### 3.2 Manutenção de Equipamentos

Os equipamentos são críticos para o sucesso do jogo. Cada andar possui três sistemas principais:

**Sistema de Irrigação:**
- **Status:** Funcional, Danificado (eficiência reduzida em 50%), Quebrado (não funciona).
- **Durabilidade:** Começa em 100% e diminui 5-10% por dia de uso.
- **Impacto de Falha:** Sem irrigação, plantas secam e morrem em 3 dias.
- **Manutenção:** Custa 50-100 moedas, restaura durabilidade para 100%.
- **Frequência Recomendada:** A cada 2-3 dias.

**Sistema de Ar Condicionado:**
- **Status:** Funcional, Danificado (temperatura oscila), Quebrado (temperatura descontrolada).
- **Durabilidade:** Começa em 100% e diminui 3-7% por dia de uso.
- **Impacto de Falha:** Temperatura inadequada mata plantas em 4-5 dias.
- **Manutenção:** Custa 75-150 moedas, restaura durabilidade para 100%.
- **Frequência Recomendada:** A cada 3-4 dias.

**Sistema de Iluminação (LED):**
- **Status:** Funcional, Danificado (luminosidade reduzida), Quebrado (sem luz).
- **Durabilidade:** Começa em 100% e diminui 2-5% por dia de uso.
- **Impacto de Falha:** Sem luz, plantas não crescem e morrem em 5-7 dias.
- **Manutenção:** Custa 60-120 moedas, restaura durabilidade para 100%.
- **Frequência Recomendada:** A cada 4-5 dias.

**Eventos de Falha Aleatória:**
A cada dia, há uma chance pequena (1-3%) de um equipamento sofrer dano aleatório, adicionando um elemento de incerteza e desafio ao jogo.

### 3.3 Sistema de Recursos

O jogo utiliza um sistema de recursos simples mas eficaz:

**Moeda (Dinheiro):**
- **Ganho:** Venda de colheitas (preço varia de 50-200 moedas por planta, dependendo do tipo e qualidade).
- **Gasto:** Compra de sementes (20-50 moedas), manutenção de equipamentos (50-150 moedas), desbloqueio de andares.

**Energia:**
- **Ganho:** Recarrega automaticamente a cada semana.
- **Gasto:** Operação de equipamentos consome energia; sem energia, equipamentos não funcionam.

**Sementes:**
- **Ganho:** Compra no mercado, eventos especiais (entrega de sementes toda segunda-feira).
- **Uso:** Plantio em células vazias.

**Reputação:**
- **Ganho:** Colheitas bem-sucedidas, manutenção preventiva, conclusão de desafios.
- **Impacto:** Reputação mais alta desbloqueia preços melhores e oportunidades especiais.

---

## 4. Progressão Temporal e Sistema de Semanas

### 4.1 Escala de Tempo

O tempo no jogo é acelerado para manter o ritmo de jogo envolvente:

- **1 Semana de Jogo:** ~5-10 minutos de tempo real.
- **1 Dia de Jogo:** ~1 minuto de tempo real.
- **1 Hora de Jogo:** ~8-10 segundos de tempo real.

A progressão de tempo é automática e não pode ser pausada (exceto pelo menu de pausa do jogo).

### 4.2 Ciclo Semanal

Cada semana segue um padrão de 7 dias (segunda a domingo) com eventos específicos:

**Segunda-feira:** Entrega de sementes. O jogador recebe um bônus aleatório de 2-4 sementes de um tipo aleatório.

**Terça-feira:** Dia normal. Nenhum evento especial.

**Quarta-feira:** Inspeção de Equipamentos. Há uma chance aumentada (5-10%) de um equipamento sofrer dano. O jogador recebe um aviso prévio.

**Quinta-feira:** Dia normal. Nenhum evento especial.

**Sexta-feira:** Oportunidade de Venda Especial. Os preços de venda aumentam em 20-30% para todos os alimentos. O jogador é notificado e pode colher plantas maduras para maximizar lucros.

**Sábado:** Dia normal. Nenhum evento especial.

**Domingo:** Relatório Semanal. O jogo exibe um resumo detalhado da semana, incluindo lucro total, plantas colhidas, equipamentos mantidos e eficiência geral. Este relatório serve como feedback para o planejamento da próxima semana.

### 4.3 Progressão de Níveis e Desbloqueios

O progresso do jogador é medido em semanas de operação bem-sucedida. Ao atingir certos marcos, novos recursos são desbloqueados:

| Marco | Recompensa |
| :--- | :--------- |
| Semana 1 | Desbloqueio do tutorial completo |
| Semana 3 | Novo tipo de semente (Melão) |
| Semana 5 | Aumento de 20% na eficiência de irrigação |
| Semana 7 | Novo andar (Andar 6 - Especial) |
| Semana 10 | Aumento de 15% nos preços de venda |
| Semana 15 | Equipamento de qualidade superior (durabilidade +50%) |

---

## 5. Interface do Usuário (UI) e Experiência do Usuário (UX)

### 5.1 Telas Principais

**Tela de Início:**
Apresenta o menu principal com opções para iniciar um novo jogo, carregar um jogo salvo, acessar configurações e visualizar créditos.

**Tela Principal de Jogo:**
Exibe a visão geral do prédio com todos os andares visíveis em miniatura. Cada andar é clicável para acessar a visão detalhada. O HUD superior mostra o tempo atual, recursos disponíveis e alertas importantes.

**Tela de Andar Detalhada:**
Mostra a grade de cultivo do andar selecionado em alta resolução. Cada célula exibe o estado da planta (vazia, semente, brotação, crescimento, madura, morta). Ícones de equipamento mostram o status de irrigação, ar condicionado e iluminação. Botões de ação permitem plantar, colher e fazer manutenção.

**Tela de Inventário:**
Lista todas as sementes disponíveis, recursos atuais e histórico de colheitas recentes. O jogador pode visualizar quantas sementes de cada tipo possui e seus preços de venda.

**Tela de Estatísticas:**
Exibe gráficos de progresso, lucro acumulado, eficiência de equipamentos e tendências de crescimento. Útil para análise de desempenho a longo prazo.

**Tela de Configurações:**
Permite ajustar volume de som, brilho, dificuldade do jogo, idioma e outras preferências.

### 5.2 HUD (Heads-Up Display)

O HUD permanente exibe informações críticas:

- **Tempo Atual:** Dia da semana, número da semana, hora do dia (em formato de progresso visual).
- **Recursos:** Dinheiro disponível, energia restante, número de sementes no inventário.
- **Alertas:** Notificações de equipamentos danificados, plantas morrendo, colheitas prontas.
- **Botão de Pausa:** Acesso rápido ao menu de pausa.

### 5.3 Responsividade (Desktop e Mobile)

**Layout Desktop:**
- Sidebar esquerda com navegação entre andares.
- Área central com visualização do andar.
- Painel direito com informações e ações rápidas.

**Layout Mobile:**
- Visualização em tela cheia do andar atual.
- Navegação por abas na parte inferior (Andares, Inventário, Estatísticas).
- Botões de ação flutuantes para plantio e manutenção.
- Toque e deslize para navegar entre andares.

---

## 6. Economia do Jogo

### 6.1 Modelo Econômico

A economia do jogo é baseada em um ciclo simples: o jogador investe em sementes e manutenção, cultiva plantas e vende as colheitas para obter lucro. O desafio está em balancear investimento em novas culturas com manutenção preventiva de equipamentos.

**Exemplo de Ciclo Econômico (Semana 1):**
1. Jogador começa com 1000 moedas.
2. Compra 10 sementes de cenoura (200 moedas).
3. Planta cenoura no Andar 1 (apropriado).
4. Faz manutenção preventiva em irrigação (100 moedas).
5. Após 6 dias, colhe 10 cenouras a 80 moedas cada (800 moedas).
6. Lucro líquido: 800 - 200 - 100 = 500 moedas.
7. Total de moedas: 1000 + 500 = 1500 moedas para a próxima semana.

### 6.2 Flutuações de Preço

Os preços de venda variam com base em demanda semanal. Uma semana pode ter alta demanda por folhosas (aumentando preço em 30%), enquanto a próxima semana favorece frutas. Isto incentiva o planejamento estratégico e diversificação de culturas.

### 6.3 Eventos Econômicos Especiais

**Semana da Saúde:** Demanda por folhosas aumenta 40%.
**Semana de Festas:** Demanda por frutas aumenta 35%.
**Crise de Suprimentos:** Preços de sementes aumentam 50%.
**Venda Especial:** Preços de venda aumentam 25% (ocorre toda sexta-feira).

---

## 7. Estrutura de Dados e Modelo de Estado

### 7.1 Objeto de Estado Global

O estado do jogo é gerenciado por um objeto JavaScript central que pode ser serializado para salvamento:

```javascript
const gameState = {
  player: {
    money: 1500,
    reputation: 25,
    level: 1
  },
  time: {
    week: 1,
    day: 3,
    hour: 14
  },
  floors: [
    {
      id: 1,
      type: "Raízes",
      cells: [
        { plantId: 1, plant: { type: "Cenoura", growthStage: 3, health: 95 } },
        { plantId: 2, plant: { type: "Batata", growthStage: 1, health: 100 } },
        { plantId: null, plant: null },
        // ... mais células
      ],
      equipment: {
        irrigation: { status: "functional", durability: 85 },
        ac: { status: "functional", durability: 90 },
        lighting: { status: "functional", durability: 88 }
      }
    },
    // ... mais andares
  ],
  inventory: {
    seeds: {
      "Cenoura": 5,
      "Batata": 3,
      "Alface": 2
    }
  },
  history: {
    harvestedTotal: 25,
    moneyEarned: 2000,
    maintenancePerformed: 12
  }
};
```

### 7.2 Estrutura de Planta

Cada planta é um objeto com propriedades que determinam seu comportamento:

```javascript
const plant = {
  type: "Cenoura",
  floorType: "Raízes",
  plantedDay: 1,
  growthStage: 2, // 0-4 (Semente, Brotação, Crescimento, Madura, Colheita)
  health: 95,
  waterLevel: 80,
  isAppropriate: true,
  daysWithoutWater: 0,
  daysWithoutLight: 0
};
```

---

## 8. Arquitetura Técnica e Estrutura de Projeto

### 8.1 Estrutura de Arquivos

```
/vertical-farm-tycoon
├── index.html                 # Arquivo HTML principal
├── /assets
│   ├── /images
│   │   ├── /plants           # Sprites de plantas em diferentes estágios
│   │   ├── /equipment        # Ícones de equipamentos
│   │   ├── /ui               # Ícones e elementos de interface
│   │   └── /backgrounds      # Fundos e texturas
│   └── /sounds
│       ├── plant.mp3         # Som de plantio
│       ├── harvest.mp3       # Som de colheita
│       ├── alert.mp3         # Som de alerta
│       └── ambient.mp3       # Música ambiente
├── /src
│   ├── /game
│   │   ├── main.js           # Loop principal do jogo
│   │   ├── state.js          # Gerenciamento de estado global
│   │   ├── plant.js          # Lógica e classe Plant
│   │   ├── equipment.js      # Lógica e classe Equipment
│   │   ├── floor.js          # Lógica e classe Floor
│   │   └── gameLogic.js      # Lógica de jogo (progressão, eventos)
│   ├── /ui
│   │   ├── renderer.js       # Renderização visual do jogo
│   │   ├── hud.js            # Interface do usuário (HUD)
│   │   ├── events.js         # Gerenciamento de eventos de clique/toque
│   │   └── menu.js           # Menus (pausa, configurações, etc.)
│   ├── /utils
│   │   ├── constants.js      # Constantes do jogo
│   │   ├── storage.js        # Salvar/carregar jogo (LocalStorage)
│   │   ├── math.js           # Funções matemáticas utilitárias
│   │   └── audio.js          # Gerenciamento de áudio
│   └── app.js                # Inicialização da aplicação
├── /styles
│   ├── main.css              # Estilos principais
│   ├── responsive.css        # Estilos responsivos (mobile)
│   └── animations.css        # Animações CSS
└── README.md                 # Documentação do projeto
```

### 8.2 Módulos Principais

**main.js:** Implementa o loop principal do jogo usando `requestAnimationFrame`. Atualiza o estado, renderiza a tela e gerencia eventos.

**state.js:** Gerencia o estado global do jogo. Fornece métodos para atualizar plantas, equipamentos, recursos e tempo.

**plant.js:** Define a classe `Plant` com métodos para crescimento, consumo de água, verificação de saúde e validação de andar.

**equipment.js:** Define a classe `Equipment` com métodos para desgaste, falha aleatória e manutenção.

**floor.js:** Define a classe `Floor` que representa um andar com sua grade de células, equipamentos e tipo de especialização.

**renderer.js:** Responsável por desenhar o jogo na tela. Renderiza plantas, equipamentos, interface e animações.

**events.js:** Gerencia eventos de clique/toque do usuário. Detecta ações como plantio, colheita e manutenção.

**storage.js:** Implementa salvamento e carregamento de jogo usando `LocalStorage` (ou `IndexedDB` para dados maiores).

---

## 9. Plano de Desenvolvimento em Sprints

### Sprint 1: Fundações (Semana 1)

**Objetivo:** Estabelecer a estrutura básica do jogo e o loop de tempo.

**Tarefas:**
- Configurar a estrutura de arquivos do projeto.
- Criar `index.html` com canvas e elementos de interface básicos.
- Implementar o loop principal em `main.js` com `requestAnimationFrame`.
- Criar o modelo de estado em `state.js` com estrutura de dados inicial.
- Renderizar um andar estático com grade de células em `renderer.js`.
- Implementar o sistema de tempo (dias, semanas, horas).

**Entregáveis:** Estrutura de projeto funcional, loop de jogo rodando, visualização básica de um andar.

### Sprint 2: Mecânica de Cultivo (Semana 2)

**Objetivo:** Implementar o plantio, crescimento e colheita de plantas.

**Tarefas:**
- Criar a classe `Plant` em `plant.js` com estágios de crescimento.
- Implementar a lógica de crescimento que avança a cada dia.
- Adicionar a ação de plantio (clique em célula vazia + seleção de tipo).
- Implementar a ação de colheita (clique em planta madura).
- Adicionar validação de andar apropriado.
- Criar sprites/ícones para plantas em diferentes estágios.
- Implementar o sistema de ganho de dinheiro por colheita.

**Entregáveis:** Plantas crescem e podem ser colhidas, validação de andar funciona, dinheiro é ganho.

### Sprint 3: Manutenção de Equipamentos (Semana 3)

**Objetivo:** Introduzir a mecânica de desgaste e manutenção de equipamentos.

**Tarefas:**
- Criar a classe `Equipment` em `equipment.js` com status e durabilidade.
- Implementar o desgaste automático de equipamentos a cada dia.
- Adicionar a lógica de falha aleatória de equipamentos.
- Implementar o impacto de equipamentos quebrados nas plantas.
- Criar a ação de manutenção (clique em equipamento + confirmação).
- Adicionar alertas visuais para equipamentos danificados.
- Implementar custo de manutenção (redução de dinheiro).

**Entregáveis:** Equipamentos desgastam, falham e podem ser mantidos, plantas são afetadas por falhas.

### Sprint 4: Interface e Salvamento (Semana 4)

**Objetivo:** Desenvolver a interface do usuário e a funcionalidade de persistência.

**Tarefas:**
- Criar o HUD em `hud.js` com informações de tempo, dinheiro e alertas.
- Implementar navegação entre andares (clique em miniatura do andar).
- Criar menu de pausa com opções de continuar, configurações e sair.
- Implementar salvamento em `LocalStorage` em `storage.js`.
- Implementar carregamento de jogo salvo.
- Adicionar tela de menu principal (novo jogo, carregar, configurações).
- Testar responsividade em diferentes resoluções.

**Entregáveis:** Interface funcional, jogo pode ser salvo e carregado, menu principal operacional.

### Sprint 5: Eventos e Economia (Semana 5)

**Objetivo:** Adicionar eventos semanais e refinar a economia do jogo.

**Tarefas:**
- Implementar eventos semanais (entrega de sementes, inspeção, venda especial, relatório).
- Adicionar flutuações de preço de venda.
- Implementar eventos econômicos especiais (semana da saúde, crise de suprimentos).
- Criar tela de relatório semanal com estatísticas.
- Balancear custos, preços e taxas de desgaste.
- Adicionar sistema de reputação.
- Implementar desbloqueios de novos andares/sementes.

**Entregáveis:** Eventos funcionam, economia é balanceada, progressão de semanas é clara.

### Sprint 6: Polimento e Otimização (Semana 6)

**Objetivo:** Refinar a experiência de jogo, adicionar áudio e otimizar performance.

**Tarefas:**
- Adicionar efeitos sonoros para ações principais (plantio, colheita, alerta, manutenção).
- Adicionar música ambiente relaxante.
- Implementar animações suaves para crescimento de plantas.
- Otimizar performance (reduzir renderizações desnecessárias).
- Testar em múltiplos navegadores e dispositivos.
- Corrigir bugs identificados durante testes.
- Adicionar tutorial interativo para novos jogadores.
- Melhorar estética visual (cores, fontes, layout).

**Entregáveis:** Jogo polido, áudio funcional, performance otimizada, tutorial implementado.

### Sprint 7: Testes e Deploy (Semana 7)

**Objetivo:** Testes finais e preparação para lançamento.

**Tarefas:**
- Testes de compatibilidade em navegadores (Chrome, Firefox, Safari, Edge).
- Testes em dispositivos mobile (iOS, Android).
- Testes de salvamento/carregamento em diferentes cenários.
- Testes de balanceamento de dificuldade.
- Corrigir bugs críticos.
- Preparar documentação (README, guia do jogador).
- Configurar hospedagem (GitHub Pages, Netlify, Vercel).
- Deploy da versão final.

**Entregáveis:** Jogo testado e funcionando em múltiplas plataformas, hospedado e acessível publicamente.

---

## 10. Tecnologias e Ferramentas

**Linguagens:** HTML5, CSS3, JavaScript (ES6+)

**Bibliotecas Opcionais (se necessário):** 
- Canvas rendering: Pixi.js (para melhor performance em mobile)
- Audio: Howler.js (para melhor compatibilidade de áudio)
- State management: Redux ou MobX (para projetos maiores)

**Ferramentas de Desenvolvimento:**
- Editor: Visual Studio Code
- Controle de versão: Git e GitHub
- Build tool (opcional): Vite ou Parcel
- Hospedagem: GitHub Pages, Netlify ou Vercel

**Testes:**
- Testes manuais em navegadores reais
- Testes em dispositivos físicos (desktop, tablet, smartphone)

---

## 11. Considerações de Design e Balanceamento

### 11.1 Dificuldade

O jogo oferecerá três níveis de dificuldade:

**Fácil:** Equipamentos quebram menos frequentemente (redução de 50%), plantas crescem 20% mais rápido, preços de venda 15% mais altos.

**Normal:** Balanceamento padrão conforme descrito neste documento.

**Difícil:** Equipamentos quebram 50% mais frequentemente, plantas crescem 20% mais lentamente, preços de venda 15% mais baixos, eventos negativos mais comuns.

### 11.2 Curva de Dificuldade

As primeiras semanas são mais fáceis para permitir que o jogador aprenda as mecânicas. Gradualmente, a dificuldade aumenta com eventos mais frequentes e desafios maiores. Após a semana 10, o jogo oferece modo livre com metas opcionais.

### 11.3 Recompensas e Motivação

O jogo fornece recompensas constantes para manter o jogador motivado: ganho de dinheiro, desbloqueio de novos andares, aumento de reputação e metas alcançadas. Relatórios semanais fornecem feedback claro sobre o desempenho.

---

## 12. Próximas Etapas Recomendadas

1. **Revisão e Aprovação:** Revisar este roteiro com a equipe de desenvolvimento.
2. **Prototipagem:** Criar um protótipo rápido para validar mecânicas principais.
3. **Arte Conceitual:** Desenvolver estilo visual e criar sprites iniciais.
4. **Desenvolvimento:** Seguir o plano de sprints descrito na seção 9.
5. **Testes Contínuos:** Realizar testes de balanceamento e usabilidade ao longo do desenvolvimento.
6. **Lançamento:** Deploy da versão 1.0 com suporte a futuras atualizações e expansões.

---

## Conclusão

Este roteiro fornece uma visão abrangente do desenvolvimento de **Vertical Farm Tycoon**, um jogo de simulação de fazenda vertical em HTML/CSS/JavaScript. O projeto é viável, escalável e oferece potencial para expansão futura com novos andares, culturas e mecânicas. Seguindo este plano de sprints, o jogo pode ser desenvolvido e lançado em aproximadamente 7 semanas, com uma base sólida para melhorias contínuas.
