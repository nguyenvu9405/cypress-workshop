describe("query table rows", () => {
    beforeEach(() => {
        cy.visit("#/component-widgets/data-display/table/basic-usage");
    });

    it("first()", () => {
        cy.get("[data-role=table-body-row]").first();
    });

    it("last()", () => {
        cy.get("[data-role=table-body-row]").last();
    });

    it("eq(10)", () => {
        cy.get("[data-role=table-body-row]").eq(10);
    });
});