function leerJson(json){
	var out = "";
	var i;
	for (i=0; i<json.lenght; i++) {
		alert("Nombre:"+json[i.nombre]);
	}
}
leerJson(jsonEstudiantes);

function  mostrarTodos() {
	document.getElementById("ctnLista").style.display = "block";
	document.getElementById("ctnPromedio").style.display = "none";
	document.getElementById("ctnMayor").style.display = "none";
	document.getElementById("ctnMenor").style.display = "none";
	document.getElementById("estudiantesLista").innerHTML="json.js";
}

function mostrarPromedio(){
	document.getElementById("ctnPromedio").style.display = "block";
	document.getElementById("ctnLista").style.display = "none";
	document.getElementById("ctnMayor").style.display = "none";
	document.getElementById("ctnMenor").style.display = "none";
}

function mostrarMayor() {
	document.getElementById("ctnMayor").style.display = "block";
	document.getElementById("ctnLista").style.display = "none";
	document.getElementById("ctnPromedio").style.display = "none";
	document.getElementById("ctnMenor").style.display = "none";
} 

function mostrarMenor() {
	document.getElementById("ctnMenor").style.display = "block";
	document.getElementById("ctnMayor").style.display = "none";
	document.getElementById("ctnLista").style.display = "none";
	document.getElementById("ctnPromedio").style.display = "none";
} 