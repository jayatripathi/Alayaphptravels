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

public class HotelSearchPage {
	private WebDriver driver;

	@FindBy(xpath = "//span[text()='Search by Hotel or City Name']")
	public WebElement cityNameBox;

	@FindBy(xpath = "//span[text()='Hotels   ']")
	WebElement hotelsOptionInSearchTable;

	@FindBy(xpath = "//input[@name='checkin']")
	WebElement checkInDateBox;

	@FindBy(xpath = "//input[@name='checkout']")
	WebElement checkOutDateBox;

	@FindBy(xpath = "//input[@id='travellersInput']")
	WebElement travellersInputBox;

	@FindBy(xpath = "//input[@id='adultInput']")
	WebElement adultNumberBox;

	@FindBy(xpath = "//input[@id='childInput']")
	WebElement childrenNumberBox;

	@FindBy(xpath = "//form[@name='fCustomHotelSearch']/div/button[@type='submit']")

	WebElement searchTab;

	public HotelSearchPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void clickHotelsOptionInSearchTable() throws InterruptedException {
		hotelsOptionInSearchTable.click();
	}

	public void enterCityName(String cityName) throws InterruptedException {
		Actions a = new Actions(driver);
		a.moveToElement(cityNameBox);
		a.click().sendKeys(cityName).build().perform();
		WebElement dropDownItem = driver
				.findElement(By.xpath("//ul[1]/li[1]/ul[1]/li[1]/div[@class='select2-result-label']"));
		dropDownItem.click();
	}

	public void enterInDate(String checkInDate) throws InterruptedException {
		checkInDateBox.click();
		checkInDateBox.clear();
		checkInDateBox.sendKeys(checkInDate);
	}

	public void enterOutDate(String checkOutDate) throws InterruptedException {
		checkOutDateBox.click();
		checkOutDateBox.clear();
		checkOutDateBox.sendKeys(checkOutDate);
	}

	public void enterGuestInput(String gno) throws InterruptedException {
		travellersInputBox.click();
		travellersInputBox.clear();
		travellersInputBox.sendKeys(gno);
	}

	public void clickSearchTab() {
		searchTab.click();
	}

	public void hotelSearchErrorCapture() throws IOException, InterruptedException {
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		System.getProperty(System.getProperty(
				"/Users/pranshudwivedi/Desktop/SeleniumTrainingByJitendra/Practice/SeleniumPracticals/phpTravels")
				+ "firstScr.jpg");
		FileHandler.copy(scr, new File(
				("/Users/pranshudwivedi/Desktop/SeleniumTrainingByJitendra/Practice/SeleniumPracticals/phpTravels")
						+ ("/src/test/java/screenShots/" + "hotelSearch.jpg")));

	}

}