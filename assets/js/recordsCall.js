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
        dataFetch();
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

  let districtYearCompare = document.querySelector("#districtYearCompare");
  let district1 = document.querySelector("#district1");
  let district2 = document.querySelector("#district2");
  
  let divisionKeys = Object.keys(division).sort();

  Array.from(divisionKeys).forEach((item) =>{
    let option = document.createElement('option');
    option.innerHTML = item;
    option.setAttribute("value", item );
    districtYearCompare.appendChild(option);
  });

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

  let dataYears = {};
  Array.from(apiData[0]).forEach((item) =>{
      if (dataYears[`${item.attributes.reportedyear}`]){
  
      }else{
        dataYears[`${item.attributes.reportedyear}`] = item.attributes.reportedyear
       }
  });

  console.log(dataYears);

  let year1 = document.querySelector("#year1");
  let year2 = document.querySelector("#year2");

  let dataYearsKeys = Object.keys(dataYears).sort();

  Array.from(dataYearsKeys).forEach((item) =>{
    let option = document.createElement('option');
    option.innerHTML = item;
    option.setAttribute("value", item );
    year1.appendChild(option);
  });

  Array.from(dataYearsKeys).forEach((item) =>{
    let option = document.createElement('option');
    option.innerHTML = item;
    option.setAttribute("value", item );
    year2.appendChild(option);
  });


}

