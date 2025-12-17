# Análise de Requisitos - Jogo de Fazenda Vertical

## 1. Visão Geral do Projeto

**Nome do Jogo:** Vertical Farm Tycoon (ou similar)

**Plataforma:** Web (Desktop e Mobile)

**Tecnologias:** HTML5, CSS3, JavaScript (Vanilla ou Framework leve)

**Gênero:** Simulador de Gestão / Farming Sim

---

## 2. Estrutura Física do Jogo

### 2.1 Prédio Fazenda Vertical
- **Quantidade de Andares:** 5-6 andares (configurável)
- **Cada Andar Representa:** Uma zona de cultivo especializada
- **Dimensões:** Grade de células (ex: 4x4 ou 5x5 por andar)

### 2.2 Tipos de Andares e Alimentos

| Andar | Tipo | Alimentos Apropriados | Alimentos Inapropriados |
|-------|------|----------------------|------------------------|
| 1 (Térreo) | Raízes | Cenoura, Batata, Beterraba | Tomate, Alface, Morango |
| 2 | Folhosas | Alface, Espinafre, Couve | Cenoura, Tomate, Milho |
| 3 | Frutas | Tomate, Morango, Melão | Cenoura, Alface, Batata |
| 4 | Legumes | Brócolis, Abóbora, Pimentão | Alface, Morango, Milho |
| 5 (Topo) | Ervas | Manjericão, Salsa, Hortelã | Cenoura, Tomate, Abóbora |

---

## 3. Mecânicas Principais

### 3.1 Cultivo de Plantas
- **Plantio:** Clicar em célula vazia + selecionar tipo de alimento
- **Ciclo de Crescimento:** 3-7 dias (em tempo de jogo)
- **Estágios:** Semente → Brotação → Crescimento → Maduro → Colheita
- **Validação:** Sistema verifica se alimento é apropriado para o andar
  - ✓ Apropriado: Crescimento normal
  - ✗ Inapropriado: Planta murcha/morre, colheita perdida

### 3.2 Manutenção de Equipamentos
- **Irrigação:**
  - Status: Funcional / Danificado / Quebrado
  - Impacto: Plantas secam sem água
  - Manutenção: Clicar + custo em recursos
  - Frequência: A cada 2-3 dias

- **Ar Condicionado:**
  - Status: Funcional / Danificado / Quebrado
  - Impacto: Temperatura inadequada mata plantas
  - Manutenção: Clicar + custo em recursos
  - Frequência: A cada 3-4 dias

- **Iluminação (LED):**
  - Status: Funcional / Danificado / Quebrado
  - Impacto: Plantas não crescem sem luz
  - Manutenção: Clicar + custo em recursos
  - Frequência: A cada 4-5 dias

### 3.3 Sistema de Recursos
- **Moeda:** Dinheiro (ganho com colheitas)
- **Energia:** Combustível para equipamentos
- **Sementes:** Inventário de sementes disponíveis
- **Reputação:** Pontuação de desempenho

---

## 4. Progressão Temporal

### 4.1 Sistema de Semanas
- **1 Semana de Jogo:** ~5-10 minutos de tempo real
- **1 Dia de Jogo:** ~1 minuto de tempo real
- **Ciclo:** Segunda → Domingo (7 dias)

### 4.2 Eventos Semanais
- **Segunda:** Entrega de sementes (bonus aleatório)
- **Quarta:** Inspeção de equipamentos (podem quebrar)
- **Sexta:** Oportunidade de venda especial (preços altos)
- **Domingo:** Relatório semanal (lucro, eficiência)

### 4.3 Progressão de Níveis
- **Semana 1-2:** Tutorial + primeiras colheitas
- **Semana 3-5:** Desafios de manutenção
- **Semana 6+:** Modo livre com metas opcionais

---

## 5. Interface do Usuário

### 5.1 Telas Principais
1. **Tela Principal:** Visão dos andares, navegação
2. **Tela de Andar:** Detalhe de um andar específico
3. **Tela de Inventário:** Sementes, recursos, histórico
4. **Tela de Estatísticas:** Progresso, lucros, eficiência
5. **Tela de Configurações:** Som, dificuldade, idioma

### 5.2 HUD (Heads-Up Display)
- Dia/Semana/Hora atual
- Recursos disponíveis (Dinheiro, Energia)
- Alertas de manutenção
- Botão de pausa

### 5.3 Responsividade
- **Desktop:** Layout horizontal com sidebar
- **Mobile:** Layout vertical com navegação inferior
- **Tablet:** Layout adaptativo

---

## 6. Elementos Visuais

### 6.1 Estilo Gráfico
- **Tema:** Isométrico ou 2D top-down
- **Paleta:** Cores naturais (verdes, marrons, azuis)
- **Animações:** Crescimento de plantas, indicadores de status

### 6.2 Ícones e Sprites
- Tipos de plantas (5-6 sprites cada)
- Equipamentos (irrigação, AC, iluminação)
- Estados de planta (saudável, doente, morta)
- Ícones de recursos

---

## 7. Desafios e Dificuldades

### 7.1 Modo Fácil
- Equipamentos quebram menos frequentemente
- Plantas crescem mais rápido
- Preços de venda mais altos

### 7.2 Modo Normal
- Balanço padrão
- Desafios moderados

### 7.3 Modo Difícil
- Equipamentos quebram frequentemente
- Crescimento mais lento
- Preços de venda mais baixos
- Eventos aleatórios negativos

---

## 8. Dados Persistentes

### 8.1 Save Game
- Estado de cada planta (tipo, estágio, saúde)
- Status de equipamentos
- Recursos (dinheiro, energia, sementes)
- Semana/Dia atual
- Histórico de colheitas

### 8.2 Armazenamento
- **Desktop:** LocalStorage ou IndexedDB
- **Mobile:** LocalStorage com sincronização

---

## 9. Fluxo de Gameplay

1. Jogador inicia em um andar
2. Observa estado das plantas e equipamentos
3. Realiza ações:
   - Planta novo alimento
   - Colhe alimento maduro
   - Faz manutenção em equipamento
4. Tempo avança (automático)
5. Plantas crescem/morrem
6. Equipamentos podem quebrar
7. Fim da semana: relatório e recompensas
8. Próxima semana começa

---

## 10. Próximas Etapas

1. ✓ Análise de requisitos (ATUAL)
2. Elaborar Game Design Document (GDD)
3. Criar roteiro técnico e arquitetura
4. Definir estrutura de dados
5. Planejar sprint de desenvolvimento
