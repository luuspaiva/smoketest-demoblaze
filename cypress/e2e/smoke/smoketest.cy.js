describe("Smoke Test - DemoBlaze.com", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve carregar a página inicial com sucesso - HOME", () => {
    cy.get("#nava").should("contain.text", "PRODUCT STORE");
  });

  it("Deve criar uma nova conta com sucesso - Sign Up", () => {
    cy.get("#signin2").click();
    cy.wait(1000);

    const username = "user" + Date.now();
    const password = "1234";

    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);
    cy.get('button[onclick="register()"]').click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Sign up successful.");
    });
  });
  it("Deve fazer login com o usuário validUser do user.json - Login", () => {
    cy.fixture("user.json").then((users) => {
      const user = users.validUser;

      cy.login(user.username, user.password);
    });
  });

  it("Deve fazer logout apenas se estiver logado", () => {
    cy.fixture("user.json").then((users) => {
      const user = users.validUser;

      cy.login(user.username, user.password);

      cy.get("#nameofuser", { timeout: 10000 })
        .should("be.visible")
        .and("contain.text", `Welcome ${user.username}`)
        .then(() => {
          cy.get("#logout2").click();

          cy.get("#login2").should("be.visible");
        });
    });
  });

  it("Deve carregar uma categoria aleatória e validar se há produtos (card-block) - Categorias", () => {
    cy.acessarCategoriaAleatoria();

    cy.get(".card-block").should("exist").and("not.be.empty");
  });

  it("Deve carregar página de produto", () => {
    cy.acessarCategoriaAleatoria();

    cy.get(".card-title a").then(($produtos) => {
      const totalProdutos = $produtos.length;
      const randomIndex = Math.floor(Math.random() * totalProdutos);
      const nomeProduto = $produtos[randomIndex].innerText;

      cy.log(`Produto selecionado: ${nomeProduto}`);
      cy.wrap($produtos[randomIndex]).click();
    });

    cy.get(".name", { timeout: 5000 }).should("be.visible");
    cy.get(".price-container").should("be.visible");
    cy.contains("Add to cart").should("be.visible");
  });

  it("Deve adicionar um produto aleatório ao carrinho com sucesso", () => {
    cy.acessarCategoriaAleatoria();

    cy.get(".card-title a").then(($produtos) => {
      const totalProdutos = $produtos.length;
      const randomIndex = Math.floor(Math.random() * totalProdutos);
      const nomeProduto = $produtos[randomIndex].innerText;

      cy.log(`Produto selecionado: ${nomeProduto}`);
      cy.wrap($produtos[randomIndex])
        .scrollIntoView()
        .should("be.visible")
        .click();

      cy.get(".name", { timeout: 5000 }).should("be.visible");
      cy.contains("Add to cart").should("be.visible").click();

      cy.on("window:alert", (alertText) => {
        expect(alertText).to.eq("Product added");
      });

      cy.wait(1000);

      cy.get("#cartur").click();

      cy.get(".success td:nth-child(2)", { timeout: 5000 }) // coluna do nome
        .should("be.visible")
        .and("contain.text", nomeProduto);
    });
  });

  it.only("Deve realizar a compra de um produto", () => {
    cy.fixture("user.json").then((users) => {
      const user = users.validUser;

      cy.login(user.username, user.password);

      cy.get("#cartur").click();

      //cy.get('.success').should('be.visible');

      cy.get(".btn-success").contains("Place Order").click();
      cy.wait(1000);

      cy.get("#name").type("Teste");
      cy.get("#country").type("Brasil");
      cy.get("#city").type("São Paulo");
      cy.get("#card").type("1234 5678 9012 3456");
      cy.get("#month").type("12");
      cy.get("#year").type("2025");

      cy.get(".btn-primary").contains("Purchase").click();
      cy.get(".sweet-alert", { timeout: 10000 }).should("be.visible");
    });
  });
});
