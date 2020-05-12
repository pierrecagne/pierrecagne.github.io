export class menuEntry extends HTMLElement {
    constructor(innerText, url) {
	super();

	const link = document.createElement('a');
	link.innerText= innerText;
	link.href = url;
	this.appendChild(link);
    }
}

export class menuNav extends HTMLElement {
    constructor(entries) {
	super();

	const listEntries = document.createElement('ul');

	entries.forEach( tab => {
	    const li = document.createElement('li');
	    li.appendChild(new menuEntry(tab.name, tab.url));
	    listEntries.appendChild(li);
	});

	const nav = document.createElement('nav')
	nav.appendChild(listEntries);
	this.appendChild(nav);

    }
}

