// let apiData;
let apiData = [];
let dataMax;
let dataCalled = 0;
let resultOffSet = 0;
let loadHide = () => { document.getElementById('loadingScreen').classList.add("hide") };
let scriptAdd = (src) => {
  let srcAdd = document.createElement("script");                 
  srcAdd.setAttribute("src", src);   
  document.querySelector("body").appendChild(srcAdd);  
}



let dataFetch = () =>{
    fetch(`https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2018/FeatureServer/0/query?where=1%3D1&outFields=reportedyear,MCI,Division,Neighbourhood&outSR=4326&resultRecordCount=50000&resultType=standard&resultOffset=${resultOffSet}&f=json`)
    .then((resp) => resp.json())
    .then((data) => {
      apiData.push(data.features);
      resultOffSet += 32000;
      dataCalled += 32000;
      if( dataCalled < dataMax ){
        dataFetch();
      }else{
        loadHide();
        apiData = apiData.flat();
        // Uncomment below to see all the API's data loaded into page
        //console.log(apiData);

        // Add Script tags containing IIFE's for each sections functions to avoid polluting the global scope
        scriptAdd('assets/js/googleMaps.js');  // Not an IIFE yet need to check with instructors
        scriptAdd('assets/js/districtCheck.js'); // Not an IIFE yet need to check with instructors
        scriptAdd('assets/js/navControls.js');
        scriptAdd('assets/js/neighbourHoodCompare.js');
        scriptAdd('assets/js/neighbourHoodYearCompare.js'); 
     }
    })
}


fetch("https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2018/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json")
.then((resp) => resp.json())
.then((data) => {
  dataMax = data.count;
}).then( 
  dataFetch
);