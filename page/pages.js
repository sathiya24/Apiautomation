import pageobjects from '../pageobjects1/pageobjects';
import baseutils from '../utilities/baseutil';
import logindata from '../testdata/logindata';
import url from '../url';

class LoginPage{
    get supportlink(){ 
        return $(pageobjects.supportlink); 
    }
    get Laptaplink(){ 
        return $(pageobjects.laptoplink); 
    }
    
    get Dealoftheday(){
        return $(pageobjects.dealoftheday);
    }
    get Addtocartbtn(){
        return $(pageobjects.addtocartbtn);
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

    get Searchbox(){
        return $(pageobjects.searchbox);
    }

    get Laptopsearch(){
        return $(pageobjects.laptopsearch);
    }
    get Submitbtn(){
        return $(pageobjects.submitbtn)
    }
    get closebtn(){
        return $(pageobjects.closebtn)
    } 
    get items(){
        return $(pageobjects.items)
    } 


    login() {
        browser.url(url.baseurl);
        baseutils.doClick(this.supportlink);
        baseutils.doaddValue(this.Username,logindata.username)
        baseutils.doClick(this.continue);
        baseutils.doaddValue(this.Password,logindata.password);
        baseutils.doClick(this.signin);
        baseutils.doaddValue(this.Searchbox,logindata.laptopsearch);
        baseutils.doClick(this.Submitbtn);
        var currentHandler = browser.getWindowHandle();
        console.log(currentHandler,'Before laptop click windowhandle ************')
        baseutils.doClick(this.Laptaplink);
        baseutils.SetWindowSize(this.Laptaplink);
        browser.pause(8000);
        var newHandler = browser.getWindowHandle();
        console.log(newHandler,'After laptop click windowhandle ************')
        var handles = browser.getWindowHandles();
        console.log(handles,'All handles printed here ******************=========');
        //var newhandle;
        browser.switchToWindow(handles[1].toString());
        expect(browser).toHaveTitle('Asus X509MA-BR270T/ Silver/ Intel Celeron N4020/ RAM 4GB/ SSD 256GB/ 15.6 inch HD/ FP/ 2Cell/ Win 10SL: Amazon.in: Computers & Accessories');
       // baseutils.scrollIntoView(this.items);
       // baseutils.doClick(this.quantity);
        baseutils.doClick(this.Addtocartbtn);
        browser.pause(5000);
        baseutils.doClick(this.closebtn);
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