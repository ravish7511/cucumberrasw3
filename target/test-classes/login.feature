Feature: Login

@regression
Scenario: user enters valid credentials to login

Given user is on login page
When user enters valid username "admin"
And user enters valid password "manager"
And user clicks on login button
Then Home page should be displayed

@smoke @ft
Scenario Outline: user enters invalid credentials to login

Given user is on login page
When user enters invalid username "<username>"
And user enters invalid password "<password>"
And user clicks on login button
Then Home page should not be displayed "<expected_title>"

Examples:
|username | password   |expected_title  |
|admin123 | manager123 |actiTIME - Login|
|abcde    | manager213 |actiTIME - Login|
|abc123   | manager456 |actiTIME - Login|
|admin    | manager    |actiTIME - Login|


@sanity
Scenario: order should be placed successfully

When user selects payment mode
|mode |
|credit card|
|debit card |
|COD|
Then order is placed
