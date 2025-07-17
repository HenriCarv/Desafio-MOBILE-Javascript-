# Desafio-MOBILE-Javascript

Este projeto é um desafio mobile utilizando JavaScript, Chai e WebdriverIO para automação de testes em aplicativos móveis.

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
- WebdriverIO (v9.17.1)
- Chai (v5.2.1)
- Appium (v2.19.0)
- Allure Report (v2.34.1)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 14 ou superior)
- Java JDK 8 ou superior
- Android SDK (para testes em Android)
- Xcode (para testes em iOS, apenas em macOS)
- Appium (versão 2.0 ou superior)

## Configuração do Ambiente

1. **Android SDK**: 
   - Instale o Android Studio e configure as variáveis de ambiente ANDROID_HOME e PATH.
   - Crie um emulador Android ou conecte um dispositivo físico.

2. **Appium**:
   - Instale o Appium globalmente: `npm install -g appium`
   - Instale o driver UiAutomator2: `appium driver install uiautomator2`

3. **Configuração do projeto**:
   - Clone o repositório: `git clone https://github.com/HenriCarv/Desafio-MOBILE-Javascript-.git`
   - Instale as dependências: `npm install`

## Executando os Testes

Este projeto utiliza o @wdio/appium-service, que inicia e gerencia automaticamente o servidor Appium durante a execução dos testes. Não é necessário iniciar o Appium manualmente.

Para executar os testes em Android:

npm run test:android

Certifique-se de que o nome do dispositivo em `config/wdio.android.conf.cjs` corresponda ao seu emulador ou dispositivo físico.

## Gerando Relatórios

Para gerar e abrir o relatório Allure:

npm run report

## Geração de Massa de Dados

Este projeto utiliza @faker-js/faker para geração de dados de teste. Os dados são gerados dinamicamente durante a execução dos testes.

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
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── allure-report/
├── allure-results/
├── config/
│   ├── wdio.android.conf.cjs
│   └── wdio.ios.conf.js
├── test/
│   ├── pageobjects/
│   │   ├── Form.page.js
│   │   ├── login.page.js
│   │   ├── home.page.js
│   │   ├── page.js
│   │   ├── secure.page.js
│   │   └── webview.page.js
│   └── specs/
│       ├── ChangeScreen.e2e.js
│       ├── InvalidLogin.e2e.js
│       ├── FillForm.e2e.js
│       ├── InvalidSignUp.e2e.js
│       ├── Login.e2e.js
│       ├── SignUp.e2e.js
│       └── WebView.e2e.js
├── .gitignore
├── package.json
├── README.md
└── wdio.conf.cjs

```
## Solução de Problemas

Se encontrar problemas com a porta do Appium, verifique se não há outros processos usando a porta 4723. Você pode mudar a porta no arquivo de configuração se necessário.

## Autores
Henrique de Carvalho - Inmetrics - https://github.com/HenriCarv