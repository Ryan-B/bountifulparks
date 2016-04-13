app.directive('directionsMap', function(){
  return {
    restrict: 'A',
    //template: '<div></div>',
    link: function (scope, element, attrs) {

      //var mapEl = element.children()[0];
      var mapEl = element[0];

      console.log(mapEl);

      var myLatLng = {lat: 40.884587,  lng: -111.884628 };
      var bhs = {lat: 40.881538,  lng:  -111.871457};
      
      // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

      // var baseballIcon = "/static/img/baseball.jpg"

      var map = new google.maps.Map(mapEl, {
        zoom: 12,
        center: myLatLng
      });

      var bhs_marker = new google.maps.Marker({
        position: bhs,
        map: map,
        title: "Bountiful High School"
      });
    }
  };
});