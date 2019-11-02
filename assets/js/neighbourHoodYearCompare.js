let districtYearCompare = document.querySelector("#districtYearCompare");
let neigbourhoodYearCompare = document.querySelector("#neighbourhoodYearCompare");
let year1 = document.querySelector("#year1");
let year2 = document.querySelector("#year2");

districtYearCompare.addEventListener("change", () => {
  
  let neighbourhoodYearList = {};
  if(districtYearCompare.value === "Empty" ){
    document.querySelector("#yearViewCompareButton").disabled = true;
    document.querySelector("#yearViewCompareButton").classList.add('disabled');
  }else{
    document.querySelector("#yearViewCompareButton").disabled = false;
    document.querySelector("#yearViewCompareButton").classList.remove('disabled');
  }


  if(districtYearCompare.value === "Empty" ){
    neigbourhoodYearCompare.disabled = true;
  }else{
    neigbourhoodYearCompare.disabled = false;
    Array.from(apiData).forEach((item) =>{
      if(item.attributes.Division === districtYearCompare.value){
        if (!neighbourhoodYearList[`${item.attributes.Neighbourhood}`]){
          neighbourhoodYearList[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood
        }
      }
    })
    neigbourhoodYearCompare.innerHTML = '';
    let neighbourhoodYearListKeys = Object.keys(neighbourhoodYearList).sort();    
    Array.from(neighbourhoodYearListKeys).forEach((item) =>{
      let option = document.createElement('option');
      option.innerHTML = item;
      option.setAttribute("value", item );
      neigbourhoodYearCompare.appendChild(option);
    });
    }
})

// Compares called data
let neighbourHoodYearCompare = () =>{
  
  //DATASET1
  let Neighbourhood1MCI = {};

  Array.from(apiData).forEach((item) =>{
    if ( item.attributes.Neighbourhood === neighbourhoodYearCompare.value && item.attributes.reportedyear === Number(year1.value) ){
      //console.log(item);
      if (Neighbourhood1MCI[`${item.attributes.MCI}`]){
        Neighbourhood1MCI[`${item.attributes.MCI}`] = Neighbourhood1MCI[`${item.attributes.MCI}`] + 1
      }else{
        Neighbourhood1MCI[`${item.attributes.MCI}`] = 1
       }
    }});

    let crimeKeys1 = Object.keys(Neighbourhood1MCI);
    let crimeValues1 = Object.values(Neighbourhood1MCI);
    console.log(crimeKeys1);
    console.log(crimeValues1);

    

   //DATASET1
  let Neighbourhood2MCI = {};

  Array.from(apiData).forEach((item) =>{
    if ( item.attributes.Neighbourhood === neighbourhoodYearCompare.value && item.attributes.reportedyear === Number(year2.value) ){
      //console.log(item);
      if (Neighbourhood2MCI[`${item.attributes.MCI}`]){
        Neighbourhood2MCI[`${item.attributes.MCI}`] = Neighbourhood2MCI[`${item.attributes.MCI}`] + 1
      }else{
        Neighbourhood2MCI[`${item.attributes.MCI}`] = 1
       }
    }});

    let crimeKeys2 = Object.keys(Neighbourhood2MCI);
    let crimeValues2 = Object.values(Neighbourhood2MCI);
    console.log(crimeKeys2);
    console.log(crimeValues2);


  //Compare chart
 
var color = Chart.helpers.color; 
var horizontalBarChartData = {
    labels: crimeKeys1,
    datasets: [{
      label: 'Neighbourhood 1',
      backgroundColor: color("#3e95cd").alpha(0.5).rgbString(),
      borderColor: "#3e95cd",
      borderWidth: 1,
      data: crimeValues1
  }, {
      label: 'Neighbourhood 2',
      backgroundColor: color("#8e5ea2").alpha(0.5).rgbString(),
      borderColor: "#8e5ea2",
      data: crimeValues2
  }]

};

//console.log(horizontalBarChartData);

//Horizontal Bar Chart
new Chart(document.getElementById("yearChart"),{
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
        }
      },
      responsive: true,
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Yearly Crime Comparison Between Districts'
      }
    }
  });
}

document.querySelector("#yearViewCompareButton").addEventListener("click", neighbourHoodYearCompare);

//Test Var: to be replaced by actual data
var color = Chart.helpers.color; 
var horizontalBarChartData = {
    labels: ['Assault', 'Theft Over', 'Break and Enter', 'Robbery', 'Auto Theft'],
    datasets: [{
      label: 'District 1',
      backgroundColor: color("#3e95cd").alpha(0.5).rgbString(),
      borderColor: "#3e95cd",
      borderWidth: 1,
      data: [
        0,
        0,
        0,
        0,
        0
      ]
  }, {
      label: 'District 2',
      backgroundColor: color("#8e5ea2").alpha(0.5).rgbString(),
      borderColor: "#8e5ea2",
      data: [
        0,
        0,
        0,
        0,
        0
     ]
  }]

};

//console.log(horizontalBarChartData);

//Horizontal Bar Chart
new Chart(document.getElementById("yearChart"),{
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
        }
      },
      responsive: true,
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Yearly Crime Comparison Between Districts'
      }
    }
  });