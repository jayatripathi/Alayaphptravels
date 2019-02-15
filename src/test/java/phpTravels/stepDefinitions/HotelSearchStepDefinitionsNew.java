package phpTravels.stepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import phpTravels.pageObjects.HotelSearchPage;
import phpTravels.pageObjects.HotelsSearchResultPage;
import phpTravels.pageObjects.MyAccountPage;
import phpTravels.testBase.TestBaseNew;

public class HotelSearchStepDefinitionsNew extends TestBaseNew {

	MyAccountPage myAccountPage = new MyAccountPage(driver);
	HotelSearchPage hotelPage = new HotelSearchPage(driver);
	HotelsSearchResultPage hotelsSearchPage = new HotelsSearchResultPage(driver);

	@When("^I click on HOTELS button$")
	public void i_click_on_HOTELS_button() throws Throwable {
		myAccountPage.clickHotelsTab();
	}

	@Then("^I see HOTELS page$")
	public void i_see_HOTELS_page() throws Throwable {
		boolean iMonHotelsPage = hotelPage.cityNameBox.isDisplayed();
		System.out.println((iMonHotelsPage == true) ? "I am on HotelsPage" : "I am not on Hotels Page");

	}

	@When("^I click on HOTELS option in the search table$")
	public void i_click_on_HOTELS_option_in_the_search_table() throws Throwable {
		hotelPage.clickHotelsOptionInSearchTable();
	}

	@When("^I select \"(.*?)\" from dropdown menu$")
	public void i_select_from_dropdown_menu(String cityName) throws Throwable {
		hotelPage.enterCityName(cityName);
	}

	@When("^I select checkInDate \"(.*?)\" from datePicker$")
	public void i_select_checkInDate_from_datePicker(String checkInDate) throws Throwable {
		hotelPage.enterInDate(checkInDate);
	}

	@When("^I select checkOutDate \"(.*?)\" from datePicker$")
	public void i_select_checkOutDate_from_datePicker(String checkOutDate) throws Throwable {
		hotelPage.enterOutDate(checkOutDate);
	}

	@When("^I enter numberOfGuests \"(.*?)\"$")
	public void i_enter_numberOfGuests(String guestCount) throws Throwable {
		hotelPage.enterGuestInput(guestCount);
	}

	@When("^I click on Search button$")
	public void i_click_on_Search_button() throws Throwable {
		hotelPage.clickSearchTab();

	}

	@Then("^I see Hotels search results on hotel search page$")
	public void i_see_Hotels_search_results_on_hotel_search_page() throws Throwable {
		hotelsSearchPage.searchResultsAppear();
	}

	@Then("^I see error message to fill mandatory checkInDate field$")
	public void i_see_error_message_to_fill_mandatory_date_field() throws Throwable {

		hotelPage.hotelSearchErrorCapture();
	}

}
