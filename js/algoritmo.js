function inicio_euclides(){
	document.getElementById("proceso").value="";
	var a = document.getElementById("var_a").value;
	var b = document.getElementById("var_b").value;
	var respuesta= algoritmo_euclides(a,b);
	document.getElementById("salida").innerHTML="El MCD es: "+respuesta;
	return null;
}

/* algoritmo_euclides
* Esta funcion procesa los numeros recibidos mediante el algoritmo de euclides
*/

function algoritmo_euclides(a, b){
	var tablero_proceso = document.getElementById("proceso");
	var penultimo_residuo=-1;
	var residuo =-1;
	while(residuo!=0){
		penultimo_residuo = residuo;
		residuo = parseInt(a) - parseInt(b)*parseInt(a/b);
		residuo = parseInt(residuo);
		proceso.value = proceso.value+"\n"+a+" = ("+b+")("+parseInt(a/b)+") + "+residuo;
		a=b;
		b=residuo;
		console.log(residuo);
	}
	return penultimo_residuo;
}