const { expect } = require('chai');
const textEmail = require('../pageobjects/login.yahoo');
const textPassword = require('../pageobjects/login.password.yahoo');
const mailPage = require('../pageobjects/creat.Email');
const draftMail = require('../pageobjects/draft.Email');
const sentFolderButton = require ('../pageobjects/sent.Folder');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       await browser.url("https://mail.yahoo.com/");
       await expect (await textEmail.signInButton.waitForDisplayed()).is.equal(true);
       await textEmail.signInButton.click();
       await textEmail.login('anntest547@yahoo.com');
       await expect (await textPassword.nextButton.waitForDisplayed()).is.equal(true);
       await textPassword.nextButton.click();
       await textPassword.loginPassword('Leto354Pas');
       await expect (await textPassword.nextButtonPassword.waitForDisplayed()).is.equal(true);
       await textPassword.nextButtonPassword.click();
       await expect (await textPassword.accountName.waitForDisplayed()).is.equal(true);
        });

    it('should create new email and save it as a draft, verify that the mail is in the "Draft"', async () => { 
        await expect (await mailPage.buttonMail.waitForDisplayed()).is.equal(true);
        await mailPage.buttonMail.click();
        await expect (await mailPage.toField.waitForDisplayed()).is.equal(true);
        await expect (await mailPage.toSubject.waitForDisplayed()).is.equal(true);
        await expect (await mailPage.toBodyText.waitForDisplayed()).is.equal(true);
        await mailPage.inputEmail('sannav1985@gmail.com','Mail','Text'); 
        await draftMail.folderDraft.click();
        });

       
    it('should verify that the mail in the "Draft" contains same adress, subject, body, send it', async () => {
        
        await draftMail.mailInDraft.click(); 
        await expect (await draftMail.draftMailAdress.waitForDisplayed()).is.equal(true);
        await expect (await draftMail.draftMailSubject.waitForDisplayed()).is.equal(true);
        await expect (await draftMail.draftMailText.waitForDisplayed()).is.equal(true);
        await draftMail.buttonSent.click();        
           });

    it('should verify that email is disappeared from the draft folder', async () => {  
        await expect (await draftMail.folderDraft.waitForDisplayed()).is.equal(true);
        await draftMail.folderDraft.click();
        await expect (await draftMail.draftMailAdress.isDisplayed()).is.equal(false);
        await expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(false);
        await expect (await draftMail.draftMailText.isDisplayed()).is.equal(false);
        });

    it('should verify that email is in the sent folder', async () => {
        await expect (await sentFolderButton.sentPage.waitForDisplayed()).is.equal(true);
        await sentFolderButton.sentPage.click();
        await expect (await sentFolderButton.mailInSentFolder.waitForDisplayed()).is.equal(true);
    });

    it('should log off', async () => {
        await expect (await textPassword.accountName.waitForDisplayed()).is.equal(true);
        await textPassword.accountName.moveTo();
        await expect (await textPassword.logOffButton.waitForDisplayed()).is.equal(true);
        await textPassword.logOffButton.click();
    });
}); 
