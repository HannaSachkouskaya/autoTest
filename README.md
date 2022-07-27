
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser,
making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting,
while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.


Precondition

 - Node.js and Visual Studio Code should be installed 
 - Create a folder in directory in your file system               
 - Open the folder in Visual Studio Code
 - Open the terminal and run ‘npm init -y’ command
 - Run ‘npm install selenium-webdriver’               
 - Run ‘npm install chromedriver’
 - Run ‘npm install mocha’
 - Run ‘npm init wdio .’ and set all values - set framework=mocha and other = default
 - Run ‘npm install chai’
 - Set a path to execute tests in package.json file to 
"scripts": {
    "test": "wdio wdio.conf.js",
    "wdio": "wdio run wdio.conf.js"
  },                                                                                          

- To runing test use command ‘npm test’ in terminal


Discription

myTest is based on the mocha framework. 
Main goal is checking 'yahoo.com' mail. 
myTest should login in, creating and filling in a letter and sending a letter, as well as saving a letter in the draft folder and log out.
 
