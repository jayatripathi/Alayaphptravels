@hotelSearch
Feature: Hotel Search

  Background: User navigates to application URL
    Given Open "FireFox" browser and start application "http://www.phptravels.net"
    When I click Login
    And I enter valid emailId "user@phptravels.com" and password "demouser"
    And click LOGIN
    Then I see my account page

  @regression
  Scenario: User is able to get appropriate results when he searches hotel with valid credentials
    When I click on HOTELS button
    Then I see HOTELS page
    When I click on HOTELS option in the search table
    And I select "Agra" from dropdown menu
    And I select checkInDate "20/02/2019" from datePicker
    And I select checkOutDate "25/02/2019" from datePicker
    And I enter numberOfGuests "4"
    And I click on Search button
    Then I see Hotels search results on hotel search page

  @edgeCase
  Scenario: User is not able to get appropriate results when he searches hotel with invalid credentials
    When I click on HOTELS button
    Then I see HOTELS page
    When I click on HOTELS option in the search table
    And I click on Search button
    Then I see error message to fill mandatory checkInDate field
