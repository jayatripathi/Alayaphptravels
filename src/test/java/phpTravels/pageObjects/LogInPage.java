package phpTravels.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogInPage {
	private WebDriver driver;

	@FindBy(xpath = "//*[@name='username']")
	public WebElement emailTextBox;

	@FindBy(xpath = "//*[@name='password']")
	WebElement passwordTextBox;

	@FindBy(xpath = "//button[text()='Login']")
	WebElement logInTab;

	@FindBy(xpath = "//div[text()='Invalid Email or Password']")
	public WebElement failureLogInMessage;
	
	
	

	public LogInPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void enterEmailId(String emailInput) {
		emailTextBox.sendKeys(emailInput);
	}

	public void enterPassword(String passwordInput) {
		passwordTextBox.sendKeys(passwordInput);
	}

	public void clickLogInTab() {
		logInTab.click();
	}
}
