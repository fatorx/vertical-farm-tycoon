# Game Design Document: Vertical Farm Tycoon

## 1. Visão Geral e Conceito

**Vertical Farm Tycoon** é um jogo de simulação e gerenciamento onde o jogador assume o controle de uma fazenda vertical de alta tecnologia. O objetivo é cultivar uma variedade de alimentos em diferentes andares de um prédio, gerenciar recursos, manter equipamentos e expandir a operação para se tornar um magnata agrícola. O jogo é projetado para ser uma experiência relaxante, mas desafiadora, com um ciclo de jogo viciante e uma sensação de progresso constante.

## 2. Loop de Gameplay Principal

O ciclo de jogo principal gira em torno de um ciclo semanal de atividades:

1.  **Planejamento e Plantio:** O jogador começa a semana decidindo o que plantar em cada andar, levando em consideração a adequação do alimento ao ambiente daquele andar.
2.  **Cultivo e Manutenção:** Durante a semana, o jogador deve monitorar o crescimento das plantas, regando-as e garantindo que os sistemas de irrigação, ar condicionado e iluminação estejam funcionando corretamente.
3.  **Colheita e Venda:** No final do ciclo de crescimento, o jogador colhe os alimentos e os vende no mercado. O preço de venda pode variar com base na demanda e em eventos especiais.
4.  **Manutenção e Melhorias:** Com o dinheiro ganho, o jogador pode consertar equipamentos danificados, comprar sementes de melhor qualidade e, eventualmente, desbloquear novos andares e tecnologias.
5.  **Relatório Semanal:** Ao final de cada semana, o jogador recebe um relatório detalhado de seu desempenho, incluindo lucros, perdas e eficiência. Este relatório serve como um feedback para o planejamento da próxima semana.

## 3. Mecânicas Detalhadas

### 3.1 Sistema de Cultivo

Cada andar é uma grade (por exemplo, 4x4) onde as plantas podem ser cultivadas. Cada tipo de planta tem um tempo de crescimento específico, requisitos de água e sensibilidade à temperatura. Se uma planta for cultivada no andar errado, ela não crescerá e a colheita será perdida, ensinando o jogador sobre a importância do planejamento.

| Andar | Especialidade | Exemplo de Culturas | Bônus/Penalidades |
| :---- | :------------ | :------------------ | :---------------- |
| 1 | Raízes | Batata, Cenoura | Crescimento 20% mais rápido para raízes | 
| 2 | Folhosas | Alface, Espinafre | Maior resistência a pragas para folhosas | 
| 3 | Frutas | Tomate, Morango | Preço de venda 15% maior para frutas | 
| 4 | Legumes | Brócolis, Pimentão | Menor consumo de água para legumes | 
| 5 | Ervas | Manjericão, Hortelã | Ciclo de crescimento mais curto para ervas | 

### 3.2 Manutenção de Equipamentos

Os equipamentos (irrigação, ar condicionado, iluminação) têm uma durabilidade e se desgastam com o tempo. O jogador precisa realizar manutenção preventiva para evitar falhas catastróficas. Uma falha no sistema de irrigação pode secar as plantações, enquanto uma falha no ar condicionado pode superaquecer e matar as plantas. A manutenção custará recursos (dinheiro e, possivelmente, peças de reposição), criando uma tensão entre investir em novas culturas e manter a infraestrutura existente.

### 3.3 Progressão e Desbloqueio

A progressão do jogador é medida em semanas de operação bem-sucedida. Ao atingir certos marcos (por exemplo, 10 semanas de lucro consistente), o jogador pode desbloquear novos andares, tipos de sementes mais lucrativas e atualizações para os equipamentos. Isso proporciona uma sensação de crescimento e recompensa o planejamento a longo prazo.

## 4. Interface do Usuário (UI) e Experiência do Usuário (UX)

A interface será limpa e intuitiva, com a maior parte da informação acessível com poucos cliques. A visualização principal mostrará o prédio da fazenda, com cada andar clicável para uma visão detalhada. Ícones claros indicarão o estado das plantas (saudável, precisando de água, doente, pronta para colher) e dos equipamentos (funcionando, danificado, quebrado).

- **Visualização do Prédio:** Visão geral de todos os andares, com notificações visuais para problemas urgentes.
- **Visualização do Andar:** Grade de cultivo detalhada, com informações sobre cada planta.
- **Painel de Controle:** Acesso rápido a recursos, sementes, mercado e relatórios.

## 5. Economia do Jogo

A economia é o coração do jogo. O jogador ganha dinheiro vendendo colheitas e gasta em sementes, manutenção e melhorias. Os preços do mercado podem flutuar, e eventos aleatórios (como uma "semana da saúde" que aumenta a demanda por folhas verdes) podem criar oportunidades e desafios.

- **Fontes de Renda:** Venda de colheitas, conclusão de missões (por exemplo, "produzir 100 tomates em uma semana").
- **Despesas:** Compra de sementes, manutenção de equipamentos, desbloqueio de novos andares, atualizações.

## 6. Estilo de Arte e Som

O estilo de arte será 2D, com uma estética limpa e moderna, talvez com um toque isométrico para dar profundidade. As animações serão simples, mas satisfatórias, como o crescimento das plantas e a colheita. A trilha sonora será relaxante e ambiente, com efeitos sonoros que fornecem feedback claro sobre as ações do jogador (cliques, colheita, alertas de falha).
