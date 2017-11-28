export default function(state=[], action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GUESS":
			console.log("recuder GUESS");
			newS = [...state];
			newS=action.payload;
			console.log(newS);
			return newS;
		default:
			return state;
	}
}