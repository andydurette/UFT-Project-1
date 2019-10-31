//  Nav js
document.getElementById('myMenuFunction').onclick = function(e){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Active Nav reassignment

var activeItem = document.querySelectorAll("#myTopnav a");

activeItem.forEach((userItem) => {
  userItem.addEventListener("click",() => {
    activeItem.forEach((userItem) => {
      userItem.classList.remove("active");
    })
    userItem.classList.add("active");
  })
});