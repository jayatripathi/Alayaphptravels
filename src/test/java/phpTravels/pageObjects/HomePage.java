package phpTravels.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	private WebDriver driver;

	@FindBy(xpath = "//nav//a[text()=' My Account ']")
	WebElement myAccountButton;

	@FindBy(xpath = "//nav//a[text()=' Login']")
	WebElement logInFromDropdown;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void clickLogin() {
		myAccountButton.click();
		logInFromDropdown.click();
	}

}
