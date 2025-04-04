Feature: OrangeHRM Login Functionality

    Scenario: Successful login using environment credentials
        Given I open the login page
        When I login with secret credentials
        Then I should see "Dashboard"

    Scenario Outline: Failed login attempts with invalid credentials
        Given I open the login page
        When I login with "<username>" and "<password>"
        Then I should see "<result>"

        Examples:
            | username | password  | result              |
            | user1    | wrongpass | Invalid credentials |
            | admin    | 123       | Invalid credentials |
