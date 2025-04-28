
      const toggle = document.getElementById("toggle");
      toggle.addEventListener("change", function () {
        if (this.checked) {
          document.body.style.backgroundColor = "#002b28";
          document.querySelectorAll(".darkmode").forEach(element=>element.style.color="white");
          document.querySelector(".hero .primary__button").style.backgroundColor="#f5da2a";
          document.querySelector(".hero .primary__button").style.color="#002b28";
          document.querySelector(".header__container img ").src="assets/image/logowhite.svg";
          document.querySelector(".hero .list__1").style.color="#fff6";
          document.querySelector(".hero .list__2").style.color="white";
          document.querySelector(".hero .box").style.backgroundColor="#eeeffc70";
          document.querySelector(".hero .box").style.borderColor="#eeeffc70";

          

         

          
        } else {
          document.body.style.backgroundColor = "white";
          document.querySelectorAll(".darkmode").forEach(element=>element.style.color="#002b28");
          document.querySelector(".hero .primary__button").style.backgroundColor="#002b28";
          document.querySelector(".hero .primary__button").style.color="white";
          document.querySelector(".header__container img ").src="assets/image/logo.svg";
          document.querySelector(".hero .list__1").style.color="#002b28";
          document.querySelector(".hero .list__2").style.color="#002b2878";
          document.querySelector(".hero .box").style.backgroundColor="#eeeffc";
          document.querySelector(".hero .box").style.borderColor="#cbd0f6";

          

        }
      });
   