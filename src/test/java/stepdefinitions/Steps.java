package stepdefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps {
	WebDriver driver;
	String val;
	@Given("user is on login page")
	public void user_is_on_login_page() {
	    System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
	     driver=new ChromeDriver();
	    driver.get("http://localhost/login.do;jsessionid=1oew5p9lfgt83");
	}

	@When("user enters valid username {string}")
	public void user_enters_valid_username(String uname) {
		driver.findElement(By.id("username")).sendKeys(uname);
	    System.out.println("username  entered succesfully");
	}

	@When("user enters valid password {string}")
	public void user_enters_valid_password(String password) {
		driver.findElement(By.name("pwd")).sendKeys(password);
	    System.out.println("user entered password");
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//div[.='Login ']")).click();
	    System.out.println("user clicks on login button");
	}

	@Then("Home page should be displayed")
	public void home_page_should_be_displayed() {
	   System.out.println("home page displayed");
	}
	
	@When("user enters invalid username {string}")
	public void user_enters_invalid_username(String uname) {
		driver.findElement(By.id("username")).sendKeys(uname);
		System.out.println("enterd invalid username");
	}

	@When("user enters invalid password {string}")
	public void user_enters_invalid_password(String password) {
		driver.findElement(By.name("pwd")).sendKeys(password);
	    System.out.println("entered invalid password");
	}

	@Then("Home page should not be displayed {string}")
	public void home_page_should_not_be_displayed(String expected_title) throws InterruptedException {
		Thread.sleep(2000);
		Assert.assertEquals(expected_title, driver.getTitle());
	    System.out.println("home page not displayed");
	}
	
	@When("user selects payment mode")
	public void user_selects_payment_mode(io.cucumber.datatable.DataTable dataTable) {
	    List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
	     val = data.get(0).get("mode");
	}

	@Then("order is placed")
	public void order_is_placed() {
	    System.out.println("order is placed successfully through "+val);
	}
}
