let neighbourHoodCompare = () =>{

  let MCI = {
      
  }
  
    Array.from(data.features).forEach((item) =>{
      if ( item.properties.Division === district ){
        if (assaults[`${item.properties.offence}`]){
          //console.log(assaults[`${item.properties.offence}`]);
          assaults[`${item.properties.offence}`] = assaults[`${item.properties.offence}`] + 1
        }else{
          assaults[`${item.properties.offence}`] = 1
        }
    }
    })
    console.log(assaults.Assault); 
  
    let assaultkeys = Object.keys(assaults);
    let assaultValues = Object.values(assaults);

}


// Bar chart
new Chart(document.getElementById("neighbourhoodChart"), {
  type: 'bar',
  data: {
    labels: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    datasets: [
      {
        backgroundColor: ["#3e95cd", "#8e5ea2","#3e95cd", "#8e5ea2","#3e95cd", "#8e5ea2","#3e95cd", "#8e5ea2","#3e95cd", "#8e5ea2"],
        data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      hover: {mode: null},
      events: []
    }
  }
  });