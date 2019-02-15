$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logIn.feature");
formatter.feature({
  "line": 2,
  "name": "LogIn feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@logIn"
    }
  ]
});
formatter.before({
  "duration": 13938118100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see LogIn page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 8879433692,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 2551649279,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_should_see_LogIn_page()"
});
formatter.result({
  "duration": 5167876780,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-feature;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter valid emailId \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am able to LogIn successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see my account page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 23
    },
    {
      "val": "demouser",
      "offset": 58
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter_valid_emailId_and_password(String,String)"
});
formatter.result({
  "duration": 5471613030,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 7250594972,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_am_able_to_LogIn_successfully()"
});
formatter.result({
  "duration": 5154589875,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_see_my_account_page()"
});
formatter.result({
  "duration": 5141012549,
  "status": "passed"
});
formatter.after({
  "duration": 1887279802,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@edgeCase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cemailId\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am not able to LogIn",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see error message \"Invalid Email or Password\"",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "emailId",
        "password"
      ],
      "line": 24,
      "id": "login-feature;login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "user@phptravels",
        "demouser"
      ],
      "line": 25,
      "id": "login-feature;login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "user@phptravels.com",
        ""
      ],
      "line": 26,
      "id": "login-feature;login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "User@phptravels.com",
        "demouse"
      ],
      "line": 27,
      "id": "login-feature;login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6331181122,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see LogIn page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 7253768383,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 2501650718,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_should_see_LogIn_page()"
});
formatter.result({
  "duration": 5101453940,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logIn"
    },
    {
      "line": 16,
      "name": "@edgeCase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter \"user@phptravels\", \"demouser\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am not able to LogIn",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see error message \"Invalid Email or Password\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels",
      "offset": 9
    },
    {
      "val": "demouser",
      "offset": 28
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter(String,String)"
});
formatter.result({
  "duration": 5265409427,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5323705016,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_am_not_able_to_LogIn()"
});
formatter.result({
  "duration": 433926308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or Password",
      "offset": 21
    }
  ],
  "location": "LogInStepDefinitionsNew.i_see_error_message(String)"
});
formatter.result({
  "duration": 89534724,
  "status": "passed"
});
formatter.after({
  "duration": 1113717922,
  "status": "passed"
});
formatter.before({
  "duration": 4268041353,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see LogIn page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 7618928931,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 2068866950,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_should_see_LogIn_page()"
});
formatter.result({
  "duration": 5070343855,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logIn"
    },
    {
      "line": 16,
      "name": "@edgeCase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter \"user@phptravels.com\", \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am not able to LogIn",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see error message \"Invalid Email or Password\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 9
    },
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter(String,String)"
});
formatter.result({
  "duration": 5115950523,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5745590302,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_am_not_able_to_LogIn()"
});
formatter.result({
  "duration": 50771713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or Password",
      "offset": 21
    }
  ],
  "location": "LogInStepDefinitionsNew.i_see_error_message(String)"
});
formatter.result({
  "duration": 44444794,
  "status": "passed"
});
formatter.after({
  "duration": 907442753,
  "status": "passed"
});
formatter.before({
  "duration": 4256718176,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see LogIn page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 6953674431,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 2795029752,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_should_see_LogIn_page()"
});
formatter.result({
  "duration": 5146948518,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logIn"
    },
    {
      "line": 16,
      "name": "@edgeCase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter \"User@phptravels.com\", \"demouse\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am not able to LogIn",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see error message \"Invalid Email or Password\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "User@phptravels.com",
      "offset": 9
    },
    {
      "val": "demouse",
      "offset": 32
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter(String,String)"
});
formatter.result({
  "duration": 5164397594,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5341290085,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_am_not_able_to_LogIn()"
});
formatter.result({
  "duration": 415609654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or Password",
      "offset": 21
    }
  ],
  "location": "LogInStepDefinitionsNew.i_see_error_message(String)"
});
formatter.result({
  "duration": 122367421,
  "status": "passed"
});
formatter.after({
  "duration": 1030809658,
  "status": "passed"
});
formatter.uri("myHotelSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Hotel Search",
  "description": "",
  "id": "hotel-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@hotelSearch"
    }
  ]
});
formatter.before({
  "duration": 5280549260,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter valid emailId \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see my account page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 7075706965,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 2282969692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 23
    },
    {
      "val": "demouser",
      "offset": 58
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter_valid_emailId_and_password(String,String)"
});
formatter.result({
  "duration": 5127616931,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5271218742,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_see_my_account_page()"
});
formatter.result({
  "duration": 5061970910,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User is able to get appropriate results when he searches hotel with valid credentials",
  "description": "",
  "id": "hotel-search;user-is-able-to-get-appropriate-results-when-he-searches-hotel-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on HOTELS button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see HOTELS page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on HOTELS option in the search table",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select \"Agra\" from dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select checkInDate \"20/02/2019\" from datePicker",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select checkOutDate \"25/02/2019\" from datePicker",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter numberOfGuests \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I see Hotels search results on hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_click_on_HOTELS_button()"
});
formatter.result({
  "duration": 1172957400,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_see_HOTELS_page()"
});
formatter.result({
  "duration": 121005850,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_click_on_HOTELS_option_in_the_search_table()"
});
formatter.result({
  "duration": 2279071921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agra",
      "offset": 10
    }
  ],
  "location": "HotelSearchStepDefinitionsNew.i_select_from_dropdown_menu(String)"
});
formatter.result({
  "duration": 5254118631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/02/2019",
      "offset": 22
    }
  ],
  "location": "HotelSearchStepDefinitionsNew.i_select_checkInDate_from_datePicker(String)"
});
formatter.result({
  "duration": 398045401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25/02/2019",
      "offset": 23
    }
  ],
  "location": "HotelSearchStepDefinitionsNew.i_select_checkOutDate_from_datePicker(String)"
});
formatter.result({
  "duration": 663014603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "HotelSearchStepDefinitionsNew.i_enter_numberOfGuests(String)"
});
formatter.result({
  "duration": 390015425,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_click_on_Search_button()"
});
formatter.result({
  "duration": 3129726578,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_see_Hotels_search_results_on_hotel_search_page()"
});
formatter.result({
  "duration": 57220745,
  "status": "passed"
});
formatter.after({
  "duration": 1102030720,
  "status": "passed"
});
formatter.before({
  "duration": 4389404086,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter valid emailId \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see my account page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 7069118175,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 2348111680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 23
    },
    {
      "val": "demouser",
      "offset": 58
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter_valid_emailId_and_password(String,String)"
});
formatter.result({
  "duration": 5128520420,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5277816038,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_see_my_account_page()"
});
formatter.result({
  "duration": 5056497786,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User is not able to get appropriate results when he searches hotel with invalid credentials",
  "description": "",
  "id": "hotel-search;user-is-not-able-to-get-appropriate-results-when-he-searches-hotel-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@edgeCase"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I click on HOTELS button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I see HOTELS page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on HOTELS option in the search table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I see error message to fill mandatory checkInDate field",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_click_on_HOTELS_button()"
});
formatter.result({
  "duration": 1055405741,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_see_HOTELS_page()"
});
formatter.result({
  "duration": 99678840,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_click_on_HOTELS_option_in_the_search_table()"
});
formatter.result({
  "duration": 2312158080,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_click_on_Search_button()"
});
formatter.result({
  "duration": 327236098,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchStepDefinitionsNew.i_see_error_message_to_fill_mandatory_date_field()"
});
formatter.result({
  "duration": 4733970941,
  "status": "passed"
});
formatter.after({
  "duration": 1401464624,
  "status": "passed"
});
formatter.uri("zFlightSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Flight Search",
  "description": "",
  "id": "flight-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@flightSearch"
    }
  ]
});
formatter.before({
  "duration": 4490698573,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter valid emailId \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see my account page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 9749620640,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 1852467869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 23
    },
    {
      "val": "demouser",
      "offset": 58
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter_valid_emailId_and_password(String,String)"
});
formatter.result({
  "duration": 5133597101,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5275380005,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_see_my_account_page()"
});
formatter.result({
  "duration": 5056626363,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User is able to get appropriate results when he searches Flights with valid credentials",
  "description": "",
  "id": "flight-search;user-is-able-to-get-appropriate-results-when-he-searches-flights-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on FLIGHTS button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see FLIGHTS page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on FLIGHTS option in the search table",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select \"Round Trip\" option radio button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter from city \"Delhi\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter destination city \"Chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter departure date \"2019-02-23\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter return date \"2019-02-25\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Search button for flights",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I see FLIGHTS search results on FLIGHTS search page",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_FLIGHTS_button()"
});
formatter.result({
  "duration": 1298700360,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_see_FLIGHTS_page()"
});
formatter.result({
  "duration": 188688401,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_FLIGHTS_option_in_the_search_table()"
});
formatter.result({
  "duration": 284113978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Round Trip",
      "offset": 10
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_select_option_radio_button(String)"
});
formatter.result({
  "duration": 265617823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 19
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_enter_from_city(String)"
});
formatter.result({
  "duration": 5074227369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 26
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_enter_destination_city(String)"
});
formatter.result({
  "duration": 14496335989,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[@class\u003d\u0027select2-result-label\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Pranshus-Air\u0027, ip: \u0027fe80:0:0:0:18f6:d20c:bcde:7220%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 65.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 26905, moz:profile: /var/folders/b2/_0_0f7ts4cj..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 18.2.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2d51c71e-5e74-8741-8bf0-7641d089e6d1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027select2-result-label\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat phpTravels.pageObjects.FlightSearchPage.enterDestinationCity(FlightSearchPage.java:78)\n\tat phpTravels.stepDefinitions.FlightSearchStepDefinitionsNew.i_enter_destination_city(FlightSearchStepDefinitionsNew.java:41)\n\tat ✽.And I enter destination city \"Chennai\"(zFlightSearch.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-02-23",
      "offset": 24
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_enter_departure_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-02-25",
      "offset": 21
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_enter_return_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_Search_button_for_flights()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_see_FLIGHTS_search_results_on_FLIGHTS_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11581539729,
  "status": "passed"
});
formatter.before({
  "duration": 5784406761,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter valid emailId \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see my account page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 7928773703,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 4783421059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 23
    },
    {
      "val": "demouser",
      "offset": 58
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter_valid_emailId_and_password(String,String)"
});
formatter.result({
  "duration": 5115548400,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5270725912,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_see_my_account_page()"
});
formatter.result({
  "duration": 5061133607,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User is not able to get appropriate results when he searches FLIGHTS with invalid credentials in OneWay trip",
  "description": "",
  "id": "flight-search;user-is-not-able-to-get-appropriate-results-when-he-searches-flights-with-invalid-credentials-in-oneway-trip",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@edgeCase"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on FLIGHTS button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I see FLIGHTS page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on FLIGHTS option in the search table",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select \"One Way\" option radio button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Search button for flights",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I see error message to fill mandatory checkInDate fields",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_FLIGHTS_button()"
});
formatter.result({
  "duration": 3313847634,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_see_FLIGHTS_page()"
});
formatter.result({
  "duration": 219470754,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_FLIGHTS_option_in_the_search_table()"
});
formatter.result({
  "duration": 270809081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One Way",
      "offset": 10
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_select_option_radio_button(String)"
});
formatter.result({
  "duration": 242976714,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_Search_button_for_flights()"
});
formatter.result({
  "duration": 275652865,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_see_error_message_to_fill_mandatory_checkInDate_fields()"
});
formatter.result({
  "duration": 4589331249,
  "status": "passed"
});
formatter.after({
  "duration": 1662150269,
  "status": "passed"
});
formatter.before({
  "duration": 4467963188,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open \"FireFox\" browser and start application \"http://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter valid emailId \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click LOGIN",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see my account page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 6
    },
    {
      "val": "http://www.phptravels.net",
      "offset": 46
    }
  ],
  "location": "HomeStepDefinitionsNew.open_browser_and_start_application(String,String)"
});
formatter.result({
  "duration": 6992723380,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinitionsNew.i_click_Login()"
});
formatter.result({
  "duration": 2261362960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 23
    },
    {
      "val": "demouser",
      "offset": 58
    }
  ],
  "location": "LogInStepDefinitionsNew.i_enter_valid_emailId_and_password(String,String)"
});
formatter.result({
  "duration": 5117256035,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.click_LOGIN()"
});
formatter.result({
  "duration": 5286609395,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinitionsNew.i_see_my_account_page()"
});
formatter.result({
  "duration": 5040842805,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User is not able to get appropriate results when he searches FLIGHTS with invalid credentials in Round trip",
  "description": "",
  "id": "flight-search;user-is-not-able-to-get-appropriate-results-when-he-searches-flights-with-invalid-credentials-in-round-trip",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@edgeCase"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I click on FLIGHTS button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I see FLIGHTS page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click on FLIGHTS option in the search table",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I select \"Round Trip\" option radio button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter departure date \"2019-02-25\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Search button for flights",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I see error message to fill mandatory checkOutDate fields",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_FLIGHTS_button()"
});
formatter.result({
  "duration": 1172901196,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_see_FLIGHTS_page()"
});
formatter.result({
  "duration": 204745738,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_FLIGHTS_option_in_the_search_table()"
});
formatter.result({
  "duration": 375277760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Round Trip",
      "offset": 10
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_select_option_radio_button(String)"
});
formatter.result({
  "duration": 284382580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-02-25",
      "offset": 24
    }
  ],
  "location": "FlightSearchStepDefinitionsNew.i_enter_departure_date(String)"
});
formatter.result({
  "duration": 440295309,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_click_on_Search_button_for_flights()"
});
formatter.result({
  "duration": 345170349,
  "status": "passed"
});
formatter.match({
  "location": "FlightSearchStepDefinitionsNew.i_see_error_message_to_fill_mandatory_checkOutDate_fields()"
});
formatter.result({
  "duration": 4760575477,
  "status": "passed"
});
formatter.after({
  "duration": 5225898842,
  "status": "passed"
});
});