/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccionM) {

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccionM = direccionM;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Los movimientos estan basados en un numero aleatorio
 La direccion horizontal es siempre la misma y va ondulando verticalmente.
 Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
ZombieConductor.prototype.mover = function () {
  if (this.direccionM === "h") {
    this.x += this.velocidad;
  } else {
    this.y += this.velocidad;
  }

  /* invierte la direccion horizontal si toca uno de sus limites, modificando su velocidad.
   Si multiplicamos por -1 la velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
    this.velocidad *= -1;
  }
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.velocidad *= -1;
  }
}

ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVida(jugador.vidas);
  console.log("perdio todas las vidas");
}
