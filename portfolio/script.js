const scrollTopBtn = document.getElementById("scrollTop");

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});