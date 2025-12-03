const initialState = {
  favorites: [],
};

const mainReducer = function (currentState = initialState, action) {
  switch (action.type) {
    // aggiunge lavoro ai preferiti
    case "FAV_JOBS":
      return {
        ...currentState,
        favorites: [...currentState.favorites, action.payload],
      };

    // rimuove lavoro dai preferiti
    case "REMOVE_FAV_JOBS":
      return {
        ...currentState,
        favorites: currentState.favorites.filter((job) => {
          if (job._id === action.payload) {
            return false;
          } else {
            return true;
          }
        }),
      };
    default:
      return currentState;
  }
};

export default mainReducer;
