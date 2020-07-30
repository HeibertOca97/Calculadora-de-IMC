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
  removerResultado( true );
  setTimeout( () => {
   removerResultado( false );
  }, 5000 );
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
   inputs[ i ].parentElement.children[ 1 ].innerHTML = `<p class="msg"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Campo ${inputs[i].getAttribute("id")} es requerido<p>`;
   verificar = false;
  }
  if ( isNaN( inputs[ i ].value ) ) {
   inputs[ i ].parentElement.children[ 1 ].innerHTML = `<p class="msg"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Solo caracteres numericos<p>`;
   verificar = false;
  }
 }
 if ( verificar ) {
  return true;
 }
}
//FUNCION ENCARGADA DE MOSTRAR INFORMACION EN LA VENTANA
const contenedorInfo = ( msg ) => {
 document.getElementById( "info" ).innerHTML = msg;
}

function imprimirResultadoIMC( imc ) {
 if ( imc <= 18.5 ) {
  contenedorInfo( `<p><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i> Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Peso bajo"</b> para adultos de su misma estatura.</p>` )
 } else if ( imc > 18.5 && imc <= 24.9 ) {
  contenedorInfo( `<p><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i> Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Normal"</b> para adultos de su misma estatura.</p>` );
 } else if ( imc >= 25 && imc <= 29.9 ) {
  contenedorInfo( `<p><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i> Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Sobrepeso"</b> para adultos de su misma estatura.</p>` );
 } else if ( imc >= 30 && imc <= 34.9 ) {
  contenedorInfo( `<p><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i> Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Obesidad I"</b> para adultos de su misma estatura.</p>` );
 } else if ( imc >= 35 && imc <= 39.9 ) {
  contenedorInfo( `<p><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i> Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Obesidad II"</b> para adultos de su misma estatura.</p>` );
 } else {
  contenedorInfo( `<p><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i> Su IMC es <b>${imc}</b>, lo que indica que su peso está en la categoría de <b>"Obesidad III"</b> para adultos de su misma estatura.</p>` );
 }
}

function removerResultado( valor ) {
 if ( valor ) {
  document.getElementById( 'info' ).classList.add( 'info' )
  document.getElementById( 'info' ).style.display = 'block';
 } else {
  document.getElementById( 'info' ).classList.remove( 'info' );
  document.getElementById( 'info' ).style.display = 'none';
  contenedorInfo( '' );
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
//FUNCION ENCARGADA DE REDIRECCIONAR A OTRO SITIO
const getUrl = ( url, titulo ) => window.open( url, titulo );
//EVENTO CLICK - ACCIONA LOS METODOS
function darClickEjecutarAccion() {
 //EVENTO QUE ACCIONA LA OPERACION
 document.getElementById( "btn-calcular" ).addEventListener( "click", () => {
  const estatura = document.querySelector( "#Estatura" ).value,
   peso = document.querySelector( "#Peso" ).value;
  //RESULTADO
  calcularIMC( peso, estatura );
  document.querySelectorAll( "#resultado" )[ 0 ].innerHTML = getResultado();
 } );
 //EVENTO QUE REDIRECCIONA A OTRAS PAGINAS (REDES SOCIALES)
 document.querySelectorAll( 'footer div' )[ 0 ].addEventListener( 'click', ( e ) => {
  let el = e.target;
  if ( el.title === 'Facebook' ) {
   getUrl( 'https://www.facebook.com/people/H-Joseph-Oca%C3%B1a-Rodriguez/100008371148428', el.title );
  } else if ( el.title === 'Instagram' ) {
   getUrl( 'https://www.instagram.com/joseph.oca.master/', el.title );
  }
 } );
}

document.addEventListener( "DOMContentLoaded", () => {
 removerMsg();
 darClickEjecutarAccion();
} )