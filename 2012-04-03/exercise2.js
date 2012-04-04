/**
 * Esercizio 2: Grafica 3D del Barcellona pavilion
 */

/**
 * Definizione di tutte le variabili (usate come costanti) utili per parametrizzare alcune dimensioni dei solidi
 */
var spessoreBase = [1];
var altezzaScalino = 0.125;
var lunghezzaScalino = 0.375;
var altezzaMuro = 3;


/**
 * Definizione della base di tutto l'edificio
 */
var base1 = SIMPLEX_GRID([ 
  [1], 
  [2], 
  spessoreBase 
  ]);

var base2 = SIMPLEX_GRID([ 
  [0.5], 
  [22], 
  spessoreBase 
  ]);

var base3 = SIMPLEX_GRID([ 
  [7.5], 
  [1,-9, 12], 
  spessoreBase 
  ]);

var base4 = SIMPLEX_GRID([ 
  [12], 
  [1,-9,7], 
  spessoreBase 
  ]);

var base5 = SIMPLEX_GRID([ 
  [15], 
  [17], 
  spessoreBase 
  ]);

var base6 = SIMPLEX_GRID([ 
  [3], 
  [1,-3,13], 
  spessoreBase 
  ]);

var base7 = SIMPLEX_GRID([ 
  [8], 
  [-4,13], 
  spessoreBase 
  ]);

var base8 = SIMPLEX_GRID([ 
  [3.5], 
  [-4,1.3,-10.2,0.5], 
  spessoreBase 
  ]);

var base9 = SIMPLEX_GRID([ 
  [0.5], 
  [12], 
  spessoreBase 
  ]);

var base = STRUCT([ 
  base1, T([0])([1]),
  base2, T([0])([0.5]), 
  base3, T([0])([7.5]),
  base4, T([0])([12]),
  base5, T([0])([15]),
  base6, T([0])([3]),
  base7, T([0])([8]),
  base8, T([0])([3.5]), T([1])([4]),
  base9, T([0])([0.5]),
  base1
]);

/**
 * Definizione della superficie del fondo piscina
 */

var fondoPiscina1 = SIMPLEX_GRID([ 
  [20],
  [9], 
  [0.5]
  ]);

var piscina1 = STRUCT([ T([0])([1]), T([1])([1]), fondoPiscina1 ]);

var fondoPiscina2 = SIMPLEX_GRID([ 
  [3.5], 
  [10.5], 
  [0.5] 
  ]);

var piscina2 = STRUCT([ T([0,1])([47,5]), fondoPiscina2 ]);

var piscine = STRUCT([ 
  piscina1, 
  piscina2]);


/**
 * Definizione delle scale di accesso alla struttura
 */
 var scalino1 = SIMPLEX_GRID([ 
  [3], 
  [3], 
  [altezzaScalino] 
  ]);

 var scalino2 = SIMPLEX_GRID([ 
  [3-lunghezzaScalino], 
  [3], 
  [altezzaScalino*2] 
  ]);

 var scalino3 = SIMPLEX_GRID([ 
  [3-lunghezzaScalino*2], 
  [3], 
  [altezzaScalino*3]
  ]);

 var scalino4 = SIMPLEX_GRID([ 
  [3-lunghezzaScalino*3], 
  [3], 
  [altezzaScalino*4] 
  ]);

 var scalino5 = SIMPLEX_GRID([ 
  [3-lunghezzaScalino*4], 
  [3], 
  [altezzaScalino*5] 
  ]);

 var scalino6 = SIMPLEX_GRID([ 
  [3-lunghezzaScalino*5], 
  [3], 
  [altezzaScalino*6] 
  ]);

 var scalino7 = SIMPLEX_GRID([ 
  [3-lunghezzaScalino*6],
  [3], 
  [altezzaScalino*7] 
  ]);

 var scalino8 = SIMPLEX_GRID([ 
  [3-lunghezzaScalino*7], 
  [3], [altezzaScalino*8] 
  ]);

var scale = STRUCT([ T([0,1])([36,1]), 
  scalino1, 
  scalino2, 
  scalino3, 
  scalino4, 
  scalino5, 
  scalino6, 
  scalino7, 
  scalino8 
  ]);

/**
 * Definizione del muro e delle panchine bordo piscina
 */
var muro = SIMPLEX_GRID([ 
  [20], 
  [0.2], 
  [altezzaMuro] 
  ]);

muro = T([0,1,2])([7.5,15,spessoreBase[0]])(muro);

var basiPanchine = [ 
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ]),
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ]),
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ]),
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ]),
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ]),
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ]),
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ]),
  SIMPLEX_GRID([ [0.375], [0.375], [0.25] ])
  ]; 

var parteInfPanchina = STRUCT([ T([0,1,2])([8,14.5, spessoreBase[0]]), 
  basiPanchine[0], T([0])([2.10]),
  basiPanchine[1], T([0])([2.10]),
  basiPanchine[2], T([0])([2.10]),
  basiPanchine[3], T([0])([2.10]),
  basiPanchine[4], T([0])([2.10]),
  basiPanchine[5], T([0])([2.10]),
  basiPanchine[6], T([0])([2]),
  basiPanchine[7], T([0])([1.9])
 ]);

var sedutaPanchina = SIMPLEX_GRID([ 
  [15.15], 
  [0.5], 
  [0.125] 
  ]);

sedutaPanchina = T([0,1,2])([7.85,14.5, spessoreBase[0]+0.25])(sedutaPanchina);

var sedutaPiscina = STRUCT([ 
  muro, 
  parteInfPanchina, 
  sedutaPanchina 
  ]);

/**
 * Definizione dei muri interni della stanza sinistra
 */
var vetOrizz = SIMPLEX_GRID([ 
  REPLICA(2)([3]), 
  [0.1], 
  [0.1,-2.8,0.1] 
  ]);

var vetVert = SIMPLEX_GRID([ 
  REPLICA(2)([0.3,-2.6,0.1]), 
  [0.1], 
  [altezzaMuro] ]);

var vetrataSx = STRUCT([ T([0,1,2])([1,17,spessoreBase[0] ]), vetOrizz,vetVert ]);

var tram1 = SIMPLEX_GRID([ 
  [1], 
  [0.1], 
  [altezzaMuro] 
  ]);

tram1 = T([0,1,2])([8,17, spessoreBase[0]])(tram1);

var tram2 = SIMPLEX_GRID([ 
  [0.1], 
  [1,-1,3], 
  [altezzaMuro] 
  ]);

tram2 = T([0,1,2])([5,17, spessoreBase[0]])(tram2);

var tram3 = SIMPLEX_GRID([ 
  [1,-1,2], 
  [0.1], 
  [altezzaMuro] 
  ]);

tram3 = T([0,1,2])([5,19, spessoreBase[0]])(tram3);

var tram4 = SIMPLEX_GRID([ 
  [0.1], 
  [1], 
  [altezzaMuro] 
  ]);

tram4 = T([0,1,2])([7,21, spessoreBase[0]])(tram4);

var muriInterniSx = STRUCT([ 
  tram1, 
  tram2, 
  tram3, 
  tram4, 
  vetrataSx 
  ]);

/**
* Definizione dei muri esterni della parte sinistra
*/
var m1 = SIMPLEX_GRID([ 
  [7], 
  [0.2], 
  [altezzaMuro] 
  ]);

m1 = T([0,1,2])([1,0.8, spessoreBase[0]])(m1);

var m2 = SIMPLEX_GRID([ 
  [0.2], 
  [21], 
  [altezzaMuro] 
  ]);

m2 = T([0,1,2])([1,1, spessoreBase[0]])(m2);

var m3 = SIMPLEX_GRID([ 
  [8], 
  [0.2], 
  [altezzaMuro] 
  ]);

m3 = T([0,1,2])([1,21.8, spessoreBase[0]])(m3);

var m4 = SIMPLEX_GRID([ 
  [0.2], 
  [2,-2,1], 
  [altezzaMuro] 
  ]);

m4 = T([0,1,2])([8.8,17, spessoreBase[0]])(m4);

var m5 = SIMPLEX_GRID([ 
  [0.2], 
  [2], 
  [2,-0.5,0.5] 
  ]);

m5 = T([0,1,2])([8.8,19, spessoreBase[0]])(m5);

var muriEsterniSx = STRUCT([ 
  m1,
  m2,
  m3,
  m4,
  m5 
  ]);

/**
 * Definizione dei muri interni portanti della stanza destra 
 */
var m1IntPortDx = SIMPLEX_GRID([ 
  [7.9], 
  [0.2], 
  [altezzaMuro] 
  ]);

m1IntPortDx = T([0,1,2])([25.1,7.25, spessoreBase[0]])(m1IntPortDx);

var m2IntPortDx = SIMPLEX_GRID([ 
  [5.4], 
  [0.2], 
  [altezzaMuro] 
  ]);

m2IntPortDx = T([0,1,2])([37.1,11.5, spessoreBase[0]])(m2IntPortDx);


var muriInterniDx = STRUCT([ 
  m1IntPortDx, 
  m2IntPortDx 
  ]);

/**
 * Definizione dei muri esterni della stanza destra
 */
var m1Dx = SIMPLEX_GRID([ 
  [13.34], 
  [0.2], 
  [altezzaMuro] 
  ]);

m1Dx = T([0,1,2])([37.66,15.8, spessoreBase[0]])(m1Dx);

var m2Dx = SIMPLEX_GRID([ 
  [0.2], 
  [11], 
  [altezzaMuro] 
  ]);

m2Dx = T([0,1,2])([50.8,5, spessoreBase[0]])(m2Dx);

var m3Dx = SIMPLEX_GRID([ 
  [9.34], 
  [0.2], 
  [altezzaMuro] 
  ]);

m3Dx = T([0,1,2])([41.66,4.8, spessoreBase[0]])(m3Dx);

var muriEsterniDx = STRUCT([ 
  m1Dx, 
  m2Dx, 
  m3Dx 
  ]);

/**
 * Definizione del pannello di vetro opaco
 */
var vetrataOpaca = SIMPLEX_GRID([ 
  [1], 
  [6.22], 
  [altezzaMuro] 
  ]);

vetrataOpaca = T([0,1,2])([31,7.45, spessoreBase[0]])(vetrataOpaca);



var vetrata1OrizzInt = SIMPLEX_GRID([
  [0.1], 
  REPLICA(5)([1]), 
  [0.1,-2.8,0.1] 
  ]);

var vetrata1VertInt = SIMPLEX_GRID([
  [0.1], 
  REPLICA(5)([0.1,-0.8,0.1]), 
  [altezzaMuro]
  ]);

var vetrata1Int = STRUCT([ 
  T([0,1,2])([38.8,5,spessoreBase[0]]), 
  vetrata1OrizzInt, 
  vetrata1VertInt 
  ]);

var vetrata2OrizzInt = SIMPLEX_GRID([
  [0.1], 
  REPLICA(5)([1]), 
  [0.1,-2.8,0.1] 
  ]);
  
var vetrata2VertInt = SIMPLEX_GRID([
  [0.1], 
  REPLICA(5)([0.1,-0.8,0.1]), 
  [altezzaMuro]
  ]);

var vetrata2Int = STRUCT([ 
  T([0,1,2])([42.3,6.50,spessoreBase[0]]), 
  vetrata2OrizzInt, 
  vetrata2VertInt 
  ]);

var vetrataOrizzPiscina = SIMPLEX_GRID([
  [0.1], 
  REPLICA(7)([1]), 
  [0.1,-2.8,0.1] 
  ]);
  
var vetrataVertPiscina = SIMPLEX_GRID([
  [0.1], 
  REPLICA(7)([0.1,-0.8,0.1]), 
  [altezzaMuro]
  ]);

var vetrataPiscina = STRUCT([ 
  T([0,1,2])([44.80,7,spessoreBase[0]]),
  vetrataOrizzPiscina, 
  vetrataVertPiscina 
  ]);

var vetrataInferioreOrizz = SIMPLEX_GRID([
  REPLICA(6)([2]), 
  [0.1], 
  [0.1,-2.8,0.1] 
  ]);

var vetrataInferioreVert = SIMPLEX_GRID([
  REPLICA(6)([0.1,-1.8,0.1]), 
  [0.1], 
  [altezzaMuro] 
  ]);

var vetrataInferiore = STRUCT([ 
  T([0,1,2])([30, 4.9, spessoreBase[0]]), 
  vetrataInferioreOrizz, 
  vetrataInferioreVert 
  ]);

var vetrataSuperioreOrizz = SIMPLEX_GRID([
  REPLICA(5)([2]), 
  [0.1], 
  [0.1,-2.8,0.1] 
  ]);

var vetrataSuperioreVert = SIMPLEX_GRID([
  REPLICA(5)([0.1,-1.8,0.1]), 
  [0.1], 
  [altezzaMuro] 
  ]);

var vetrataSuperiore = STRUCT([ 
  T([0,1,2])([30, 13.67, spessoreBase[0]]),
   vetrataSuperioreOrizz, 
   vetrataSuperioreVert 
   ]);

var portaVetroInfOrizz = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([1.125]), 
  [0.1,-2.8,0.1] 
  ]);
  
var portaVetroInfVert = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([0.1,-0.925,0.1]), 
  [altezzaMuro]
  ]);

var portaVetroInferiore = STRUCT([ 
  T([0,1,2])([30,5,spessoreBase[0]]), 
  portaVetroInfVert, 
  portaVetroInfOrizz 
  ]);

var portaVetroSupOrizz = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([1.065]), 
  [0.1,-2.8,0.1] 
  ]);
  
var portaVetroSupVert = SIMPLEX_GRID([
  [0.1], 
  REPLICA(2)([0.1,-0.865,0.1]), 
  [altezzaMuro]
  ]);

var portaVetroSuperiore = STRUCT([ 
  T([0,1,2])([40,13.67,spessoreBase[0]]), 
  portaVetroSupVert, 
  portaVetroSupOrizz 
  ]);

/**
 * Definizione delle colonne della stanza di destra 
 */
var colonnaX = SIMPLEX_GRID([
  [0.15],
  [0.05],
  [altezzaMuro]
  ]);

 var colonnaY = SIMPLEX_GRID([
  [0.05],
  [0.15],
  [altezzaMuro]
  ]);

var colonna = STRUCT([ colonnaX, T([0,1])([0.05,-0.05]), colonnaY ]);

colonna1 = T([0,1,2])([26,7,spessoreBase[0] ])(colonna);
colonna2 = T([0,1,2])([26,14,spessoreBase[0] ])(colonna);
colonna3 = T([0,1,2])([32.2,7,spessoreBase[0] ])(colonna);
colonna4 = T([0,1,2])([32.2,14,spessoreBase[0] ])(colonna);
colonna5 = T([0,1,2])([38.65,7,spessoreBase[0] ])(colonna);
colonna6 = T([0,1,2])([38.65,14,spessoreBase[0] ])(colonna);
colonna7 = T([0,1,2])([45,7,spessoreBase[0] ])(colonna);
colonna8 = T([0,1,2])([45,14,spessoreBase[0] ])(colonna);

var colonnato = STRUCT([ 
  colonna1, 
  colonna2, 
  colonna3, 
  colonna4, 
  colonna5, 
  colonna6, 
  colonna7, 
  colonna8  
  ]);

var edificioDx = STRUCT([
  muriEsterniDx,
  muriInterniDx,
  vetrataOpaca,
  vetrataPiscina,
  vetrataInferiore,
  vetrataSuperiore,
  portaVetroInferiore,
  portaVetroSuperiore,
  vetrata1Int,
  vetrata2Int,
  colonnato
  ]);


/**
 * Definizione tetto stanza di sinistra
 */
var tettoSx = SIMPLEX_GRID([ 
  [10],
  [10],
  [0.3] 
  ]);

tettoSx = T([1,2])([13, spessoreBase[0]+altezzaMuro ])(tettoSx);

/**
 * Definizione tetto stanza di destra
 */

var tettoDx = SIMPLEX_GRID([ 
  [23], 
  [13], 
  [0.3] 
  ]);

tettoDx = T([0,1,2])([24,4, spessoreBase[0]+altezzaMuro ])(tettoDx);

/**
 * @struttura: Modello che contiente tutti gli oggetti utilizzati per disegnare la struttura
 */
var struttura = STRUCT([ 
  base, 
  piscine, 
  scale, 
  sedutaPiscina, 
  muriInterniSx,
  muriEsterniSx, 
  edificioDx, 
  tettoSx, 
  tettoDx
  ]);

DRAW(struttura);