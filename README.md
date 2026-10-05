# 🧬 Rust Livestock Genetics & Breeder Simulator

Um simulador web avançado, leve e totalmente responsivo desenvolvido especificamente para a mecânica de criação e cruzamento de animais do **Livestock Update** do Rust. A ferramenta traz uma solução moderna para o planejamento de rebanhos de **Vacas (Leite/Esterco)** e **Ovelhas (Lã/Esterco)**, utilizando cálculo de dominância genética e monitoramento de consanguinidade.

---

## 🚀 Recursos Principais / Core Features

- **Live Screen Capture (Estilo Rust Breeder):** Integração nativa com a *Screen Capture API* do navegador. Permite espelhar a janela do Rust e capturar a genética do animal em tempo real com apenas um clique, sem precisar salvar arquivos ou carregar prints manualmente.
- **Double Language Support (PT/EN):** Interface e instruções dinâmicas totalmente traduzidas para atender tanto à comunidade brasileira quanto ao público global.
- **Inbreeding Detector:** Alerta visual instantâneo se os progenitores compartilharem o mesmo *Herd ID* (ID do Rebanho), aplicando as penalidades reais do jogo sobre a longevidade e o valor do animal.
- **Scrap Value Calculator:** Estima dinamicamente o valor de recompensa em *Scrap* (Sucata) que o NPC do Rancho oferecerá pelo animal com base na pureza de seus genes.
- **Cooking & Buffs Potential:** Exibe informações detalhadas do impacto do gene **Y (Yield)** na cadeia de produção de alimentos avançados (como chás cremosos e tortas de buffs).
- **Mobile Friendly:** Layout adaptado para funcionar perfeitamente em smartphones ao lado do teclado enquanto você joga.

---

## ⚠️ Configurações Obrigatórias do Jogo / Required Game Settings

Para que a inteligência artificial do scanner de tela funcione corretamente através do fluxo de vídeo, o jogador precisa ajustar duas opções dentro do Rust:
1. **UI Scale em 1.0 (100%):** Configurado em *Options > User Interface*. Necessário para manter a proporção de leitura de texto calibrada.
2. **Idioma do Jogo em Inglês:** Ajustado no menu principal do Rust (ícone da bandeira). O motor OCR identifica os estados dos genes baseado nas palavras originais do dicionário em inglês.

---

## 🧬 Os 5 Genes Calculados / The 5 Genes Calculated

*   **D - Dung (Esterco):** Frequência com que o animal gera adubo orgânico.
*   **L - Longevity (Longevidade):** Tempo de vida útil do animal saudável antes de falecer.
*   **Y - Yield (Rendimento):** Quantidade bruta de recursos gerados por hora (Leite ou Lã) e ativação de padrões procedurais de manchas na pele.
*   **F - Fertility (Fertilidade):** Redução no tempo de recarga (cooldown) para a reprodução de fêmeas.
*   **H - Hardiness (Resistência):** Tolerância do animal à falta de alimento ou água no cercado.

---

## 🛠️ Estrutura do Projeto / Project Architecture

O projeto foi construído de forma modular e limpa usando desenvolvimento web nativo, permitindo a hospedagem 100% gratuita no GitHub Pages:
- `index.html` - Estrutura da interface e importação do motor OCR.
- `style.css` - Estilização visual inspirada na identidade escura e industrial de Rust.
- `script.js` - Gerenciamento do fluxo de vídeo em tempo real, lógica matemática de cruzamento e tratamento de texto da biblioteca *Tesseract.js*.

---

## 📈 Validação de Dados
Todas as fórmulas matemáticas de probabilidade, impacto de consanguinidade, multiplicadores econômicos de venda de animais e gatilhos visuais procedurais foram mapeados e atualizados com base nos commits oficiais da Facepunch Studios na branch `/main/Livestock_animals`.

---
Desenvolvido para a comunidade de Rust. Sinta-se livre para abrir *Issues* ou enviar *Pull Requests* para propor melhorias!
