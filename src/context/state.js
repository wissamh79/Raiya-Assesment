const actions = {
  init: "INIT",
};

const initialState = {
  auth: "",
  email: "",
  password: "",
};
const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case "INIT":
      return { ...state, ...data };

    default:
      throw new Error("Undefined reducer action type");
  }
};
export { actions, initialState, reducer };
