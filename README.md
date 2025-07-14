# Desafio-MOBILE-Javascript

Este projeto é um desafio mobile utilizando JavaScript, Chai e WebdriverIO.

## Status da Build

![CI/CD](https://github.com/{seu-usuario}/{seu-repositorio}/workflows/CI/CD/badge.svg)

## Tecnologias Utilizadas

- JavaScript
- WebdriverIO
- Chai
- Appium
- Allure Report

## Pré-requisitos

- Node.js (versão 14 ou superior)
- Java JDK (para Appium)
- Android SDK (para testes em Android)
- Appium

## Instalação

1. Clone o repositório:

git clone https://github.com/{seu-usuario}/{seu-repositorio}.git

2. Instale as dependências:

npm install

## Executando os Testes

Para executar os testes em Android: npm run test:android

## Gerando Relatórios

Para gerar o relatório Allure: npm run report

## CI/CD

Este projeto utiliza GitHub Actions para Integração Contínua e Entrega Contínua (CI/CD). O pipeline inclui as seguintes etapas:

1. Instalação de dependências
2. Inicialização do emulador Android
3. Execução dos testes
4. Geração do relatório Allure
5. Upload do relatório como artefato da build

O deploy é simulado para demonstração e é executado apenas quando há um push para a branch main.

## Estrutura do Projeto

```

Desafio-MOBILE-Javascript
│
├── allure-report/
│
├── allure-results/
│
├── config/
│   ├── wdio.android.conf.cjs
│   └── wdio.ios.conf.js
│
├── test/
│   ├── pageobjects/
│   │   ├── Form.page.js
│   │   ├── login.page.js
│   │   ├── home.page.js
│   │   ├── page.js
│   │   ├── secure.page.js
│   │   └── webview.page.js
│   │
│   └── specs/
│       ├── ChangeScreen.e2e.js
│       ├── InvalidLogin.e2e.js
│       ├── FillForm.e2e.js
│       ├── InvalidSignUp.e2e.js
│       ├── Login.e2e.js
│       ├── SignUp.e2e.js
│       └── WebView.e2e.js
│
├── .gitignore
├── package.json
├── README.md
└── wdio.conf.cjs

```

## Autores
Henrique de Carvalho - Inmetrics - https://github.com/HenriCarv