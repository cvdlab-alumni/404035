

var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);

/*
 * Creazione del winglet dell'ala, cioè della parte finale che chiude l'ala nella sua parte più esterna
 */
var winglet = function (){

  var controlPoint1 = [[0,0,0],[0.6,-0.75,0],[0,-2,0],[0.5,-0.2,0]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1); 
  var curva1 = MAP(c1)(domain); 


  var controlPoint2 = [[0,0,0],[0.6,0.75,0],[0,2,0],[0.5,0.2,0]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var curva2 = MAP(c2)(domain);

  var curve = STRUCT([curva1, curva2]);

  var superficieInferiore = CUBIC_HERMITE(S1)([c1,c2, [0,0,0.2],[0,0,-1.3]]);
  var disSuperfInf = MAP(superficieInferiore)(domain2);
  
  var superficieSuperiore = CUBIC_HERMITE(S1)([c1,c2, [0,0,-0.15],[0,0,0.5]]);
  var disSuperfSup = MAP(superficieSuperiore)(domain2);

  disSuperfSup = COLOR([0.2901,0.439,0.545,1])(disSuperfSup);
  disSuperfInf = COLOR([1,0.7254,0.0588,1])(disSuperfInf);
  var tappo = STRUCT([disSuperfSup, disSuperfInf]);

  return tappo;
}

/*
 * Creazione della parte centrale dell'ala
 */
var centralWing = function(){
  var controlPoint1 = [[0.6,0.75,0],[0.6,-0.75,0],[ 0,0,1.3],[0,0,-0.2]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[0.6,0.75,0],[0.6,-0.75,0],[ 0,0,-0.5],[0,0,0.15]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelSup1 = MAP(c2)(domain);

 // DRAW(  STRUCT([R([1,2])([PI]) , COLOR([0,0,0,1])(schelSup1)]));

  var schel1 = STRUCT([schelSup1, schelInf1]);

  var controlPoint3 = [[5.5,1.30,0],[5.5,-1.50,0],[ 0,0,2.028],[0,0,-0.312]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelInf2 = MAP(c3)(domain);

  var controlPoint4 = [[5.5,1.30,0],[5.5,-1.50,0],[ 0,0,-0.6],[0,0,0.225]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var schel2 = STRUCT([schelSup2, schelInf2]);

  var alaCentInf = CUBIC_HERMITE(S1)([c1,c3, [0,0,0],[0,0,0]]);
  var disAlaCentInf = MAP(alaCentInf)(domain2);
  
  var alaCentSup = CUBIC_HERMITE(S1)([c2,c4, [0,0,0],[0,0,0]]);
  var disAlaCentSup = MAP(alaCentSup)(domain2);
  
  disAlaCentSup = COLOR([0.2901,0.439,0.545,1])(disAlaCentSup);
  disAlaCentInf = COLOR([1,0.7254,0.0588,1])(disAlaCentInf);
  schelSup1 = COLOR([0,0,0,1])(schelSup1);
  var alaCent = STRUCT([disAlaCentInf, disAlaCentSup, schelSup1]);

  return alaCent;
}

/*
 * Creazione della parte piu interna dell'ala
 */
var rightCentrallWing = function(){
  var controlPoint1 = [[5.5,1.30,0],[5.5,-1.5,0],[ 0,0,2.028],[0,0,-0.312]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[5.5,1.30,0],[5.5,-1.5,0],[ 0,0,-0.6],[0,0,0.225]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelSup1 = MAP(c2)(domain);

  //DRAW( STRUCT([R([1,2])([PI]), COLOR([0,0,0,1])(schelSup1)]));

  var schel1 = STRUCT([schelInf1, schelSup1]);

  var controlPoint3 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,2.028],[0,0,-0.312]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelInf2 = MAP(c3)(domain);

  var controlPoint4 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,-0.6],[0,0,0.225]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var schel2 = STRUCT([schelInf2, schelSup2]);

  var alaRightInf = CUBIC_HERMITE(S1)([c1,c3, [0,0,0],[0,0,0]]);
  var disAlaRightInf = MAP(alaRightInf)(domain2);
  
  var alaRightSup = CUBIC_HERMITE(S1)([c2,c4, [0,0,0],[0,0,0]]);
  var disAlaRightSup = MAP(alaRightSup)(domain2);
  
  disAlaRightSup = COLOR([0.2901,0.439,0.545,1])(disAlaRightSup);
  disAlaRightInf = COLOR([1,0.7254,0.0588,1])(disAlaRightInf);
  schelSup1 = COLOR([0,0,0,1])(schelSup1);
  var alaRight = STRUCT([disAlaRightSup, disAlaRightInf, schelSup1]);

  return alaRight;
}

/*
 * Creazione della parte dell'ala che si attacca alla fusoliera
 */
var attackWing = function(){
  var controlPoint1 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,2.028],[0,0,-0.312]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,-0.6],[0,0,0.225]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelSup1 = MAP(c2)(domain);

  //DRAW(  STRUCT([R([1,2])([PI]), COLOR([0,0,0,1])(schelSup1)]));

  var schel1 = STRUCT([schelInf1, schelSup1]);

  var controlPoint3 = [[6.8,1.32,0],[6.8,-2.5,0],[ 0,0,2.028],[0,0,-0.312]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelInf2 = MAP(c3)(domain);

  var controlPoint4 = [[6.8,1.32,0],[6.8,-2.5,0],[ 0,0,-0.6],[0,0,0.225]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var schel2 = STRUCT([schelInf2, schelSup2]);

  var alaAttInf = CUBIC_HERMITE(S1)([c1,c3, [0,0,0],[0,0,0]]);
  var disAlaAttInf = MAP(alaAttInf)(domain2);
  
  var alaAttSup = CUBIC_HERMITE(S1)([c2,c4, [0,0,0],[0,0,0]]);
  var disAlaAttSup = MAP(alaAttSup)(domain2);
  
  disAlaAttSup = COLOR([0.2901,0.439,0.545,1])(disAlaAttSup);
  disAlaAttInf = COLOR([1,0.7254,0.0588,1])(disAlaAttInf);
  schelSup1 = COLOR([0,0,0,1])(schelSup1);
  var alaAtt = STRUCT([disAlaAttInf, disAlaAttSup, schelSup1]);

  return alaAtt;

}

var generaCarrelloAnteriore = function(){

  var gancio = CUBOID([0.1,0.1,1.5]);
  var braccetto = CUBOID([0.1,0.1,0.8]);

  var controlPoint1 = [[0,0,0],[0,0.6,0],[0,0,1],[ 0,0,-1]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var curva1 = MAP(c1)(domain);
  //mezzo cerchio sinistro
  var controlPoint2 = [[0,0,0],[0,0.6,0],[0,0,-1],[ 0,0,1]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var curva2 = MAP(c2)(domain);

  var controlPoint3 = [[0.3,0,0],[0.3,0.6,0],[0,0,1],[ 0,0,-1]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var curva3 = MAP(c3)(domain);
  //mezzo cerchio sinistro
  var controlPoint4 = [[0.3,0,0],[0.3,0.6,0],[0,0,-1],[ 0,0,1]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var curva4= MAP(c4)(domain);

  var latoDx = CUBIC_HERMITE(S1)([c1,c2, [0,0,0],[0,0,0]]);
  var disLatoDx = MAP(latoDx)(domain2);

  var latoSx = CUBIC_HERMITE(S1)([c3,c4, [0,0,0],[0,0,0]]);
  var disLatoSx = MAP(latoSx)(domain2);

  var gommaSup = BEZIER(S2)([latoSx, latoDx]);
  var disGommaSup = MAP(gommaSup)(domain3);
  
  

  var ruota = STRUCT([disLatoDx, disLatoSx, disGommaSup]);

  ruota = COLOR([0,0,0,1])(ruota);

  var carrello = STRUCT([ruota,T([0,1])([-0.1,0.25]), gancio,T([2])([1]) ,R([0,2])([PI/4]), braccetto]);
  return carrello;
}


var carrello = generaCarrelloAnteriore();
 var carrPosiz = T([0,1,2])([5,0,-1.5])(carrello);


var tappo = winglet();
var alaCent = centralWing();
var alaDes = rightCentrallWing();
var attAla = attackWing();

var alaDestra = STRUCT([carrPosiz, R([1,2])([PI]), tappo, alaCent, alaDes, attAla]);

var winglet2 = function (){

  var controlPoint1 = [[0,0,0],[0.6,-0.75,0],[0,-2,0],[0.5,-0.2,0]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1); 
  var curva1 = MAP(c1)(domain); 


  var controlPoint2 = [[0,0,0],[0.6,0.75,0],[0,2,0],[0.5,0.2,0]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var curva2 = MAP(c2)(domain);

  var curve = STRUCT([curva1, curva2]);

  var superficieInferiore = CUBIC_HERMITE(S1)([c1,c2, [0,0,0.2],[0,0,-1.3]]);
  var disSuperfInf = MAP(superficieInferiore)(domain2);
  
  var superficieSuperiore = CUBIC_HERMITE(S1)([c1,c2, [0,0,-0.15],[0,0,0.5]]);
  var disSuperfSup = MAP(superficieSuperiore)(domain2);

  disSuperfSup = COLOR([1,0.7254,0.0588,1])(disSuperfSup);
  disSuperfInf = COLOR([0.2901,0.439,0.545,1])(disSuperfInf);
  var tappo = STRUCT([disSuperfSup, disSuperfInf]);

  return tappo;
}

/*
 * Creazione della parte centrale dell'ala
 */
var centralWing2 = function(){
  var controlPoint1 = [[0.6,0.75,0],[0.6,-0.75,0],[ 0,0,1.3],[0,0,-0.2]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[0.6,0.75,0],[0.6,-0.75,0],[ 0,0,-0.5],[0,0,0.15]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelSup1 = MAP(c2)(domain);

 // DRAW(  STRUCT([R([1,2])([PI]) , COLOR([0,0,0,1])(schelSup1)]));

  var schel1 = STRUCT([schelSup1, schelInf1]);

  var controlPoint3 = [[5.5,1.30,0],[5.5,-1.50,0],[ 0,0,2.028],[0,0,-0.312]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelInf2 = MAP(c3)(domain);

  var controlPoint4 = [[5.5,1.30,0],[5.5,-1.50,0],[ 0,0,-0.6],[0,0,0.225]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var schel2 = STRUCT([schelSup2, schelInf2]);

  var alaCentInf = CUBIC_HERMITE(S1)([c1,c3, [0,0,0],[0,0,0]]);
  var disAlaCentInf = MAP(alaCentInf)(domain2);
  
  var alaCentSup = CUBIC_HERMITE(S1)([c2,c4, [0,0,0],[0,0,0]]);
  var disAlaCentSup = MAP(alaCentSup)(domain2);
  
  disAlaCentSup = COLOR([1,0.7254,0.0588,1])(disAlaCentSup);
  disAlaCentInf = COLOR([0.2901,0.439,0.545,1])(disAlaCentInf);
  schelSup1 = COLOR([0,0,0,1])(schelInf1);
  var alaCent = STRUCT([disAlaCentInf, disAlaCentSup, schelSup1]);

  return alaCent;
}

/*
 * Creazione della parte piu interna dell'ala
 */
var rightCentrallWing2 = function(){
  var controlPoint1 = [[5.5,1.30,0],[5.5,-1.5,0],[ 0,0,2.028],[0,0,-0.312]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[5.5,1.30,0],[5.5,-1.5,0],[ 0,0,-0.6],[0,0,0.225]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelSup1 = MAP(c2)(domain);

  //DRAW( STRUCT([R([1,2])([PI]), COLOR([0,0,0,1])(schelSup1)]));

  var schel1 = STRUCT([schelInf1, schelSup1]);

  var controlPoint3 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,2.028],[0,0,-0.312]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelInf2 = MAP(c3)(domain);

  var controlPoint4 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,-0.6],[0,0,0.225]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var schel2 = STRUCT([schelInf2, schelSup2]);

  var alaRightInf = CUBIC_HERMITE(S1)([c1,c3, [0,0,0],[0,0,0]]);
  var disAlaRightInf = MAP(alaRightInf)(domain2);
  
  var alaRightSup = CUBIC_HERMITE(S1)([c2,c4, [0,0,0],[0,0,0]]);
  var disAlaRightSup = MAP(alaRightSup)(domain2);
  
  disAlaRightSup = COLOR([1,0.7254,0.0588,1])(disAlaRightSup);
  disAlaRightInf = COLOR([0.2901,0.439,0.545,1])(disAlaRightInf);
  schelSup1 = COLOR([0,0,0,1])(schelInf1);
  var alaRight = STRUCT([disAlaRightSup, disAlaRightInf, schelSup1]);

  return alaRight;
}

/*
 * Creazione della parte dell'ala che si attacca alla fusoliera
 */
var attackWing2 = function(){
  var controlPoint1 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,2.028],[0,0,-0.312]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[6.3,1.30,0],[6.3,-2,0],[ 0,0,-0.6],[0,0,0.225]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelSup1 = MAP(c2)(domain);

  //DRAW(  STRUCT([R([1,2])([PI]), COLOR([0,0,0,1])(schelSup1)]));

  var schel1 = STRUCT([schelInf1, schelSup1]);

  var controlPoint3 = [[6.8,1.32,0],[6.8,-2.5,0],[ 0,0,2.028],[0,0,-0.312]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelInf2 = MAP(c3)(domain);

  var controlPoint4 = [[6.8,1.32,0],[6.8,-2.5,0],[ 0,0,-0.6],[0,0,0.225]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var schel2 = STRUCT([schelInf2, schelSup2]);

  var alaAttInf = CUBIC_HERMITE(S1)([c1,c3, [0,0,0],[0,0,0]]);
  var disAlaAttInf = MAP(alaAttInf)(domain2);
  
  var alaAttSup = CUBIC_HERMITE(S1)([c2,c4, [0,0,0],[0,0,0]]);
  var disAlaAttSup = MAP(alaAttSup)(domain2);
  
  disAlaAttSup = COLOR([1,0.7254,0.0588,1])(disAlaAttSup);
  disAlaAttInf = COLOR([0.2901,0.439,0.545,1])(disAlaAttInf);
  schelSup1 = COLOR([0,0,0,1])(schelInf1);
  var alaAtt = STRUCT([disAlaAttInf, disAlaAttSup, schelSup1]);

  return alaAtt;
}


var tappo2 = winglet2();
var alaCent2 = centralWing2();
var alaDes2 = rightCentrallWing2();
var attAla2 = attackWing2();

var carrello2 = generaCarrelloAnteriore();
var carrPosiz2 = T([0,1,2])([5,0,-1.5])(carrello2);
carrPosiz2 = R([0,1])([PI])(carrPosiz2);
carrPosiz2 = T([0,1])([15,0.6])(carrPosiz2);

var alaSinistra = STRUCT([carrPosiz2, R([0,2])([PI]),T([0])([6.8]), R([1,2])([PI]), T([0])([-21.4]), T([2])([-0.2]) , tappo2, alaCent2, alaDes2, attAla2]);


var ali = STRUCT([T([0,1,2])([-6.6,-1, 0.3]), alaDestra, alaSinistra]);

DRAW(ali);



/*
 * Creazione del winglet dell'ala, cioè della parte finale che chiude l'ala nella sua parte più esterna
 */

var verticalStabilizers = function (){

  var controlPoint1 = [[0,0,0],[0,1.7,3.5],[0,2.5,0.5]];
  var c1 = BEZIER(S0)(controlPoint1);
  var dis1 = MAP(c1)(domain);

  var controlPoint2 = [[0,2.5,0.5],[0,1,-0.3],[0,0,0]];
  var c2 = BEZIER(S0)(controlPoint2);
  var dis2 = MAP(c2)(domain);

  var controlPoint3 = [[0.2,0,0],[0.2,1.7,3.5],[0.2,2.5,0.5]];
  var c3 = BEZIER(S0)(controlPoint3);
  var dis3 = MAP(c3)(domain);

  var controlPoint4 = [[0.2,2.5,0.5],[0.2,1,-0.3],[0.2,0,0]];
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


var orizzontalStabilizers1 = function (){

  var controlPoint1 = [[-0.5,0,0],[-3,-1,0],[0.35,-1.5,0]];
  var c1 = BEZIER(S0)(controlPoint1);
  var dis1 = MAP(c1)(domain);

  var controlPoint2 = [[-0.5,0,0],[1,-0.7,0],[0.35,-1.5,0]];
  var c2 = BEZIER(S0)(controlPoint2);
  var dis2 = MAP(c2)(domain);

  var controlPoint3 = [[-0.5,0,0.2],[-3,-1,0.2],[0.35,-1.5,0.2]];
  var c3 = BEZIER(S0)(controlPoint3);
  var dis3 = MAP(c3)(domain);

  var controlPoint4 = [[-0.5,0,0.2],[1,-0.7,0.2],[0.35,-1.5,0.2]];
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

var orizzontalStabilizers2 = function (){

  var controlPoint1 = [[-0.5,0,0],[-3,-1,0],[0.35,-1.5,0]];
  var c1 = BEZIER(S0)(controlPoint1);
  var dis1 = MAP(c1)(domain);

  var controlPoint2 = [[-0.5,0,0],[1,-0.7,0],[0.35,-1.5,0]];
  var c2 = BEZIER(S0)(controlPoint2);
  var dis2 = MAP(c2)(domain);

  var controlPoint3 = [[-0.5,0,0.2],[-3,-1,0.2],[0.35,-1.5,0.2]];
  var c3 = BEZIER(S0)(controlPoint3);
  var dis3 = MAP(c3)(domain);

  var controlPoint4 = [[-0.5,0,0.2],[1,-0.7,0.2],[0.35,-1.5,0.2]];
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

var stabilizzatori = STRUCT([ verticalStabiliz, T([2])([0.5]), orizzontalStabiliz1, T([0,2])([0.2,0.2]), orizzontalStabiliz2]);

var stab = STRUCT([ T([0,1,2])([0.6, 3.5, 0.4]) ,stabilizzatori]);
DRAW(stab);



var generaTubo = function() {
  var controlPoint1 = [[0,0,0],[0.1,0,0],[0,0.3,0],[0,-0.3,0]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var semiCerchio1front = MAP(c1)(domain);

  var controlPoint2 = [[0,0,0],[0.1,0,0],[0,-0.3,0],[0,0.3,0]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var semiCerchio2front = MAP(c2)(domain);

  var controlPoint3 = [[0,0,1],[0.01,0,1],[0,0.1,0],[0,-0.1,0]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var semiCerchio3front = MAP(c3)(domain);

  var controlPoint4 = [[0,0,1],[0.01,0,1],[0,-0.1,0],[0,0.1,0]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var semiCerchio4front = MAP(c4)(domain);

  var chiusuraInf = BEZIER(S1)([c1,c2]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);

  var chiusuraSup = BEZIER(S1)([c3,c4]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);

  var chiusuraLat = BEZIER(S2)([chiusuraInf, chiusuraSup]);
  var disChiusuraLat = MAP(chiusuraLat)(domain3);

  disChiusuraInf = COLOR([0.2901,0.439,0.545,1])(disChiusuraInf);
  disChiusuraSup = COLOR([0.2901,0.439,0.545,1])(disChiusuraSup);
  disChiusuraLat = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat);
  
  return disChiusuraLat;

}



var generaCarrello = function(){

  var gancio = CUBOID([0.15,0.1,0.5]);

  var controlPoint1 = [[0,0,0],[0,0.3,0],[0,0,0.5],[ 0,0,-0.5]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var curva1 = MAP(c1)(domain);
  //mezzo cerchio sinistro
  var controlPoint2 = [[0,0,0],[0,0.3,0],[0,0,-0.5],[ 0,0,0.5]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var curva2 = MAP(c2)(domain);

  var controlPoint3 = [[0.15,0,0],[0.15,0.3,0],[0,0,0.5],[ 0,0,-0.5]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var curva3 = MAP(c3)(domain);
  //mezzo cerchio sinistro
  var controlPoint4 = [[0.15,0,0],[0.15,0.3,0],[0,0,-0.5],[ 0,0,0.5]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var curva4= MAP(c4)(domain);

  var latoDx = CUBIC_HERMITE(S1)([c1,c2, [0,0,0],[0,0,0]]);
  var disLatoDx = MAP(latoDx)(domain2);

  var latoSx = CUBIC_HERMITE(S1)([c3,c4, [0,0,0],[0,0,0]]);
  var disLatoSx = MAP(latoSx)(domain2);

  var gommaSup = CUBIC_HERMITE(S1)([c1,c3, [0,0,0.2],[0,0,-0.2]]);
  var disGommaSup = MAP(gommaSup)(domain2);
  
  var gommaInf = CUBIC_HERMITE(S1)([c2,c4, [0,0,-0.2],[0,0,0.2]]);
  var disGommaInf = MAP(gommaInf)(domain2);
  

  var ruota1 = STRUCT([disLatoDx, disLatoSx, disGommaInf, disGommaSup]);
  var ruota2 = R([1,2])([PI/2])(ruota1);
  ruota2 = T([1,2])([0.15,-0.15])(ruota2);

  var ruota = STRUCT([ruota1, ruota2]);
  ruota = COLOR([0,0,0,1])(ruota);

  var carrello = STRUCT([ruota,T([1])([0.1]), gancio]);
  return carrello;
}

/*
 * Creazione della parte posteriore della fusoliera
 */
var codaFusoliera = function() {

  var controlPoint1 = [[0,0,0],[0.5,5,0.35],[ 0,0,0],[0,0,0]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[1.4,0,0],[0.9,5,0.35],[ 0,0,0],[0,0,0]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelInf2 = MAP(c2)(domain);

  var controlPoint3 = [[0.7,0,2],[0.7,5,1.1],[0,0,-1],[0,0,-0.2]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelSup1 = MAP(c3)(domain);

  var fondo = CUBIC_HERMITE(S1)([c1,c2, [0,0,0],[0,0,0]]);
  var disFondo = MAP(fondo)(domain2);

  var latoSx = CUBIC_HERMITE(S1)([c1,c3, [0,0,1],[1,0,0.2]]);
  var disLatoSx = MAP(latoSx)(domain2);

  var latoDx = CUBIC_HERMITE(S1)([c2,c3, [0,0,1],[-1,0,0.2]]);
  var disLatoDx = MAP(latoDx)(domain2);
  
  var controlPoint4 = [[0.5,5,0.35],[0.7,5,1.1],[ 0,0,1],[1,0,0.2]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var chiusura1 = MAP(c4)(domain);

  var controlPoint5 = [[0.9,5,0.35],[0.7,5,1.1],[ 0,0,1],[-1,0,0.2]];
  var c5 = CUBIC_HERMITE(S0)(controlPoint5);
  var chiusura2 = MAP(c5)(domain);

  var chiusura = CUBIC_HERMITE(S1)([c4,c5, [0,0.2,0],[0,-0.2,0]]);
  var disChiusura = MAP(chiusura)(domain2);

  disChiusura = COLOR([0.2901,0.439,0.545,1])(disChiusura);
  disFondo = COLOR([1,0.7254,0.0588,1])(disFondo);
  disLatoSx = COLOR([0.2901,0.439,0.545,1])(disLatoSx);
  disLatoDx = COLOR([0.2901,0.439,0.545,1])(disLatoDx);

  var tubo = generaTubo();
  var carrello = generaCarrello();

  var coda = STRUCT([disFondo, disLatoDx, disLatoSx, disChiusura,T([0,1,2])([0.65, 1, 1.5]), tubo]);
  var coda2 = STRUCT([coda,T([0,1,2])([0.62,4.5,-0.15]),R([1,2])([PI/8]), carrello]);
  return coda2;
}

var bocchettone = function(){
  var controlPoint1 = [[0,0,0],[0.6,0,0],[0,0,0.5],[0,0,-0.5]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var semiCerchio1front = MAP(c1)(domain);

  var controlPoint2 = [[0,0,0],[0.6,0,0],[0,0,-0.5],[0,0,0.5]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var semiCerchio2front = MAP(c2)(domain);

  var controlPoint3 = [[0,0.8,0],[0.6,0.8,0],[0,0,0.5],[0,0,-0.5]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var semiCerchio3front = MAP(c3)(domain);

  var controlPoint4 = [[0,0.8,0],[0.6,0.8,0],[0,0,-0.5],[0,0,0.5]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var semiCerchio5front = MAP(c4)(domain);

  var chiusuraSup = BEZIER(S1)([c1,c3]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);

  var chiusuraInf = BEZIER(S1)([c2,c4]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);

  var chiusuraFront = BEZIER(S1)([c1,c2]);
  var disChiusuraFront = MAP(chiusuraFront)(domain2);

  disChiusuraFront = COLOR([0,0,0,1])(disChiusuraFront);
  var esterno = STRUCT([disChiusuraInf, disChiusuraSup]);
  esterno = COLOR([1,0.7254,0.0588,1])(esterno);

  var chiusuraPost = BEZIER(S1)([c3,c4]);
  var disChiusuraPost = MAP(chiusuraPost)(domain2);
  disChiusuraPost = COLOR([1,0.7254,0.0588,1])(disChiusuraPost);

  var esterno = STRUCT([disChiusuraInf, disChiusuraSup, disChiusuraPost]);
  esterno = COLOR([1,0.7254,0.0588,1])(esterno);

  var presa = STRUCT([esterno, disChiusuraFront]);
  return presa;
}

/*
 * creazione della parte sotto la cabina della fusoliera.
 */
var sottoCabinaFusoliera = function() {

  var controlPoint1 = [[0,0,0],[0,-2,0],[ 0,0,0],[0,0,0]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[1.4,0,0],[1.4,-2,0],[ 0,0,0],[0,0,0]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelInf2 = MAP(c2)(domain);

  var controlPoint3 = [[0.29,0,1.3],[0.29,-2,1.3],[0,0,0],[0,0,0]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelSup1 = MAP(c3)(domain);

  var controlPoint4 = [[1.11,0,1.3],[1.11,-2,1.3],[0,0,0],[0,0,0]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var fondo = CUBIC_HERMITE(S1)([c1,c2, [0,0,0],[0,0,0]]);
  var disFondo = MAP(fondo)(domain2);

  var latoSx = CUBIC_HERMITE(S1)([c1,c3, [0,0,0.9],[0.18,0,0.4]]);
  var disLatoSx = MAP(latoSx)(domain2);

  var latoDx = CUBIC_HERMITE(S1)([c2,c4, [0,0,0.9],[-0.18,0,0.4]]);
  var disLatoDx = MAP(latoDx)(domain2);
  
  
  disFondo = COLOR([1,0.7254,0.0588,1])(disFondo);
  disLatoSx = COLOR([0.2901,0.439,0.545,1])(disLatoSx);
  disLatoDx = COLOR([0.2901,0.439,0.545,1])(disLatoDx);

  var presa = bocchettone();
  var centro = STRUCT([disFondo, disLatoDx, disLatoSx, T([0,1,2])([0.4,-1.5,-0.1]) ,presa]);
  return centro;
}

var scappamento = function()
{

  var t1 = TRIANGLE_FAN([[0,0,0],[0,-0.5,0],[-0.5,0,0]]);
 
  var tuboSx = STRUCT([t1, T([1])([0.25]), t1, T([1])([0.25]), t1]);
  var tuboDx = STRUCT([ R([0,2])([PI]), T([0])([2]) , tuboSx]);

  var scappamento = STRUCT([tuboSx, T([0])([2.19]), tuboDx]);
  scappamento = COLOR([0.3607,0.2,0.0901,1])(scappamento);

  return scappamento;
}

var generaElica = function(){

  var controlPoint1 = [[0,0,0],[0.6,0,0],[0,0,1],[0,0,-1]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var semiCerchio1front = MAP(c1)(domain);

  var controlPoint2 = [[0,0,0],[0.6,0,0],[0,0,-1],[0,0,1]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var semiCerchio2front = MAP(c2)(domain);

  var controlPoint3 = [[0.16,-0.3,0],[0.32,-0.3,0],[0,0,0.4],[0,0,-0.4]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var semiCerchio3front = MAP(c3)(domain);

  var controlPoint4 = [[0.16,-0.3,0],[0.32,-0.3,0],[0,0,-0.4],[0,0,0.4]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var semiCerchio4front = MAP(c4)(domain);

  var chiusuraInf = BEZIER(S1)([c1,c2]);
  var disChiusuraInf = MAP(chiusuraInf)(domain2);

  var chiusuraSup = BEZIER(S1)([c3,c4]);
  var disChiusuraSup = MAP(chiusuraSup)(domain2);

  var chiusuraLat = BEZIER(S2)([chiusuraInf, chiusuraSup]);
  var disChiusuraLat = MAP(chiusuraLat)(domain3);

  disChiusuraInf = COLOR([0.2901,0.439,0.545,1])(disChiusuraInf);
  disChiusuraSup = COLOR([0.2901,0.439,0.545,1])(disChiusuraSup);
  disChiusuraLat = COLOR([0.2901,0.439,0.545,1])(disChiusuraLat);
  
  var corpo = STRUCT([T([0,1])([-0.3,0.1]) ,disChiusuraInf, disChiusuraSup, disChiusuraLat]);
  corpo = COLOR([1,0.7254,0.0588,1])(corpo);

  var controlPoint5 = [[0,0,0],[-0.25,0,1],[0,0,1]];
  var c5 = BEZIER(S0)(controlPoint5);
 

  var controlPoint6 = [[0,0,0],[0.25,0,1],[0,0,1]];
  var c6 = BEZIER(S0)(controlPoint6);

  var c7 = BEZIER(S1)([c5,c6]);
  var disElica = MAP(c7)(domain2);
  disElica= COLOR([0,0,0,1])(disElica);

  elica = STRUCT([corpo, disElica, R([0,2])([PI*2/3]), disElica, R([0,2])([PI*2/3]), disElica]);

  return elica;

}


/*
 * creazione del muso della fusoliera.
 */
var musoFusoliera = function() {

  var controlPoint1 = [[0,-2,0],[0.5,-4.5,0.5],[ 0,-1,0],[0,-1,1]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1);
  var schelInf1 = MAP(c1)(domain);

  var controlPoint2 = [[1.4,-2,0],[0.9,-4.5,0.5],[ 0,-1,0],[0,-1,1]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var schelInf2 = MAP(c2)(domain);

  var controlPoint3 = [[0.29,-2,1.3],[0.49,-4.5,0.9],[0,0,0],[0,0,0]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var schelSup1 = MAP(c3)(domain);

  var controlPoint4 = [[1.11,-2,1.3],[0.91,-4.5,0.9],[0,0,0],[0,0,0]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var schelSup2 = MAP(c4)(domain);

  var fondo = CUBIC_HERMITE(S1)([c1,c2, [0,0,0],[0,0,0]]);
  var disFondo = MAP(fondo)(domain2);

  var latoSx = CUBIC_HERMITE(S1)([c1,c3, [0,0,0.9],[0.18,0,0.4]]);
  var disLatoSx = MAP(latoSx)(domain2);

  var latoDx = CUBIC_HERMITE(S1)([c2,c4, [0,0,0.9],[-0.18,0,0.4]]);
  var disLatoDx = MAP(latoDx)(domain2);

  var latoAlto = CUBIC_HERMITE(S1)([c3,c4, [0,0,0.3],[0,0,-0.3]]);
  var disLatoAlto = MAP(latoAlto)(domain2);
  
  
  disFondo = COLOR([1,0.7254,0.0588,1])(disFondo);
  disLatoSx = COLOR([0.2901,0.439,0.545,1])(disLatoSx);
  disLatoDx = COLOR([0.2901,0.439,0.545,1])(disLatoDx);
  disLatoAlto = COLOR([0.2901,0.439,0.545,1])(disLatoAlto);

  var tubiScappamento = scappamento();

  var muso = STRUCT([disFondo, disLatoDx, disLatoSx, disLatoAlto,T([0,1,2])([0.6,-3.8,0.8]), tubiScappamento]);

  var elica = generaElica();

  var musetto = STRUCT([muso,T([0,1,2])([0.7,-4.6, 0.7]), elica]);

  return musetto;
}

/*
 * Creazione del vetro della cabina del pilota
 */
var cabinaFusoliera = function (){

  var controlPoint0 = [[0.29,0,1.3],[1.11,0,1.3],[0.9,0,2.7],[0.9,0,-2.7]];
  var c0 = CUBIC_HERMITE(S0)(controlPoint0); 
  var curva0 = MAP(c0)(domain); 

  var controlPoint1 = [[0.29,-0.5,1.3],[1.11,-0.5,1.3],[0.9,0,2.6],[0.9,0,-2.6]];
  var c1 = CUBIC_HERMITE(S0)(controlPoint1); 
  var curva1 = MAP(c1)(domain); 


  var controlPoint2 = [[0.29,-1,1.3],[1.11,-1,1.3],[0.9,0,2.4],[ 0.9,0,-2.4]];
  var c2 = CUBIC_HERMITE(S0)(controlPoint2);
  var curva2 = MAP(c2)(domain);

  var controlPoint3 = [[0.29,-1.5,1.3],[1.11,-1.5,1.3],[0.9,0,2.7],[0.9,0,-2.7]];
  var c3 = CUBIC_HERMITE(S0)(controlPoint3);
  var curva3 = MAP(c3)(domain);

  var controlPoint4 = [[0.29,-2,1.3],[1.11,-2,1.3],[0.9,0,0.2],[0.9,0,-0.2]];
  var c4 = CUBIC_HERMITE(S0)(controlPoint4);
  var curva4 = MAP(c4)(domain);

  var controlPoint5 = [[0.29,-1.5,1.3],[1.11,-1.5,1.3],[1,0,1.9],[1,0,-1.9]];
  var c5= CUBIC_HERMITE(S0)(controlPoint5);
  var curva5 = MAP(c5)(domain);

  var curve = STRUCT([curva1, curva2, curva5]);
  curve = COLOR([0,0,0,1])(curve);

  var vetro = BEZIER(S1)([c0, c1, c2, c3, c4])
  var disVetro = MAP(vetro)(domain2);

  disVetro = COLOR([0.725,0.827,0.933,0.5])(disVetro);
  var cabina = STRUCT([curve, disVetro]);

  return cabina;
}



var coda = codaFusoliera();
var centro = sottoCabinaFusoliera();
var muso = musoFusoliera();
var cabina = cabinaFusoliera();

var fusoliera = STRUCT([coda, centro, muso, cabina]);
DRAW(fusoliera);


var disegnaPista = function(){

  var base = CUBOID([22,50,0]);
  base = COLOR([0.46,0.53,0.6])(base);

  var rigaLaterale = CUBOID([1,50,0]);
  rigaLaterale = COLOR([1,1,1,1])(rigaLaterale);
  rigaLaterale = T([0])([1])(rigaLaterale);

  var segmentato = CUBOID([1,5,0]);
  segmentato = COLOR([1,1,1,1])(segmentato);

  var pista = STRUCT([base, rigaLaterale, T([0])([19]), rigaLaterale]);
  var pistaDef = STRUCT([pista, T([0])([10]), segmentato,
                                T([1])([10]), segmentato,
                                T([1])([10]), segmentato, 
                                T([1])([10]), segmentato,
                                T([1])([10]), segmentato
                                ]);

  pistaDef = T([0,1,2])([-10,-25,-1.6])(pistaDef);
  pistaDef = R([1,2])([PI/10])(pistaDef);
  DRAW(pistaDef);
}

disegnaPista();