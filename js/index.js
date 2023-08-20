"use strict";

const submitBtn = document.getElementById("submitbtn");
let imprimer = [];
const box = document.getElementById("box");
const myForm = document.getElementById("formular");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	imprimer.pop();

	// Get reference to the form element https://melvingeorge.me/blog/convert-html-form-tag-input-values-to-object-javascript
	//const myForm = document.getElementById("formular");

	// Intialise FormData constructor with myForm
	const formData = new FormData(myForm);

	// Using formData.entries() and Object.fromEntries() method
	// to convert the form data into a valid javascript object

	const formDataObject = Object.fromEntries(formData.entries());

	imprimer.push(formDataObject);

	//formDataObject.npiD.hidden = true;
	//formDataObject.npiF.style.display = 'none';
	// formOption.elements[0].selectedIndex  esto es para verificar que opcion se eligio y asi esconder o no la tob

	imprimer.forEach((dato) => {

		let { fax, dob, dos, dx, fName, npiF, npiD, taxF, taxD, pName, pNumber, phNmbr, provName, tx, city, signature, amount } = dato;

		fName = lowerIt(fName);
		
		let delPrint = document.getElementById(`eliminame`);

		if (formOption.elements[0].selectedIndex === 0) {

			if (delPrint) {
				copiarDatos(dato);
				box.removeChild(delPrint);
				box.innerHTML += `
			<section class="boxItem" id="eliminame">
				<p>
				<p>For Comunications:</p>
				<ul id="copiame">
					<li>${provName} from ${fName}</li>
					<li>Ph: ${phNmbr}</li>
					<li>NPI: ${npiF}</li>
					<li>DOS: ${dos}</li>
					<li>Dx: ${dx}</li>
					<li>Tx: ${tx}</li>
					<li>Network: ${myForm.elements[5].value}</li>
					<li>As per site:</li>
					<li>As per TOB:</li>
					<li>${signature}</li>
				</ul>
				</p>
			</section>
            `;
			} else {
				copiarDatos(dato);
				box.innerHTML += `
				<section class="boxItem" id="eliminame">
				<p>
				<p>For Comunications:</p>
				<ul id="copiame">
					<li>${provName} from ${fName}</li>
					<li>Ph: ${phNmbr}</li>
					<li>NPI: ${npiF}</li>
					<li>DOS: ${dos}</li>
					<li>Dx: ${dx}</li>
					<li>Tx: ${tx}</li>
					<li>Network: ${myForm.elements[5].value}</li>
					<li>As per site:</li>
					<li>As per TOB:</li>
					<li>${signature}</li>
				</ul>
				</p>
			</section>
            `;

			};

		} else if (formOption.elements[0].selectedIndex === 1) {

			if (delPrint) {
				copiarDatos(dato);
				box.removeChild(delPrint);
				box.innerHTML += `
			<section class="boxItem" id="eliminame">
				<p>
				<p>For Comunications:</p>
				<ul id="copiame">
					<li>${provName} from ${fName}</li>
					<li>Ph: ${phNmbr}</li>
					<li>NPI: ${npiF}</li>
					<li>DOS: ${dos}</li>
					<li>Dx: ${dx}</li>
					<li>Tx: ${tx}</li>
					<li>Network: ${myForm.elements[5].value}</li>
					<li>As per site:</li>
					<li>As per TOB:</li>
					<li>${signature}</li>
				</ul>
				</p>
				<p>
				<p>For Remarks:</p>
				<ul>
					<li>Event:</li>
					<li>Case reported by: ${provName}</li>
					<li>Facility: ${fName}</li>
					<li>Doctor: </li>
				</ul>
				</p>
				<p>
				<p>For CM:</p>
				<ul>
					<li>Event:</li>
					<li>NPI Facility: ${npiF}</li>
					<li>NPI Doctor: ${npiD}</li>
					<li>Tax Facility: ${taxF}</li>
					<li>Tax Doctor: ${taxD}</li>
					<li>Provider advised to send MR and cost estimates</li>
				</ul>
				</p>
			</section>
            `;
			} else {
				copiarDatos(dato);
				box.innerHTML += `
			<section class="boxItem" id="eliminame">
				<p>
				<p>For Comunications:</p>
				<ul id="copiame">
					<li>${provName} from ${fName}</li>
					<li>Ph: ${phNmbr}</li>
					<li>NPI: ${npiF}</li>
					<li>DOS: ${dos}</li>
					<li>Dx: ${dx}</li>
					<li>Tx: ${tx}</li>
					<li>Network: ${myForm.elements[5].value}</li>
					<li>As per site:</li>
					<li>As per TOB:</li>
					<li>${signature}</li>
				</ul>
				</p>
				<p>
				<p>For Remarks:</p>
				<ul>
					<li>Event:</li>
					<li>Case reported by: ${provName}</li>
					<li>Facility: ${fName}</li>
					<li>Doctor: </li>
				</ul>
				</p>
				<p>
				<p>For CM:</p>
				<ul>
					<li>Event:</li>
					<li>NPI Facility: ${npiF}</li>
					<li>NPI Doctor: ${npiD}</li>
					<li>Tax Facility: ${taxF}</li>
					<li>Tax Doctor: ${taxD}</li>
					<li>Provider advised to send MR and cost estimates</li>
				</ul>
				</p>
			</section>
            `;

			};
			
		} else if (formOption.elements[0].selectedIndex === 2) {

			//<p>Network: ${myForm.elements[11].value}</p>
			//box.removeChild(delproduct);
			if (delPrint) {
				copiarDatos(dato);
				box.removeChild(delPrint);
				box.innerHTML += `
			<section class="boxItem" id="eliminame">
				<p>
				<p>For Comunications:</p>
				<ul id="copiame">
					<li>Member ${provName}</li>
					<li>Ph: ${phNmbr}</li>
					<li>Amount charged: ${amount}</li>
					<li>DOS: ${dos}</li>
					<li>Facility: ${fName}</li>
					<li>${signature}</li>
				</ul>
				</p>
				<p>
			</section>
            `;
			} else {
				copiarDatos(dato);
				box.innerHTML += `
			<section class="boxItem" id="eliminame">
				<p>
				<p>For Comunications:</p>
				<ul id="copiame">
					<li>Member ${provName}</li>
					<li>Ph: ${phNmbr}</li>
					<li>Amount charged: ${amount}</li>
					<li>DOS: ${dos}</li>
					<li>Facility: ${fName}</li>
					<li>${signature}</li>
				</ul>
				</p>
				<p>
			</section>
            `;

			};



		};
	});
});




const copiarDatos = (parrafo) => {
	let { fax, dob, dos, dx, fName, npiF, npiD, taxF, taxD, pName, pNumber, phNmbr, provName, tx, city, signature, amount } = parrafo;

	fName = lowerIt(fName);


	if (formOption.elements[0].selectedIndex === 0 || formOption.elements[0].selectedIndex === 1) {

		let copyText = `${provName} from ${fName}\nPh:${phNmbr}\nNPI: ${npiF}\nDOS: ${dos}\nDx: ${dx}\nTx: ${tx}\nNT: ${myForm.elements[5].value}\n\nAs per site:\n\nAs per TOB:\n\n${signature}`;

		navigator.clipboard.writeText(copyText);

	} else if (formOption.elements[0].selectedIndex === 2) {

		let copyText = `Member: ${provName}\nPh:${phNmbr}\nAmount charged: ${amount}\nDOS: ${dos}\nFacility: ${fName}\n\n${signature}`;

		navigator.clipboard.writeText(copyText);
	};

};



const lowerIt = (phrase) => {

	let lowerPhrase = phrase.toLowerCase();
	let words = lowerPhrase.split(" ");
	for (let i = 0; i < words.length; i++) {
		//words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	return words.join(" ");
}
//https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/

const formOption = document.getElementById("formOption");


const selectForm = () => {

	const hideMem = document.getElementById("memCall");
	const hideCaseM = document.getElementById("caseMg");
	const hideBene = document.getElementsByClassName("eliBene");

	if (formOption.elements[0].selectedIndex === 2) {
		hideMem.style.display = "flex";
		hideCaseM.style.display = "none";
		Array.from(hideBene).forEach((div) => {
			div.style.display = "none";
		});


	} else if (formOption.elements[0].selectedIndex === 1) {

		hideMem.style.display = "none";
		hideCaseM.style.display = "flex";
		Array.from(hideBene).forEach((div) => {
			div.style.display = "flex";
		});

	} else if (formOption.elements[0].selectedIndex === 0) {

		hideMem.style.display = "none";
		hideCaseM.style.display = "none";
		Array.from(hideBene).forEach((div) => {
			div.style.display = "flex";
		});
	};
};

formOption.addEventListener('change', selectForm);


