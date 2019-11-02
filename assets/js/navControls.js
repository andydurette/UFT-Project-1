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

let activeItem = document.querySelectorAll("#myTopnav a");

activeItem.forEach((userItem) => {
  userItem.addEventListener("click",() => {
    activeItem.forEach((userItem) => {
      userItem.classList.remove("active");
    })
    userItem.classList.add("active");
  })
});




// On Scroll event



var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

document.addEventListener('scroll', () =>{
let h = document.querySelector('#home h1');
let d = document.querySelector('#districtView #map');
let n = document.querySelector('#neighbourhoodView #neighbourhoodCompareBlock');
let y = document.querySelector('#yearView h2');
if (isInViewport(h)) {
    activeItem.forEach((userItem) => {
          userItem.classList.remove("active");
    });
    document.querySelectorAll('#myTopnav div a')[0].classList.add("active");
} else if (isInViewport(d)) {
    activeItem.forEach((userItem) => {
    userItem.classList.remove("active");
    });
    document.querySelectorAll('#myTopnav div a')[1].classList.add("active");
} else if (isInViewport(n)) {
    activeItem.forEach((userItem) => {
    userItem.classList.remove("active");
    });
    document.querySelectorAll('#myTopnav div a')[2].classList.add("active");
} else if (isInViewport(y)) {
    activeItem.forEach((userItem) => {
    userItem.classList.remove("active");
    });
    document.querySelectorAll('#myTopnav div a')[3].classList.add("active");
}


});