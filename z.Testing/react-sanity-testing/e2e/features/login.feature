Feature: Login Page

  Scenario: User logs in successfully
    Given I am on the login page
    When I enter "emilys" in the username field
    And I enter "emilyspass" in the password field
    And I click the login button
    # Then I should see a successful login message
