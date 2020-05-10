package generic;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public abstract class Base_Page {
	public WebDriver driver;
	
	public Base_Page(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	public void verifyTitle(int seconds,String title)
	{
		WebDriverWait wait=new WebDriverWait(driver, seconds);
		
		try
		{
			wait.until(ExpectedConditions.titleContains(title));
			System.out.println("title displayed");
			//Reporter.log("title displayed",true);	
		}
		catch(Exception e)
		{
		//Reporter.log("title not displayed",true);	
			System.out.println("title not displayed");
		Assert.fail();
		}
	}
	
	public void verifyElement(int seconds,WebElement element)
	{
		WebDriverWait wait=new WebDriverWait(driver, seconds);
		
		try
		{
			wait.until(ExpectedConditions.visibilityOf(element));
			System.out.println("Element found");
			//Reporter.log("Element found",true);
		}
		catch(Exception e)
		{
			System.out.println("element not found");
		//Reporter.log("Element not found",true);
		Assert.fail();
		}
	}
	

	
}
