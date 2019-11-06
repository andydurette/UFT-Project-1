(function() {

    // Selectors made for quick refrence lower in the code
    let district1 = document.querySelector("#district1");
    let district2 = document.querySelector("#district2");
    let neighbourhood1 = document.querySelector("#neighbourhood1");
    let neighbourhood2 = document.querySelector("#neighbourhood2");


    /***********************     CHART CREATION START    ****************************/

    let legendDirection = () => {
        if (window.innerWidth < 650) {
            return 'top'
        } else {
            return 'right'
        }
    }

    /* Data to pass to chart.js to create a chart for comparing NeighbourHoods Crime */
    var color = Chart.helpers.color;
    var horizontalBarChartData = {
        labels: ['Assault', 'Theft Over', 'Break and Enter', 'Robbery', 'Auto Theft'],
        datasets: [{
            label: 'District 1',
            backgroundColor: color("#3e95cd").alpha(0.5).rgbString(),
            borderColor: "#3e95cd",
            borderWidth: 1,
            data: [0, 0, 0, 0, 0]
        }, {
            label: 'District 2',
            backgroundColor: color("#8e5ea2").alpha(0.5).rgbString(),
            borderColor: "#8e5ea2",
            data: [0, 0, 0, 0, 0]
        }]
    };

    //Horizontal Bar Chart
    let ctx = document.getElementById("neighbourhoodChart").getContext('2d');
    let neighbourhoodChartDisplay = new Chart(ctx, {
        type: 'horizontalBar',
        data: horizontalBarChartData,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0,
                        suggestedMax: 100,
                    },
                }]
            },
            elements: {
                rectangle: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            aspectRatio: 1,
            maintainAspectRatio: false,
            legend: {
                position: legendDirection(),
            },
            title: {
                display: true,
                text: 'Yearly Crime Comparison Between Districts'
            }
        }
    });

    let chartLegendUpdate = () => {
        if (window.innerWidth < 650) {
            neighbourhoodChartDisplay.options.legend.position = "top";
            neighbourhoodChartDisplay.update();
        } else {
            neighbourhoodChartDisplay.options.legend.position = "right";
            neighbourhoodChartDisplay.update();
        }
    }

    window.addEventListener("resize", chartLegendUpdate);
    window.addEventListener("orientationchange", chartLegendUpdate)


    /***********************     CHART CREATION END    ****************************/


    /***********************     INITIAL NEIGHBOURHOODCOMPARE FORM DATA START    ****************************/

    // Object to hold values for looping and creating dynamicly generated html
    let division = {};
    // Data generated to above object from Querying ApiData
    apiData.forEach((item) => {
        if (!division[`${item.attributes.Division}`]) {
            division[`${item.attributes.Division}`] = item.attributes.Division
        }
    });

    // Variables for quick selection
    let district1Options = document.querySelector("#district1");
    let district2Options = document.querySelector("#district2");
    let divisionKeys = Object.keys(division).sort();

    // Gets the array from divisionKey to dynamicly create html options for a selection form element
    divisionKeys.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        option.setAttribute("value", item);
        district1Options.appendChild(option);
    });

    // Gets the array from divisionKey to dynamicly create html options for a selection form element
    divisionKeys.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        option.setAttribute("value", item);
        district2Options.appendChild(option);
    });

    /***********************     INITIAL NEIGHBOURHOODCOMPARE FORM DATA END    ****************************/


    /***********************     NEIGHBOURHOODCOMPARE FORM EVENT HANDLERS START    ****************************/


    // Runs events that are triggered by a form fields change of value
    district1.addEventListener("change", () => {

        // This checks if the districts have been choseen so the button can be use to search for the data
        let neighbourhoodList1 = {};
        if (district1.value === "Empty" || district2.value === "Empty") {
            document.querySelector("#neighbourhoodCompareButton").disabled = true;
            document.querySelector("#neighbourhoodCompareButton").classList.add('disabled');
        } else {
            document.querySelector("#neighbourhoodCompareButton").disabled = false;
            document.querySelector("#neighbourhoodCompareButton").classList.remove('disabled');
        }

        // This checks if the district1 selection has been choose if it hasn't we disable the neighborhood1 selection as it we have not dynamicly generated the neighborhoods to it.
        if (district1.value === "Empty") {
            neighbourhood1.disabled = true;
        } else {
            neighbourhood1.disabled = false;

            // We check the nighbourhoods belonging to the district by comparing it to the API data for that district
            Array.from(apiData).forEach((item) => {
                if (item.attributes.Division === district1.value) {
                    if (!neighbourhoodList1[`${item.attributes.Neighbourhood}`]) {
                        neighbourhoodList1[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood;
                    }
                }
            });

            // We generate dynamicly the html selections for the nighbourhoods belonging to the district by using the Array generated from the above API data
            neighbourhood1.innerHTML = '';
            let neighbourhoodList1Keys = Object.keys(neighbourhoodList1).sort();
            Array.from(neighbourhoodList1Keys).forEach((item) => {
                let option = document.createElement('option');
                option.innerHTML = item;
                option.setAttribute("value", item);
                neighbourhood1.appendChild(option);
            });
        }
    })

    // Runs events that are triggered by a form fields change of value
    district2.addEventListener("change", () => {

        // This checks if the districts have been choseen so the button can be use to search for the data
        let neighbourhoodList2 = {};
        if (district1.value === "Empty" || district2.value === "Empty") {
            document.querySelector("#neighbourhoodCompareButton").disabled = true;
            document.querySelector("#neighbourhoodCompareButton").classList.add('disabled');
        } else {
            document.querySelector("#neighbourhoodCompareButton").disabled = false;
            document.querySelector("#neighbourhoodCompareButton").classList.remove('disabled');
        }

        // This checks if the district1 selection has been choose if it hasn't we disable the neighborhood1 selection as it we have not dynamicly generated the neighborhoods to it.
        if (district2.value === "Empty") {
            neighbourhood2.disabled = true;
        } else {
            neighbourhood2.disabled = false;

            // We check the nighbourhoods belonging to the district by comparing it to the API data for that district
            Array.from(apiData).forEach((item) => {
                if (item.attributes.Division === district2.value) {
                    if (!neighbourhoodList2[`${item.attributes.Neighbourhood}`]) {
                        neighbourhoodList2[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood
                    }
                }
            });

            // We generate dynamicly the html selections for the nighbourhoods belonging to the district by using the Array generated from the above API data
            neighbourhood2.innerHTML = '';
            let neighbourhoodList2Keys = Object.keys(neighbourhoodList2).sort();
            neighbourhoodList2Keys.forEach((item) => {
                let option = document.createElement('option');
                option.innerHTML = item;
                option.setAttribute("value", item);
                neighbourhood2.appendChild(option);
            });
        }
    });

    /***********************     NEIGHBOURHOODCOMPARE FORM EVENT HANDLERS END    ****************************/

    /***********************     NEIGHBOURHOODCOMPARE BUTTON TO UPDATE FORM START    ****************************/

    // Compares called data
    let neighbourHoodCompare = (e) => {

        // Stop page reload
        e.preventDefault(); 

        // Set to Record all major crime indicators (MCI) from the APIDATA for one neighbourhood
        let Neighbourhood1MCI = {};

        // Loop through to provide all the data on MCI'S and how many
        apiData.forEach((item) => {
            if (item.attributes.Neighbourhood === neighbourhood1.value) {
                if (Neighbourhood1MCI[`${item.attributes.MCI}`]) {
                    Neighbourhood1MCI[`${item.attributes.MCI}`] = Neighbourhood1MCI[`${item.attributes.MCI}`] + 1
                } else {
                    Neighbourhood1MCI[`${item.attributes.MCI}`] = 1
                }
            }
        });

        let crimeValues1 = Object.values(Neighbourhood1MCI);

        // Set to Record all major crime indicators from the APIDATA for a second neighbourhood
        let Neighbourhood2MCI = {};

        apiData.forEach((item) => {
            if (item.attributes.Neighbourhood === neighbourhood2.value) {
                if (Neighbourhood2MCI[`${item.attributes.MCI}`]) {
                    Neighbourhood2MCI[`${item.attributes.MCI}`] = Neighbourhood2MCI[`${item.attributes.MCI}`] + 1
                } else {
                    Neighbourhood2MCI[`${item.attributes.MCI}`] = 1
                }
            }
        });

        let crimeValues2 = Object.values(Neighbourhood2MCI);

        //Update chart data
        neighbourhoodChartDisplay.options.aspectRatio = 2;
        neighbourhoodChartDisplay.data.datasets[0].data = crimeValues1;
        neighbourhoodChartDisplay.data.datasets[1].data = crimeValues2;
        neighbourhoodChartDisplay.update();

    }



    // Upon the sections Button Click Run the above function
    document.querySelector("#neighbourhoodCompareButton").addEventListener("click", neighbourHoodCompare);

    /***********************     NEIGHBOURHOODCOMPARE BUTTON TO UPDATE FORM END    ****************************/

    /***********************     LOCAL STORAGE START    ****************************/

    //Year 1 onchange event for saving to local storage
    district1.addEventListener("change", () => {
        localStorage.setItem("district1StoredValue", district1.value);
    });

    //districtYearCompare onchange event for saving to local storage
    neighbourhood1.addEventListener("change", () => {
        localStorage.setItem("neighbourhood1StoredValue", neighbourhood1.value);
    });

    //Year 2 onchange event for saving to local storage
    district2.addEventListener("change", () => {
        localStorage.setItem("district2StoredValue", district2.value);
    });

    //neighbourhoodYearCompare onchange event for saving to local storage
    neighbourhood2.addEventListener("change", () => {
        localStorage.setItem("neighbourhood2StoredValue", neighbourhood2.value);
    });


    /* Start of checking for local storage value now that the dynamic html values are loaded */
    if (localStorage.getItem("district1StoredValue")) {
        document.querySelector('#district1 [value="' + localStorage.getItem("district1StoredValue") + '"]').selected = true;
        document.querySelector('#district1').dispatchEvent(new Event('change'));
        if (localStorage.getItem("neighbourhood1StoredValue")) {
            document.querySelector('#neighbourhood1 [value="' + localStorage.getItem("neighbourhood1StoredValue") + '"]').selected = true;
            document.querySelector('#neighbourhood1').dispatchEvent(new Event('change'));
        }
    }

    

    if (localStorage.getItem("district2StoredValue")) {
        document.querySelector('#district2 [value="' + localStorage.getItem("district2StoredValue") + '"]').selected = true;
        document.querySelector('#district2').dispatchEvent(new Event('change'));
        if (localStorage.getItem("neighbourhood2StoredValue")) {
            document.querySelector('#neighbourhood2 [value="' + localStorage.getItem("neighbourhood2StoredValue") + '"]').selected = true;
            document.querySelector('#neighbourhood2').dispatchEvent(new Event('change'));
        }
    }

    


    /***********************     LOCAL STORAGE END    ****************************/


})();