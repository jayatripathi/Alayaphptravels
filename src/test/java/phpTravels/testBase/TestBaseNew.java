package phpTravels.testBase;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBaseNew {

	public static WebDriver driver;
	
	public static WebDriver selectBrowser(String browser) {
		if (browser.equalsIgnoreCase("firefox")) {

			System.setProperty("webdriver.gecko.driver", "/Users/pranshudwivedi/Desktop/SeleniumTrainingByJitendra/tools/Selenium 3.14/drivers/geckodriver");
			
			driver = new FirefoxDriver();
		}
		else if (browser.equalsIgnoreCase("chrome")) {
			driver = new ChromeDriver();
		}
		return driver;
	}
	
}


