import amazonpage from '../page/pages';

describe('Amazon login application',() => {
    it('should login with valid credentials',() => {
        amazonpage.login();
    });
    
    it('should login with invalid credentials',() => {
        amazonpage.invalidlogin();
   });
    
});