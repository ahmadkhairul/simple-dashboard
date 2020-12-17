import { GET_SIDEBAR } from "../config/constants";

const initialState = {
  data: []
};

const SidebarMenu = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIDEBAR:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default SidebarMenu;
