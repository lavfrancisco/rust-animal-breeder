# 🧬 Rust Livestock Genetics & Breeder Simulator

---

### 🌐 Select Language / Selecione o Idioma
*   [🇺🇸 Read in English](#-english-version)
*   [🇧🇷 Ler em Português](#-versão-em-português)

---

## 🇺🇸 English Version

An advanced, lightweight, and fully responsive web simulator designed specifically for the animal breeding mechanics introduced in Rust's **Livestock Update**. This tool provides a modern solution for planning **Cow (Milk/Dung)** and **Sheep (Wool/Dung)** herds using color dominance calculation and strict inbreeding monitoring.

### 🚀 Core Features
- **Live Screen Capture (Rust Breeder Style):** Native integration with the browser's *Screen Capture API*. Mirror your Rust window and capture animal genetics in real time with a single click—no file saving required.
- **Double Language Support (PT/EN):** Dynamic UI translations to serve both local and global communities instantly.
- **Inbreeding Detector:** Real-time visual alerts if parents share the same *Herd ID*, applying the game's actual penalties to longevity and market value.
- **Scrap Value Calculator:** Dynamically estimates how much Scrap the Ranch NPC will pay for the offspring based on gene purity.
- **Cooking & Buffs Potential:** Displays detailed information on how the **Y (Yield)** gene impacts advanced food chains (like cream teas and buff pies).
- **Mobile Friendly:** Designed to fit perfectly on smartphone screens next to your keyboard while playing.

### ⚠️ Required Game Settings
For the OCR scanner to read text accurately via the live stream, configure your game as follows:
1. **UI Scale to 1.0 (100%):** Set in *Options > User Interface* to keep text proportions calibrated.
2. **Game Language to English:** Set in the main menu. The OCR engine identifies gene states based on original English terms (`GOOD`, `BAD`, etc.).

### 🛠️ Architecture
- `index.html` - Core interface and OCR framework importation.
- `style.css` - Visual styling inspired by Rust's dark industrial theme.
- `script.js` - Real-time video stream management, crossbreeding math, and *Tesseract.js* text parsing.

---

## 🇧🇷 Versão em Português

Um simulador web avançado, leve e totalmente responsivo desenvolvido especificamente para a mecânica de criação e cruzamento de animais do **Livestock Update** do Rust. A ferramenta traz uma solução moderna para o planejamento de rebanhos de **Vacas (Leite/Esterco)** e **Ovelhas (Lã/Esterco)**, utilizando cálculo de dominância genética e monitoramento de consanguinidade.

### 🚀 Recursos Principais
- **Live Screen Capture (Estilo Rust Breeder):** Integração nativa com a *Screen Capture API* do navegador. Permite espelhar a janela do Rust e capturar a genética do animal em tempo real com apenas um clique, sem precisar carregar prints manualmente.
- **Suporte a Dois Idiomas (PT/EN):** Interface e instruções dinâmicas totalmente traduzidas para atender tanto ao público brasileiro quanto internacional.
- **Detector de Consanguinidade (Inbreeding):** Alerta visual instantâneo se os progenitores compartilharem o mesmo *Herd ID* (ID do Rebanho), aplicando as penalidades reais do jogo sobre a longevidade e o valor do animal.
- **Calculadora de Scrap:** Estima dinamicamente o valor de recompensa em *Scrap* (Sucata) que o NPC do Rancho oferecerá pelo animal com base na pureza de seus genes.
- **Potencial de Culinária & Buffs:** Exibe informações detalhadas do impacto do gene **Y (Yield)** na cadeia de produção de alimentos avançados (como chás cremosos e tortas de buffs).
- **Acessível para Celular:** Layout adaptado para funcionar perfeitamente em smartphones ao lado do teclado enquanto você joga.

### ⚠️ Configurações Obrigatórias do Jogo
Para que a inteligência artificial do scanner de tela funcione corretamente através do fluxo de vídeo, o jogador precisa ajustar duas opções dentro do Rust:
1. **UI Scale em 1.0 (100%):** Configurado em *Options > User Interface*. Necessário para manter a proporção de leitura de texto calibrada.
2. **Idioma do Jogo em Inglês:** Ajustado no menu principal do Rust (ícone da bandeira). O motor OCR identifica os estados dos genes baseado nas palavras originais do jogo em inglês (`GOOD`, `BAD`, etc.).

### 🛠️ Estrutura do Projeto
- `index.html` - Estrutura da interface e importação do motor OCR.
- `style.css` - Estilização visual inspirada na identidade escura e industrial de Rust.
- `script.js` - Gerenciamento do fluxo de vídeo em tempo real, lógica matemática de cruzamento e tratamento de texto da biblioteca *Tesseract.js*.

---
Developed for the Rust community / Desenvolvido para a comunidade de Rust.
