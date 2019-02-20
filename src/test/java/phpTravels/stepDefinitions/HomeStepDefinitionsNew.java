package phpTravels.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import phpTravels.pageObjects.HomePage;
import phpTravels.testBase.TestBaseNew;

public class HomeStepDefinitionsNew extends TestBaseNew {

	HomePage homePage = new HomePage(driver);

	@Given("^Open \"([^\"]*)\" browser and start application \"([^\"]*)\"$")
	public void open_browser_and_start_application(String browserName, String url) throws Throwable {
		driver.manage().window().maximize();
		driver.get(url);

	}

	@When("^I click Login$")
	public void i_click_Login() throws Throwable {
		homePage.clickLogin();
	}

}
