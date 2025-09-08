function trocarSection(section) {
    document.querySelector(".secao-ativa").classList.toggle("secao-ativa");
    document.getElementById(section).classList.toggle("secao-ativa");
}

function toggleSVG(el) {
    const svg = el.querySelector('svg');
    const path = svg.querySelector('path');

    const vazio = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 2.63404C5.40037 1.27392 3.56286 0.85358 2.18509 2.09904C0.807304 3.3445 0.613331 5.42684 1.69531 6.89987C2.5949 8.12455 5.31738 10.7076 6.20967 11.5436C6.30946 11.6372 6.35939 11.6839 6.41763 11.7023C6.46841 11.7183 6.52402 11.7183 6.57487 11.7023C6.63311 11.6839 6.68297 11.6372 6.78283 11.5436C7.67511 10.7076 10.3976 8.12455 11.2972 6.89987C12.3791 5.42684 12.2088 3.3314 10.8074 2.09904C9.4059 0.866682 7.59964 1.27392 6.5 2.63404Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>`;

    const cheio = `<path d="M1.0069 6.98078L6.48235 12.9332L11.9578 6.98078C12.6025 6.27991 12.9647 5.32934 12.9647 4.33816V4.17053C12.9647 2.1991 11.4946 0.600937 9.68115 0.600937C8.68359 0.600937 8.37304 0.600937 7.29264 1.41405L6.48235 1.95612L5.67206 1.41405C4.59166 0.600937 4.28109 0.600937 3.28359 0.600937C1.47012 0.600937 0 2.1991 0 4.17053V4.33816C0 5.32934 0.362193 6.27991 1.0069 6.98078Z" fill="#FF0101"/>`;

    // toggle baseado no atributo data-state
    if (el.getAttribute('data-state') === 'cheio') {
        svg.innerHTML = vazio;
        el.setAttribute('data-state', 'vazio');
    } else {
        svg.innerHTML = cheio;
        el.setAttribute('data-state', 'cheio');
    }
}

function trocarSectionVinho(section, vinho) {
    document.querySelector(".secao-ativa").classList.toggle("secao-ativa");
    document.getElementById(section).classList.toggle("secao-ativa");
}

const chateau = ["Médio corpo, com taninos maduros e acidez equilibrada. O final marcado por frutas maduras e secas, chocolate, tabaco e notas florais", "Frutas vermelhas e pretas maduras e secas, como amoras, groselhas e cerejas, notas de especiarias, defumadas, além de toques florais", "Meriot", "Rubi com reflexos granada", "750ml", "14,5%", "18 meses em barricas novas de carvalho"]

function trocarSecaoMenu(secao, sec) {
    document.querySelector(".vinho-menu-btn.active").classList.toggle("active");
    secao.classList.toggle("active");

    document.querySelector(".vinho-section-sec.active").classList.toggle("active");
    document.querySelector(sec).classList.toggle("active");
}