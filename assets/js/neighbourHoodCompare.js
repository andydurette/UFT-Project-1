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













// Base Bar chart
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