import { GET_SIDEBAR, HANDLE_TOGGLE } from "../config/constants";
import * as dummy from "../data/dummy-menu.json";

export const getSidebar = () => {
  return {
    type: GET_SIDEBAR,
    payload: () => {
      const { default: defaultData } = dummy;
      const data = defaultData;
      return data;
    },
  };
};

export const handleToggle = (type, menu, index) => {
  return {
    type: HANDLE_TOGGLE,
    payload: () => {
      menu.data[index][type] = !menu.data[index][type];
      return menu.data;
    },
  };
};

export const handleToggleChild = (type, menu, index, idx) => {
  return {
    type: HANDLE_TOGGLE,
    payload: () => {
      menu.data[index].childs[idx][type] = !menu.data[index].childs[idx][type];
      return menu.data;
    },
  };
};
