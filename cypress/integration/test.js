describe("My First Test", function () {
    it("Visits the login", function () {
        cy.visit("http://localhost:3000/login")
        cy.get('button').click
        cy.get('[type="email"]').type("sallai.marcell69@gmail.com")
        cy.get('[type="password"]').type("Qwertz300")
    });
})