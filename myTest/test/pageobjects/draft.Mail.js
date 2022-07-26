class draftMail {
    
    get folderDraft() {
        return $('//span[text()="Drafts"]');
    }

    get mailInDraft() {
        return $('//span[text()="sannav1985@gmail.com"][1]');
    }

    get draftMailAdress() {
        return $('//div[text()="sannav1985@gmail.com"]');
    }

    get draftMailSubject() {
        return $('//input[@aria-label="Subject"]');
    }

    get draftMailText() {
        return $('//div[@dir="ltr"]');
    }
    
    get buttonSent() {
        return $('//button[@title="Send this email"]');
    }
   }
 module.exports = new draftMail();