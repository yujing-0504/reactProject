export default function(state=[], action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "PRODUCT":
			console.log("recuder Product");
			newS = [...state];
			newS=action.payload;
			console.log(newS);
			return newS;
		default:
			return state;
	}
}