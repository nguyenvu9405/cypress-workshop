describe("query buttons in secondary buttons", () => {
    before(()=>{
        cy.visit("https://a12.mgm-tp.com/showcase/#/component-widgets/general/button/button/button-widget");
    });

    it("should be ok", () => {
        cy.get(".form__section#secondary-buttons")
            .contains("search", { matchCase: false });
    });
});
