package stepdefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import generic.BrowserFactory;
import generic.FileManager;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pom.Login_Page;

public class Steps {
	WebDriver driver;
	String val;
	BrowserFactory bff = new BrowserFactory();

	Login_Page lp;

	@Before // global hooks precondition
	public void openAppn() {
		driver = bff.getBrowser("chrome");
		FileManager fm = new FileManager();
		driver.get(fm.getApplicationUrl());
		driver.manage().timeouts().implicitlyWait(fm.getImplicityWait(), TimeUnit.SECONDS);
		lp = new Login_Page(driver);
	}

	@After // global hooks postcondition
	public void closeAppn(Scenario scenario) {
		if(scenario.isFailed())
		{
			TakesScreenshot ts=(TakesScreenshot) driver;
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "IMG/PNG", scenario.getName());
		}
		driver.quit();
	}

	@Before("@sanity or @ft") // conditional hooks pre condition
	public void setUp() {
		System.out.println("set up is done");
	}

	@After("@sanity") // conditional hooks post condition
	public void tearDown() {
		System.out.println("executed successfully");
	}

	@Given("user is on login page")
	public void user_is_on_login_page() {
		System.out.println("user is on login page");

	}

	@When("user enters valid username {string}")
	public void user_enters_valid_username(String uname) {
		lp.setUsername(uname);
		System.out.println("username  entered succesfully");
	}

	@When("user enters valid password {string}")
	public void user_enters_valid_password(String password) {
		lp.setPassword(password);
		System.out.println("user entered password");
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		// driver.findElement(By.xpath("//div[.='Login ']")).click();
		lp.clickLogin();
		System.out.println("user clicks on login button");
	}

	@Then("Home page should be displayed")
	public void home_page_should_be_displayed() {
		String title = driver.getTitle();
		lp.verifyTitle(5, title);
		System.out.println("home page displayed");
	}

	@When("user enters invalid username {string}")
	public void user_enters_invalid_username(String uname) {

		lp.setUsername(uname);
		System.out.println("enterd invalid username");
	}

	@When("user enters invalid password {string}")
	public void user_enters_invalid_password(String password) {

		lp.setPassword(password);
		System.out.println("entered invalid password");
	}

	@Then("Home page should not be displayed {string}")
	public void home_page_should_not_be_displayed(String expected_title) throws InterruptedException {
		String atitle = driver.getTitle();
		lp.verifyTitle(5, atitle);
		Assert.assertEquals(expected_title, atitle);
		System.out.println("home page not displayed");
	}

	@When("user selects payment mode")
	public void user_selects_payment_mode(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
		val = data.get(0).get("mode");
	}

	@Then("order is placed")
	public void order_is_placed() {
		System.out.println("order is placed successfully through " + val);
	}
}
