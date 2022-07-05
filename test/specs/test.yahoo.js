const TextEmail = require('../pageobjects/login.yahoo');
const TextPassword = require('../pageobjects/login.password.yahoo');
const mailPage = require('../pageobjects/creat.Email');
const draftMail = require('../pageobjects/draft.Email');
const sentFolderButton = require ('../pageobjects/sent.Folder');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url("https://mail.yahoo.com/");

       await TextEmail.signInButton.isDisplayed();
       await TextEmail.signInButton.click();
       await TextEmail.login('anntest547@yahoo.com');
       await TextPassword.nextButton.waitForDisplayed();
       await TextPassword.nextButton.click();
       await TextPassword.loginP('Leto354Pas');
       await TextPassword.nextButtonPassword.waitForDisplayed();
       await TextPassword.nextButtonPassword.click();
       await TextPassword.accountName.waitForDisplayed();
       await TextPassword.accountName.isEqual(true);
        });
    it('Create new email and save it as a draft, verify that the mail is in the "Draft"', async () => { 
        await mailPage.buttonMail.waitForDisplayed();
        await mailPage.buttonMail.click();
        await mailPage.toField.waitForDisplayed();
        await mailPage.inputTo('sannav1985@gmail.com','Mail','Text'); 
        await draftMail.folderDraft.waitForDisplayed();
        await draftMail.folderDraft.click();
        await draftMail.mailInDraft.waitForDisplayed();
        await draftMail.mailInDraft.isEqual(true);
           });
    it('Verify that the mail in the "Draft" contains same adress, subject, body, send it', async () => {
        await draftMail.mailInDraft.waitForDisplayed();
        await draftMail.mailInDraft.click();
        await draftMail.draftMailAgress.waitForDisplayed();
        await draftMail.draftMailAgress.isEqual(true);
        await draftMail.draftMailSubject.waitForDisplayed();
        await draftMail.draftMailSubject.isEqual(true);
        await draftMail.draftMailText.waitForDisplayed();
        await draftMail.draftMailText.isEqual(true);
        await draftMail.buttonSent.waitForDisplayed();
        await draftMail.buttonSent.click();
           });
    it('Verify that email is disappeared from the draft folder', async () => {  
            await draftMail.mailInDraft.waitForDisplayed();
            await draftMail.mailInDraft.isEqual(false);
        });
    it('Verify that email is in the sent folder', async () => {
            await sentFolderButton.sentPage.waitForDisplayed();
            await sentFolderButton.sentPage.click();
            await sentFolderButton.mailInSentFolder.waitForDisplayed();
            await sentFolderButton.mailInSentFolder.isEqual(true);
    });
    it('Log off', async () => {
        await TextPassword.accountName.moveTo();
        await TextPassword.logOffButton.waitForDisplayed()
        await TextPassword.logOffButton.click();
    });
}); 