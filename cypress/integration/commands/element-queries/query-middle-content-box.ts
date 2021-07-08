describe("query the Middle Content Box", () => {
    it("Middle content box should be queried", () => {
        cy.visit("/#/component-widgets/layout/layout-grid/multiple-column-layout");
        cy.contains("[data-role=layout-grid-column]", "Middle Content Box");
    });
});