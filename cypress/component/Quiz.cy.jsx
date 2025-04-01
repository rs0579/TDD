// import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/questions/random",
      },
      { fixture: "questions.json", statusCode: 200 }
    ).as("getRandomQuestions");

    mount(<Quiz />);
  });

  it('should render the "Start Quiz" button initially', () => {
    cy.get(".btn").contains("Start Quiz").should("be.visible");
  });

  it("should load questions when the quiz starts", () => {
    cy.get(".btn").contains("Start Quiz").click(); // Click the Start button
  });

  it("should navigate to the next question after an answer is clicked", () => {
    cy.get(".btn").contains("Start Quiz").click();
  });

  it("should allow the user to take a new quiz after completion", () => {
    cy.get(".btn").contains("Start Quiz").click();

    //Click an answer
    cy.get(".btn").contains("3").click();

    // Check that the "Take New Quiz" button is shown
    cy.get(".btn").contains("Take New Quiz").should("be.visible").click();
  });
});