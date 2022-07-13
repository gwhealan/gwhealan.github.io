function import_card(htmlID) {
	var dest = document.getElementById(htmlID);
	var str;
	//alert(document.querySelector("#data"));
	fetch ("data.json")
	.then(x => x.text())
	.then(y => myDisplay(y));
	/*
	for(project in JSON.document.querySelector("#data")["Projects"]) {
		str = "<hr>";
		str += project["title"] + "<br>";
		str += project["description"] + "<br>";
		str += project["link"] + "\n";
		str += project["link_title"];
		dest.innerHTML += str;
		alert(str);
	}
	*/
}
function hello_world() {
	alert("Hello World");
}