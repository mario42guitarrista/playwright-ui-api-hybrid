# Playwright UI + API Hybrid Testing

This project demonstrates a hybrid test automation approach combining UI and API testing using Playwright.

---

## Overview

Instead of relying only on UI tests, this framework validates critical scenarios using both API and UI layers.

This approach improves:

* test reliability
* execution speed
* coverage of business logic

---

## Why Hybrid Testing?

UI tests alone can be slow and flaky.

By integrating API validation:

* data is validated faster
* failures are easier to debug
* tests become more stable

---

## Test Coverage

### UI Testing

* User interaction validation
* Form submission
* DOM validation

### API Testing

* GET request validation
* Response status and body validation

### Hybrid Testing

* API data used in UI validation
* End-to-end validation combining API + UI

### Test Scenarios

* Positive scenario (valid user flow)
* Negative scenario (empty input validation)

---

## Architecture

* Page Object Model (POM)
* Separation of UI and API layers
* Reusable test structure

---

## Project Structure

pages/      # Page Objects
tests/      # Test scenarios
app/        # Application layer (if applicable)

---

## Technologies

* Playwright
* JavaScript
* Node.js

---

## How to Run

npm install
npx playwright test

To view the report:

npx playwright show-report

---

## Key Highlights

* Hybrid testing strategy (UI + API)
* Scalable and maintainable test structure
* Real-world QA approach used in modern teams
* CI integration with GitHub Actions

---

## Author

Mario Lima — QA Automation Engineer
