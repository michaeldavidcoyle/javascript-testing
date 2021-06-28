# JavaScript Unit Testing

Exploring Test-Driven Development (TDD) with the Jasmine framework.

## TDD Procedure
1. Write the smallest possible test: Identify the simplest, smallest thing you want to confirm. For example, before a function exists, assert that the function is defined.
2. Run all the tests to ensure that the new test fails. We're supposed to see a red, failing test, since there's no code yet to green it. Red means we did the first step correctly. Seeing the newest test turn red is critical because our tests drive the development, not the other way around.
3. Write only enough code to green that newest test. No more, no less. It's OK if things are hard-coded here.
4. Run all tests. We're looking for green tests across the board.
5. Refactor the code.
6. Repeat the process by going back to the first step. The repeat step means following the steps to add new tests.
7. Overview: This entire TDD workflow is often explained as the repetition of "Red, Green, Refactor". This encapsulates the idea of writing a single, small failing test, writing only enough code to green the test, and then to refactor, when possible.

## The Three Laws of TDD
* You are not allowed to write any production code unless it is to make a failing unit test pass.
* You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
* You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
