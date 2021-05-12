class baseutil {
    doClick(element){
        element.click();
    }
    doIsDisplayed(element){
        return element.IsDisplayed();
    }
    doaddValue(element,text){
        element.waitForDisplayed();
        element.addValue(text);
    }
}
module.exports = new baseutil();