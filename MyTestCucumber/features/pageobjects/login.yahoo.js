

class TextEmail {
    
    get signInButton() {
        return $('//a[text()="Sign in"]');
    }

    get inputLogin () {
        return $('//input[@id="login-username"]');

    }
        
        async login (username) {
        await this.inputLogin.setValue(username);
              
    }
   
   
   }
 module.exports = new TextEmail();

   
   
    



