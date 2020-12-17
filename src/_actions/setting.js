import { GET_SIDEBAR } from "../config/constants";
import * as dummy from "../data/dummy-menu.json";

export const getSidebar = () => {
  return {
    type: GET_SIDEBAR,
    payload: () => {
      const { default: defaultData } = dummy;
      const data = defaultData;
      return data;
    }
  };
};
