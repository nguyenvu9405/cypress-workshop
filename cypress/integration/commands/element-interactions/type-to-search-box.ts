describe("type 'checkbox' to search box to navigate", () => {
    it("should navigate to the checkbox page", () => {
        cy.visit("#");
        cy.get(".field__text").type("checkbox{enter}");
    });
});
