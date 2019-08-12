/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  moverse: function(valorX,valorY,teclaPresionada) {
    
  },

  perderVida: function(vida) {
    this.vidas -= vida;
    console.log("Perdio " + vida +" , ahora tiene " +this.vidas)
  },
  
  ganar:function() {
    if (this.vidas == 5) {
      console.log("Gano :)");
    }
  },

  perderJuego:function() {
    if (this.vidas === 0) {
      console.log("Perdio :(");
    }
  }
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
