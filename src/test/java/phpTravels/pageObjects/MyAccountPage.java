package phpTravels.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountPage {

	private WebDriver driver;
	
	public MyAccountPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//h3[@class='RTL'][contains(text(),'Hi')]")
	public WebElement welcomeMsgOnMyAccountPage;
	
	@FindBy(xpath = "//span[text()='Hotels   ']")
	WebElement hotelsTab;
	
	public void clickHotelsTab() {
		hotelsTab.click();
	}
}
