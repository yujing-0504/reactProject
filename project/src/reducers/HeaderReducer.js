export default function(state=[], action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "HEADER":
			console.log("recuder HEADER");
			newS = [...state];
			newS=action.payload;
			return newS;
		
		default:
			return state;
	}
}