var m1 = POLYLINE([[0,0,0],[3,0,0]]);
var m2 = POLYLINE([[5,0,0],[8,0,0]]);
var m3 = POLYLINE([[0,0,0],[0,1,0]]);
var m4 = POLYLINE([[0,3,0],[0,7,0]]);
var m5 = POLYLINE([[0,9,0],[0,10,0]]);
var m6 = POLYLINE([[0,10,0],[0,14,0]]);
var m7 = POLYLINE([[0,16,0],[0,18,0]]);
var m8 = POLYLINE([[0,18,0],[3,18,0]]);
var m9 = POLYLINE([[5,18,0],[11,18,0]]);
var m10 = POLYLINE([[8,0,0],[8,-3,0]]);
var m11 = POLYLINE([[8,-3,0],[11,-3,0], [11,-13,0]]);

var m12 = POLYLINE([[8,0,0],[8,3,0], [11,3,0]]);
var m13 = POLYLINE([[8,3,0],[8,4,0]]);
var m14 = POLYLINE([[8,5,0],[8,10,0],[5,10,0]]);
var m15 = POLYLINE([[0,10,0],[3,10,0]]);
var m16 = POLYLINE([[8,10,0],[8,15,0]]);
var m17 = POLYLINE([[8,16,0],[8,18,0]]);

var m18 = POLYLINE([[17,13,0],[21,13,0],[21,10,0]]);
var m19 = POLYLINE([[21,11.5,0], [25,11.5,0]]);
var m20 = POLYLINE([[22,13,0],[25,13,0]]);

var muroEsternoSx = STRUCT([m1,m2,m3,m4, m5, m6, m7, m8, m9, m10, m11]);
var muroEsternoDx = STRUCT([T([0])([25]), R([0,2])(PI),  muroEsternoSx]);

var muroInternoSx = STRUCT([m12, m13, m14, m15, m16, m17]);
var muroInternoDx = STRUCT([T([0])([25]), R([0,2])(PI),  muroInternoSx ]);


var muroEsterno = STRUCT([ muroEsternoDx, muroEsternoSx]);
var muroInterno = STRUCT([muroInternoSx, muroInternoDx]);
var scaleInt = STRUCT([m18, m19, m20]);

var gradini = function(num){
  var i = 0 ;
  var j = 0 ;
  for(i=0; i<num; i++){
    DRAW(POLYLINE([[11,-6-j,0],[14,-6-j,0]]));
    j=j+0.5
  }
}

var puntini = function(num){
  var i = 0 ;
  var j = 0 ;
  for(i=0; i<num; i++){
    DRAW(POLYLINE([[11+j,18,0],[11+j+0.25,18,0]]));
    j=j+0.5
  }
}

gradini(15);

puntini(12);

DRAW(muroEsterno);
DRAW(muroInterno);
DRAW(scaleInt);