# Plano de Smoke Test Completo - Vertical Farm Tycoon

## 📋 Índice

1. [Introdução](#1-introdução)
2. [Testes Manuais](#2-testes-manuais)
3. [Testes Automatizados](#3-testes-automatizados)
4. [Verificação de Performance](#4-verificação-de-performance)
5. [Critérios de Aceitação](#5-critérios-de-aceitação)
6. [Como Executar](#6-como-executar)
7. [Relatório de Testes](#7-relatório-de-testes)

---

## 1. Introdução

Este documento consolida todos os testes de smoke (verificação rápida de sanidade) para o **Vertical Farm Tycoon Demo**. O objetivo é garantir que as funcionalidades principais estão operacionais após a correção do bug de `canvas null` e que as otimizações de performance estão funcionando como esperado.

**Smoke Test** é um conjunto de testes básicos que verifica se a aplicação está estável o suficiente para testes mais aprofundados. Se qualquer teste falhar, a build é considerada instável e deve ser corrigida antes de prosseguir.

---

## 2. Testes Manuais

### 2.1 Pré-requisitos

- **URL:** [https://fatorx.github.io/vertical-farm-tycoon/](https://fatorx.github.io/vertical-farm-tycoon/)
- **Navegador:** Chrome ou Firefox (versão mais recente)
- **Console:** Aberto (F12) para monitorar erros

### 2.2 Casos de Teste

| ID | Categoria | Teste | Passos | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- |
| **ST-01** | Carregamento | Verificar carregamento sem erros | 1. Limpar cache<br>2. Abrir URL<br>3. Verificar console | Página carrega, canvas exibido, sem erros |
| **ST-02** | UI Inicial | Verificar estatísticas iniciais | 1. Observar painel de estatísticas | Dia = 1, Plantas = 0, FPS ~60, Equipamentos verdes |
| **ST-03** | Plantio | Plantar culturas | 1. Clicar "Plantar Aleatório" 5x | 5 plantas aparecem, contador aumenta |
| **ST-04** | Game Loop | Verificar avanço do tempo | 1. Aguardar 10-15s<br>2. Observar dia e plantas | Dia aumenta, plantas crescem (mudam cor/tamanho) |
| **ST-05** | Colheita | Colher planta madura | 1. Esperar planta madura<br>2. Clicar na planta | Planta desaparece, contador diminui |
| **ST-06** | Manutenção | Manter equipamentos | 1. Esperar equipamento danificado<br>2. Clicar botão de manutenção | Equipamento volta ao verde |
| **ST-07** | Controles | Pausar/Resetar | 1. Pausar simulação<br>2. Retomar<br>3. Resetar | Pausa funciona, retoma funciona, reset limpa tudo |
| **ST-08** | Otimizações | Toggles de otimização | 1. Desativar Dirty Flagging<br>2. Desativar Off-screen Canvas | Métricas mudam conforme esperado |
| **ST-09** | Responsividade | Testar em mobile | 1. Modo dispositivo (F12)<br>2. Selecionar iPhone | Layout ajusta, sem sobreposição |

### 2.3 Critério de Passagem

✅ **APROVADO:** Todos os 9 testes passam  
❌ **REPROVADO:** Qualquer teste falha

---

## 3. Testes Automatizados

### 3.1 Como Executar

1. Abra a URL: [https://fatorx.github.io/vertical-farm-tycoon/](https://fatorx.github.io/vertical-farm-tycoon/)
2. Abra o Console do Navegador (F12 → Console)
3. Copie e cole o conteúdo do arquivo `automated_test_script.js`
4. Execute: `TestRunner.run();`

### 3.2 Testes Incluídos

| ID | Teste | Verificação |
| :--- | :--- | :--- |
| **ST-A01** | Inicialização | Variáveis globais, contadores iniciais |
| **ST-A02** | Plantio | Criar 3 plantas, verificar contadores |
| **ST-A03** | Crescimento | Avançar tempo, verificar mudança de estágio |
| **ST-A04** | Colheita | Forçar planta madura, colher, verificar remoção |
| **ST-A05** | Controles | Pausar, retomar, resetar |

### 3.3 Saída Esperada

```
🚀 INICIANDO SMOKE TEST AUTOMATIZADO 🚀

🏁 RESULTADOS DO SMOKE TEST 🏁
┌─────────┬────────────────────────────────────────┬──────────────┬─────────────────────────────────────┐
│ (index) │ name                                   │ status       │ details                             │
├─────────┼────────────────────────────────────────┼──────────────┼─────────────────────────────────────┤
│ 0       │ 'ST-A01: Carregamento e Inicialização' │ '✅ PASSOU'  │ 'Jogo e UI inicializados...'        │
│ 1       │ 'ST-A02: Plantio de Culturas'          │ '✅ PASSOU'  │ '3 plantas criadas com sucesso.'    │
│ 2       │ 'ST-A03: Avanço do Jogo e Crescimento' │ '✅ PASSOU'  │ 'Plantas cresceram do estágio...'   │
│ 3       │ 'ST-A04: Colheita'                     │ '✅ PASSOU'  │ 'Planta madura colhida...'          │
│ 4       │ 'ST-A05: Controles da Simulação'       │ '✅ PASSOU'  │ 'Controles de Pausa, Retomada...'   │
└─────────┴────────────────────────────────────────┴──────────────┴─────────────────────────────────────┘
🎉 Todos os testes passaram! A build está estável. 🎉
```

---

## 4. Verificação de Performance

### 4.1 Ferramentas

- **Chrome DevTools:**
    - Performance Tab (gravar performance)
    - Memory Tab (verificar vazamentos)
- **UI da Demo:** Métricas de FPS e Tempo Render

### 4.2 Cenários de Performance

| ID | Cenário | Passos | Métrica | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- |
| **PERF-01** | Base Otimizado | Plantar 30 culturas, rodar 1 min | FPS, Tempo Render | FPS: 55-60, Render: <2ms |
| **PERF-02** | Sem Dirty Flagging | Desativar toggle, observar | Plantas Renderizadas, FPS | Renderizadas = Ativas, FPS cai para ~40-50 |
| **PERF-03** | Sem Off-screen Canvas | Desativar toggle, observar | Tempo Render, FPS | Render >5ms, FPS cai ligeiramente |
| **PERF-04** | Estresse (Sem Otimizações) | Desativar ambos, plantar 50+ | FPS, Tempo Render | FPS <30, Render >10ms, travado |
| **PERF-05** | Vazamento de Memória | Jogar 5 min, comparar heap snapshots | Tamanho Heap | Tamanho estável, sem vazamento |
| **PERF-06** | Responsividade UI | Clicar botões no cenário de estresse | Responsividade | UI responde sem atraso |

### 4.3 Métricas de Aceitação

- ✅ **FPS:** >= 55 no cenário otimizado
- ✅ **Tempo Render:** < 3ms no cenário otimizado
- ✅ **Memória:** Estável ao longo do tempo

---

## 5. Critérios de Aceitação

Para que a build seja considerada **APROVADA**, todos os seguintes critérios devem ser atendidos:

1. ✅ **Todos os 9 testes manuais (ST-01 a ST-09) passam**
2. ✅ **Todos os 5 testes automatizados (ST-A01 a ST-A05) passam**
3. ✅ **Todas as 6 verificações de performance (PERF-01 a PERF-06) passam**
4. ✅ **Nenhum erro no console do navegador durante os testes**
5. ✅ **FPS >= 55 no cenário otimizado**
6. ✅ **Tempo de Render < 3ms no cenário otimizado**

Se **qualquer critério falhar**, a build é considerada **REPROVADA** e deve ser corrigida.

---

## 6. Como Executar

### 6.1 Execução Rápida (15 minutos)

1. **Testes Manuais Básicos (5 min):**
    - Execute ST-01, ST-03, ST-05, ST-07
    - Se todos passarem, prossiga

2. **Testes Automatizados (2 min):**
    - Execute o script no console
    - Verifique se todos passam

3. **Verificação de Performance Básica (5 min):**
    - Execute PERF-01 e PERF-04
    - Compare as métricas

4. **Verificação Visual (3 min):**
    - Jogue por alguns minutos
    - Verifique se há comportamentos estranhos

### 6.2 Execução Completa (45 minutos)

1. **Todos os Testes Manuais (15 min)**
2. **Todos os Testes Automatizados (5 min)**
3. **Todas as Verificações de Performance (20 min)**
4. **Profiling Avançado (5 min)**

---

## 7. Relatório de Testes

### 7.1 Template de Relatório

```markdown
# Relatório de Smoke Test - Vertical Farm Tycoon

**Data:** [DATA]
**Testador:** [NOME]
**Build/Commit:** [HASH DO COMMIT]
**Navegador:** [CHROME/FIREFOX + VERSÃO]

## Resumo Executivo
- Testes Manuais: X/9 passaram
- Testes Automatizados: X/5 passaram
- Testes de Performance: X/6 passaram
- **Status Geral:** APROVADO / REPROVADO

## Detalhes

### Testes Manuais
| ID | Status | Observações |
|----|--------|-------------|
| ST-01 | P/F | ... |
| ST-02 | P/F | ... |
...

### Testes Automatizados
[Colar saída do console]

### Performance
| ID | Métrica Observada | Esperado | Status |
|----|-------------------|----------|--------|
| PERF-01 | FPS: 58, Render: 1.2ms | FPS>=55, Render<3ms | P |
...

## Problemas Encontrados
1. [Descrição do problema 1]
2. [Descrição do problema 2]

## Conclusão
[APROVADO/REPROVADO] - [Justificativa]
```

### 7.2 Exemplo de Relatório Preenchido

```markdown
# Relatório de Smoke Test - Vertical Farm Tycoon

**Data:** 16/12/2024
**Testador:** Manus AI
**Build/Commit:** d7f884c
**Navegador:** Chrome 120

## Resumo Executivo
- Testes Manuais: 9/9 passaram ✅
- Testes Automatizados: 5/5 passaram ✅
- Testes de Performance: 6/6 passaram ✅
- **Status Geral:** ✅ APROVADO

## Detalhes

### Testes Manuais
Todos os testes manuais passaram sem problemas.

### Testes Automatizados
🎉 Todos os testes passaram! A build está estável. 🎉

### Performance
| ID | Métrica Observada | Esperado | Status |
|----|-------------------|----------|--------|
| PERF-01 | FPS: 58, Render: 1.5ms | FPS>=55, Render<3ms | ✅ P |
| PERF-02 | FPS caiu para 45 | FPS deve cair | ✅ P |
| PERF-03 | Render: 6ms | Render deve aumentar | ✅ P |
| PERF-04 | FPS: 25, Render: 12ms | FPS<30, Render>10ms | ✅ P |
| PERF-05 | Heap estável | Sem vazamento | ✅ P |
| PERF-06 | UI responsiva | Sem atraso | ✅ P |

## Problemas Encontrados
Nenhum problema encontrado.

## Conclusão
✅ APROVADO - Todas as funcionalidades principais estão operacionais. As otimizações de performance estão funcionando como esperado. A build está estável e pronta para uso.
```

---

## 8. Próximos Passos

Após a aprovação no smoke test:

1. ✅ **Testes de Integração:** Testar interações mais complexas entre sistemas
2. ✅ **Testes de Regressão:** Garantir que novas mudanças não quebram funcionalidades existentes
3. ✅ **Testes de Aceitação do Usuário (UAT):** Validar com usuários reais
4. ✅ **Testes de Carga:** Verificar comportamento sob alta carga (muitas plantas, longo tempo de jogo)

---

## 9. Referências

- **Documentação Técnica:** `IMPLEMENTACAO_PRATICA_COMPLETA.md`
- **Análise de Performance:** `ANALISE_PERFORMANCE_COMPLETA.md`
- **Script Automatizado:** `automated_test_script.js`
- **Checklist de Performance:** `performance_checklist.md`

---

**Autor:** Manus AI  
**Última Atualização:** 16/12/2024
