# Plano de Testes Manuais (Smoke Test) - Vertical Farm Tycoon

## 1. Objetivo

Verificar rapidamente se as funcionalidades mais críticas do jogo **Vertical Farm Tycoon Demo** estão funcionando como esperado após a correção do bug. Este não é um teste exaustivo, mas uma verificação de sanidade para garantir que a aplicação está estável e usável.

---

## 2. Pré-requisitos

- **URL da Aplicação:** [https://fatorx.github.io/vertical-farm-tycoon/](https://fatorx.github.io/vertical-farm-tycoon/)
- **Navegador:** Google Chrome (versão mais recente) ou Firefox (versão mais recente).
- **Console do Desenvolvedor:** Aberto (pressionar F12) para monitorar erros.

---

## 3. Casos de Teste

| ID do Teste | Categoria | Descrição do Teste | Passos para Execução | Resultado Esperado | Status (P/F) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ST-01** | **Carregamento** | Verificar se o jogo carrega sem erros | 1. Limpar o cache do navegador.<br>2. Abrir a URL.<br>3. Observar o console. | A página carrega completamente. O canvas do jogo é exibido. Nenhum erro `TypeError` ou 404 aparece no console. | |
| **ST-02** | **UI Inicial** | Verificar se a interface e as estatísticas iniciais estão corretas | 1. Observar o painel de "Estatísticas". | Dia de Jogo = 1. Plantas Ativas = 0. FPS = ~60. Equipamentos estão verdes. | |
| **ST-03** | **Plantio** | Verificar a funcionalidade de plantar uma cultura | 1. Clicar no botão "🌿 Plantar Aleatório".<br>2. Repetir 5 vezes. | Uma nova planta aparece no canvas a cada clique. O contador "Plantas Ativas" aumenta a cada clique. | |
| **ST-04** | **Game Loop** | Verificar se o tempo do jogo avança e as plantas crescem | 1. Aguardar 10-15 segundos.<br>2. Observar o contador "Dia de Jogo".<br>3. Observar a aparência das plantas. | O "Dia de Jogo" deve aumentar. As plantas devem mudar de cor/tamanho, indicando crescimento. | |
| **ST-05** | **Colheita** | Verificar a funcionalidade de colher uma planta madura | 1. Esperar até que pelo menos uma planta atinja o estágio de colheita (verde escuro).<br>2. Clicar diretamente sobre a planta madura. | A planta clicada desaparece do canvas. O contador "Plantas Ativas" diminui. | |
| **ST-06** | **Manutenção** | Verificar a funcionalidade de manutenção de equipamentos | 1. Esperar vários dias de jogo até que um ícone de equipamento fique amarelo ou vermelho.<br>2. Clicar no botão de manutenção correspondente (ex: "💧 Manter Irrigação"). | O ícone do equipamento volta a ficar verde. | |
| **ST-07** | **Controles** | Verificar os botões de controle da simulação | 1. Clicar em "⏸️ Pausar/Retomar".<br>2. Observar o contador "Dia de Jogo".<br>3. Clicar em "⏸️ Pausar/Retomar" novamente.<br>4. Clicar em "🔄 Resetar". | Ao pausar, o "Dia de Jogo" para de avançar. Ao retomar, ele continua. Ao resetar, todas as plantas somem e o Dia de Jogo volta para 1. | |
| **ST-08** | **Otimizações** | Verificar se os toggles de otimização funcionam | 1. Com ~20 plantas na tela, desativar "Dirty Flagging".<br>2. Observar "Plantas Renderizadas".<br>3. Ativar "Dirty Flagging" novamente.<br>4. Desativar "Off-screen Canvas".<br>5. Observar o "Tempo Render (ms)". | Ao desativar Dirty Flagging, "Plantas Renderizadas" deve ser igual a "Plantas Ativas". Ao desativar Off-screen Canvas, o "Tempo Render" deve aumentar significativamente. | |
| **ST-09** | **Responsividade** | Verificar a aparência em tela pequena | 1. Abrir as ferramentas de desenvolvedor (F12).<br>2. Ativar o modo de visualização de dispositivo (Ctrl+Shift+M).<br>3. Selecionar um dispositivo móvel (ex: "iPhone 12 Pro"). | O layout se ajusta para uma única coluna. O canvas e os controles são visíveis e utilizáveis. Não há sobreposição de elementos. | |

---

## 4. Critérios de Passagem

- O smoke test é considerado **APROVADO** se **todos** os casos de teste (ST-01 a ST-09) passarem (P).
- O smoke test é considerado **REPROVADO** se **qualquer um** dos casos de teste falhar (F). Uma falha em qualquer funcionalidade crítica indica um problema de build ou uma regressão grave.

---

## 5. Ambiente de Teste

- **Navegador Primário:** Google Chrome (Versão 108+)
- **Navegador Secundário:** Mozilla Firefox (Versão 107+)
- **Resolução de Tela (Desktop):** 1920x1080
- **Dispositivo Móvel (Simulado):** iPhone 12 Pro (390x844)
