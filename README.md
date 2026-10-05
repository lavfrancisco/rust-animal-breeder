# 🧬 Rust Livestock Genetics & Breeder Simulator

![Rust Update](https://shields.io)
![Hospedagem](https://shields.io)
![Idiomas](https://shields.io)

Um simulador web moderno, leve e responsivo feito especificamente para a mecânica de criação e genética de animais do **Livestock Update** do Rust. Ao contrário das plantas, a reprodução de animais usa um sistema de dominância de cores e mecânicas rígidas de consanguinidade (*Inbreeding*).

---

## 🚀 Recursos Principais / Core Features

- **Double Language Support (PT/EN):** Interface totalmente traduzida com o clique de um botão para atender à comunidade global.
- **Multi-Species Support:** Configurações e dados reais de produção para **Vacas (Leite/Esterco)** e **Ovelhas (Lã/Esterco)**.
- **Inbreeding Detector:** Alerta visual instantâneo se os progenitores compartilharem o mesmo *Herd ID* (ID do Rebanho), aplicando as penalidades reais do jogo.
- **Scrap Value Calculator:** Calcula uma estimativa de quanto o NPC do Rancho pagará pelo animal com base na pureza de seus genes.
- **Mobile Friendly:** Interface adaptada para funcionar perfeitamente na tela do celular ao lado do seu teclado enquanto você joga.

---

## 🧬 Os 5 Genes Calculados / The 5 Genes Calculated

*   **D - Dung (Esterco):** Frequência de produção de adubo.
*   **L - Longevity (Longevidade):** Tempo de vida útil do animal antes de falecer.
*   **Y - Yield (Rendimento):** Quantidade bruta de recursos gerados (Leite ou Lã).
*   **F - Fertility (Fertilidade):** Tempo de recarga para a fêmea procriar novamente.
*   **H - Hardiness (Resistência):** Tolerância à falta de comida e água no cercado.

---

## 🛠️ Como Contribuir ou Rodar Localmente / How to Run Locally

Como o projeto foi estruturado seguindo as melhores práticas de desenvolvimento, o código é totalmente modular:

1. Clone este repositório ou baixe os arquivos.
2. Certifique-se de manter os três arquivos na mesma pasta:
   - `index.html` (Estrutura)
   - `style.css` (Visual)
   - `script.js` (Lógica Matemática)
3. Abra o arquivo `index.html` em qualquer navegador.

---

## 📈 Dados Baseados nos Commits Oficiais da Facepunch
Os cálculos de probabilidade, multiplicadores de consanguinidade, valores de venda no NPC e geração de manchas procedurais na pele do animal foram extraídos e validados diretamente dos commits da branch `/main/Livestock_animals` da Facepunch Studios.

---
Desenvolvido para a comunidade de Rust. Sinta-se livre para abrir *Issues* ou enviar *Pull Requests* para melhorar o simulador!
