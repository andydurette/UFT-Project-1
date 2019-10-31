let apiData;

// To much info cannot store it to localStorage
fetch("https://cors-anywhere.herokuapp.com/https://opendata.arcgis.com/datasets/98f7dde610b54b9081dfca80be453ac9_0.geojson")
.then((resp) => resp.json())
.then((data) => {
  apiData = data.features;
  console.log(apiData);
  document.getElementById('loadingScreen').classList.add("hide");
});