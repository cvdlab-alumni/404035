/**
 * Esercizio 1 : disegno delle due piante del Barcellona Pavillon
 */

/**
*Definisco il colore nero per i muri portanti
*/
 var nero = [0,0,0];

/**
 * Colora un oggetto 
 *
 * @param {Array} colore(rgb)
 * @param {plasm.Model} modello
 * @return {plasm.Model} modello
 * 
 */
var colora = function(colore,modello){
  COLOR(colore)(modello);
}

/**
 * Crea un pilastro centrandolo in un punto 
 *
 * @param {Number} x
 * @param {Number} y
 * @return {plasm.Model} pilastro
 * 
 */
var pilastro = function(x,y){
  return POLYLINE([ [x,y], [x+0.1,y+0.1], [x,y+0.2], [x-0.1,y+0.1], [x,y] ]);
}


/**
 * Definisco la struttura bordo che delimita il perimetro della pianta
 */
var bordo = STRUCT([ POLYLINE([
                                [0,0],
                                [39,0],
                                [39,1],
                                [36,1],
                                [36,4], 
                                [39,4],
                                [52,4],
                                [52,6],
                                [51,6],
                                [51,16],
                                [47,16],
                                [47,17],
                                [9,17],
                                [9,22],
                                [1,22],
                                [1,2],
                                [0,2],
                                [0,0]
                              ]) 
                    ]);

/**
 * Definisco la struttura che rappresenta la vasca/piscina
 */
var bordoVasca = POLYLINE([ 
                      [1,1],
                      [21,1],
                      [21,10],
                      [1,10],
                      [1,1]  
                    ]);

var bordoAltoVasca = POLYLINE([ [1,10], [1,1], [8,1] ]);

colora(nero,bordoAltoVasca);

var vasca = STRUCT([ bordoAltoVasca, bordoVasca ]);

/**
 * Definisco la struttura che rappresenta le scalette d'entrata
 */
var scale = STRUCT([
                    POLYLINE([ [36.375,1], [36.375,4] ]),
                    POLYLINE([ [36.75,1], [36.75,4] ]),
                    POLYLINE([ [37.125,1], [37.125,4] ]),
                    POLYLINE([ [37.5,1], [37.5,4] ]),
                    POLYLINE([ [37.875,1], [37.875,4] ]),
                    POLYLINE([ [38.25,1], [38.25,4] ]),
                    POLYLINE([ [38.625,1], [38.625,4] ])
                  ]);

/**
 * Definisco la copertura della stanza di sinistra
 */
var coperturaSx = POLYLINE([ 
                            [0,13],
                            [10,13],
                            [10,23],
                            [0,23],
                            [0,13]
                          ]);

/**
 * Definisco la suddivisione interna della stanza di sinistra
 */
var interniSx = STRUCT([
                        POLYLINE([ [1,17], [7,17] ]),
                        POLYLINE([ [8,17], [9,17] ]),
                        POLYLINE([ [5,17], [5,18] ]),
                        POLYLINE([ [5,19], [5,22] ]),
                        POLYLINE([ [5,20], [6,20] ]),
                        POLYLINE([ [7,20], [9,20] ]),
                        POLYLINE([ [7,22], [7,21] ])
                      ]);

/**
* Definisco i muri portanti della stanza (e zona) sinistra
*/
var portantiSx = STRUCT([
                        POLYLINE([ [1,10], [1,22], [9,22], [9,20] ]),
                        POLYLINE([ [9,17], [9,18.50] ])
                      ]);

colora(nero,portantiSx);

/**
* Definisco gli arredamenti dell'appartamento di sinistra
*/
var arredamentoSx = STRUCT([
                          POLYLINE([ [2.5,17.20], [3.5,17.20], [3.5,18.20], [2.5,18.20], [2.5,17.20] ]),
                          POLYLINE([ [1.7,17.50], [2.2,17.50], [2.2,17.90], [1.7,17.90], [1.7,17.50] ]),
                          POLYLINE([ [1.7,17.50], [1.8,17.50], [1.8,17.90], [1.7,17.90], [1.7,17.50] ]),
                          POLYLINE([ [3.8,17.50], [4.3,17.50], [4.3,17.90], [3.8,17.90], [3.8,17.50] ]),
                          POLYLINE([ [4.3,17.5], [4.3,17.9], [4.2,17.9], [4.2,17.5], [4.3,17.5] ]),
                          POLYLINE([ [1.7,20], [2.2,20], [2.2,20.40], [1.7,20.40], [1.7,20] ]),
                          POLYLINE([ [1.7,20], [1.8,20], [1.8,20.40], [1.7,20.40], [1.7,20] ]),
                          POLYLINE([ [2.6,21.1], [3,21.1], [3,21.6], [2.6,21.6], [2.6,21.1] ]),
                          POLYLINE([ [2.6,21.6], [2.6,21.5], [3,21.5], [3,21.6], [2.6,21.6] ]),
                          POLYLINE([ [3.2,21.1], [3.6,21.1], [3.6,21.6], [3.2,21.6], [3.2,21.1] ]),
                          POLYLINE([ [3.2,21.6], [3.2,21.5], [3.6,21.5], [3.6,21.6], [3.2,21.6] ]),
                        ]);
/**
 * @ stanzaSx: struttura che contiene tutte le componenti della stanza di sinistra
 */ 
var stanzaSx = STRUCT([ coperturaSx, interniSx, portantiSx, arredamentoSx ]);


/**
 * Definisco il muretto centrale lungo le panchine
 */
var muroPanchine = POLYLINE([ [7.5,15], [27.5,15] ]);

colora(nero,muroPanchine);

/**
 * Definisco le panchine di fronte il muretto
 */
var panchine = STRUCT([
                        POLYLINE([ [7.85,14], [23,14] ]),
                        POLYLINE([ [7.85,14.70], [23,14.70] ]),
                        POLYLINE([ [7.85,14], [7.85,14.70] ]),
                        POLYLINE([ [23,14], [23,14.70] ]),
                        POLYLINE([ [10.01,14], [10.01,14.70] ]),
                        POLYLINE([ [12.17,14], [12.17,14.70] ]),
                        POLYLINE([ [14.33,14], [14.33,14.70] ]),
                        POLYLINE([ [16.49,14], [16.49,14.70] ]),
                        POLYLINE([ [18.65,14], [18.65,14.70] ]),
                        POLYLINE([ [20.81,14], [20.81,14.70] ])
                      ]);

/**
 * @ sedutaCentrale: struttura che contiene le panchine e il muro lungo la piscina
 */
var sedutaCentrale = STRUCT([ muroPanchine, panchine ]);

/**
 * Definisco la copertura della stanza di destra
 */
var coperturaDx = POLYLINE([
                            [24,4],
                            [24,17],
                            [47,17],
                            [47,4],
                            [24,4]
                          ]);

/**
 *Definisco le suddivisioni interne della stanza di destra
 */
var muroEsternoDx = POLYLINE([ 
                              [37.66,16], 
                              [51,16],
                              [51,5],
                              [41.66,5] 
                            ]);

colora(nero, muroEsternoDx);

/**
 *Definisco muro esterno meno spesso stanza destra
 */
var muroEsternoFinoDx = POLYLINE([ [30,5], [41.66,5] ]);

/**
 *Definisco due muri portanti interni della stanza di destra
 */
var muroInternoPortanteDx = STRUCT([
                                    POLYLINE([ [25.10,7.25], [33.90,7.25] ]),
                                    POLYLINE([ [37.10,11.50], [42.50,11.50] ])
                                  ]);

colora(nero, muroInternoPortanteDx);

/**
 *Definisco tutti i muri non portanti interni della stanza di destra
 */
var muroInternoNonPortanteDx = STRUCT([
                                    //POLYLINE([ [30,5], [30,7.25] ]),
                                    POLYLINE([ [31,7.26], [31,13.66] ]),
                                    POLYLINE([ [32,7.26], [32,13.66] ]),
                                    POLYLINE([ [30,13.67], [40,13.67] ]),
                                    //POLYLINE([ [40,13.67], [40,15.99] ]),
                                    POLYLINE([ [42.50,5.01], [42.50,11.49] ]),
                                    POLYLINE([ [38.80,5], [38.80,8] ]),
                                    POLYLINE([ [38.80,9], [38.80,11.49] ]),
                                    POLYLINE([ [44.80,6.80], [44.80,14.20] ])
                                  ]);

/**
* Definisco i pilastri interni della stanza di destra
*/
var pilastri = STRUCT([
                       pilastro(45,7), 
                       pilastro(45,14),
                       pilastro(38.65,7),
                       pilastro(38.65,14),
                       pilastro(32.2,7),
                       pilastro(32.2,14),
                       pilastro(26,7),
                       pilastro(26,14)
                      ]);

colora(nero,pilastri);

/**
* Definisco gli arredamenti della stanza destra
*/
var arredamentoDx = STRUCT([
                          POLYLINE([ [32.2,9], [33.2,9], [33.2,12], [32.2,12], [32.2,9] ]),
                          POLYLINE([ [32.9,8.2], [32.9,8.7], [32.5,8.7], [32.5,8.2], [32.9,8.2] ]),
                          POLYLINE([ [32.9,8.2], [32.9,8.3], [32.5,8.3], [32.5,8.2], [32.9,8.2] ]),
                          POLYLINE([ [32.9,12.3], [32.9,12.8], [32.5,12.8], [32.5,12.3], [32.9,12.3] ]),
                          POLYLINE([ [32.9,12.8], [32.5,12.8], [32.5,12.7], [32.9,12.7], [32.9,12.8] ])
                        ]);


/**
 * @ stanzaDx: struttura che contiene tutte le componenti della stanza di destra
 */
var stanzaDx = STRUCT([ coperturaDx, muroEsternoDx, pilastri, muroEsternoFinoDx, muroInternoPortanteDx, muroInternoNonPortanteDx, pilastri, arredamentoDx ]);


/**
 * @ pianta: struttura che unisce tutti i modelli creati in precedenza per visualizzarli su schermo
 */
var pianta = STRUCT([ stanzaDx, vasca, stanzaSx, bordo, scale, sedutaCentrale ]);

DRAW(pianta);