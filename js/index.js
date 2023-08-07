"use strict";

const submitBtn = document.getElementById("submitbtn");
let imprimer = [];
const box = document.getElementById("box");
const myForm = document.getElementById("formular");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	// Get reference to the form element https://melvingeorge.me/blog/convert-html-form-tag-input-values-to-object-javascript
	//const myForm = document.getElementById("formular");

	// Intialise FormData constructor with myForm
	const formData = new FormData(myForm);

	// Using formData.entries() and Object.fromEntries() method
	// to convert the form data into a valid javascript object

	const formDataObject = Object.fromEntries(formData.entries());

	imprimer.push(formDataObject);

	//myForm.elements[11].selectedIndex  esto es para verificar que opcion se eligio y asi esconder o no la tob

	imprimer.forEach((dato) => {

		let { fax, dob, dos, dx, fName, npiF, npiD, taxF, taxD, pName, pNumber, phNmbr, provName, tx, city, signature } = dato;

		fName = lowerIt(fName);
		let delPrint = document.getElementById(`eliminame`);
		//<p>Network: ${myForm.elements[11].value}</p>
		//box.removeChild(delproduct);
		if (delPrint) {
			copiarDatos(dato);
			box.removeChild(delPrint);
			box.innerHTML += `
			<section class="boxItem" id="eliminame">
				<section>
					<p>For Comunications:</p>
					<ul id="copiame">
						<li>${provName} from ${fName}</li>
						<li>Ph: ${phNmbr}</li>
						<li>NPI: ${npiF}</li>
						<li>DOS: ${dos}</li>
						<li>Dx: ${dx}</li>
						<li>Tx: ${tx}</li>
						<li>Network: ${myForm.elements[5].value}</li>
						<li>As per AWC:</li>
						<li>As per TOB:</li>
						<li>${signature}</li>
					</ul>
				</section>
				<br />
				<section>
					<p>For Remarks:</p>
					<ul>
						<li>Event:</li>
						<li>Case reported by: ${provName}</li>
						<li>Facility: ${fName}</li>
						<li>Doctor: </li>
					</ul>
				</section>
				<br />
				<section>
					<p>For CM:</p>
					<ul>
						<li>Event:</li>
						<li>NPI Facility: ${npiF}</li>
						<li>NPI Doctor: ${npiD}</li>
						<li>Tax Facility: ${taxF}</li>
						<li>Tax Doctor: ${taxD}</li>
					</ul>
				</section>
			</section>
            `;
		} else {
			copiarDatos(dato);
			box.innerHTML += `
			<section class="boxItem" id="eliminame">
				<section>
					<p>For Comunications:</p>
					<ul id="copiame">
						<li>${provName} from ${fName}</li>
						<li>Ph: ${phNmbr}</li>
						<li>NPI: ${npiF}</li>
						<li>DOS: ${dos}</li>
						<li>Dx: ${dx}</li>
						<li>Tx: ${tx}</li>
						<li>Network: ${myForm.elements[5].value}</li>
						<li>As per AWC:</li>
						<li>As per TOB:</li>
						<li>${signature}</li>
					</ul>
				</section>
				<br />
				<section>
					<p>For Remarks:</p>
					<ul>
						<li>Event:</li>
						<li>Case reported by: ${provName}</li>
						<li>Facility: ${fName}</li>
						<li>Doctor: </li>
					</ul>
				</section>
				<br />
				<section>
					<p>For CM:</p>
					<ul>
						<li>Event:</li>
						<li>NPI Facility: ${npiF}</li>
						<li>NPI Doctor: ${npiD}</li>
						<li>Tax Facility: ${taxF}</li>
						<li>Tax Doctor: ${taxD}</li>
					</ul>
				</section>
			</section>
            `;

		};
	});
});



/* const eleccion = document.getElementById("formOption");



if (eleccion.elements[0].selectedIndex === 0){
	//pendiente por desarrollar el despliegue de la cantidad de datos segun la forma escogida
} */

const copiarDatos = (parrafo) => {
	let { fax, dob, dos, dx, fName, npiF, npiD, taxF, taxD, pName, pNumber, phNmbr, provName, tx, city, signature } = parrafo;

	//let copyText = `${provName} from ${fName} \n ${phNmbr}\n NPI: ${npiF}\nDOS: ${dos}\nDx: ${dx}\n Tx: ${tx}\n Network: ${myForm.elements[5].value}\n As per AWC:\n As per TOB:`;
	fName = lowerIt(fName);

	
	let copyText = `${provName} from ${fName}\nPh:${phNmbr}\nNPI: ${npiF}\nDOS: ${dos}\nDx: ${dx}\nTx: ${tx}\nNT: ${myForm.elements[5].value}\n\nAs per AWC:\n\nAs per TOB:\n\n ${signature}`;

	navigator.clipboard.writeText(copyText);
}



const lowerIt = (phrase) => {

	let lowerPhrase = phrase.toLowerCase();
	let words = lowerPhrase.split(" ");
	for (let i = 0; i < words.length; i++) {
		//words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	return words.join(" ");
}



/* const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
	//words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
words.join(" "); */

/* function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
 */
//https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
