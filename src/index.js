import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Contacts from './components/Contacts';

ReactDOM.render(
	React.DOM.h1({
		id: "my-heading",
		className: "pretty",
		htmlFor: "me",
		style: {
			padding: "0.5em 0",
			textAlign: "center",
			background: "black",
			color: "white",
			// use JS API names instead of CSS property names
			fontFamily: "Verdana",
		}
	}, React.DOM.span(null, React.DOM.em(null, "Hell"), "o"), " world!"),
	document.getElementById("app")
);

//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);

const contactElement = document.getElementById('contacts');
ReactDOM.render(<Contacts />, contactElement);