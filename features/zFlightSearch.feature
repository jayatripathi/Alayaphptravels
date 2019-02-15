@flightSearch
Feature: Flight Search

  Background: User navigates to application URL
    Given Open "FireFox" browser and start application "http://www.phptravels.net"
    When I click Login
    And I enter valid emailId "user@phptravels.com" and password "demouser"
    And click LOGIN
    Then I see my account page

  @regression
  Scenario: User is able to get appropriate results when he searches Flights with valid credentials
    When I click on FLIGHTS button
    Then I see FLIGHTS page
    When I click on FLIGHTS option in the search table
    And I select "Round Trip" option radio button
    And I enter from city "Delhi"
    And I enter destination city "Chennai"
    And I enter departure date "2019-02-23"
    And I enter return date "2019-02-25"
    And I click on Search button for flights
    Then I see FLIGHTS search results on FLIGHTS search page

  @edgeCase
  Scenario: User is not able to get appropriate results when he searches FLIGHTS with invalid credentials in OneWay trip
    When I click on FLIGHTS button
    Then I see FLIGHTS page
    When I click on FLIGHTS option in the search table
    And I select "One Way" option radio button
    And I click on Search button for flights
    Then I see error message to fill mandatory checkInDate fields

  @edgeCase
  Scenario: User is not able to get appropriate results when he searches FLIGHTS with invalid credentials in Round trip
    When I click on FLIGHTS button
    Then I see FLIGHTS page
    When I click on FLIGHTS option in the search table
    And I select "Round Trip" option radio button
    And I enter departure date "2019-02-25"
    And I click on Search button for flights
    Then I see error message to fill mandatory checkOutDate fields
