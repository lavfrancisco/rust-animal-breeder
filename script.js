const genesList = ['D', 'L', 'Y', 'F', 'H'];
const i18n = {
    en: {
        title: "Rust Animal Genetics Simulator", lblAnimal: "Animal Type", lblInfo: "Expected Main Resource",
        lblFather: "Father (Sire)", lblMother: "Mother (Dam)", btnSimulate: "Simulate Crossbreeding",
        lblResultsTitle: "Offspring Genetic Probabilities", cowRes: "Milk & Dung", sheepRes: "Wool & Dung",
        inbredWarning: "⚠️ INBREEDING DETECTED! Shared Herd ID reduces longevity and resource output severely.",
        geneNames: { D: "Dung (Esterco)", L: "Longevity", Y: "Yield", F: "Fertility", H: "Hardiness" },
        stats: {
            D: { G: "Every 12.5 min", Y: "Every 25 min", R: "Every 37.5 min" },
            L: { normal: { G: "72 Hours", Y: "48 Hours", R: "31 Hours" }, inbred: { G: "50.4 Hours", Y: "33.6 Hours", R: "21.6 Hours" } },
            cowY: { G: "38 Milk/hr", Y: "12 Milk/hr", R: "7 Milk/hr" },
            sheepY: { G: "307 Wool/hr", Y: "120 Wool/hr", R: "43 Wool/hr" },
            F: { G: "Fast (41m)", Y: "Normal (1h 6m)", R: "Slow (1h 42m)" },
            H: { G: "High Upkeep Tolerance", Y: "Standard", R: "Fragile" }
        }
    },
    pt: {
        title: "Simulador de Genética de Animais - Rust", lblAnimal: "Tipo de Animal", lblInfo: "Recurso Principal",
        lblFather: "Pai", lblMother: "Mãe", btnSimulate: "Simular Cruzamento",
        lblResultsTitle: "Probabilidades Genéticas do Filhote", cowRes: "Leite e Esterco", sheepRes: "Lã e Esterco",
        inbredWarning: "⚠️ CONSANGUINIDADE DETECTADA! ID de Rebanho igual reduz a longevidade e o rendimento.",
        geneNames: { D: "Dung (Esterco)", L: "Longevidade", Y: "Rendimento", F: "Fertilidade", H: "Resistência" },
        stats: {
            D: { G: "A cada 12.5 min", Y: "A cada 25 min", R: "A cada 37.5 min" },
            L: { normal: { G: "72 Horas", Y: "48 Horas", R: "31 Horas" }, inbred: { G: "50.4 Horas", Y: "33.6 Horas", R: "21.6 Horas" } },
            cowY: { G: "38 Leite/h", Y: "12 Leite/h", R: "7 Leite/h" },
            sheepY: { G: "307 Lã/h", Y: "120 Lã/h", R: "43 Lã/h" },
            F: { G: "Rápido (41m)", Y: "Normal (1h 6m)", R: "Lento (1h 42m)" },
            H: { G: "Alta Tolerância", Y: "Padrão", R: "Frágil" }
        }
    }
};

let currentLang = 'pt';

function renderGeneSelectors() {
    const createSelectors = (divId) => {
        const container = document.getElementById(divId);
        if(!container) return;
        container.innerHTML = '';
        genesList.forEach(gene => {
            const row = document.createElement('div');
            row.className = 'gene-select-row';
            row.innerHTML = `
                <span class="gene-label">${gene}:</span>
                <select id="${divId}-${gene}" style="width: 75%;">
                    <option value="G" style="color: #4caf50;">Green (Good)</option>
                    <option value="Y" selected style="color: #9e9e9e;">Grey (Neutral)</option>
                    <option value="R" style="color: #f44336;">Red (Bad)</option>
                </select>
            `;
            container.appendChild(row);
        });
    };
    createSelectors('father-genes');
    createSelectors('mother-genes');
}

function updateAnimalInfo() {
    const type = document.getElementById('animal-type').value;
    document.getElementById('animal-resource').value = type === 'cow' ? i18n[currentLang].cowRes : i18n[currentLang].sheepRes;
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    document.getElementById('title').innerText = i18n[currentLang].title;
    document.getElementById('lbl-animal').innerText = i18n[currentLang].lblAnimal;
    document.getElementById('lbl-info').innerText = i18n[currentLang].lblInfo;
    document.getElementById('lbl-father').innerText = i18n[currentLang].lblFather;
    document.getElementById('lbl-mother').innerText = i18n[currentLang].lblMother;
    document.getElementById('btn-simulate').innerText = i18n[currentLang].btnSimulate;
    document.getElementById('lbl-results-title').innerText = i18n[currentLang].lblResultsTitle;
    updateAnimalInfo();
}

function simulateBreeding() {
    const fHerd = document.getElementById('father-herd').value;
    const mHerd = document.getElementById('mother-herd').value;
    const isInbred = (fHerd === mHerd && fHerd !== "");
    const warningBox = document.getElementById('inbred-warning');
    warningBox.style.display = isInbred ? 'block' : 'none';
    if (isInbred) warningBox.innerText = i18n[currentLang].inbredWarning;

    const animalType = document.getElementById('animal-type').value;
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    genesList.forEach(gene => {
        const fVal = document.getElementById(`father-genes-${gene}`).value;
        const mVal = document.getElementById(`mother-genes-${gene}`).value;
        let pool = [fVal, mVal];
        let counts = { G: 0, Y: 0, R: 0 };
        pool.forEach(v => counts[v] = (counts[v] || 0) + 50);

        const getStatValue = (g, type) => {
            const langStats = i18n[currentLang].stats;
            if (g === 'D') return langStats.D[type];
            if (g === 'L') return isInbred ? langStats.L.inbred[type] : langStats.L.normal[type];
            if (g === 'Y') return animalType === 'cow' ? langStats.cowY[type] : langStats.sheepY[type];
            if (g === 'F') return langStats.F[type];
            if (g === 'H') return langStats.H[type];
            return "";
        };

        let probabilitiesHTML = Object.keys(counts).map(k => {
            if (counts[k] === 0) return "";
            const badgeClass = k === 'G' ? 'badge-g' : k === 'Y' ? 'badge-y' : 'badge-r';
            return `<div style="margin: 4px 0;"><span class="gene-badge ${badgeClass}">${k}</span> ${counts[k]}% -> <small style="color:#bbb;">(${getStatValue(gene, k)})</small></div>`;
        }).join("");

        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <div style="font-weight:bold; color: #fff;">${i18n[currentLang].geneNames[gene]} (${gene})</div>
            <div style="text-align: right;">${probabilitiesHTML}</div>
        `;
        resultsList.appendChild(item);
    });
    document.getElementById('results').style.display = 'block';
}

// Iniciar scripts ao carregar a página
window.onload = function() {
    renderGeneSelectors();
    updateAnimalInfo();
};
