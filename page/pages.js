import pageobjects from '../pageobjects1/pageobjects';
import baseutils from '../utilities/baseutil';
import logindata from '../testdata/logindata';
import url from '../url';

class LoginPage{
    get supportlink(){ 
        return $(pageobjects.supportlink); 
    }

    get Username(){
         return $(pageobjects.username);
    }

    get continue(){
         return $(pageobjects.continue);
    }

    get Password(){
         return $(pageobjects.password);
    }

    get Password1(){
        return $(pageobjects.password);
   }

    get signin(){ 
        return $(pageobjects.signin);
    }

    login() {
        browser.url(url.baseurl);
        baseutils.doClick(this.supportlink);
        baseutils.doaddValue(this.Username,logindata.username)
        baseutils.doClick(this.continue);
        baseutils.doaddValue(this.Password,logindata.password);
        baseutils.doClick(this.signin);
    }

    invalidlogin() {
        browser.url(url.baseurl);
        baseutils.doClick(this.supportlink);
        baseutils.doaddValue(this.Username,logindata.username)
        baseutils.doClick(this.continue);
        baseutils.doaddValue(this.Password1,logindata.password1);
        baseutils.doClick(this.signin);
        browser.pause(10000);

    }
}
module.exports = new LoginPage();