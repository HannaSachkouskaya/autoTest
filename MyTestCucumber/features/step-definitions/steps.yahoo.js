const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const textEmail = require('../pageobjects/login.yahoo');
const textPassword= require('../pageobjects/login.password.yahoo');
const mailPage=require('../pageobjects/creat.Email.js');
const draftMail = require('../pageobjects/draft.Email')
const sentFolderButton = require ('../pageobjects/sent.Folder');

Given(/^I am on the login page for yahoo$/, async () => {
    await browser.url(`https://mail.yahoo.com/`)
});

Then(/^I expect SingIn is displayed$/, async () => {
    await expect (await textEmail.signInButton.waitForDisplayed()).is.equal(true);
});

When(/^I click on SingIn button$/, async () => {
    await textEmail.signInButton.click();
});

When(/^I input login "(.*)"$/, async (login) => {
    await textEmail.login(login);
});

Then(/^I expect Next button is displayed$/, async () => {
    await expect (await textPassword.nextButton.waitForDisplayed()).is.equal(true);
});

When(/^I click on Next button$/, async () => {
    await textPassword.nextButton.click();
});

When(/^I input password "(.*)"$/, async (loginpassword) => {
    await textPassword.loginPassword(loginpassword);
});

Then(/^I expect Next button password is displayed$/, async () => {
    await expect (await textPassword.nextButtonPassword.waitForDisplayed()).is.equal(true);
});

When(/^I click on Next button password$/, async () => {
    await textPassword.nextButtonPassword.click();
});

Then(/^I am in account$/, async () => {
    await expect (await textPassword.accountName.waitForDisplayed()).is.equal(true);
});

Then(/^I expect Mail button is displayed$/, async () => {
    await expect (await mailPage.buttonMail.waitForDisplayed()).is.equal(true);
});

When(/^I click on Mail button$/, async () => {
    await mailPage.buttonMail.click();
});

Then(/^I expect toField is displayed$/, async () => {
    await expect (await mailPage.toField.waitForDisplayed()).is.equal(true);
});

Then(/^I expect subjectField is displayed$/, async () => {
    await expect (await mailPage.toSubject.waitForDisplayed()).is.equal(true);
});

Then(/^I expect bodyField is displayed$/, async () => {
    await expect (await mailPage.toBodyText.waitForDisplayed()).is.equal(true);
});

When(/^I fill in mail "(.*)" and (.+) and (.+)$/, async (toField,subject,body) => {
    await mailPage.inputEmail(toField,subject,body); 
});

When(/^I click on Draft folder$/, async () => {
    await draftMail.folderDraft.click();
});

When(/^I click on mail in draft$/, async () => {
    await draftMail.mailInDraft.click(); 
});

Then(/^I expect toField in draft is displayed$/, async () => {
    await expect (await draftMail.draftMailAdress.waitForDisplayed()).is.equal(true);
});

Then(/^I expect subject in draft is diaplayed$/, async () => {
    await expect (await draftMail.draftMailSubject.waitForDisplayed()).is.equal(true);
});

Then(/^I expect body in draft is displayed$/, async () => {
    await expect (await draftMail.draftMailText.waitForDisplayed()).is.equal(true);
});

When(/^I click on Sent button$/, async () => {
    await draftMail.buttonSent.click(); 
});

Then(/^I expect Draft folder is displayed$/, async () => {
    await expect (await draftMail.folderDraft.waitForDisplayed()).is.equal(true);
}); 

When(/^I click on emptyDraft folder$/, async () => {
    await draftMail.folderDraft.click();
}); 

Then(/^I expect toField in draft is NOT displayed$/, async () => {
    await expect (await draftMail.draftMailAdress.isDisplayed()).is.equal(false);
}); 

Then(/^I expect subject in draft is NOT displayed$/, async () => {
    await expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(false);
}); 

Then(/^I expect body in draft is NOT displayed$/, async () => {
    await expect (await draftMail.draftMailText.isDisplayed()).is.equal(false);
}); 

Then(/^I expect sent folder is displayed$/, async () => {
    await expect (await sentFolderButton.sentPage.waitForDisplayed()).is.equal(true);
}); 

When(/^I click on sent folder$/, async () => {
    await sentFolderButton.sentPage.click();
}); 

Then(/^I expect Mail in sent folder$/, async () => {
    await expect (await sentFolderButton.mailInSentFolder.waitForDisplayed()).is.equal(true);
}); 

Then(/^I expect accout name is displayed$/, async () => {
    await expect (await textPassword.accountName.waitForDisplayed()).is.equal(true);
});

When(/^I move on to log off button$/, async () => {
    await textPassword.accountName.moveTo();
});

Then(/^I expect to log off button is displayed$/, async () => {
    await expect (await textPassword.logOffButton.waitForDisplayed()).is.equal(true);
});

When(/^I click on to log off button$/, async () => {
    await textPassword.logOffButton.click();
});

