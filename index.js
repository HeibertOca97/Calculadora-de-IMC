//VARIABLE GLOBAL
var resultado = null;
//FUNCIONES SETTERS Y GETTERS
function setResultado( result ) {
 resultado = result;
}

function getResultado() {
 return resultado;
}
/*****************
FUNCION ENCARGADA DE REALIZAR EL CALCULO
*****************/
const operacion = ( peso, estatura ) => {
 const imc =
  peso /
  Math.pow( ( estatura * 1 ) / 100,
   2
  );
 return Number.parseFloat( Math.round( imc ) );
};

/*****************
FUNCION ENCARGADA DE RECIBIR LOS VALORES
*****************/
const calcularIMC = ( peso, estatura ) => {
 if ( validarInputs() ) {
  setResultado( operacion( peso, estatura ) );
  imprimirResultadoIMC( operacion( peso, estatura ) );
 }
};

/*****************
FUNCION ENCARGADA DE VALIDAR LOS CAMPOS
*****************/
function validarInputs() {
 const inputs = document.querySelectorAll( "input" );
 let verificar = true;
 for ( let i = 0; i < inputs.length; i++ ) {
  if ( !inputs[ i ].value ) {
   inputs[ i ].parentElement.children[ 1 ].innerHTML = `Campo ${inputs[i].getAttribute("id")} es requerido`;
   verificar = false;
  }
  if ( isNaN( inputs[ i ].value ) ) {
   inputs[ i ].parentElement.children[ 1 ].innerHTML = "Solo caracteres numericos";
   verificar = false;
  }
 }
 if ( verificar ) {
  return true;
 }
}

const contenedorInfo = ( msg ) => {
 document.getElementById( "info" ).innerHTML = msg;
}

function imprimirResultadoIMC( imc ) {
 if ( imc <= 18.5 ) {
  console.log( 'Por debajo de lo normal' );
  contenedorInfo( `<p>Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Peso bajo"</b> para adultos de su misma estatura.<p><strong>Deshacer</strong>` )
 } else if ( imc > 18.5 && imc <= 24.9 ) {
  contenedorInfo( `<p>Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Normal"</b> para adultos de su misma estatura.<p><strong>Deshacer</strong>` );
  console.log( 'Normal' );
 } else if ( imc >= 25 && imc <= 29.9 ) {
  contenedorInfo( `<p>Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Sobrepeso"</b> para adultos de su misma estatura.<p><strong>Deshacer</strong>` );
 } else if ( imc >= 30 && imc <= 34.9 ) {
  contenedorInfo( `<p>Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Obesidad I"</b> para adultos de su misma estatura.<p><strong>Deshacer</strong>` );
 } else if ( imc >= 35 && imc <= 39.9 ) {
  contenedorInfo( `<p>Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Obesidad II"</b> para adultos de su misma estatura.<p><strong>Deshacer</strong>` );
 } else {
  contenedorInfo( `<p>Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Obesidad III"</b> para adultos de su misma estatura.<p><strong>Deshacer</strong>` );
 }
}

/*****************
FUNCION ENCARGADA REMOVER LOS MENSAJE DE AVISO
*****************/
function removerMsg() {
 const inputs = document.querySelectorAll( "input" );
 for ( let i = 0; i < inputs.length; i++ ) {
  inputs[ i ].addEventListener( "focus", () => {
   if ( !inputs[ i ].value || isNaN( inputs[ i ].value ) ) {
    inputs[ i ].parentElement.children[ 1 ].innerHTML = "";
    console.log( "Ejecutando" );
   }
  } )
 }
}
//EVENTO CLICK - ACCIONA LOS METODOS
function darClickEjecutarAccion() {
 document.getElementById( "btn-calcular" ).addEventListener( "click", () => {
  const altura = document.querySelector( "#Estatura" ).value,
   peso = document.querySelector( "#Peso" ).value;
  //RESULTADO
  calcularIMC( peso, altura );
  document.querySelectorAll( "#resultado" )[ 0 ].innerHTML = getResultado();
 } );
}

document.addEventListener( "DOMContentLoaded", () => {
 removerMsg();
 darClickEjecutarAccion();
} )