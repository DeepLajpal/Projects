const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      const featuredProduct = action.payload.filter(
        (element) => element.featured === true
      );
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featured: featuredProduct,
      };
      break;
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
      break;
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError:true
      };
      break;

    default:
      return state;
      break;
  }
};

export default ProductReducer;
