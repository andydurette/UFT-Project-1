//Horizontal Bar Chart Data
var color = Chart.helpers.color; 
var horizontalBarChartData = {
    labels: ['Assault', 'Theft Over', 'Break and Enter', 'Robbery', 'Auto Theft'],
    datasets: [{
      label: 'District ID: ',
      backgroundColor: color("#3e41cd").alpha(0.5).rgbString(),
      borderColor: "#3e41cd",
      borderWidth: 1,
      data: [0, 0, 0, 0, 0]
  }]
};

/* Horizontal Bar Build Chart Start */
let ctx = document.getElementById("modalChart").getContext('2d');
let districtChartDisplay = new Chart(ctx,{
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
        }
      },
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: '# of crime occurance'
      }
    }
  });


let callMCI = (district) => {  

  // Set to Record all major crime indicators (MCI) from the APIDATA
  let MCI = {}

  // Loop through to provide all the data on MCI'S and how many
  Array.from(apiData).forEach((item) =>{
    if ( item.attributes.Division === district ){
      if (MCI[`${item.attributes.MCI}`]){
        MCI[`${item.attributes.MCI}`] = MCI[`${item.attributes.MCI}`] + 1
      }else{
        MCI[`${item.attributes.MCI}`] = 1
       }
    }});

    // Provides data from loop for updading chart data
    let crimeValues = Object.values(MCI);
    let crimeTotal = Object.values(MCI).reduce((a, b) => a + b, 0)
     
    //Update chart data
    districtChartDisplay.data.datasets[0].data = crimeValues;
    districtChartDisplay.data.datasets[0].label = 'District ID: ' + district.substring(1, 3);
    districtChartDisplay.options.title.text = crimeTotal + " number of crime occurance";
    districtChartDisplay.update();


/* Horizontal Bar Build Chart Start */

document.querySelector('.modal-guts h2').innerHTML = `Crime Since 2014`;    
document.getElementById("modal").classList.remove("hide");
document.getElementById("modalOverlay").classList.remove("hide"); 

// Hide Modal
document.getElementById('close-button').addEventListener("click", () => {
  document.getElementById("modal").classList.add("hide");
  document.getElementById("modalOverlay").classList.add("hide");
});

}