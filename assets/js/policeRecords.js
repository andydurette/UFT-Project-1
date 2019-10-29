    
 let callAssaults = (district) => {  
    console.log(district);

    let MCI = {
      
    }
  
      fetch("https://cors-anywhere.herokuapp.com/https://opendata.arcgis.com/datasets/98f7dde610b54b9081dfca80be453ac9_0.geojson")
      .then((resp) => resp.json())
      .then((data) => {
        Array.from(data.features).forEach((item) =>{
          if ( item.properties.Division === district ){
            if (MCI[`${item.properties.MCI}`]){
              MCI[`${item.properties.MCI}`] = MCI[`${item.properties.MCI}`] + 1
            }else{
              MCI[`${item.properties.MCI}`] = 1
            }
          }
      });

      let crimeKeys = Object.keys(MCI);
      let crimeValues = Object.values(MCI);
       
// Pie chart build Start
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: crimeKeys,
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f"
      ],
      data: crimeValues
    }]
  }
});

// Pie chart build End





document.querySelector('.modal-guts h1').innerHTML = `Crime for district ${district.substring(1, 4)} since 2014`;
      
    document.getElementById("modal").classList.remove("hide");
    document.getElementById("modalOverlay").classList.remove("hide");
    }) 
   // Hide Modal
    document.getElementById('close-button').addEventListener("click", () => {
      document.getElementById("modal").classList.add("hide");
      document.getElementById("modalOverlay").classList.add("hide");
    });
   
}



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