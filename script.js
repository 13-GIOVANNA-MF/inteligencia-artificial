const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma manhã tranquila, você se senta à mesa para tomar seu café da manhã. A mesa está decorada com uma variedade de bebidas quentes. Você precisa escolher entre um café forte e aromático ou um chá relaxante. O que você prefere para começar o dia?",
        alternativas: [
            {
                texto: "Café",
                afirmacao: "Café, para me dar energia."
            },
            {
                texto: "Chá",
                afirmacao: "Chá, para começar o dia mis relaxada."
            }
        ]
    },
    {
        enunciado: " Você está planejando suas próximas férias e tem a oportunidade de escolher entre dois destinos: uma praia paradisíaca com areia branca e águas cristalinas ou uma montanha serena com trilhas e vistas deslumbrantes. Qual lugar te atrai mais?",
        alternativas: [
            {
                texto: "Praia",
                afirmacao: "Praia, porque prefiro relaxar e tomar um sol."
            },
            {
                texto: "Montanha",
                afirmacao: "Montanha, porque gosto de caminhar e ficar em contato com a natureza."
            }
        ]
    },
    {
        enunciado: "Em uma noite chuvosa, você decide relaxar em casa. Você tem um livro novo que está ansioso para ler, mas também tem um filme que todos estão comentando. O que você escolhe para a sua noite de entretenimento?",
        alternativas: [
            {
                texto: "Filme",
                afirmacao: "Filme, porque prefere ficar embaixo das cobertas e comer pipoca."
            },
            {
                texto: "Livro",
                afirmacao: "Livro, pois estou muito ansioso para saber como é a história."
            }
        ]
    },
    {
        enunciado: "Você está pensando em trazer um pouco mais de vida para sua casa. Você pode optar por adotar um animal de estimação que trará companhia e alegria, ou escolher algumas plantas que embelezarão o ambiente e purificarão o ar. O que você prefere ter em casa?",
        alternativas: [
            {
                texto: "Animal",
                afirmacao: "Animal, para poder brincar e ensinar truques."
            },
            {
                texto: "Plantas",
                afirmacao: "Plantas, porque gosto de um ambiente mais relaxante e tranquilo."
            }
        ]
    },
    {
        enunciado: "Você recebeu uma oferta incrível para uma viagem, mas precisa decidir como chegar ao seu destino. Você pode optar por dirigir e aproveitar a paisagem ao longo do caminho ou pegar um voo rápido e direto. Como você prefere viajar?",
        alternativas: [
            {
                texto: "Carro",
                afirmacao: "Carro, pois gosto de fazer viagens mais tranquilas e aprerciar a paisagem."
            },
            {
                texto: "Avião",
                afirmacao: "Avião, pois quero chegar logo ao meu destino."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você prefere...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
