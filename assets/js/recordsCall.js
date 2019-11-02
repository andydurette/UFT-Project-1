// let apiData;
let apiData = [];
let dataMax;
let dataCalled = 0;
let resultOffSet = 0;
let loadHide = () => { document.getElementById('loadingScreen').classList.add("hide") };


let dataFetch = () =>{
    fetch(`https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2018/FeatureServer/0/query?where=1%3D1&outFields=reportedyear,MCI,Division,Neighbourhood&outSR=4326&resultRecordCount=50000&resultType=standard&resultOffset=${resultOffSet}&f=json`)
    .then((resp) => resp.json())
    .then((data) => {
      apiData.push(data.features);
      resultOffSet += 32000;
      dataCalled += 32000;
      if( dataCalled < dataMax ){
        dataFetch()
      }else{
        loadHide();
        formset();
        apiData = apiData.flat();
        console.log(apiData);
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



// Neighbourhood form setting

let formset = () =>{

  let division = {};
  Array.from(apiData[0]).forEach((item) =>{
      if (division[`${item.attributes.Division}`]){
  
      }else{
        division[`${item.attributes.Division}`] = item.attributes.Division
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

