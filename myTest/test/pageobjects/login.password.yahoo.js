class TextPassword {

    get nextButton () {
        return $('//input [@type="submit"]'); 
    }  

    get inputPassword () {
        return $('//input [@id="login-passwd"]'); 
    } 

    get nextButtonPassword () {
        return $('//button [@id="login-signin"]'); 
    } 

    get accountName () {
        return $('//span[@role="presentation"]'); 
    } 

    get logOffButton () {
        return $('//span[text()="Sign out"]'); 
    } 
      
    async loginPassword (password) {
        await this.inputPassword.setValue(password);
            
    }
      
}
 module.exports = new TextPassword();