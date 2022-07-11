const { expect } = require('chai');
const textEmail = require('../pageobjects/login.yahoo');
const textPassword = require('../pageobjects/login.password.yahoo');
const mailPage = require('../pageobjects/creat.Email');
const draftMail = require('../pageobjects/draft.Email');
const sentFolderButton = require ('../pageobjects/sent.Folder');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url("https://mail.yahoo.com/");

       await textEmail.signInButton.isDisplayed();
       await textEmail.signInButton.click();
       await textEmail.login('anntest547@yahoo.com');
       await textPassword.nextButton.waitForDisplayed();
       await textPassword.nextButton.click();
       await textPassword.loginPassword('Leto354Pas');
       await textPassword.nextButtonPassword.waitForDisplayed();
       await textPassword.nextButtonPassword.click();
       await expect (await textPassword.accountName.waitForDisplayed()).is.equal(true);
        });

    it('should create new email and save it as a draft, verify that the mail is in the "Draft"', async () => { 
        await mailPage.buttonMail.isDisplayed();
        await mailPage.buttonMail.click();
        await mailPage.toField.isDisplayed();
        await mailPage.toSubject.isDisplayed();
        await mailPage.toBodyText.isDisplayed();
        await mailPage.inputEmail('sannav1985@gmail.com','Mail','Text'); 
        await draftMail.folderDraft.click();
        });

       
    it('should verify that the mail in the "Draft" contains same adress, subject, body, send it', async () => {
        
        await draftMail.mailInDraft.click(); 
        expect (await draftMail.draftMailAdress.isDisplayed()).is.equal(true);
        expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(true);
        expect (await draftMail.draftMailText.isDisplayed()).is.equal(true);
        await draftMail.buttonSent.click();        
           });

    it('should verify that email is disappeared from the draft folder', async () => {  
        await draftMail.folderDraft.isDisplayed();
        await draftMail.folderDraft.click();
        await expect (await draftMail.draftMailAdress.isDisplayed()).is.equal(false);
        await expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(false);
        await expect (await draftMail.draftMailText.isDisplayed()).is.equal(false);
        });

    it('should verify that email is in the sent folder', async () => {
        await sentFolderButton.sentPage.waitForDisplayed();
        await sentFolderButton.sentPage.click();
        await expect (await sentFolderButton.mailInSentFolder.waitForDisplayed()).is.equal(true);
    });

    it('should log off', async () => {
        await textPassword.accountName.waitForDisplayed();
        await textPassword.accountName.moveTo();
        await textPassword.logOffButton.waitForDisplayed()
        await textPassword.logOffButton.click();
    });
}); 
