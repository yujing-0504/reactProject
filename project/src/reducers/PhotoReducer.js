export default function(state=[], action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "PHOTO":
			console.log("recuder HEADER");
			newS = [...state];
			newS=action.payload;
			console.log(newS);
			return newS;
		
		default:
			return state;
	}
}