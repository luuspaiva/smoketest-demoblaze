Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');

  cy.get('#login2').click();
  cy.wait(1000);

  cy.get('#loginusername').type(username);
  cy.get('#loginpassword').type(password);
  cy.get('button[onclick="logIn()"]').click();

  // Aguarda e valida que está logado
  cy.get('#nameofuser', { timeout: 10000 })
    .should('be.visible')
    .and('contain.text', `Welcome ${username}`);
});

Cypress.Commands.add('acessarCategoriaAleatoria', () => {
  cy.get('.list-group .list-group-item').then(($categories) => {
    const total = $categories.length;
    const randomIndex = Math.floor(Math.random() * total);

    // Armazena o nome da categoria (opcional, para debug)
    const categoria = $categories[randomIndex].innerText;
    cy.log(`Categoria escolhida: ${categoria}`);

    // Clica na categoria aleatória
    cy.wrap($categories[randomIndex]).click();

    // Aguarda o carregamento dos produtos
    cy.get('.card-block', { timeout: 5000 }).should('exist');
  });
});
