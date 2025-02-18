function openMenu() {

  // Select the element with the class name "mobile-menu-nav-bar" to change its style
  const arrayOfUl = document.getElementsByClassName("mobile-menu-nav-bar");

  // The result of arrayOfUl is an array-like object
  // Access the first element of arrayOfUl
  const mobileMenuNavbar = arrayOfUl[0];

  // Select the element with the class name "mobile-view-nav" to change its style
  const mainMobileViewHeader = document.getElementsByClassName("mobile-view-nav");

  // The result of mainMobileViewHeader is an array-like object
  // Access the first element of mainMobileViewHeader
  const mainMobileViewObj = mainMobileViewHeader[0];

  // Check the condition to toggle the menu options
  // If the display is "none" or undefined, update the display to "flex" to show the menu options
  // If the display is "flex", update the display to "none" to hide the menu options
  if (!mobileMenuNavbar.style.display || mobileMenuNavbar.style.display === "none") {
    mobileMenuNavbar.style.display = "flex";
    mainMobileViewObj.style.height = '450px';
  } else {
    mobileMenuNavbar.style.display = "none";
    mainMobileViewObj.style.height = '70px';
  }
  
}