class sentFolderButton {
    
    get sentPage () {
        return $('//span[@data-test-folder-name="Sent"]');
    }

    get mailInSentFolder() {
        return $('//span[text()="sannav1985@gmail.com"]');
    }
    
     }
 module.exports = new sentFolderButton();