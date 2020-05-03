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
plugin= {"pretty"},
tags = {"@sanity"})
public class TestRunner {

}
