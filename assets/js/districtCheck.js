
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
     
// Bar chart
new Chart(document.getElementById("myChart"), {
type: 'bar',
data: {
  labels: crimeKeys,
  datasets: [
    {
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
      data: crimeValues
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



// Pie chart build End

document.querySelector('.modal-guts h2').innerHTML = `Crime for district ${district.substring(1, 4)} since 2014`;
    
  document.getElementById("modal").classList.remove("hide");
  document.getElementById("modalOverlay").classList.remove("hide"); 
 // Hide Modal
  document.getElementById('close-button').addEventListener("click", () => {
    document.getElementById("modal").classList.add("hide");
    document.getElementById("modalOverlay").classList.add("hide");
  });
 
}