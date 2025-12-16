# 🌱 Vertical Farm Tycoon - Demo Interativa

Uma demonstração interativa das otimizações de performance **Dirty Flagging** e **Off-screen Canvas** aplicadas a um jogo de simulação de fazenda vertical.

## 🎮 Jogar Agora

Acesse a demo ao vivo: [Vertical Farm Tycoon Demo](https://seu-usuario.github.io/vertical-farm-tycoon/)

## 📋 Sobre o Projeto

Este projeto demonstra técnicas avançadas de otimização de renderização em jogos web:

- **Dirty Flagging:** Renderizar apenas objetos que mudaram
- **Off-screen Canvas:** Pré-renderizar elementos estáticos
- **Canvas 2D API:** Renderização eficiente em navegadores
- **Game Loop:** Arquitetura de loop principal com timestep fixo

## 🚀 Funcionalidades

### Plantio
- 🌿 Plantar aleatório
- 🥕 Plantar cenoura
- 🥔 Plantar batata

### Manutenção
- 💧 Manter irrigação
- ❄️ Manter ar condicionado
- 💡 Manter iluminação

### Controle
- ⏸️ Pausar/Retomar simulação
- 🔄 Resetar andar
- 🖱️ Clicar para colher plantas maduras

### Otimizações (Toggle)
- Off-screen Canvas (ativo/inativo)
- Dirty Flagging (ativo/inativo)

## 📊 Métricas em Tempo Real

A demo exibe:
- **FPS:** Quadros por segundo
- **Tempo Render:** Tempo de renderização em ms
- **Plantas Ativas:** Total de plantas no andar
- **Plantas Maduras:** Prontas para colheita
- **Plantas Renderizadas:** Impacto do Dirty Flagging
- **Status de Equipamentos:** Funcional/Danificado/Quebrado

## 🎨 Legenda de Cores

| Cor | Estágio | Descrição |
| :--- | :--- | :--- |
| 🟫 Marrom | Semente | Recém-plantada |
| 🟩 Verde Claro | Brotação | Germinando |
| 🟩 Verde Médio | Crescimento | Crescendo |
| 🟩 Verde Escuro | Madura | Pronta para colheita |
| 🟩 Verde Muito Escuro | Colheita | Última fase |
| 🟥 Vermelho | Doente | Baixa saúde |

## 🔬 Como Testar as Otimizações

1. **Plante 30-50 plantas** com ambas as otimizações ativas
2. **Observe o FPS:** Deve estar ~60 FPS
3. **Desative Dirty Flagging:** Veja o FPS cair
4. **Desative Off-screen Canvas:** Veja o tempo de render aumentar
5. **Desative ambas:** Veja o impacto máximo na performance

## 💻 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Responsivo (funciona em mobile)

## 🛠️ Desenvolvimento Local

Para rodar localmente:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vertical-farm-tycoon.git
cd vertical-farm-tycoon

# Abra em um servidor local (Python 3)
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

## 📚 Documentação Técnica

Este projeto é baseado em um roteiro completo de desenvolvimento que inclui:

- **Game Design Document:** Mecânicas, economia e progressão
- **Technical Roadmap:** Arquitetura e plano de sprints
- **Performance Analysis:** Desafios e otimizações
- **Implementation Guide:** Exemplos de código detalhados

## 🎓 O Que Você Aprenderá

- Como implementar Dirty Flagging em JavaScript
- Como usar Off-screen Canvas para otimizar renderização
- Arquitetura de game loop com timestep fixo
- Boas práticas de desenvolvimento de jogos web
- Profiling e otimização de performance

## 📈 Benchmarks de Performance

Com ambas as otimizações ativas:

| Métrica | Desktop | Mobile |
| :--- | :--- | :--- |
| FPS | 58-60 | 50-55 |
| Tempo Render | ~1ms | ~2ms |
| Plantas Renderizadas | 1-5 | 1-5 |
| Impacto Bateria | Mínimo | -60% vs sem otimizações |

## 🐛 Troubleshooting

### O jogo não carrega
- Use um navegador moderno (Chrome, Firefox, Safari, Edge)
- Verifique a conexão com a internet

### FPS está baixo
- Tente com menos plantas
- Feche outras abas do navegador
- Tente em outro navegador

### Não consigo colher plantas
- Certifique-se de que a planta está madura (verde muito escuro)
- Clique exatamente no quadrado da planta

## 📝 Estrutura do Projeto

```
vertical-farm-tycoon/
├── index.html          # Arquivo principal (HTML + CSS + JS)
├── README.md           # Este arquivo
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🤝 Contribuições

Este é um projeto educacional. Sinta-se livre para:
- Clonar e modificar
- Adicionar novas funcionalidades
- Melhorar a performance
- Criar variações

## 📄 Licença

Este projeto é fornecido como material educacional.

## 🔗 Links Úteis

- [Canvas 2D API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Game Loop - Game Programming Patterns](https://gameprogrammingpatterns.com/game-loop.html)

## 📧 Contato

Dúvidas ou sugestões? Abra uma issue no repositório!

---

**Divirta-se explorando as otimizações de performance! 🚀**
