describe("click on EXAMPLE nav", () => {
    it("should be ok", () => {
        cy.visit("#");
        cy.get(".nav__link").contains("Example").click();
    });
});
