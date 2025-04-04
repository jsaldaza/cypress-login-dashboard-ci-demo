Feature: Dashboard Availability After Login

    Scenario: User sees dashboard content after successful login
        Given I am logged in
        Then I should see the dashboard content
