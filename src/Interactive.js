const templateExpandable = document.createElement('template');
templateExpandable.innerHTML = `
<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  button { border: none; background: none; }
</style>
<slot name="steady"></slot><button><i></i></button></br>
<slot name="expand" id="expand"></slot>
`;

export class expandable extends HTMLElement {
    constructor() {
	super();

	this.active = this.getAttribute('active') || false;

	
	this.attachShadow({ mode: 'open' });
	this.shadowRoot.appendChild(templateExpandable.content.cloneNode(true));
	
	this.icon = this.shadowRoot.querySelector('i');	
	this.button_icon();
	
	this.expand = this.shadowRoot.getElementById('expand');

	if(!this.active) { this.shadowRoot.removeChild(this.expand);}

	this.onclick = this.toogle;
    }
    
    toogle() {
	if(!this.active) {
	    this.shadowRoot.appendChild(this.expand);
	} else {
	    this.shadowRoot.removeChild(this.expand);
	}
	this.active = !this.active;
	this.button_icon();
    }

    button_icon() {
	this.icon.className = `fa ${this.active ? 'fa-caret-down' : 'fa-caret-right'}`;
    }
}
