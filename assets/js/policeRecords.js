let apiData;

// To much info cannot store it to localStorage
fetch("https://cors-anywhere.herokuapp.com/https://opendata.arcgis.com/datasets/98f7dde610b54b9081dfca80be453ac9_0.geojson")
.then((resp) => resp.json())
.then((data) => {
  apiData = data.features;
  console.log(apiData);
  document.getElementById('loadingScreen').classList.add("hide");
});

 let callMCI = (district) => {  
    console.log(district);

    let MCI = {
      
    }
  
    Array.from(apiData).forEach((item) =>{
      if ( item.properties.Division === district ){
        if (MCI[`${item.properties.MCI}`]){
          MCI[`${item.properties.MCI}`] = MCI[`${item.properties.MCI}`] + 1
        }else{
          MCI[`${item.properties.MCI}`] = 1
         }
      }});

      let crimeKeys = Object.keys(MCI);
      let crimeValues = Object.values(MCI);
       
// Bar chart
new Chart(document.getElementById("myChart"), {
  type: 'bar',
  data: {
    labels: crimeKeys,
    datasets: [
      {
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: crimeValues
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      hover: {mode: null},
      events: []
    }
  }
});



// Pie chart build End

document.querySelector('.modal-guts h1').innerHTML = `Crime for district ${district.substring(1, 4)} since 2014`;
      
    document.getElementById("modal").classList.remove("hide");
    document.getElementById("modalOverlay").classList.remove("hide"); 
   // Hide Modal
    document.getElementById('close-button').addEventListener("click", () => {
      document.getElementById("modal").classList.add("hide");
      document.getElementById("modalOverlay").classList.add("hide");
    });
   
}


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







/*
let MCI = {
      
}

fetch("https://cors-anywhere.herokuapp.com/https://opendata.arcgis.com/datasets/98f7dde610b54b9081dfca80be453ac9_0.geojson")
.then((resp) => resp.json())
.then((data) => {
  Array.from(data.features).forEach((item) =>{
      if (MCI[`${item.properties.MCI}`]){
        //console.log(assaults[`${item.properties.offence}`]);
        MCI[`${item.properties.MCI}`] = MCI[`${item.properties.MCI}`] + 1
      }else{
        MCI[`${item.properties.MCI}`] = 1
      }
});
 
  console.log(data.features);
}).then( () => {
  console.log(MCI); 
});
*/



/* Assult
fetch("https://cors-anywhere.herokuapp.com/https://opendata.arcgis.com/datasets/025dea0af035479ab43d7780e12dc395_0.geojson")
.then((resp) => resp.json())
.then((data) => {
 // console.log(data.features);
  Array.from(data.features).forEach((item) =>{
    if ( item.properties.Division === district ){
      if (assaults[`${item.properties.offence}`]){
        //console.log(assaults[`${item.properties.offence}`]);
        assaults[`${item.properties.offence}`] = assaults[`${item.properties.offence}`] + 1
      }else{
        assaults[`${item.properties.offence}`] = 1
      }
  }
  })
  console.log(assaults.Assault); 

  let assaultkeys = Object.keys(assaults);
  let assaultValues = Object.values(assaults);
  */