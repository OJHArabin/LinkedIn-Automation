var webdriver=require("selenium-webdriver");
require('chromedriver');
var driver=new webdriver.Builder().forBrowser('chrome').build();


driver.get('https://www.linkedin.com');
driver.findElement(webdriver.By.id('login-email')).sendKeys('Yourusername');
driver.findElement(webdriver.By.id('login-password')).sendKeys('Password');
driver.findElement(webdriver.By.id('login-submit')).click();

driver.findElement(webdriver.By.id('mynetwork-tab-icon')).click();

driver.sleep(3000);//god



//driver.findElement(webdriver.By.className('mn-connections-summary__see-all Sans-15px-black-85%-semibold inline-block mt1 mb4 ph3 ember-view')).click();
//driver.findElement({xpath:"//a[@class='mn-connections-summary__see-all Sans-15px-black-85%-semibold inline-block mt1 mb4 ph3 ember-view']"}).click();
//driver.findElement({xpath:"//a[@data-control-name='connections']"}).click();
//driver.findElement(webdriver.By.xpath('//a[@href="/mynetwork/invite-connect/connections/"]')).click();
driver.findElement(webdriver.By.linkText("See all")).click();




//need to scrolle
driver.sleep(3000);
driver.findElements({xpath:"//span[@class='mn-connection-card__name Sans-17px-black-85%-semibold-dense']"}).then(function(contact){
  contact.map(function(e1){
    e1.getText().then(function(txt){
      console.log(txt);
    });
  });

});

driver.quit();
