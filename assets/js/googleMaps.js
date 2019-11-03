let lat = 43.726060;
let long = -79.350070;


// New Map
   var map;
   function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: lat, lng: long },
     zoom: 11,
     mapTypeControl: false,
     streetViewControl: false
     });
   }

   initMap();
   
// Array of Markers
var markers = [
  {
    coords:{lat: 43.671080, lng: -79.460830 },
    iconImage:'././assets/images/division_11.png',
    content:"<h3>2054 Davenport Road, Toronto, ON</h3>",
    title:"2054 Davenport Road, Toronto, ON",
    division:"D11"
  },
  {
    coords:{lat: 43.694580, lng: -79.486880 },
    iconImage:'././assets/images/division_12.png',
    content:"<h3>200 Trethewey Dr, North York, ON</h3>",
    title:"200 Trethewey Dr, North York, ON",
    division:"D12"
  },
  {
    coords:{lat: 43.698330, lng: -79.436680 },
    iconImage:'././assets/images/division_13.png',
    content:"<h3>1435 Eglinton Ave West, Toronto, ON</h3>",
    title:"1435 Eglinton Ave West, Toronto, ON",
    division:"D13"
  },
  {
    coords:{lat: 43.651300, lng: -79.425980 },
    iconImage:'././assets/images/division_14.png',
    content:"<h3>350 Dovercourt Road, Toronto, ON</h3>",
    title:"350 Dovercourt Road, Toronto, ON",
    division:"D14"
  },
  {
    coords:{lat: 43.733900, lng: -79.628710 },
    iconImage:'././assets/images/division_22.png',
    content:"<h3>5230 Finch Ave W, Toronto, ON</h3>",
    title:"5230 Finch Ave W, Toronto, ON",
    division:"D22"
  },
  {
    coords:{lat: 43.643110, lng: -79.527473 },
    iconImage:'././assets/images/division_23.png',
    content:"<h3>3699 Bloor St W, Etobicoke, ON</h3>",
    title:"3699 Bloor St W, Etobicoke, ON",
    division:"D23"
  },
  {
    coords:{lat: 43.756748, lng: -79.527473 },
    iconImage:'././assets/images/division_31.png',
    content:"<h3>40 Norfinch Dr, North York, ON</h3>",
    title:"40 Norfinch Dr, North York, ON",
    division:"D31"
  },
  {
    coords:{lat: 43.771730, lng: -79.415090},
    iconImage:'././assets/images/division_32.png',
    content:"<h3>30 Ellerslie Av, Toronto, ON</h3>",
    title:"30 Ellerslie Av, Toronto, ON",
    division:"D32"
  },
  {
    coords:{lat: 43.751080, lng: -79.350070},
    iconImage:'././assets/images/division_33.png',
    content:"<h3>50 Upjohn Rd, North York, ON</h3>",
    title:"50 Upjohn Rd, North York, ON",
    division:"D33"
  },
  {
    coords:{lat: 43.730810, lng: -79.277110},
    iconImage:'././assets/images/division_41.png',
    content:"<h3>2222 Eglinton Ave East, Scarborough, ON</h3>",
    title:"2222 Eglinton Ave East, Scarborough, ON",
    division:"D41"
  },
  {
    coords:{lat: 43.789380, lng: -79.240010},
    iconImage:'././assets/images/division_42.png',
    content:"<h3>242 Milner Ave, Scarborough, ON</h3>",
    title:"242 Milner Ave, Scarborough, ON",
    division:"D42"
  },
  {
    coords:{lat: 43.770840, lng: -79.174060},
    iconImage:'././assets/images/division_43.png',
    content:"<h3>4331 Lawrence Ave E, Scarborough, ON</h3>",
    title:"4331 Lawrence Ave E, Scarborough, ON",
    division:"D43"
  },
  {
    coords:{lat: 43.651950, lng: -79.362140},
    iconImage:'././assets/images/division_51.png',
    content:"<h3>51 Parliament Street, Toronto, ON</h3>",
    title:"51 Parliament Street, Toronto, ON",
    division:"D51"
  },
  {
    coords:{lat: 43.654210, lng: -79.389720},
    iconImage:'././assets/images/division_52.png',
    content:"<h3>255 Dundas St West, Toronto, ON</h3>",
    title:"255 Dundas St West, Toronto, ON",
    division:"D52"
  },
  {
    coords:{lat: 43.706060, lng: -79.400660},
    iconImage:'././assets/images/division_53.png',
    content:"<h3>75 Eglinton Ave West, Toronto, ON</h3>",
    title:"75 Eglinton Ave West, Toronto, ON",
    division:"D53"
  },
  {
    coords:{lat: 43.669180, lng: -79.317300},
    iconImage:'././assets/images/division_55.png',
    content:"<h3>101 Coxwell Ave, Toronto, ON</h3>",
    title:"101 Coxwell Ave, Toronto, ON",
    division:"D55"
  }

  
]

// Loop through Markers

for(var i = 0; i < markers.length; i++){
  addMarker(markers[i]);
}


//Add Marker Function
function addMarker(props){
  var marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    title: props.title
  });
  // Check for custom Icon
  if(props.iconImage){
  //Set Icon Image
    marker.setIcon(props.iconImage);
  }
  if(props.content){
    //Set Icon Image
    var infoWindow = new google.maps.InfoWindow({
      content: props.content
    });
 
    marker.addListener('click', function(){
      //infoWindow.open(map,marker);
      //console.log(props.division);
      let division = String(props.division);
      callMCI(division);
    })
    }
}


