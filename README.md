# 🧪 Automação de Smoke Test com Cypress - Demoblaze.com

Este projeto faz parte do meu portfólio como QA e demonstra como aplicar testes automatizados com [Cypress](https://www.cypress.io/) em uma aplicação de e-commerce, utilizando como base o site [Demoblaze](https://www.demoblaze.com/). O foco é garantir que os fluxos principais da aplicação estejam funcionando corretamente através de **Smoke Tests**.

---

## 🔍 Cenários cobertos

Os testes automatizados cobrem os principais fluxos críticos de uma loja virtual:

- ✅ Acesso à **home page**
- ✅ Navegação por **categorias** (Phones, Laptops, Monitors)
- ✅ Abertura de **produto aleatório**
- ✅ Validação da **PDP** (nome, preço e botão de "Add to cart")
- ✅ Adição de produto ao **carrinho**
- ✅ Validação do produto no **carrinho**
- ✅ **Login e logout** de usuário
- ✅ **Sign Up** de usuário
- ✅ Fluxo completo de **compra** (checkout com preenchimento de dados e confirmação)

---

## 🛠️ Tecnologias utilizadas

- **Cypress** – Framework de automação de testes
- **Node.js** – Ambiente de execução
- **Faker.js** *(opcional)* – Geração de dados randômicos para testes
- **JavaScript** – Linguagem base
- **VS Code** – Editor recomendado

---

## 🚀 Como rodar os testes

### 1. Clone o projeto

```bash
git clone https://github.com/luuspaiva/smoketest-demoblaze/
cd smoketest-demoblaze
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes

**Modo interativo (GUI):**

```bash
npx cypress open
```

**Modo headless:**

```bash
npx cypress run
```

---

## 📁 Estrutura do projeto

```bash
cypress/
├── e2e/
│   ├── smoke/
│   │   └── smoke.cy.js
├── support/
│   ├── commands.js
│   └── e2e.js
├── fixtures/
│   └── user.json
cypress.config.js
README.md
package.json
```

---

## 🧠 Melhorias futuras

- 🔍 Adição de testes de **acessibilidade** com `cypress-axe`
- 📸 Captura de **evidências visuais** por screenshot
- 🔐 Testes negativos de autenticação
- Adição de produto ao carrinho
- Realizar a compra do produto

---

## 👨‍💻 Sobre o autor

Sou **Lucas dos Santos Paiva**, QA com 5 anos de experiência em projetos web e e-commerce. Trabalho com testes funcionais, exploratórios e automatizados, com foco em entregar produtos que realmente gerem valor para o usuário.

Este projeto é parte do meu portfólio para demonstrar minhas habilidades em automação de testes com foco em negócios.

---

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/lucas-paiva-tec/)
- Email: luuspaiva@gmail.com
