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

    mouseover(element){
        element.moveTo();
    }

    setvalue(element){
        element.setValue();
    }
    SetWindowSize(element){
        element.setWindowSize(1650, 1050);
    }

    switchToWindow(element){
        element.switchWindow(element);
    }
    scrollIntoView(element){
        element.scrollIntoView();
    }
    navigateTo(element){
        element.navigateTo();
    }
    switchTab(element){
        element.switchTab();
    }

}
module.exports = new baseutil();