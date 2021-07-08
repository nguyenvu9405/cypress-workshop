describe("multi-select", () => {
    before(() => {
        cy.visit("#/component-widgets/data-entry/multiselect/multiselect");
    });

    it("should work well", () => {
        cy.get("[data-role=multiselect]").first().click();
        cy.get(".dropdown__item").contains("C++").click();
        cy.get(".dropdown__item").contains("PHP").click();
        cy.get("[data-role=multiselect]").find("input").should("have.value", "JavaScript, C++, PHP");
    });
});