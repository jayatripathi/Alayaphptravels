package phpTravels.pageObjects;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FlightSearchPage {

	private WebDriver driver;

	public FlightSearchPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//span[text()='Flights  ']")
	public WebElement flightsButton;

	@FindBy(xpath = "//a[@title='Flights']")
	public WebElement flightsOptionInSearchTable;

	@FindBy(xpath = "//input[@id='oneway']/following-sibling::ins[@class='iCheck-helper']")
	WebElement oneWayRadioButton;

	@FindBy(xpath = "//input[@id='round']/following-sibling::ins[@class='iCheck-helper']")
	WebElement roundTripRadioButton;

	@FindBy(xpath = "//div[contains(@id,'from')]/a/span[text()='Enter City Or Airport']")
	WebElement fromCityBox;

	@FindBy(xpath = "//div[contains(@id,'to')]/a/span[text()='Enter City Or Airport']")
	WebElement destinationCityBox;

	@FindBy(xpath = "//input[@name='departure']")
	WebElement departDateBox;

	@FindBy(xpath = "//input[@name='arrival']")
	WebElement returnDateBox;

	@FindBy(xpath = "//form[@name='flightmanualSearch']/div/button[@type='submit']")
	WebElement searchButton;

	public void selectTripType(String tripType) {
		if (tripType.contains("One")) {
			oneWayRadioButton.click();
		} else if (tripType.contains("Round")) {
			roundTripRadioButton.click();
		}
	}

	public void enterFromCity(String fromCity) throws InterruptedException {
		Actions a = new Actions(driver);
		a.moveToElement(fromCityBox);
		a.click().sendKeys(fromCity).build().perform();
		WebElement dropDownItem = driver.findElement(By.xpath("//div[@class='select2-result-label']"));
		dropDownItem.click();
	}

	public void enterDestinationCity(String destinationCity) throws InterruptedException {
		Actions a = new Actions(driver);
		a.moveToElement(destinationCityBox);
		a.click().sendKeys(destinationCity).build().perform();
		WebElement dropDownItem = driver.findElement(By.xpath("//div[@class='select2-result-label']"));
		dropDownItem.click();

	}

	public void enterDepartureDate(String departureDate) throws InterruptedException {
		departDateBox.click();
		departDateBox.clear();
		departDateBox.sendKeys(departureDate);
	}

	public void enterReturnDate(String returnDate) throws InterruptedException {
		returnDateBox.click();
		returnDateBox.clear();
		returnDateBox.sendKeys(returnDate);
	}

	public void clickSearchButton() {
		searchButton.click();
	}

	public void captureFlightsError(String tripType) throws InterruptedException, IOException {

		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		System.getProperty(System.getProperty(
				"/Users/pranshudwivedi/Desktop/SeleniumTrainingByJitendra/Practice/SeleniumPracticals/phpTravels")
				+ "firstScr.jpg");

		if (tripType.equalsIgnoreCase("OneWay")) {
			FileHandler.copy(scr, new File(
					("/Users/pranshudwivedi/Desktop/SeleniumTrainingByJitendra/Practice/SeleniumPracticals/phpTravels")
							+ ("/src/test/java/screenShots/" + "flightSearchOneWay.jpg")));
		} else if (tripType.equalsIgnoreCase("Round")) {
			FileHandler.copy(scr, new File(
					("/Users/pranshudwivedi/Desktop/SeleniumTrainingByJitendra/Practice/SeleniumPracticals/phpTravels")
							+ ("/src/test/java/screenShots/" + "flightSearchRound.jpg")));
		}
	}
}
