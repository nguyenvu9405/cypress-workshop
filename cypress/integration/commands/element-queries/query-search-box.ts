describe.only("query the search box", () => {
    it("the search box should be queried", () => {
        cy.visit("#");
        cy.get("[placeholder='Search Components']");
    });
});


