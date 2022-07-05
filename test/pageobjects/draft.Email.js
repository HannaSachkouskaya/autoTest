class draftMail {
    
    get folderDraft() {
        return $('//span[@data-test-folder-name="Draft"]');
    }
    get mailInDraft() {
        return $('//span[text()="sannav1985@gmail.com"]');
    }
    get draftMailAgress() {
        return $('//div[@data-test-id="pill-text"]');
    }
    get draftMailSubject() {
        return $('//input[@data-test-id="compose-subject"]');
    }
    get draftMailText() {
        return $('//div[@dir="ltr"]');
    }
    get buttonSent() {
        return $('//span[text()="Send"]');
    }
   }
 module.exports = new draftMail();