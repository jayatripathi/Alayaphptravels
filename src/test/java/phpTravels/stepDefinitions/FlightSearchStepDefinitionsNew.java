package phpTravels.stepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import phpTravels.pageObjects.FlightSearchPage;
import phpTravels.pageObjects.FlightSearchResultPage;
import phpTravels.testBase.TestBaseNew;

public class FlightSearchStepDefinitionsNew extends TestBaseNew {

	FlightSearchPage flightSearchPage = new FlightSearchPage(driver);
	FlightSearchResultPage flightSearchResultPage = new FlightSearchResultPage(driver);

	@When("^I click on FLIGHTS button$")
	public void i_click_on_FLIGHTS_button() throws Throwable {
		flightSearchPage.flightsButton.click();
	}

	@Then("^I see FLIGHTS page$")
	public void i_see_FLIGHTS_page() throws Throwable {
		boolean iMonFlightsPage = flightSearchPage.flightsOptionInSearchTable.isDisplayed();
		System.out.println((iMonFlightsPage == true) ? "I am on Flights Page" : "I am not on Flights Page");
	}

	@When("^I click on FLIGHTS option in the search table$")
	public void i_click_on_FLIGHTS_option_in_the_search_table() throws Throwable {
		flightSearchPage.flightsOptionInSearchTable.click();
	}

	@When("^I select \"(.*?)\" option radio button$")
	public void i_select_option_radio_button(String tripType) throws Throwable {
		flightSearchPage.selectTripType(tripType);
	}

	@When("^I enter from city \"(.*?)\"$")
	public void i_enter_from_city(String fromCity) throws Throwable {
		flightSearchPage.enterFromCity(fromCity);
	}

	@When("^I enter destination city \"(.*?)\"$")
	public void i_enter_destination_city(String destinationCity) throws Throwable {
		flightSearchPage.enterDestinationCity(destinationCity);
	}

	@When("^I enter departure date \"(.*?)\"$")
	public void i_enter_departure_date(String departureDate) throws Throwable {
		flightSearchPage.enterDepartureDate(departureDate);
	}

	@When("^I enter return date \"(.*?)\"$")
	public void i_enter_return_date(String returnDate) throws Throwable {
		flightSearchPage.enterReturnDate(returnDate);
	}

	@When("^I click on Search button for flights$")
	public void i_click_on_Search_button_for_flights() throws Throwable {
		flightSearchPage.clickSearchButton();
	}

	@Then("^I see FLIGHTS search results on FLIGHTS search page$")
	public void i_see_FLIGHTS_search_results_on_FLIGHTS_search_page() throws Throwable {
		flightSearchResultPage.searchResultsAppear();
	}

	@Then("^I see error message to fill mandatory checkInDate fields$")
	public void i_see_error_message_to_fill_mandatory_checkInDate_fields() throws Throwable {
		String tripType = "OneWay";
		flightSearchPage.captureFlightsError(tripType);
	}

	@Then("^I see error message to fill mandatory checkOutDate fields$")
	public void i_see_error_message_to_fill_mandatory_checkOutDate_fields() throws Throwable {
		String tripType = "Round";
		flightSearchPage.captureFlightsError(tripType);
	}

}
