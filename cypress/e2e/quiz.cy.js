describe("Quiz site", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("vist quiz site", () => {
      cy.visit("/");
    });
  
    it("A user can click on the start quiz button and the quiz should start", () => {
      cy.get(".btn").contains("Start Quiz").should("be.visible").click();
    });
  
    it("should render the questions and complete the quiz", () => {
      cy.get(".btn").contains("Start Quiz").should("be.visible").click();
  
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
    });
  
    it("should allow the user to take a new quiz after completion", () => {
      cy.get(".btn").contains("Start Quiz").should("be.visible").click();
  
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
  
      cy.get("h2").contains("Quiz Completed").should("be.visible");
  
      cy.get("[data-cy=score]").should("be.visible");
  
      cy.get(".btn").contains("Take New Quiz").should("be.visible").click();
  
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
      cy.get(".btn").contains("1").click();
    });
  });