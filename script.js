console.log("Portfolio Website Loaded");

/* Theme Toggle */

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener(
  "click",

  () => {

    document.body.classList.toggle(
      "light-theme"
    );

    /* Icon Change */

    const icon =
    themeToggle.querySelector("i");

    if(
      document.body.classList.contains(
        "light-theme"
      )
    ){

      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");

    }

    else{

      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");

    }

  }

);