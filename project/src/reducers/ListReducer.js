export default function(state=[], action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "LIST":
			console.log("recuder ADD_TODO");
			newS = [...state];
			newS=action.payload;
			console.log(newS);
			return newS;
		
		default:
			return state;
	}
}