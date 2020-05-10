package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/login.feature",
glue= {"stepdefinitions"},
monochrome = true,
strict=true,
dryRun = false,
tags = {"@ft"},
//plugin= {"pretty","html:reports/scenario"}
plugin = {"pretty","de.monochromata.cucumber.report.PrettyReports:target/cucumber"}
)
public class TestRunner {

}
