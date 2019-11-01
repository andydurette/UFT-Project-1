
 let callMCI = (district) => {  
  console.log(district);

  let MCI = {
    
  }

  Array.from(apiData).forEach((item) =>{
    if ( item.properties.Division === district ){
      if (MCI[`${item.properties.MCI}`]){
        MCI[`${item.properties.MCI}`] = MCI[`${item.properties.MCI}`] + 1
      }else{
        MCI[`${item.properties.MCI}`] = 1
       }
    }});

    let crimeKeys = Object.keys(MCI);
    let crimeValues = Object.values(MCI);
     

//Horizontal Bar Chart Data
var horizontalBarChartData = {
    labels: crimeKeys,
    datasets: [{
      label: 'District ID: ' + district,
      backgroundColor: color("#3e41cd").alpha(0.5).rgbString(),
      borderColor: "#3e41cd",
      borderWidth: 1,
      data: crimeValues
  }]
};

//Horizontal Bar Chart
new Chart(document.getElementById("myChart"),{
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
        text: '# of crime occurance'
      }
    }
  });

// Pie chart build End

document.querySelector('.modal-guts h2').innerHTML = `Crime Since 2014`;    
document.getElementById("modal").classList.remove("hide");
document.getElementById("modalOverlay").classList.remove("hide"); 

// Hide Modal
document.getElementById('close-button').addEventListener("click", () => {
  document.getElementById("modal").classList.add("hide");
  document.getElementById("modalOverlay").classList.add("hide");
});

}