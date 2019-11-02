let districtYear1 = document.querySelector("#district1");
let neighbourhoodYear1 = document.querySelector("#neighbourhoodYear1");


districtYear1.addEventListener("change", () => {
  
  let neighbourhoodYear1 = {};
  if(district1.value === "Empty" || district2.value === "Empty"  ){
    document.querySelector("#yearViewCompareButton").disabled = true;
    document.querySelector("#yearViewCompareButton").classList.add('disabled');
  }else{
    document.querySelector("#yearViewCompareButton").disabled = false;
    document.querySelector("#yearViewCompareButton").classList.remove('disabled');
  }


  if(district1.value === "Empty" ){
    neighbourhoodYear1.disabled = true;
  }else{
    neighbourhoodYear1.disabled = false;
    Array.from(apiData).forEach((item) =>{
      if(item.attributes.Division === district1.value){
        if (!neighbourhoodList1[`${item.attributes.Neighbourhood}`]){
          neighbourhoodList1[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood
        }
      }
    })
    neighbourhoodYear1.innerHTML = '';
    let neighbourhoodList1Keys = Object.keys(neighbourhoodList1).sort();    
    Array.from(neighbourhoodList1Keys).forEach((item) =>{
      let option = document.createElement('option');
      option.innerHTML = item;
      option.setAttribute("value", item );
      neighbourhoodYear1.appendChild(option);
    });
    }
})



// Compares called data
let yearViewCompareButton = () =>{
  
  //DATASET1
  let NeighbourhoodYear1MCI = {};

  Array.from(apiData).forEach((item) =>{
    if ( item.attributes.Neighbourhood === neighbourhoodYear1.value ){
      //console.log(item);
      if (NeighbourhoodYear1MCI[`${item.attributes.MCI}`]){
        NeighbourhoodYear1MCI[`${item.attributes.MCI}`] = NeighbourhoodYear1MCI[`${item.attributes.MCI}`] + 1
      }else{
        NeighbourhoodYear1MCI[`${item.attributes.MCI}`] = 1
       }
    }});

    let crimeKeys1 = Object.keys(NeighbourhoodYear1MCI);
    let crimeValues1 = Object.values(NeighbourhoodYear1MCI);
    console.log(crimeKeys1);
    console.log(crimeValues1);

    

    //DATASET2
    let Neighbourhood2MCI = {};

    Array.from(apiData).forEach((item) =>{
      if ( item.attributes.Neighbourhood === neighbourhood2.value ){
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
new Chart(document.getElementById("neighbourhoodChart"),{
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

document.querySelector("#neighbourhoodCompareButton").addEventListener("click", neighbourHoodCompare);



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