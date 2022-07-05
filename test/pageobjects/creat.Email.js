class mailPage {
    
    get buttonMail() {
        return $('//a[@data-test-id="compose-button"]');
    }
    get toField() {
        return $('//input[@id="message-to-field"]');
    }
    get toSubject() {
        return $('//input[@data-test-id="compose-subject"]');
    }
    get toBodyText() {
        return $('//div[@aria-label="Message body"]');
    }
    async inputTo (Field, Subject, BodyText) {
        await this.toField.setValue(Field);
        await this.toSubject.setValue(Subject);
        await this.toBodyText.setValue(BodyText);
        
    }
    open () {
        return super.open('inputTo');
    }  
} 
 
   
 module.exports = new mailPage();