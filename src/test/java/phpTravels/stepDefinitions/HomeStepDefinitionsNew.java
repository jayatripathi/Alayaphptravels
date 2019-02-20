package phpTravels.stepDefinitions;

import java.util.concurrent.TimeUnit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import phpTravels.pageObjects.HomePage;
import phpTravels.testBase.TestBaseNew;

public class HomeStepDefinitionsNew extends TestBaseNew {

	HomePage homePage = new HomePage(driver);

	@Given("^Open \"([^\"]*)\" browser and start application \"([^\"]*)\"$")
	public void open_browser_and_start_application(String browserName, String url) throws Throwable {

//		driver = TestBaseNew.selectBrowser(browserName);
		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(url);

//		Thread.sleep(3000);
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	@When("^I click Login$")
	public void i_click_Login() throws Throwable {
		homePage.clickLogin();
	}

}
