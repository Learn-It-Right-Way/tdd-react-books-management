/// <reference types="cypress" />

describe("Bookish App", () => {
    it("Visits the bookish", () => {
        cy.visit("http://localhost:3000/");

        cy.get("h1").contains("Bookish").should("exist", { matchCase: true });
        cy.get("[data-test='input-search']").should("exist");
        cy.get("button")
            .contains("Search")
            .should("exist", { matchCase: true });
    });
});
