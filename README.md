# 🚀 Cypress BDD E2E Framework with Cucumber, POM & GitHub Actions

Welcome to a professional end-to-end (E2E) test automation framework powered by **Cypress**, **Cucumber**, and the **Page Object Model (POM)**. This project demonstrates a clean, scalable structure for real-world web testing using [OrangeHRM](https://opensource-demo.orangehrmlive.com/) as the test target.

Whether you're a beginner or looking to scale your test suite with CI/CD, this framework is designed to be **educational, reusable, and enterprise-ready**.

---

## 🚀 Tech Stack

| Tool/Tech                         | Purpose                           |
|----------------------------------|-----------------------------------|
| [Cypress](https://www.cypress.io/)                 | E2E test runner                    |
| [Cucumber](https://cucumber.io/) + [Gherkin](https://cucumber.io/docs/gherkin/reference/) | BDD syntax for readable scenarios |
| Page Object Model (POM)          | Code abstraction and maintainability |
| [GitHub Actions](https://github.com/features/actions)         | CI/CD automation                   |
| `.env` + GitHub Secrets          | Secure credentials handling       |

---

## 📁 Project Structure

```bash
cypress-login-dashboard-ci-demo/
├─ cypress/
│  ├─ e2e/
│  │  ├─ login/
│  │  │  ├─ login.feature      # Gherkin scenarios
│  │  │  └─ login.js           # Step definitions
│  │  ├─ dashboard/
│  │  │  ├─ dashboard.feature
│  │  │  └─ dashboard.js
│  ├─ support/
│  │  ├─ pageObjects/
│  │  │  ├─ loginPage.js
│  │  │  └─ dashboardPage.js
│  │  ├─ commands.js
│  │  └─ e2e.js
├─ .github/workflows/
│  └─ cypress.yml              # GitHub Actions CI config
├─ .env                        # Local credentials (ignored)
├─ .env.example                # Safe example for contributors
├─ .gitignore
├─ cypress.config.js
├─ package.json
```

---

## 🗓️ Features Automated

### Login Scenarios:
- [x] Login using `.env` credentials
- [x] Login using Scenario Outline (data-driven)
- [x] Invalid login attempt validations

### Dashboard Validation:
- [x] Dashboard route check `/dashboard`
- [x] Multi-language header validation (Dashboard / Pizarra de pendientes)
- [x] Widget visibility: "My Actions", "Time at Work"

---

## 🗕️ Learning Path

This repository is structured to support progressive learning:

- [x] Cypress with Cucumber integration
- [x] Page Object Model refactor
- [x] Environment variable handling via `.env` and GitHub Secrets
- [x] Login + Dashboard E2E flow
- [x] GitHub Actions CI setup
- [ ] 🔜 Advanced flows (Leave requests, Buzz, PIM)
- [ ] 🔜 Visual testing or API validations

---

## ⚙️ Setup Instructions

### 1. Install dependencies:
```bash
npm install

# Cypress test runner
npm install --save-dev cypress

# Cucumber preprocessor for BDD support
npm install --save-dev @badeball/cypress-cucumber-preprocessor

# Webpack + esbuild for bundling Cucumber feature files
npm install --save-dev @cypress/webpack-preprocessor esbuild
```

### 2. Add environment credentials:

Create a `.env` file in your project root:

```env
CYPRESS_username=Admin
CYPRESS_password=admin123
```

> ✅ **Note:** This file is in `.gitignore` to keep credentials secure.
> ⚠️ **Note:** These credentials are only valid for the OrangeHRM public demo site.

### 3. Run tests locally:
```bash
npx cypress open     # For interactive UI
npx cypress run      # Headless mode (CI-friendly)
```

---

## 🚀 Continuous Integration

Tests are executed on every push and pull request to `main` or `develop` using GitHub Actions.

Secrets used:
- `CYPRESS_username`
- `CYPRESS_password`

Stored in:
> **GitHub** → Settings → Secrets and variables → Actions

---

## 🔗 Useful Links
- [Official Cypress Docs](https://docs.cypress.io/)
- [Cucumber Preprocessor for Cypress](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Page Object Pattern](https://martinfowler.com/bliki/PageObject.html)
- [GitHub Actions Documentation](https://docs.github.com/actions)

---

## 🧠 Why This Project?

This project was created to help:
- Developers and QA engineers learn Cypress in a real context
- Teams adopt BDD-style testing without sacrificing maintainability
- Show how to scale from local tests to CI pipelines

---

## 🙌 Author

Built by [@jsaldaza](https://github.com/jsaldaza) with the goal of sharing Cypress testing knowledge and best practices.

> ⭐ If this project helped you learn something, consider giving it a star!

---

## 📱 License

MIT License. Feel free to fork and contribute!

---

