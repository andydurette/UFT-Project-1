(function(){

/* Start of data to pass to chart.js to create a chart for comparing a NeighbourHood year to year Crime */
var color = Chart.helpers.color; 
var horizontalBarChartData = {
    labels: ['Assault', 'Theft Over', 'Break and Enter', 'Robbery', 'Auto Theft'],
    datasets: [{
      label: 'District 1',
      backgroundColor: color("#3e95cd").alpha(0.5).rgbString(),
      borderColor: "#3e95cd",
      borderWidth: 1,
      data: [ 0, 0, 0, 0, 0 ]
  }, {
      label: 'District 2',
      backgroundColor: color("#8e5ea2").alpha(0.5).rgbString(),
      borderColor: "#8e5ea2",
      data: [ 0, 0, 0, 0, 0 ]
  }]
};

//Horizontal Bar Chart
let ctx = document.getElementById("yearChart").getContext('2d');
let yearChartDisplay = new Chart(ctx,{
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
      scales: {
        xAxes: [{
      ticks: {
          min: 0,
          suggestedMax: 100,
        },
      }]
      },
      elements: {
        rectangle: {
          borderWidth: 2,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Yearly Crime Comparison Between Districts'
      }
    }
  });
/* End of data to pass to chart.js to create a chart for comparing a NeighbourHood year to year Crime */


/* Start of Setting Neighbourhood initial form data */

let division = {};
Array.from(apiData).forEach((item) =>{
    if (!division[`${item.attributes.Division}`]){
      division[`${item.attributes.Division}`] = item.attributes.Division
     }
});

// Variables for quick selection
let districtYearCompareOptions = document.querySelector("#districtYearCompare");
let divisionKeys = Object.keys(division).sort();

// Gets the array from divisionKey to dynamicly create html options for a selection form element
Array.from(divisionKeys).forEach((item) =>{
  let option = document.createElement('option');
  option.innerHTML = item;
  option.setAttribute("value", item );
  districtYearCompareOptions.appendChild(option);
});

// Object to hold values for looping and creating dynamicly generated html
let dataYears = {};
// Data generated to above object from Querying ApiData
Array.from(apiData).forEach((item) =>{
    if (!dataYears[`${item.attributes.reportedyear}`]){
      dataYears[`${item.attributes.reportedyear}`] = item.attributes.reportedyear
     }
});

// Variables for quick selection
let year1Options = document.querySelector("#year1");
let year2Options = document.querySelector("#year2");
let dataYearsKeys = Object.keys(dataYears).sort();

// Gets the array from divisionKey to dynamicly create html options for a selection form element
Array.from(dataYearsKeys).forEach((item) =>{
  let option = document.createElement('option');
  option.innerHTML = item;
  option.setAttribute("value", item );
  year1Options.appendChild(option);
});

// Gets the array from divisionKey to dynamicly create html options for a selection form element
Array.from(dataYearsKeys).forEach((item) =>{
  let option = document.createElement('option');
  option.innerHTML = item;
  option.setAttribute("value", item );
  year2Options.appendChild(option);
});

/* End of Setting Neighbourhood initial form data */

// Selectors made for quick refrence lower in the code
let districtYearCompare = document.querySelector("#districtYearCompare");
let neigbourhoodYearCompare = document.querySelector("#neighbourhoodYearCompare");
let year1 = document.querySelector("#year1");
let year2 = document.querySelector("#year2");

// Runs events that are triggered by a form fields change of value
districtYearCompare.addEventListener("change", () => {
  
  // This checks if the districts have been choseen so the button can be use to search for the data
  let neighbourhoodYearList = {};
  if(districtYearCompare.value === "Empty" ){
    document.querySelector("#yearViewCompareButton").disabled = true;
    document.querySelector("#yearViewCompareButton").classList.add('disabled');
  }else{
    document.querySelector("#yearViewCompareButton").disabled = false;
    document.querySelector("#yearViewCompareButton").classList.remove('disabled');
  }

  // This checks if the district1 selection has been choose if it hasn't we disable the neighborhood1 selection as it we have not dynamicly generated the neighborhoods to it.
  if(districtYearCompare.value === "Empty" ){
    neigbourhoodYearCompare.disabled = true;
  }else{
    neigbourhoodYearCompare.disabled = false;

    // We check the nighbourhoods belonging to the district by comparing it to the API data for that district
    Array.from(apiData).forEach((item) =>{
      if(item.attributes.Division === districtYearCompare.value){
        if (!neighbourhoodYearList[`${item.attributes.Neighbourhood}`]){
          neighbourhoodYearList[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood;
        }
      }
    });

    // We generate dynamicly the html selections for the nighbourhoods belonging to the district by using the Array generated from the above API data
    neigbourhoodYearCompare.innerHTML = '';
    let neighbourhoodYearListKeys = Object.keys(neighbourhoodYearList).sort();    
    Array.from(neighbourhoodYearListKeys).forEach((item) =>{
      let option = document.createElement('option');
      option.innerHTML = item;
      option.setAttribute("value", item );
      neigbourhoodYearCompare.appendChild(option);
    });
    }
});


// Compares called data
let neighbourHoodYearCompare = () =>{
  
  // Set to Record all major crime indicators (MCI) from the APIDATA for 1 neighbourhood year
  let Neighbourhood1MCI = {};

  // Loop through to provide all the data on MCI'S and how many
  Array.from(apiData).forEach((item) =>{
    if ( item.attributes.Neighbourhood === neighbourhoodYearCompare.value && item.attributes.reportedyear === Number(year1.value) ){
      if (Neighbourhood1MCI[`${item.attributes.MCI}`]){
        Neighbourhood1MCI[`${item.attributes.MCI}`] = Neighbourhood1MCI[`${item.attributes.MCI}`] + 1
      }else{
        Neighbourhood1MCI[`${item.attributes.MCI}`] = 1
       }
    }});

    let crimeValues1 = Object.values(Neighbourhood1MCI);

  // Set to Record all major crime indicators from the APIDATA for 1 neighbourhood year
  let Neighbourhood2MCI = {};

  // Loop through to provide all the data on MCI'S and how many
  Array.from(apiData).forEach((item) =>{
    if ( item.attributes.Neighbourhood === neighbourhoodYearCompare.value && item.attributes.reportedyear === Number(year2.value) ){
      if (Neighbourhood2MCI[`${item.attributes.MCI}`]){
        Neighbourhood2MCI[`${item.attributes.MCI}`] = Neighbourhood2MCI[`${item.attributes.MCI}`] + 1
      }else{
        Neighbourhood2MCI[`${item.attributes.MCI}`] = 1
       }
    }});

    let crimeValues2 = Object.values(Neighbourhood2MCI);

//Update chart data
yearChartDisplay.data.datasets[0].data = crimeValues1;
yearChartDisplay.data.datasets[1].data = crimeValues2;
yearChartDisplay.update();

}

// Upon the sections Button Click Run the above function
document.querySelector("#yearViewCompareButton").addEventListener("click", neighbourHoodYearCompare);


})();