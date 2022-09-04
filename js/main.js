let stage = document.querySelector('.stage')

function addADot(event) {

	// log the event to show its object properties and methods
	//console.log(event);

	// Create the new element
	let el = document.createElement('div')

	// Add a class named 'dot' to it
	el.classList.add('dot')

	// Place dot at mouse click location
	// Track the pointer position and get its coordinates. 
	// This is done with event.clientX and event.clientY
	// clientX and clientY are properties if the event object, tracing the location of the mouse (pointer event) onMouseClick
	//	SEE:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_mouse_clientxy

	el.style.left = `${event.clientX}px`;
	el.style.top = `${event.clientY}px`;

	// generate a random colour
	// SEE: https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript
	
	// the number 16777215 is 256 cubed, which is the total number of possible colors available in hex / RGB --> 256 per colour channel, hence 256 R x 256 G  x 256 B == 16777215 possible colours.

	// excluding 0, 255 R is the ff in hexadecimal, likewise for the green and blue channels

	// so the 16,777,215th colour is ffffff --> white

	// the radix '16' in the toString() method generates a hexadecimal number
	// if the radix is '2' then a binary number is generated

	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	el.style.backgroundColor = `#${randomColor}`;

	// Randomize the size of each dot
	
	let randomSize = Math.floor(Math.random()*200);

	el.style.width = `${randomSize}px`;
	el.style.height = `${randomSize}px`;
	
	console.log(event.clientX);
	console.log(event.clientY);
	console.log(randomColor);
	console.log(randomSize + 'px');

	// Insert the <div> into the <section> with class 'stage'
	stage.appendChild(el);

}

// Add an event listener to register the click and fire the addADot function

document.addEventListener('click', addADot);
