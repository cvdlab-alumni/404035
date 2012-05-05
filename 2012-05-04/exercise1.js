

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


var tappo = winglet();
var alaCent = centralWing();
var alaDes = rightCentrallWing();
var attAla = attackWing();

var alaDestra = STRUCT([R([1,2])([PI]), tappo, alaCent, alaDes, attAla]);

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
var ala = STRUCT([alaDestra, T([0,1,2])([5,0,-1.5]), carrello]);

DRAW(ala);