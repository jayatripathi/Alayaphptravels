package phpTravels.stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import phpTravels.testBase.TestBaseNew;

public class ServiceHooksNew {
	TestBaseNew testBaseNew;
	
	@Before
	public void initializeTest() {
		testBaseNew = new TestBaseNew();
		WebDriver driver = TestBaseNew.selectBrowser("firefox");
	}
	
	@After
	public void endTest() {
		TestBaseNew.driver.quit();
	}

}
