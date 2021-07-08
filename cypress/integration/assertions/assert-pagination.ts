describe("pagination", () => {
    before(() => {
        cy.visit("#/component-widgets/data-display/pagination/default");
    });

    it("should be ok", () => {
        cy.get("#default-pagination-select").should("have.value", 3);

        cy.get('button[title="Next page"]').click();
        cy.get("#default-pagination-select").should("have.value", 4);

        cy.get('button[title="Previous page"]').click();
        cy.get("#default-pagination-select").should("have.value", 3);

        cy.get('button[title="Last page"]').click();
        cy.get("#default-pagination-select").should("have.value", 5);

        cy.get('button[title="First page"]').click();
        cy.get("#default-pagination-select").should("have.value", 1);
    });
});