describe("assert the fetching rows", () => {
	it("should load correctly when expanding", () => {
		cy.visit("#/component-widgets/data-display/tree-table/async");

		cy.get("[data-role=table-body-row]").should("have.length", 1);
		cy.get("[data-role=table-body-row]").first().find("[data-role=tree-node-expander]").click();
		cy.get("[data-role=table-body-row]").should("have.length", 4);
	});
});
