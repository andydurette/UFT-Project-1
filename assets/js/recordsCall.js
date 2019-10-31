let apiData;

// To much info cannot store it to localStorage
fetch("https://cors-anywhere.herokuapp.com/https://opendata.arcgis.com/datasets/98f7dde610b54b9081dfca80be453ac9_0.geojson")
.then((resp) => resp.json())
.then((data) => {
  apiData = data.features;
  console.log(apiData);
  document.getElementById('loadingScreen').classList.add("hide");
  formset();
});

// Neighbourhood form setting

let formset = () =>{

  let division = {};
  Array.from(apiData).forEach((item) =>{
      if (division[`${item.properties.Division}`]){
  
      }else{
        division[`${item.properties.Division}`] = item.properties.Division
       }
  });

  let district1 = document.querySelector("#district1");
  let district2 = document.querySelector("#district2");
  let divisionKeys = Object.keys(division).sort();

  Array.from(divisionKeys).forEach((item) =>{
    let option = document.createElement('option');
    option.innerHTML = item;
    option.setAttribute("value", item );
    district1.appendChild(option);
  });

  Array.from(divisionKeys).forEach((item) =>{
    let option = document.createElement('option');
    option.innerHTML = item;
    option.setAttribute("value", item );
    district2.appendChild(option);
  });

}