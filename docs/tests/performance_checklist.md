# Checklist de Verificação de Performance - Vertical Farm Tycoon

## 1. Objetivo

Verificar se as otimizações de performance estão funcionando como esperado e se o jogo mantém uma performance aceitável sob diferentes condições. Este checklist deve ser usado em conjunto com as ferramentas de profiling do navegador.

---

## 2. Ferramentas

- **Navegador:** Google Chrome
- **Ferramentas de Desenvolvedor (F12):**
    - **Performance Tab:** Para gravar e analisar o tempo de execução.
    - **Memory Tab:** Para verificar o uso de memória e vazamentos.
- **UI da Demo:** Métricas de "FPS" e "Tempo Render (ms)".

---

## 3. Cenários de Teste de Performance

| ID do Teste | Cenário | Passos de Execução | Métrica a Observar | Resultado Esperado | Status (P/F) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PERF-01** | **Cenário Base (Otimizado)** | 1. Carregar a página.<br>2. Plantar 30 culturas.<br>3. Deixar o jogo rodar por 1 minuto. | FPS, Tempo Render | FPS deve se manter estável em **55-60**. Tempo de Render < **2ms**. | |
| **PERF-02** | **Dirty Flagging (Impacto)** | 1. Executar o cenário PERF-01.<br>2. Desativar o toggle "Dirty Flagging".<br>3. Observar as métricas por 30 segundos. | Plantas Renderizadas, FPS | "Plantas Renderizadas" deve ser igual a "Plantas Ativas". O FPS deve cair visivelmente (para ~40-50 FPS). | |
| **PERF-03** | **Off-screen Canvas (Impacto)** | 1. Executar o cenário PERF-01.<br>2. Desativar o toggle "Off-screen Canvas".<br>3. Observar as métricas por 30 segundos. | Tempo Render, FPS | O "Tempo Render" deve aumentar significativamente (> 5ms). O FPS pode cair ligeiramente. | |
| **PERF-04** | **Cenário de Estresse (Sem Otimizações)** | 1. Desativar AMBOS os toggles de otimização.<br>2. Plantar 50+ culturas.<br>3. Deixar o jogo rodar. | FPS, Tempo Render | O FPS deve cair drasticamente (< 30 FPS). O "Tempo Render" deve ser alto (> 10ms). A experiência deve ser visivelmente travada. | |
| **PERF-05** | **Uso de Memória (Estabilidade)** | 1. Abrir a aba "Memory" no DevTools.<br>2. Tirar um "Heap snapshot" inicial.<br>3. Jogar por 5 minutos (plantar, colher, resetar).<br>4. Tirar um segundo "Heap snapshot". | Tamanho do Heap | O tamanho do segundo snapshot não deve ser significativamente maior que o primeiro. Isso indica que não há vazamentos de memória (memory leaks). | |
| **PERF-06** | **Responsividade da UI** | 1. Com o jogo rodando no cenário de estresse (PERF-04).<br>2. Clicar rapidamente nos botões da UI (Pausar, Manter, etc.). | Responsividade | A UI deve responder aos cliques sem atraso perceptível, mesmo com o baixo FPS da renderização do canvas. | |

---

## 4. Métricas de Aceitação

- **FPS:** No cenário otimizado (PERF-01), o FPS médio deve ser **>= 55** em um desktop moderno.
- **Tempo de Renderização:** No cenário otimizado (PERF-01), o tempo médio de renderização deve ser **< 3ms**.
- **Vazamento de Memória:** O uso de memória deve permanecer estável ao longo de uma sessão de jogo prolongada (PERF-05).

---

## 5. Instruções para Profiling (Avançado)

Para uma análise mais profunda do cenário PERF-04 (sem otimizações):

1.  Vá para a aba **Performance** no Chrome DevTools.
2.  Clique no botão **Record** (gravar).
3.  Deixe o jogo rodar por 10 segundos.
4.  Clique em **Stop**.
5.  No gráfico de chama ("Flame Chart"), analise a seção "Animation Frame Fired".

**O que procurar:**
- **Funções longas:** Procure por barras largas que indicam funções demoradas. Sem otimizações, você verá que `drawGrid` e `plant.draw` consomem a maior parte do tempo.
- **Frames perdidos:** Procure por avisos vermelhos de "long task" ou frames que excedem o orçamento de 16.6ms.

