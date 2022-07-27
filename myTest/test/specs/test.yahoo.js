const { expect } = require('chai');
const textEmail = require('../pageobjects/login.Text.Email');
const textPassword = require('../pageobjects/login.Text.Password');
const mailPage = require('../pageobjects/creat.Page');
const draftMail = require('../pageobjects/draft.Mail');
const sentFolderButton = require ('../pageobjects/sent.Folder');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       await browser.url("https://mail.yahoo.com/");
       await textEmail.signInButton.waitForDisplayed();
       expect (await textEmail.signInButton.isDisplayed()).is.equal(true);
       await textEmail.signInButton.click();
       await textEmail.login('anntest547@yahoo.com');
       await textPassword.nextButton.waitForDisplayed();
       expect (await textPassword.nextButton.isDisplayed()).is.equal(true);
       await textPassword.nextButton.click();
       await textPassword.loginPassword('Leto354Pas');
       await textPassword.nextButtonPassword.waitForDisplayed();
       expect (await textPassword.nextButtonPassword.isDisplayed()).is.equal(true);
       await textPassword.nextButtonPassword.click();
       await textPassword.accountName.waitForDisplayed();
       expect (await textPassword.accountName.isDisplayed()).is.equal(true);
        });

    it('should create new email and save it as a draft, verify that the mail is in the "Draft"', async () => { 
        await mailPage.buttonMail.waitForDisplayed();
        expect (await mailPage.buttonMail.isDisplayed()).is.equal(true);
        await mailPage.buttonMail.click();
        await mailPage.toField.waitForDisplayed();
        expect (await mailPage.toField.isDisplayed()).is.equal(true);
        await mailPage.toSubject.waitForDisplayed();
        expect (await mailPage.toSubject.isDisplayed()).is.equal(true);
        await mailPage.toBodyText.waitForDisplayed();
        expect (await mailPage.toBodyText.isDisplayed()).is.equal(true);
        await mailPage.inputEmail('sannav1985@gmail.com','Mail','Text'); 
        await draftMail.folderDraft.click();
        });

       
    it('should verify that the mail in the "Draft" contains same adress, subject, body, send it', async () => {
        
        await draftMail.mailInDraft.click(); 
        await draftMail.draftMailAdress.waitForDisplayed();
        expect (await draftMail.draftMailAdress.isDisplayed()).is.equal(true);
        await draftMail.draftMailSubject.waitForDisplayed();
        expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(true);
        await draftMail.draftMailText.waitForDisplayed();
        expect (await draftMail.draftMailText.isDisplayed()).is.equal(true);
        await draftMail.buttonSent.click();        
           });

    it('should verify that email is disappeared from the draft folder', async () => {  
        await draftMail.folderDraft.waitForDisplayed();
        expect (await draftMail.folderDraft.isDisplayed()).is.equal(true);
        await draftMail.folderDraft.click();
        expect (await draftMail.draftMailAdress.isDisplayed()).is.equal(false);
        expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(false);
        expect (await draftMail.draftMailText.isDisplayed()).is.equal(false);
        });

    it('should verify that email is in the sent folder', async () => {
        await sentFolderButton.sentPage.waitForDisplayed()
        expect (await sentFolderButton.sentPage.isDisplayed()).is.equal(true);
        await sentFolderButton.sentPage.click();
        await sentFolderButton.mailInSentFolder.waitForDisplayed();
        expect (await sentFolderButton.mailInSentFolder.isDisplayed()).is.equal(true);
    });

    it('should log off', async () => {
        await textPassword.accountName.waitForDisplayed();
        expect (await textPassword.accountName.isDisplayed()).is.equal(true);
        await textPassword.accountName.moveTo();
        await textPassword.logOffButton.waitForDisplayed();
        expect (await textPassword.logOffButton.isDisplayed()).is.equal(true);
        await textPassword.logOffButton.click();
    });
}); 