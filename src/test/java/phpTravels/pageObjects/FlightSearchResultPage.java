package phpTravels.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class FlightSearchResultPage {

	private WebDriver driver;

	public FlightSearchResultPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void searchResultsAppear() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.titleContains("Flights List"));// Wait until title appear
		String currentWindowTitle = driver.getTitle();
		Assert.assertTrue(currentWindowTitle.contains("Flights List"));
	}
}
