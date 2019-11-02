let district1 = document.querySelector("#district1");
let district2 = document.querySelector("#district2");
let neighbourhood1 = document.querySelector("#neighbourhood1");
let neighbourhood2 = document.querySelector("#neighbourhood2");
district1.addEventListener("change", () => {
  
  let neighbourhoodList1 = {};
  if(district1.value === "Empty" || district2.value === "Empty"  ){
    document.querySelector("#neighbourhoodCompareButton").disabled = true;
    document.querySelector("#neighbourhoodCompareButton").classList.add('disabled');
  }else{
    document.querySelector("#neighbourhoodCompareButton").disabled = false;
    document.querySelector("#neighbourhoodCompareButton").classList.remove('disabled');
  }
  if(district1.value === "Empty" ){
    neighbourhood1.disabled = true;
  }else{
    neighbourhood1.disabled = false;
    Array.from(apiData).forEach((item) =>{
      if(item.attributes.Division === district1.value){
        if (!neighbourhoodList1[`${item.attributes.Neighbourhood}`]){
          neighbourhoodList1[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood
        }
      }
    })
    neighbourhood1.innerHTML = '';
    let neighbourhoodList1Keys = Object.keys(neighbourhoodList1).sort();    
    Array.from(neighbourhoodList1Keys).forEach((item) =>{
      let option = document.createElement('option');
      option.innerHTML = item;
      option.setAttribute("value", item );
      neighbourhood1.appendChild(option);
    });
    }
})
district2.addEventListener("change", () => {
  
  let neighbourhoodList2 = {};
  if(district1.value === "Empty" || district2.value === "Empty"  ){
    document.querySelector("#neighbourhoodCompareButton").disabled = true;
    document.querySelector("#neighbourhoodCompareButton").classList.add('disabled');
  }else{
    document.querySelector("#neighbourhoodCompareButton").disabled = false;
    document.querySelector("#neighbourhoodCompareButton").classList.remove('disabled');
  }
  if(district2.value === "Empty" ){
    neighbourhood2.disabled = true;
  }else{
    neighbourhood2.disabled = false;
    Array.from(apiData).forEach((item) =>{
      if(item.attributes.Division === district2.value){
        if (!neighbourhoodList2[`${item.attributes.Neighbourhood}`]){
          neighbourhoodList2[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood
        }
      }
    })
    neighbourhood2.innerHTML = '';
    let neighbourhoodList2Keys = Object.keys(neighbourhoodList2).sort();    
    Array.from(neighbourhoodList2Keys).forEach((item) =>{
      let option = document.createElement('option');
      option.innerHTML = item;
      option.setAttribute("value", item );
      neighbourhood2.appendChild(option);
    });
    }
})
// Compares called data
let neighbourHoodCompare = () =>{
  
  //DATASET1
  let Neighbourhood1MCI = {};
  Array.from(apiData).forEach((item) =>{
    if ( item.attributes.Neighbourhood === neighbourhood1.value ){
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