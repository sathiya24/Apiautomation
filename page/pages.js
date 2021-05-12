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

    get signout(){ 
        return $(pageobjects.signout);
    }

    login() {
        browser.url(url.baseurl);
        baseutils.doClick(this.supportlink);
        baseutils.doaddValue(this.Username,logindata.username)
        baseutils.doClick(this.continue);
        baseutils.doaddValue(this.Password,logindata.password);
        baseutils.doClick(this.signin);
        baseutils.mouseover(this.supportlink);
        baseutils.doClick(this.signout);

    }

    invalidlogin() {
        browser.url(url.baseurl);
        baseutils.doClick(this.supportlink);
        baseutils.doaddValue(this.Username,logindata.username)
        baseutils.doClick(this.continue);
        baseutils.doaddValue(this.Password1,logindata.password1);
        baseutils.doClick(this.signin);
        browser.pause(5000);

    }
}
module.exports = new LoginPage();