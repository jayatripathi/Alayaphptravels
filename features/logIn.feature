@logIn
Feature: LogIn feature

  Background: User navigates to application URL
    Given Open "FireFox" browser and start application "http://www.phptravels.net"
    When I click Login
    Then I should see LogIn page

  @regression
  Scenario: Login with valid credentials
    When I enter valid emailId "user@phptravels.com" and password "demouser"
    And click LOGIN
    Then I am able to LogIn successfully
    And I see my account page

  @edgeCase
  Scenario Outline: Login with invalid credentials
    When I enter "<emailId>", "<password>"
    And click LOGIN
    Then I am not able to LogIn
    And I see error message "Invalid Email or Password"

    Examples: 
      | emailId             | password |
      | user@phptravels     | demouser |
      | user@phptravels.com |          |
      | User@phptravels.com | demouse  |
