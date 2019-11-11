(function() {

    // Variables for quick selection
    let year1 = document.querySelector("#year1");
    let year2 = document.querySelector("#year2");
    let districtYearCompare = document.querySelector("#districtYearCompare");
    let neigbourhoodYearCompare = document.querySelector("#neighbourhoodYearCompare");


    /***********************     CHART CREATION START    ****************************/

    let legendDirection = () => {
        if (window.innerWidth < 650) {
            return 'top'
        } else {
            return 'right'
        }
    }

    /* Data to pass to chart.js to create a chart for comparing a NeighbourHood year to year Crime */
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
    let ctx = document.getElementById("yearChart").getContext('2d');
    let yearChartDisplay = new Chart(ctx, {
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
                },
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

    //Update chart legend to better display on mobile or desktop
    let chartLegendUpdate = () => {
        if (window.innerWidth < 650) {
            yearChartDisplay.options.legend.position = "top";
            yearChartDisplay.update();
        } else {
            yearChartDisplay.options.legend.position = "right";
            yearChartDisplay.update();
        }
    }

    window.addEventListener("resize", chartLegendUpdate);
    window.addEventListener("orientationchange", chartLegendUpdate)


    /***********************     CHART CREATION END    ****************************/


    /***********************     INITIAL NEIGHBOURHOODYEARCOMPARE FORM DATA START    ****************************/

    let division = {};
    apiData.forEach((item) => {
        if (!division[`${item.attributes.Division}`]) {
            division[`${item.attributes.Division}`] = item.attributes.Division
        }
    });

    // Variables for quick selection
    let districtYearCompareOptions = document.querySelector("#districtYearCompare");
    let divisionKeys = Object.keys(division).sort();

    // Gets the array from divisionKey to dynamicly create html options for a selection form element
    divisionKeys.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        option.setAttribute("value", item);
        districtYearCompareOptions.appendChild(option);
    });

    // Object to hold values for looping and creating dynamicly generated html
    let dataYears = {};
    // Data generated to above object from Querying ApiData
    apiData.forEach((item) => {
        if (!dataYears[`${item.attributes.reportedyear}`]) {
            dataYears[`${item.attributes.reportedyear}`] = item.attributes.reportedyear
        }
    });

    let dataYearsKeys = Object.keys(dataYears).sort();

    // Gets the array from divisionKey to dynamicly create html options for a selection form element
    dataYearsKeys.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        option.setAttribute("value", item);
        year1.appendChild(option);
    });

    // Gets the array from divisionKey to dynamicly create html options for a selection form element
    dataYearsKeys.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        option.setAttribute("value", item);
        year2.appendChild(option);
    });

    /***********************     INITIAL NEIGHBOURHOODYEARCOMPARE FORM DATA END    ****************************/


    /***********************     NEIGHBOURHOODYEARCOMPARE FORM EVENT HANDLERS START    ****************************/

    // Runs events that are triggered by a form fields change of value
    districtYearCompare.addEventListener("change", () => {

        // This checks if the districts have been choseen so the button can be use to search for the data
        let neighbourhoodYearList = {};
        if (districtYearCompare.value === "Empty") {
            document.querySelector("#yearViewCompareButton").disabled = true;
            document.querySelector("#yearViewCompareButton").classList.add('disabled');
        } else {
            document.querySelector("#yearViewCompareButton").disabled = false;
            document.querySelector("#yearViewCompareButton").classList.remove('disabled');
        }

        // This checks if the district1 selection has been choose if it hasn't we disable the neighborhood1 selection as it we have not dynamicly generated the neighborhoods to it.
        if (districtYearCompare.value === "Empty") {
            neigbourhoodYearCompare.disabled = true;
        } else {
            neigbourhoodYearCompare.disabled = false;

            // We check the nighbourhoods belonging to the district by comparing it to the API data for that district
            apiData.forEach((item) => {
                if (item.attributes.Division === districtYearCompare.value) {
                    if (!neighbourhoodYearList[`${item.attributes.Neighbourhood}`]) {
                        neighbourhoodYearList[`${item.attributes.Neighbourhood}`] = item.attributes.Neighbourhood;
                    }
                }
            });

            // We generate dynamicly the html selections for the nighbourhoods belonging to the district by using the Array generated from the above API data
            neigbourhoodYearCompare.innerHTML = '';
            let neighbourhoodYearListKeys = Object.keys(neighbourhoodYearList).sort();
            neighbourhoodYearListKeys.forEach((item) => {
                let option = document.createElement('option');
                option.innerHTML = item;
                option.setAttribute("value", item);
                neigbourhoodYearCompare.appendChild(option);
            });
        }
    });

    /***********************     NEIGHBOURHOODYEARCOMPARE FORM EVENT HANDLERS END    ****************************/

    /***********************     NEIGHBOURHOODYEARCOMPARE BUTTON TO UPDATE FORM START    ****************************/

    // Compares called data
    let neighbourHoodYearCompare = (e) => {
        
        // Stop page reload
        e.preventDefault(); 

        // Set to Record all major crime indicators (MCI) from the APIDATA for 1 neighbourhood year
        let Neighbourhood1MCI = {};

        // Loop through to provide all the data on MCI'S and how many
        apiData.forEach((item) => {
            if (item.attributes.Neighbourhood === neighbourhoodYearCompare.value && item.attributes.reportedyear === Number(year1.value)) {
                if (Neighbourhood1MCI[`${item.attributes.MCI}`]) {
                    Neighbourhood1MCI[`${item.attributes.MCI}`] = Neighbourhood1MCI[`${item.attributes.MCI}`] + 1
                } else {
                    Neighbourhood1MCI[`${item.attributes.MCI}`] = 1
                }
            }
        });

        let crimeValues1 = Object.values(Neighbourhood1MCI);

        // Set to Record all major crime indicators from the APIDATA for 1 neighbourhood year
        let Neighbourhood2MCI = {};

        // Loop through to provide all the data on MCI'S and how many
        apiData.forEach((item) => {
            if (item.attributes.Neighbourhood === neighbourhoodYearCompare.value && item.attributes.reportedyear === Number(year2.value)) {
                if (Neighbourhood2MCI[`${item.attributes.MCI}`]) {
                    Neighbourhood2MCI[`${item.attributes.MCI}`] = Neighbourhood2MCI[`${item.attributes.MCI}`] + 1
                } else {
                    Neighbourhood2MCI[`${item.attributes.MCI}`] = 1
                }
            }
        });

        let crimeValues2 = Object.values(Neighbourhood2MCI);

        //Update chart data
        yearChartDisplay.data.datasets[0].data = crimeValues1;
        yearChartDisplay.data.datasets[1].data = crimeValues2;
        yearChartDisplay.update();

    }


    // Upon the sections Button Click Run the above function
    document.querySelector("#yearViewCompareButton").addEventListener("click", neighbourHoodYearCompare);

    /***********************     NEIGHBOURHOODYEARCOMPARE BUTTON TO UPDATE FORM END    ****************************/


    /***********************     LOCAL STORAGE START    ****************************/

    //Year 1 onchange event for saving to local storage
    year1.addEventListener("change", () => {
        localStorage.setItem("Year1StoredValue", year1.value);
    });

    //Year 2 onchange event for saving to local storage
    year2.addEventListener("change", () => {
        localStorage.setItem("Year2StoredValue", year2.value);
    });

    //districtYearCompare onchange event for saving to local storage
    districtYearCompare.addEventListener("change", () => {
        localStorage.setItem("districtYearCompareStoredValue", districtYearCompare.value);
    });

    //neighbourhoodYearCompare onchange event for saving to local storage
    neighbourhoodYearCompare.addEventListener("change", () => {
        localStorage.setItem("neighbourhoodYearCompareStoredValue", neighbourhoodYearCompare.value);
    });



    /* Start of checking for local storage value now that the dynamic html values are loaded */
    if (localStorage.getItem("Year1StoredValue")) {
        document.querySelector('#year1 [value="' + localStorage.getItem("Year1StoredValue") + '"]').selected = true;
    }

    if (localStorage.getItem("Year2StoredValue")) {
        document.querySelector('#year2 [value="' + localStorage.getItem("Year2StoredValue") + '"]').selected = true;
    }

    if (localStorage.getItem("districtYearCompareStoredValue") && localStorage.getItem("districtYearCompareStoredValue") !== "Empty") {
        document.querySelector('#districtYearCompare [value="' + localStorage.getItem("districtYearCompareStoredValue") + '"]').selected = true;
        document.querySelector('#districtYearCompare').dispatchEvent(new Event('change'));
        if (localStorage.getItem("neighbourhoodYearCompareStoredValue")) {
            if(document.querySelector('#neighbourhoodYearCompare [value="' + localStorage.getItem("neighbourhoodYearCompareStoredValue") + '"]')){
                document.querySelector('#neighbourhoodYearCompare [value="' + localStorage.getItem("neighbourhoodYearCompareStoredValue") + '"]').selected = true;
                document.querySelector('#neighbourhoodYearCompare').dispatchEvent(new Event('change'));
            }
        }
        
    }

    

    /***********************     LOCAL STORAGE END    ****************************/

})();