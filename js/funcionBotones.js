function  mostrarTodos() {
		document.getElementById("ctnLista").style.display = "block";
		document.getElementById("ctnPromedio").style.display = "none";
		document.getElementById("estudiantesLista").innerHTML="json.js";
	}

function mostrarPromedio(){
	document.getElementById("ctnLista").style.display = "none";
	document.getElementById("ctnPromedio").style.display = "block";
}
// revisar para hacer el llamdo -------------------- http://www.forosdelweb.com/f13/leer-array-json-con-javascript-994406/