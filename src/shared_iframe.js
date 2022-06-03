export function run(index){

	let sab = null

	// Send an event to the parent window, letting it know where it should
	// send a reference to the SharedArrayBuffer
	window.parent.document.dispatchEvent(
		new CustomEvent('request_sab', { detail: {get_sab} })
	)

	// Parent window will call this function to give a reference to the buffer
	function get_sab(_sab){
		sab = new Uint8Array(_sab) // Convert to a Uint8Array so we can use it
	}

	// Periodically update to be responsive to changes in the shared array buffer. This should be done with events, but for a demo about SharedArrayBuffers I think it's fine to poll.
	setInterval(()=>{
		document.querySelector("#red_display").textContent = sab[0]
		document.querySelector("#green_display").textContent = sab[1]
		document.querySelector("#blue_display").textContent = sab[2]
	},100)


	// Button functionality.
	document.querySelector("#btn").onclick = e => {
		sab[index] += 1
	}

}

