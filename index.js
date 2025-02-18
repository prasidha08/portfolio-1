function openMenu() {

  const arrayOfUl = document.getElementsByClassName("mobile-menu-nav-bar");
  const mobileMenuNavbar = arrayOfUl[0];

  const mainMobileViewHeader = document.getElementsByClassName("mobile-view-nav");
  const mainMobileViewObj = mainMobileViewHeader[0];

  if(!mobileMenuNavbar.style.display || mobileMenuNavbar.style.display === "none"){
    mobileMenuNavbar.style.display = "flex";
    mainMobileViewObj.style.height = '450px';
  } else {
    mobileMenuNavbar.style.display="none"
    mainMobileViewObj.style.height = '70px'
  }
  
}
