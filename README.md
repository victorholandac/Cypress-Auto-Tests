# 🤖 Cypress Auto Tests

> Testes automatizados end-to-end para validação do site [Practice Test Automation](https://practicetestautomation.com/), utilizando Cypress com arquitetura Page Objects Model (POM).

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| ![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white) | Framework de testes E2E |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Linguagem principal |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Runtime / gerenciador de pacotes |
| ![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=flat&logo=googlechrome&logoColor=white) | Navegador de execução |

---

## 📁 Estrutura do projeto

```
cypress/
├── config/
├── e2e/
│   ├── exceptions/
│   ├── login/
│   └── table/
├── fixtures/
│   └── example.json
└── support/
    ├── pages/
    │   ├── login.page.js
    │   └── table.page.js
    │   └── exceptions.page.js
    ├── commands.js
    └── e2e.js
```

---

## 🧠 Arquitetura

### 📌 Page Objects Model (POM)

As páginas do sistema são encapsuladas em classes localizadas em `cypress/support/pages/`:

- **`login.page.js`** → ações e elementos da tela de login
- **`table.page.js`** → validações e interações com tabelas
- **`exceptions.page.js`** → validações em uma pagina que gera exceções para o Cypress naso não sejam tratadas

**Benefícios:**
- ✅ Reutilização de código
- ✅ Fácil manutenção
- ✅ Separação entre testes e lógica de UI

---

## 🔐 Variáveis de ambiente

Dados sensíveis como credenciais são armazenados via variáveis de ambiente, garantindo segurança e compatibilidade com pipelines de CI/CD.

**Exemplo — `cypress.env.json`:**
```json
{
  "username": "user_test",
  "password": "pass_test"
}
```

**Acesso no Cypress:**
```js
Cypress.env('username')
Cypress.env('password')
```

> ⚠️ O arquivo `cypress.env.json` **não deve ser versionado**. Adicione-o ao `.gitignore`.

---

## ▶️ Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Abrir o Cypress em modo interativo

```bash
npx cypress open
```

### 3. Executar testes em modo headless (CI/CD)

```bash
npx cypress run --browser chrome
```

### 4. Executar testes específicos

```bash
npx cypress run --spec "cypress/e2e/login/*.cy.js"
```

---


## ⚙️ CI/CD

O projeto foi estruturado para integração contínua, suportando:

- ✅ Variáveis de ambiente via `cypress.env.json` ou secrets do pipeline
- ✅ Execução headless com `--browser chrome`
- ✅ Estrutura modular e escalável de testes

---

## 👨‍💻 Boas práticas aplicadas

- 📐 **Page Objects Model** — separação entre lógica de UI e testes
- 🗂️ **Fixtures** — dados de teste centralizados e reutilizáveis
- 🔒 **Variáveis de ambiente** — sem credenciais hardcoded
- 🧩 **Organização por feature** — testes agrupados por funcionalidade
- 📈 **Escalabilidade** — estrutura preparada para crescimento e CI/CD

---

## 🌐 Site testado

🔗 [https://practicetestautomation.com/](https://practicetestautomation.com/)
