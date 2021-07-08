describe("query the GET STARTED nav", () => {
    it("should be ok", () => {
        cy.visit("#");
        cy.get(".nav__link").contains("Get Started");
    });
});
