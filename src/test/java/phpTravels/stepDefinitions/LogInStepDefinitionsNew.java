package phpTravels.stepDefinitions;

import java.util.concurrent.TimeUnit;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import phpTravels.pageObjects.LogInPage;
import phpTravels.pageObjects.MyAccountPage;
import phpTravels.testBase.TestBaseNew;

public class LogInStepDefinitionsNew extends TestBaseNew {

	LogInPage logInPage = new LogInPage(driver);
	MyAccountPage myAccountPage = new MyAccountPage(driver);

	@Then("^I should see LogIn page$")
	public void i_should_see_LogIn_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		boolean iMonLogInPage = logInPage.emailTextBox.isDisplayed();
		System.out.println((iMonLogInPage == true) ? "I am on LogInPage" : "I am not on LogIn Page");
	}

	@When("^I enter valid emailId \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void i_enter_valid_emailId_and_password(String validEmailId, String validPassword) throws Throwable {
		logInPage.enterEmailId(validEmailId);
		logInPage.enterPassword(validPassword);
	}

	@When("^click LOGIN$")
	public void click_LOGIN() throws Throwable {
		logInPage.clickLogInTab();
	}

	@Then("^I am able to LogIn successfully$")
	public void i_am_able_to_LogIn_successfully() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		boolean logInDone = myAccountPage.welcomeMsgOnMyAccountPage.isDisplayed();
		System.out.println((logInDone == true) ? "I have done logIn" : "login Failed");

	}

	@Then("^I see my account page$")
	public void i_see_my_account_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		boolean iMonAccountPage = myAccountPage.welcomeMsgOnMyAccountPage.isDisplayed();
		System.out.println((iMonAccountPage == true) ? "I am on the account page after success logIn"
				: "this is not account page");
	}

	@When("^I enter \"([^\"]*)\", \"([^\"]*)\"$")
	public void i_enter(String emailId, String password) throws Throwable {
		logInPage.enterEmailId(emailId);
		logInPage.enterPassword(password);
	}

	@Then("^I am not able to LogIn$")
	public void i_am_not_able_to_LogIn() throws Throwable {
		boolean iGetFailureMsg = logInPage.failureLogInMessage.isDisplayed();
		System.out.println((iGetFailureMsg == true) ? "I am not able to logIn" : "LogIn failed but no failure message");

	}

	@Then("^I see error message \"([^\"]*)\"$")
	public void i_see_error_message(String arg1) throws Throwable {
		boolean iGetFailureMsg = logInPage.failureLogInMessage.isDisplayed();
		System.out.println((iGetFailureMsg == true) ? "I get logIn-Failure message" : "No failure message I can read");

	}
}
