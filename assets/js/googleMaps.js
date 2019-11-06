let lat = 43.6710;
let long = -79.4605;


// New Map
   var map;
var a = 43.6710,
b = -79.4605,
diff = 0.0033;
diff1 = 0.0043;

var options ={
  center:{lat:a, lng: b},
  zoom:10,
}
//this is the coordinates of divison 11
var polygonCoordinates = [
//queen and dufferindont
{lat:43.6400, lng:-79.4300},
  //daveport and lanwdow dont
  {lat:43.6730, lng:-79.4500},
//dont touch
  {lat:43.6640, lng:-79.4990},
  //jane and bloor bottom left
  {lat:43.6380, lng:-79.4790},
  
];
//this the coordinate of divison 12
var div12Coord= [
  //keele st lawrence top right
    {lat:43.7304, lng:-79.4800},
    //st philipp rd weston rd top left
    {lat:43.7050, lng:-79.5320},
  //scratt rd st clair
    {lat:43.6640, lng:-79.4990},
    //old weston rd rogers rd
    {lat:43.6730, lng:-79.4500},
    
  ];

  //this the coordinate of divison 13
var div13Coord= [
  //bathurts st lawrenceright
    {lat:43.7184, lng:-79.4280},
    //st caledonia rd lawrance rd top left
    {lat:43.7100, lng:-79.4700},
  //casa loma rd/spidina and st clair bottom 
  {lat:43.6730, lng:-79.4500},
    //casa loma rd/spidina and st clair bottom right
    {lat:43.6800, lng:-79.4000},
    
  ];


  var div14Coord= [
    //bathurts st lawrence
      {lat:43.6790, lng:-79.4080},
      //s444t caledonia rd lawrance rd
      {lat:43.6730, lng:-79.4500},
    //casa loma rd/spidina and st clair
    {lat:43.6400, lng:-79.4300},
    //extra
    {lat:43.6390, lng:-79.4600},
    //extra
    {lat:43.6250, lng:-79.4200},
      //kensgton market rd/squeen dont touch
      {lat:43.6800, lng:-79.4000},
      
      
    ];

    var div52Coord= [
      //top right
        {lat:43.6890, lng:-79.3780},
        //top left
        {lat:43.6800, lng:-79.4000},
      //casa loma rd/spidina and st clair bottom left
      {lat:43.6250, lng:-79.4200},
        //kensgton market rd/squeen dont touch bottom right
        {lat:43.6400, lng:-79.3680},
        
      ];
      var div51Coord= [
        //top left 
        {lat:43.6890, lng:-79.3780},
        //bottom left
        {lat:43.6400, lng:-79.3680},
      //bottom right
      {lat:43.6300, lng:-79.3500},
        //top right
        {lat:43.6904, lng:-79.3500},
          
        ];


      var div53Coord= [
        //bathurts st lawrence left
        {lat:43.7184, lng:-79.4280},
        //bottom left
        {lat:43.6800, lng:-79.4000},
      //bottom right
      {lat:43.6890, lng:-79.3790},
      
      //extra1
      {lat:43.6904, lng:-79.3500},
      //extra1
      {lat:43.7120, lng:-79.3300},
        //casa loma rd/spidina and st clair
        {lat:43.74000, lng:-79.3820},
          
        ];
        



          var div55Coord= [
            //top left 
            {lat:43.6904, lng:-79.3500},
            //bottom left
            {lat:43.6300, lng:-79.3500},
          //bottom right
          {lat:43.6600, lng:-79.3020},
            //top right
             {lat:43.7120, lng:-79.3300},
              
            ];


            var div41Coord= [
              //top left 
              {lat:43.78000, lng:-79.3520},
              //extra
              {lat:43.7120, lng:-79.3300},
              //bottom left
              {lat:43.6600, lng:-79.3020},
            //bottom right
            {lat:43.71000, lng:-79.2380},
              //top right
              {lat:43.7904, lng:-79.2700},
                
              ];



              var div42Coord= [
                //top left 
                
                {lat:43.8380, lng:-79.3600},
                
                //bottom left
                
                {lat:43.78000, lng:-79.3520},
              //bottom right
              {lat:43.7904, lng:-79.2700},
              //etxra
              {lat:43.7980, lng:-79.1500},
              
                //top right
                {lat:43.8380, lng:-79.1900},
                
                  
                ];



                var div43Coord= [
                  //top left dt
                  {lat:43.7904, lng:-79.2700},
                  //bottom left dt
                  {lat:43.71000, lng:-79.2380},
                //bottom right
                {lat:43.7820, lng:-79.1200},
                  //top right
                  {lat:43.7980, lng:-79.1500},
                    
                  ];



                  var div33Coord= [
                    //top left 
                    
                    {lat:43.7904, lng:-79.3950},
                    //bottom left
                    
                    {lat:43.74000, lng:-79.3820},
                   
                  //bottom right
                  {lat:43.7120, lng:-79.3300},

                  //etxa
                  {lat:43.78000, lng:-79.3520},
                    //top right
                    {lat:43.8380, lng:-79.3600},
                      
                    ];


                    var div32Coord= [
                      //top left 
                      
                      {lat:43.7880, lng:-79.5000},
                      {lat:43.7304, lng:-79.4800},
                      
                      //bottom left
                      {lat:43.7100, lng:-79.4700},

                      {lat:43.7184, lng:-79.4280},
                      
                    //bottom right
                    {lat:43.74000, lng:-79.3820},
                    
                      //top right
                      {lat:43.7904, lng:-79.3950},
                      
                        
                      ];


                      var div31Coord= [
                        //top left 
                        {lat:43.7680, lng:-79.5800},
                        //bottom left
                        {lat:43.7050, lng:-79.5320},
                      //bottom right
                      {lat:43.7304, lng:-79.4800},
                        //top right
                        {lat:43.7880, lng:-79.5000},
                          
                        ];

                        var div23Coord= [
                          //top left 
                          {lat:43.7680, lng:-79.6400},
                          //bottom left
                          {lat:43.6800, lng:-79.6320},
                          
                        //bottom right
                        {lat:43.6880, lng:-79.5180},
                        //extera
                        {lat:43.7050, lng:-79.5320},
                          //top right
                          {lat:43.7680, lng:-79.5800},
                            
                          ];




                          var div22Coord= [
                            //top left 
                            {lat:43.6800, lng:-79.6320},
                            //bottom left
                            {lat:43.5700, lng:-79.6020},
                          //bottom right
                          {lat:43.6400, lng:-79.4800},
                            //top right
                            {lat:43.6880, lng:-79.5180},
                              
                            ];
   function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: lat, lng: long },
     //zoom: 11,
     mapTypeControl: false,
     streetViewControl: false,
     //mapTypeId:'satellite'
     });
   



map = new google.maps.Map(document.getElementById('map'),options);


var polygon = new google.maps.Polygon({
  map:map,
  paths:polygonCoordinates,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})
var Div12 = new google.maps.Polygon({
  map:map,
  paths:div12Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div13 = new google.maps.Polygon({
  map:map,
  paths:div13Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div14 = new google.maps.Polygon({
  map:map,
  paths:div14Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div52 = new google.maps.Polygon({
  map:map,
  paths:div52Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})

var Div53 = new google.maps.Polygon({
  map:map,
  paths:div53Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})
var Div51 = new google.maps.Polygon({
  map:map,
  paths:div51Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div55 = new google.maps.Polygon({
  map:map,
  paths:div55Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div41 = new google.maps.Polygon({
  map:map,
  paths:div41Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div42 = new google.maps.Polygon({
  map:map,
  paths:div42Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div43 = new google.maps.Polygon({
  map:map,
  paths:div43Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})



var Div33 = new google.maps.Polygon({
  map:map,
  paths:div33Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})



var Div32 = new google.maps.Polygon({
  map:map,
  paths:div32Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})



var Div31 = new google.maps.Polygon({
  map:map,
  paths:div31Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})


var Div23 = new google.maps.Polygon({
  map:map,
  paths:div22Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})




var Div22 = new google.maps.Polygon({
  map:map,
  paths:div23Coord,
  strokesColor:'blue',
  fillColor:'blue',
  fillOpacity:0.4,
  draggable:false,
  editable:false,
  
})

;}
   initMap();
  // console.log(polygonCoordinates);


// Array of Markers
var markers = [
  {
    coords:{lat: 43.640080, lng: -79.460830 },
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
    coords:{lat: 43.623110, lng: -79.567473 },
    iconImage:'././assets/images/division_22.png',
    content:"<h3>5230 Finch Ave W, Toronto, ON</h3>",
    title:"5230 Finch Ave W, Toronto, ON",
    division:"D22"
  },
  {
    coords:{lat: 43.703900, lng: -79.608710 },
    iconImage:'././assets/images/division_23.png',
    content:"<h3>3699 Bloor St W, Etobicoke, ON</h3>",
    title:"3699 Bloor St W, Etobicoke, ON",
    division:"D23"
  },
  {
    coords:{lat: 43.736748, lng: -79.517473 },
    iconImage:'././assets/images/division_31.png',
    content:"<h3>40 Norfinch Dr, North York, ON</h3>",
    title:"40 Norfinch Dr, North York, ON",
    division:"D31"
  },
  {
    coords:{lat: 43.740730, lng: -79.425090},
    iconImage:'././assets/images/division_32.png',
    content:"<h3>30 Ellerslie Av, Toronto, ON</h3>",
    title:"30 Ellerslie Av, Toronto, ON",
    division:"D32"
  },
  {
    coords:{lat: 43.750080, lng: -79.360070},
    iconImage:'././assets/images/division_33.png',
    content:"<h3>50 Upjohn Rd, North York, ON</h3>",
    title:"50 Upjohn Rd, North York, ON",
    division:"D33"
  },
  {
    coords:{lat: 43.730810, lng: -79.287110},
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
    coords:{lat: 43.750840, lng: -79.186060},
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
    coords:{lat: 43.698060, lng: -79.380660},
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

/*var myLatLng = new google.mapsLatLng(51.944264879028765, -105);
var myOptions = {
  zoom: 3,
  center:myLatLng,
  mapTypeId:google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map"),myOptions);
var Alaska= [new google.map.LatLng(70,-132), new google.map.LatLng(71,-131),new google.map.LatLng(73,-134), new google.map.LatLng(69,-129)]
var alaska_poly = new google.maps.Polygon({
  paths:Alaska,
strokeColor:'#FF0000',
strokeOpacity:0.8,
43.strokeWeight:3,
fillColor:'#ff0000',
fillOpacity:'.35'
});
alaska_poly.setMap(map);
*/

function testCoord(){
  console.log(polygonCoordinates);
  }
  map.data.loadGeoJson('neighbourhoods_toronto.geojson');
  