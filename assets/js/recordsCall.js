// var apiData;
var apiData = [];
var dataMax;
var dataCalled = 0;
var resultOffSet = 0;
var loadHide = function() {
    document.getElementById('loadingScreen').classList.add("hide")
};

// Creat scripts and add them to the body of the page
var scriptAdd = function (src) {
    var srcAdd = document.createElement("script");
    srcAdd.setAttribute("src", src);
    document.querySelector("body").appendChild(srcAdd);
}

// Fetch all APIDATA for the application
var dataFetch = function() {
    fetch("https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2018/FeatureServer/0/query?where=1%3D1&outFields=reportedyear,MCI,Division,Neighbourhood&outSR=4326&resultRecordCount=50000&resultType=standard&resultOffset=" + resultOffSet + "&f=json")
        .then(function(resp){ 
            return resp.json()
        }).then(function(data){
          // Loop through data then flatten it into one array for using for querying
            apiData.push(data.features);
            resultOffSet += 32000;
            dataCalled += 32000;
            if (dataCalled < dataMax) {
                dataFetch();
            } else {
                loadHide();
                //apiData = apiData.flat();
                var myNewArray = [].concat.apply([], apiData);
                apiData = myNewArray;
                //console.log(myNewArray);
                // Uncomment below to see all the API's data loaded into page
                //console.log(apiData);

                // Add Script tags containing IIFE's for each sections functions to avoid polluting the global scope
                scriptAdd('assets/js/googleMaps.js'); // Not an IIFE yet need to check with instructors
                scriptAdd('assets/js/districtCheck.js'); // Not an IIFE yet need to check with instructors
                scriptAdd('assets/js/navControls.js');
                scriptAdd('assets/js/neighbourHoodCompare.js');
                scriptAdd('assets/js/neighbourHoodYearCompare.js');
            }
        })
}

// Checks APIDATA length to know how many times to loop to call it all
fetch("https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2018/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json")
    .then(function(resp){
        return resp.json()
    }).then(function(data){
        dataMax = data.count;
    }).then(
        dataFetch
    );