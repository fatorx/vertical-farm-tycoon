# Roteiro de Desenvolvimento Técnico: Vertical Farm Tycoon

## 1. Arquitetura e Estrutura do Projeto

O projeto será desenvolvido utilizando HTML5, CSS3 e JavaScript puro (Vanilla JS) para garantir performance e compatibilidade. A estrutura de arquivos será modular para facilitar a manutenção e expansão do código.

```
/vertical-farm-tycoon
|-- index.html
|-- /assets
|   |-- /images
|   |   |-- plants
|   |   |-- equipment
|   |   |-- ui
|   |-- /sounds
|-- /src
|   |-- /game
|   |   |-- main.js         # Loop principal do jogo
|   |   |-- state.js        # Gerenciamento de estado
|   |   |-- plant.js        # Lógica das plantas
|   |   |-- equipment.js    # Lógica dos equipamentos
|   |   |-- floor.js        # Lógica dos andares
|   |-- /ui
|   |   |-- renderer.js     # Renderização do jogo na tela
|   |   |-- hud.js          # Interface do usuário (HUD)
|   |   |-- events.js       # Gerenciamento de eventos de clique
|   |-- /utils
|   |   |-- constants.js    # Constantes do jogo
|   |   |-- storage.js      # Salvar/carregar jogo
|-- /styles
    |-- main.css
```

## 2. Modelo de Dados

O estado do jogo será gerenciado por um objeto central, facilitando o salvamento e carregamento do progresso.

### Exemplo de Estrutura de Dados (JSON):

```json
{
  "player": {
    "money": 1000,
    "reputation": 0
  },
  "time": {
    "week": 1,
    "day": 1
  },
  "floors": [
    {
      "id": 1,
      "type": "Raízes",
      "grid": [
        { "plant": null },
        { "plant": { "type": "Cenoura", "growthStage": 2, "health": 90 } },
        null
      ],
      "equipment": {
        "irrigation": { "status": "functional", "durability": 85 },
        "ac": { "status": "functional", "durability": 95 }
      }
    }
  ]
}
```

## 3. Plano de Sprints de Desenvolvimento

O desenvolvimento será dividido em sprints de uma semana para focar em entregas incrementais.

### Sprint 1: Fundações e Loop Principal

-   **Objetivo:** Criar a estrutura básica do jogo e o loop de tempo.
-   **Tarefas:**
    -   Configurar a estrutura de arquivos do projeto.
    -   Implementar o `index.html` básico com o canvas do jogo.
    -   Criar o loop principal do jogo (`main.js`) que controla o tempo (dias e semanas).
    -   Implementar o modelo de dados inicial (`state.js`).
    -   Renderizar um andar estático na tela (`renderer.js`).

### Sprint 2: Mecânica de Cultivo

-   **Objetivo:** Implementar o plantio, crescimento e colheita das plantas.
-   **Tarefas:**
    -   Criar a lógica da classe `Plant` (`plant.js`) com estágios de crescimento.
    -   Implementar a ação de plantar em uma célula da grade.
    -   Adicionar a lógica de crescimento que avança a cada dia de jogo.
    -   Implementar a ação de colher uma planta madura e adicionar dinheiro ao jogador.
    -   Adicionar a validação para plantas em andares inadequados.

### Sprint 3: Manutenção de Equipamentos

-   **Objetivo:** Introduzir a mecânica de desgaste e manutenção de equipamentos.
-   **Tarefas:**
    -   Criar a lógica da classe `Equipment` (`equipment.js`) com status e durabilidade.
    -   Implementar o desgaste dos equipamentos ao longo do tempo.
    -   Adicionar o impacto de equipamentos quebrados nas plantas (por exemplo, perda de saúde).
    -   Implementar a ação de manutenção que consome dinheiro.
    -   Adicionar alertas visuais para equipamentos danificados.

### Sprint 4: Interface do Usuário e Salvamento

-   **Objetivo:** Desenvolver a interface do usuário e a funcionalidade de salvar/carregar.
-   **Tarefas:**
    -   Criar o HUD com informações de tempo e recursos (`hud.js`).
    -   Implementar a navegação entre os andares.
    -   Desenvolver a funcionalidade de salvar o estado do jogo no `LocalStorage` (`storage.js`).
    -   Implementar a funcionalidade de carregar o jogo a partir do `LocalStorage`.
    -   Adicionar um menu de pausa e configurações básicas.

### Sprint 5: Polimento e Balanceamento

-   **Objetivo:** Refinar a experiéncia de jogo, adicionar sons e balancear a economia.
-   **Tarefas:**
    -   Adicionar efeitos sonoros para ações como plantar, colher e alertas.
    -   Balancear os custos, preços de venda e taxas de desgaste.
    -   Testar o jogo em diferentes resoluções (desktop e mobile) e ajustar o CSS.
    -   Corrigir bugs e fazer otimizações de performance.
    -   Adicionar um tutorial simples para novos jogadores.

## 4. Tecnologias e Ferramentas

-   **Linguagens:** HTML, CSS, JavaScript (ES6+)
-   **Ferramentas de Build (Opcional):** Vite ou Parcel para desenvolvimento local e bundling.
-   **Controle de Versão:** Git e GitHub.
-   **Hospedagem (Opcional):** GitHub Pages, Netlify ou Vercel para fácil deploy.
