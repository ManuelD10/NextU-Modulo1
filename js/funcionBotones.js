function  mostrarTodos() {
	document.getElementById("ctnLista").style.display = "block";
	document.getElementById("ctnPromedio").style.display = "none";
	document.getElementById("ctnMayor").style.display = "none";
	document.getElementById("ctnMenor").style.display = "none";
	document.getElementById("estudiantesLista").innerHTML="json.js";
	console.log(JSON[i].codigo);
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