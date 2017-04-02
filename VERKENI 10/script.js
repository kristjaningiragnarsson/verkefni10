function myMap() 
{
var mapProp= {
    center:new google.maps.LatLng(64.141291, -21.924152),
    zoom:15,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
 $(document).ready(function() {
      
            $("#driver").click(function(event){
               $.getJSON('data.json', function(jd) {
                  $('#stage').html('<p> Nafn: ' + jd.Nafn + '</p>');
                  $('#stage').append('<p>Verkefni : ' + jd.Verkefni+ '</p>');
                  $('#stage').append('<p>Lidur: ' + jd.Lidur+ '</p>');
               });
            });
        
         });
         $(function () {
    $( "#tabs" ).tabs();
  }
 );


