  Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given I am on the login page for yahoo
    Then I expect SingIn is displayed
    When I click on SingIn button 
    When I input login "anntest547@yahoo.com"
    Then I expect Next button is displayed
    When I click on Next button
    When I input password "Leto354Pas"
    Then I expect Next button password is displayed
    When I click on Next button password
    Then I am in account
    Then I expect Mail button is displayed
    When I click on Mail button 
    Then I expect toField is displayed
    Then I expect subjectField is displayed
    Then I expect bodyField is displayed
    When I fill in mail "sannav1985@gmail.com" and "Mail" and "Text"
    When I click on Draft folder
    When I click on mail in draft
    Then I expect toField in draft is displayed
    Then I expect subject in draft is diaplayed
    Then I expect body in draft is displayed
    When I click on Sent button
    Then I expect Draft folder is displayed
    When I click on emptyDraft folder
    Then I expect toField in draft is NOT displayed
    Then I expect subject in draft is NOT displayed
    Then I expect body in draft is NOT displayed
    Then I expect sent folder is displayed
    When I click on sent folder
    Then I expect Mail in sent folder
    Then I expect accout name is displayed
    When I move on to log off button
    Then I expect to log off button is displayed
    When I click on to log off button

