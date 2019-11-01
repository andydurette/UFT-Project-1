let neighbourHoodCompare = () =>{

  let district = {
      
  }

  let neighbourhood = {
      
  }

    Array.from(apiData).forEach((item) =>{
       console.log(item);
    });
}

document.querySelector("#neighbourhoodCompareButton").addEventListener("click", neighbourHoodCompare);

//Test Var: to be replaced by actual data
var color = Chart.helpers.color; 
var horizontalBarChartData = {
    labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: color("#3e95cd").alpha(0.5).rgbString(),
      borderColor: "#3e95cd",
      borderWidth: 1,
      data: [
        131,
        3456,
        356,
        535,
        2364,
        236
      ]
  }, {
      label: 'Dataset 2',
      backgroundColor: color("#8e5ea2").alpha(0.5).rgbString(),
      borderColor: "#8e5ea2",
      data: [
        2315,
        2435,
        3245,
        345,
        256,
        564
     ]
  }]

};

console.log(horizontalBarChartData);

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