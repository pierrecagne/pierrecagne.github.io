const Menu = require('./Menu.js');
const Interactive = require('./Interactive.js');
const License = require('./License.js');

const tabs = [
    {
	name: "Home",
	url: "index.html"
    },
    {
	name: "Research",
	url: "research.html"
    },
    {
	name: "Teaching",
	url: "teaching.html"
    },
    {
	name: "Miscellaneaous",
	url: "miscellaneaous.html"
    },
    {
	name: "Links",
	url: "links.html"
    },
]

window.customElements.define('menu-nav', Menu.menuNav);
window.customElements.define('menu-entry', Menu.menuEntry);
window.customElements.define('expand-element', Interactive.expandable);
window.customElements.define('license-footer', License.license);

document.getElementById('sidebar').appendChild(new Menu.menuNav(tabs));

