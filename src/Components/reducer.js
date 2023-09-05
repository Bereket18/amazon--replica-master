export const initialState = {
	basket: [],
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.payload],
			};

		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex((basketItem) =>
				basketItem
					? basketItem.id === action.id
					: basketItem.title === action.title
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in basket!`
				);
			}

			return {
				...state,
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
				email: action.email,
				uid: action.userId,
			};

		// case "SET_USER":
		// 	return {
		// 		...state,
		// 		user: {
		// 			email: action.email,
		// 			uid: action.userId,
		// 		},
		// 	};

		default:
			return state;
	}
};

export default reducer;
