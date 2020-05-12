export class license extends HTMLElement {
    constructor() {
	super();

	const licenseType = this.getAttribute('type');
	const license = document.createElement('div');
	license.innerText = `If not specified otherwise, the documents on this webpage are licensed under ${licenseType}`;
	this.appendChild(license);
    }
}



