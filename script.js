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
            cowY: { G: "38 Milk/hr + High Quality Cream", Y: "12 Milk/hr + Standard Cream", R: "7 Milk/hr" },
            sheepY: { G: "307 Wool/hr (Max Rugs)", Y: "120 Wool/hr", R: "43 Wool/hr" },
            F: { G: "Fast (41m)", Y: "Normal (1h 6m)", R: "Slow (1h 42m)" },
            H: { G: "High Upkeep Tolerance", Y: "Standard", R: "Fragile" }
        },
        scrapEstimation: "Estimated Ranch Sale Value",
        scrapUnit: "Scrap",
        cookingBuffs: "Cooking & Buffs Potential",
        cowBuff: "🥛 Ideal for Teas/Pies. High Y triggers procedural spots on skin.",
        sheepBuff: "✂️ High Wool production for Beds/Armor crafting."
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
            cowY: { G: "38 Leite/h + Creme de Alta Qualidade", Y: "12 Leite/h + Creme Padrão", R: "7 Leite/h" },
            sheepY: { G: "307 Lã/h (Máx Tapetes)", Y: "120 Lã/h", R: "43 Lã/h" },
            F: { G: "Rápido (41m)", Y: "Normal (1h 6m)", R: "Lento (1h 42m)" },
            H: { G: "Alta Tolerância", Y: "Padrão", R: "Frágil" }
        },
        scrapEstimation: "Valor Estimado de Venda no Rancho",
        scrapUnit: "Scrap",
        cookingBuffs: "Potencial de Culinária & Buffs",
        cowBuff: "🥛 Ideal para Chás Cremosos/Tortas. Y Alto gera manchas procedurais na pele.",
        sheepBuff: "✂️ Produção massiva de Lã para confecção de Camas/Armaduras."
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

    let totalScrapMin = 0;
    let totalScrapMax = 0;

    genesList.forEach(gene => {
        const fVal = document.getElementById(`father-genes-${gene}`).value;
        const mVal = document.getElementById(`mother-genes-${gene}`).value;
        let pool = [fVal, mVal];
        let counts = { G: 0, Y: 0, R: 0 };
        pool.forEach(v => counts[v] = (counts[v] || 0) + 50);

        // Lógica de cálculo do Scrap baseado em commits de balanceamento
        // Genes verdes dão mais valor, vermelhos desvalorizam o bicho no NPC
        if (counts.G > 0) { totalScrapMin += (counts.G / 100) * 45; totalScrapMax += (counts.G / 100) * 60; }
        if (counts.Y > 0) { totalScrapMin += (counts.Y / 100) * 20; totalScrapMax += (counts.Y / 100) * 30; }
        if (counts.R > 0) { totalScrapMin += (counts.R / 100) * 5;  totalScrapMax += (counts.R / 100) * 10; }

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

    // Se houver consanguinidade, o valor de venda cai pela metade
    if (isInbred) {
        totalScrapMin = Math.floor(totalScrapMin * 0.5);
        totalScrapMax = Math.floor(totalScrapMax * 0.5);
    }

    // Criar o bloco de utilitários extras (Preço e Culinária)
    const extraBox = document.createElement('div');
    extraBox.style.marginTop = '20px';
    extraBox.style.borderTop = '1px solid #333';
    extraBox.style.paddingTop = '15px';

    const buffText = animalType === 'cow' ? i18n[currentLang].cowBuff : i18n[currentLang].sheepBuff;

    extraBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <span style="font-weight: bold; color: #ffa726;">💰 ${i18n[currentLang].scrapEstimation}:</span>
            <span style="font-weight: bold; color: #66bb6a;">${Math.floor(totalScrapMin)} - ${Math.floor(totalScrapMax)} ${i18n[currentLang].scrapUnit}</span>
        </div>
        <div style="margin-top: 10px;">
            <div style="font-weight: bold; color: #4fc3f7; margin-bottom: 5px;">🍳 ${i18n[currentLang].cookingBuffs}:</div>
            <small style="color: #ccc;">${buffText}</small>
        </div>
    `;
    resultsList.appendChild(extraBox);

    document.getElementById('results').style.display = 'block';
}

window.onload = function() {
    renderGeneSelectors();
    updateAnimalInfo();
};
