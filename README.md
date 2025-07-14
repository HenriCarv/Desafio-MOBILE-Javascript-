# Desafio-MOBILE-Javascript

Este projeto é um desafio mobile utilizando JavaScript, Chai e WebdriverIO.

## Cobertura de Testes

Nossa suite de testes cobre as seguintes funcionalidades principais do aplicativo:

1. **Login**
   - Login válido
   - Login inválido (credenciais incorretas)

2. **Cadastro (Sign Up)**
   - Cadastro bem-sucedido
   - Cadastro inválido (dados incorretos)

3. **Navegação entre Telas**
   - Mudança de telas no aplicativo

4. **Preenchimento de Formulários**
   - Preenchimento e submissão de formulários

5. **WebView**
   - Interação com elementos em WebView

6. **Validações de Campos**
   - Validação de campos de email
   - Validação de campos de senha

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