package phpTravels.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class HotelsSearchResultPage {

	private WebDriver driver;
	
	public HotelsSearchResultPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void searchResultsAppear() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.titleContains("Search Results"));// Wait until title appear
		String currentWindowTitle = driver.getTitle();
		Assert.assertTrue(currentWindowTitle.contains("Search Results"));
		
	}
	
}
