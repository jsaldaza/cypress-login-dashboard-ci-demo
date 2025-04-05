Feature: Dashboard Availability After Login

    Scenario: User sees dashboard content after successful login
        Given I am logged in
        Then I should see the dashboard content

    Scenario: Validate presence of dashboard widgets
        Given I am logged in
        Then the dashboard should display key widgets
    