package phpTravels.testRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", plugin = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"}, glue = { "phpTravels.stepDefinitions" })
public class TestRunner{

}
