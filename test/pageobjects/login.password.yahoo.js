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
        return $('//span[@class="_yb_1vfht _yb_1eva5 _yb_f50u6"]'); 
    } 
   //div [@id="password-container"]
    async loginP (password) {
        await this.inputPassword.setValue(password);
       
        
    }
    open () {
        return super.open('loginP');
    }  
}
 module.exports = new TextPassword();