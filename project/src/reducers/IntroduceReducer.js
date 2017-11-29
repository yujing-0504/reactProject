export default function(state=[], action) {
	// console.log(state);
	let newS;
	let newB
	switch(action.type) {
		case "INTRODUCE":
			console.log("recuder LIST");
			newS = [...state];
			newS=action.payload;
			console.log(newS);
			return newS;
		case "INTRODUCE_bbb":
			console.log("recuder LIST");
			newB = [...state];
			newB=action.payload;
			console.log(newB);
			return newB;
		default:
			return state;
	}
}