$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user enters invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters invalid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "Home page should not be displayed \"\u003cexpected_title\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected_title"
      ]
    },
    {
      "cells": [
        "admin123",
        "manager123",
        "actiTIME - Login"
      ]
    },
    {
      "cells": [
        "abcde",
        "manager213",
        "actiTIME - Login"
      ]
    },
    {
      "cells": [
        "abc123",
        "manager456",
        "actiTIME - Login"
      ]
    },
    {
      "cells": [
        "admin",
        "manager",
        "actiTIME - Login"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user enters invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid password \"manager123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"actiTIME - Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user enters invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username \"abcde\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid password \"manager213\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"actiTIME - Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user enters invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid password \"manager456\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"actiTIME - Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user enters invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid password \"manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_enters_invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"actiTIME - Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat generic.Base_Page.verifyTitle(Base_Page.java:35)\r\n\tat stepdefinitions.Steps.home_page_should_not_be_displayed(Steps.java:101)\r\n\tat ✽.Home page should not be displayed \"actiTIME - Login\"(file:///E:/restwk/Crasw3/src/test/resources/login.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});