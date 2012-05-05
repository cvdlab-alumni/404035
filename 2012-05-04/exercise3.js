

var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);

/*
 * Creazione del winglet dell'ala, cioè della parte finale che chiude l'ala nella sua parte più esterna
 */
var verticalStabilizers = function (){

  var controlPoint1 = [[0,0,0],[0,1.7,4.5],[0,3,0.5]];
  var c1 = BEZIER(S0)(controlPoint1);
  var dis1 = MAP(c1)(domain);

  var controlPoint2 = [[0,3,0.5],[0,1,-0.3],[0,0,0]];
  var c2 = BEZIER(S0)(controlPoint2);
  var dis2 = MAP(c2)(domain);

  var controlPoint3 = [[0.2,0,0],[0.2,1.7,4.5],[0.2,3,0.5]];
  var c3 = BEZIER(S0)(controlPoint3);
  var dis3 = MAP(c3)(domain);

  var controlPoint4 = [[0.2,3,0.5],[0.2,1,-0.3],[0.2,0,0]];
  var c4 = BEZIER(S0)(controlPoint4);
  var dis4 = MAP(c4)(domain);

  var chiusuraInf = BEZIER(S1)([c2, c4]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);
  disChiusuraInf = COLOR([1,0.7254,0.0588,1])(disChiusuraInf);

  var chiusuraSup = CUBIC_HERMITE(S1)([c1, c3, [0,0,0.5],[0,0,-0.5]]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);
  disChiusuraSup = COLOR([0.2901,0.439,0.545,1])(disChiusuraSup);

  var chiusuraLat1 = BEZIER(S1)([c1, c2]);
  var disChiusuraLat1 = MAP(chiusuraLat1)(domain2);
  disChiusuraLat1 = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat1);

  var chiusuraLat2 = BEZIER(S1)([c3, c4]);
  var disChiusuraLat2 = MAP(chiusuraLat2)(domain2);
  disChiusuraLat2 = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat2);
 
  var vertical = STRUCT([disChiusuraInf, disChiusuraLat2, disChiusuraLat1, disChiusuraSup]);
  return vertical;
}

/*
 * funzione che crea uno stabilizzatore orizzontale
 */
var orizzontalStabilizers1 = function (){

  var controlPoint1 = [[-0.5,0,0],[-4,-1.5,0],[0.35,-2,0]];
  var c1 = BEZIER(S0)(controlPoint1);
  var dis1 = MAP(c1)(domain);

  var controlPoint2 = [[-0.5,0,0],[1,-0.7,0],[0.35,-2,0]];
  var c2 = BEZIER(S0)(controlPoint2);
  var dis2 = MAP(c2)(domain);

  var controlPoint3 = [[-0.5,0,0.2],[-4,-1.5,0.2],[0.35,-2,0.2]];
  var c3 = BEZIER(S0)(controlPoint3);
  var dis3 = MAP(c3)(domain);

  var controlPoint4 = [[-0.5,0,0.2],[1,-0.7,0.2],[0.35,-2,0.2]];
  var c4 = BEZIER(S0)(controlPoint4);
  var dis4 = MAP(c4)(domain);

  var chiusuraInf = BEZIER(S1)([c1, c2]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);
  disChiusuraInf = COLOR([1,0.7254,0.0588,1])(disChiusuraInf);

  var chiusuraSup = BEZIER(S1)([c3, c4]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);
  disChiusuraSup = COLOR([0.2901,0.439,0.545,1])(disChiusuraSup);

  var chiusuraLat1 = BEZIER(S1)([c2, c4]);
  var disChiusuraLat1 = MAP(chiusuraLat1)(domain2);
  disChiusuraLat1 = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat1);

  var chiusuraLat2 = BEZIER(S1)([c1, c3]);
  var disChiusuraLat2 = MAP(chiusuraLat2)(domain2);
  disChiusuraLat2 = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat2);
 
  var orizzontal = STRUCT([T([0,1])([-0.3,2]), disChiusuraLat2, disChiusuraLat1, disChiusuraSup, disChiusuraInf]);
  return orizzontal;
}


/*
 * funzione che crea il secondo stabilizzatore orizzontale
 */
var orizzontalStabilizers2 = function (){

  var controlPoint1 = [[-0.5,0,0],[-4,-1.5,0],[0.35,-2,0]];
  var c1 = BEZIER(S0)(controlPoint1);
  var dis1 = MAP(c1)(domain);

  var controlPoint2 = [[-0.5,0,0],[1,-0.7,0],[0.35,-2,0]];
  var c2 = BEZIER(S0)(controlPoint2);
  var dis2 = MAP(c2)(domain);

  var controlPoint3 = [[-0.5,0,0.2],[-4,-1.5,0.2],[0.35,-2,0.2]];
  var c3 = BEZIER(S0)(controlPoint3);
  var dis3 = MAP(c3)(domain);

  var controlPoint4 = [[-0.5,0,0.2],[1,-0.7,0.2],[0.35,-2,0.2]];
  var c4 = BEZIER(S0)(controlPoint4);
  var dis4 = MAP(c4)(domain);

  var chiusuraInf = BEZIER(S1)([c1, c2]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);
  disChiusuraInf = COLOR([0.2901,0.439,0.545,1])(disChiusuraInf);

  var chiusuraSup = BEZIER(S1)([c3, c4]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);
  disChiusuraSup = COLOR([1,0.7254,0.0588,1])(disChiusuraSup);

  var chiusuraLat1 = BEZIER(S1)([c2, c4]);
  var disChiusuraLat1 = MAP(chiusuraLat1)(domain2);
  disChiusuraLat1 = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat1);

  var chiusuraLat2 = BEZIER(S1)([c1, c3]);
  var disChiusuraLat2 = MAP(chiusuraLat2)(domain2);
  disChiusuraLat2 = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat2);
 
  var orizzontal = STRUCT([T([0,1])([-0.3,2]), disChiusuraLat2, disChiusuraLat1, disChiusuraSup, disChiusuraInf]);
  var oriz = R([0,2])([PI])(orizzontal);
  return oriz;
}

var verticalStabiliz = verticalStabilizers();
var orizzontalStabiliz1 = orizzontalStabilizers1();
var orizzontalStabiliz2 = orizzontalStabilizers2();

var stabilizzatori = STRUCT([ verticalStabiliz, orizzontalStabiliz1, T([0,2])([0.2,0.2]), orizzontalStabiliz2]);

DRAW(stabilizzatori);