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
    labels: [50, 50, 50, 50, 50],
    datasets: [
      {
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [50, 50, 50, 50, 50]
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