Parse.initialize("S8glxzOcLDwTgXQyfUZyg4Rm4znbNmBxzSbfHgpI", "LPS4XPWUjfIcNRgpfxoqbkWqybyW9Odfs205mwbn");

var col = {};
// MODEL MapLocation
var MapLocation = Parse.Object.extend("MapLocation");
var mapLocation = new MapLocation();
// Collection var
var mapLocation_collection = Parse.Collection.extend({ model: MapLocation });
col.MapLocation = new mapLocation_collection();
