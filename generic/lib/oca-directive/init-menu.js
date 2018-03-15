var initializeMenu = window.initializeMenu || {};

initializeMenu = (function() {

    //Polyfill for calc
    function slideMenu() {
        this._initialize();
    }

    //Initialize all the document in the variable
    //Slide menu class is used to adjust the height of the menu.
    //To apply scroll for only menu. We are adjusting the height of the main container.
    slideMenu.prototype._initialize = function() {
        //This code is used to terminate the execution when there is no navbar container.
        this.windowWidth = window.innerWidth;
        this.mobileTabletWidth = 992;
        this.navBarVerticalClass = 'navbar-vertical';
        if (!document.getElementsByClassName("navbar-main")[0]) {
            return;
        }
        this.navBarMain = document.getElementsByClassName("navbar-main")[0];
        //Add navbar-vertical class when the menu is loaded only for mobile and tablet
        if (this.windowWidth < this.mobileTabletWidth && !this.hasClass(this.navBarMain, this.navBarVerticalClass)) {
            this.navBarMain.className += ' ' + this.navBarVerticalClass;
        }
        this.verticalContainer = document.getElementsByClassName('navbar-vertical');

        this.navBarContainer = this.navBarMain.getElementsByClassName("container-fluid")[0];
        this.navExpander = document.getElementsByClassName('btn-nav-expander');
        this.htmlContainer = document.getElementsByTagName('html')[0];
        this.bodyContainer = document.getElementsByTagName('body')[0];
        this.windowHeight = window.innerHeight;
        this.mainContent = document.getElementById('main');
        this.footerContent = document.getElementById('footer');
        this.doormatContent = document.getElementById('doormat');
        this.headerContent = document.getElementById('header');
        this.navBarNav = document.getElementsByClassName('navbar-nav');
        this.languageListItems = (document.getElementsByClassName('ocf-languageswitch')[0]) ? document.getElementsByClassName('ocf-languageswitch')[0].cloneNode(true) : undefined;

        this.opacityElem = document.getElementsByClassName('ocf-curtain')[0];
        this.navBarParentContainer = document.getElementsByClassName("navbar-container")[0];

        this.setMenuToggle = true;
        this.resizeTimeout = null;
        this.fallbackNavRight = 0;
        this.fallbackNavBarWidth = 'auto';



        //this.navBarContainerInitHeight = this.navBarContainer.offsetHeight;
        this._initializeEvents();
        this.checkCalcBool = this._checkCalc();
        this._initCalcLessMenu();

        // copy language elements to navbarcontainer before the menu items
        if(this.languageListItems){
            this.languageListItems.className = 'nav nav-pills ocf-languageswitch hidden-md hidden-lg';
            this.navBarContainer.insertBefore(this.languageListItems, this.navBarNav[0]);
        }
    };

    //To check css3 calc function is supported by browser.
    slideMenu.prototype._checkCalc = function() {

        var el = document.createElement('div');

        el.style.cssText = 'width: -moz-calc(10px); width: -webkit-calc(10px); width: calc(10px)';

        return !el.style.length;
    };

    //Adjust the right and width using javascript, if the browser doesn't support "calc" function.
    slideMenu.prototype._initCalcLessMenu = function() {
        if (this.checkCalcBool && this.windowWidth < this.mobileTabletWidth) {
            this.fallbackNavBarWidth = (this.navBarMain.offsetWidth + 55) + 'px';
            this.navBarParentContainer.style.width = this.fallbackNavBarWidth;
            this.fallbackNavRight = (this.headerContent.offsetWidth - 55) + 'px';
            this.navBarParentContainer.style.right = this.fallbackNavRight;
        }
    };

    slideMenu.prototype._closeCalcLessMenu = function() {
        if (this.checkCalcBool && this.windowWidth < this.mobileTabletWidth) {
            this.navBarParentContainer.style.right = (this.headerContent.offsetWidth - 55) + 'px';
        }
    };

    slideMenu.prototype._expandCalcLessMenu = function() {
        if (this.checkCalcBool && this.windowWidth < this.mobileTabletWidth) {
            this.navBarParentContainer.style.right = (this.headerContent.offsetWidth - (this.navBarMain.offsetWidth + 55)) + 'px';
        }
    };

    slideMenu.prototype.resizeAdjustWidthCalc = function() {
        if (this.checkCalcBool) {
            if (this.windowWidth < this.mobileTabletWidth) {
                if (this.setMenuToggle) {
                    this._initCalcLessMenu();
                } else {
                    this.navBarParentContainer.style.width = (this.navBarMain.offsetWidth + 55) + 'px';
                    this.navBarParentContainer.style.right = (this.headerContent.offsetWidth - (this.navBarMain.offsetWidth + 55)) + 'px';
                }
            } else {
                this.navBarParentContainer.style.width = 'auto';
            }
        }
    };

    //Initialize click, resize events to the elements
    slideMenu.prototype._initializeEvents = function() {
        var i, j;
        if (document.addEventListener || window.addEventListener) {
            this.navExpander[0].addEventListener('click', this.expandListener.bind(this), true);

            window.addEventListener("resize", this.resizeAdjustMenu.bind(this), true);

            for(j = 0; j < this.navBarNav.length; j++) {
                // used to target links (for navigating) in the menu
                this.navBarList = this.navBarNav[j].getElementsByTagName('a');

                // used to target the expanding part of submenus
                this.subnavSelector = this.navBarNav[j].getElementsByTagName('li');
                for (i = 0; i < this.navBarList.length; i++) {
                    // add eventlistener to prevent default on subnavSelector(s) so it stops navigating and closing the menu


                    // add eventlistener to close the menu
                    this.navBarList[i].addEventListener('click', this.closeListener.bind(this), false);
                }
            }


            this.opacityElem.addEventListener('click', this.closeListener.bind(this), true);
        } else {
            for (i = 0; i < this.navExpander.length; i++) {
                this.navExpander[i].attachEvent('click', this.expandListener.bind(this), false);
            }

            for (i = 0; i < this.navBarList.length; i++) {

                // add eventlistener to prevent default on subnavSelector(s) so it stops navigating and closing the menu
                this.subnavSelector[i].addEventListener('click', this.toggleListener.bind(this), false);

                // add eventlistener to close the menu
                this.navBarList[i].attachEvent('click', this.closeListener.bind(this), false);
            }

            this.opacityElem.attachEvent('click', this.closeListener.bind(this), false);
        }

    };

    slideMenu.prototype.resizeAdjustMenu = function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.windowWidth = window.innerWidth;
        this.resizeMenu();
    };

    slideMenu.prototype.resizeMenu = function() {
        if (this.windowWidth < this.mobileTabletWidth) {
            if(!this.setMenuToggle)
            {
                this.htmlContainer.className = 'navbar-hamburger-expanded';
                this.setHamburgerMenuHeight();
            }

            if(!this.hasClass(this.navBarMain, this.navBarVerticalClass)) {
                this.navBarMain.className += ' ' + this.navBarVerticalClass;
            }

            if (this.htmlContainer.className === 'navbar-hamburger-closed' || this.htmlContainer.className === '') {
                this.opacityElem.style.height = '0px';
                this.resetHeight();
            }

        } else {
            //this.navBarContainer.style.height = 'auto';
            this.resetHeight();
            //remove the navbar-vertical class for desktop/lg screens
            this.removeClass(this.navBarMain, this.navBarVerticalClass);
            if(this.hasClass(this.htmlContainer, 'navbar-hamburger-expanded')) {
                this.removeClass(this.htmlContainer, 'navbar-hamburger-expanded');
            }
        }
        this.resizeAdjustWidthCalc();
    };

    //Expand listener to invoke expand slide menu
    slideMenu.prototype.expandListener = function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.expandSlideMenu();
    };

    //This function is to close the menu
    slideMenu.prototype.closeListener = function(e) {
        if(this.windowWidth < this.mobileTabletWidth) {
            e.stopImmediatePropagation();
            this.closeSlideMenu();
            this.setMenuToggle = true;
        }
    };

    // This function is to prevent default with the menu,
    //  used to open a submenu without navigating to the page
    slideMenu.prototype.toggleListener = function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        this.toggleMenu(e);
    };
    slideMenu.prototype.toggleMenu = function(e) {
        var target = e.target,
            expandClassName = 'expanded';
        this.removeSiblingClass(target);
        if(this.hasClass(target, expandClassName)) {
            this.removeClass(target, expandClassName);
        } else {
            target.className += ' ' + expandClassName;
        }
        if(this.windowWidth < this.mobileTabletWidth) {
            this.setHamburgerMenuHeight(true);
        }
    };

    slideMenu.prototype.removeSiblingClass = function(ele) {
        // convert to array
        var siblings = [].slice.call(ele.parentNode.children)
                .filter(function(v) {
                    if(v !== ele && window.initializeMenu.hasClass(v, 'expanded'))
                    {
                        window.initializeMenu.removeClass(v, 'expanded');
                    }
                });
        return siblings;
    };

    slideMenu.prototype.hasClass = function(ele,cls) {
        return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    };

    slideMenu.prototype.removeClass = function(ele,cls) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,'');
    };



    /* Calculate height will not return proper value. If the markup is not defined with proper id
     *  <header id="header"></header>
     *  <div id="main"></div>
     *  <footer id="footer"></footer>
     */
    slideMenu.prototype.setHamburgerMenuHeight = function(collapse) {
        var setNavContainerHeight, setMainContentHeight;
        var navBarContainerHeight;
        this.windowHeight = window.innerHeight;
        navBarContainerHeight = this.navBarContainer.offsetHeight;
        this.mainContent.style.overflow = 'hidden';
        this.navBarContainer.style.height = 'auto';
        this.navBarContainer.removeAttribute('style');
        //Reset the nav bar .container-fluid height when user clicks collapse
        if(collapse)
        {
            this.navBarContainerInitHeight = this.navBarContainer.offsetHeight;
        }
        if (this.windowHeight >= this.navBarContainerInitHeight) {
            setNavContainerHeight = this.windowHeight;
            this.navBarContainer.style.height = setNavContainerHeight + 'px';
        } else {
            this.navBarContainer.style.height = 'auto';
            navBarContainerHeight = this.navBarContainer.offsetHeight;
            setNavContainerHeight = navBarContainerHeight;
        }

        this.opacityElem.style.height = setNavContainerHeight + 'px';
        if (this.doormatContent) {
            this.doormatContent.style.display = 'none';
        }
        setMainContentHeight = setNavContainerHeight - (this.headerContent.offsetHeight + this.footerContent.offsetHeight + 20);
        this.mainContent.style.height = setMainContentHeight + 'px';
    };

    //Expand the slide menu and apply class name to the html container
    slideMenu.prototype.expandSlideMenu = function() {
        if (this.setMenuToggle) {
            this.htmlContainer.className = 'navbar-hamburger-expanded';
            this.setMenuToggle = false;
            this.setHamburgerMenuHeight();
            this._expandCalcLessMenu();
        } else {
            this.closeSlideMenu();
            this.setMenuToggle = true;
        }
    };

    //Close the slide menu and apply class name to the html container
    slideMenu.prototype.closeSlideMenu = function() {
        this.htmlContainer.className = 'navbar-hamburger-closed';
        this.opacityElem.style.height = '0px';
        this._closeCalcLessMenu();
        this.resetHeight();
    };

    //Resets the height of the main content
    slideMenu.prototype.resetHeight = function() {
        this.mainContent.style.height = 'auto';
        this.mainContent.style.overflow = 'visible';

        if (this.doormatContent) {
            this.doormatContent.style.display = 'block';
        }
    };

    var slideMenuInstance = new slideMenu();

    return slideMenuInstance;
})(window);
