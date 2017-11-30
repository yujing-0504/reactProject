export default function(state=[], action) {
	console.log(action);
	let newS;
	switch(action.type) {
		case "LIST":
			console.log("recuder LIST");
			newS = [...state];
			newS=action.payload;
			console.log(newS);
			return newS;
		default:
			return state;
	}
}