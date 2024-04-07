interface State {
  // Define your state shape here
}

const initialState: State = {};

type Action = {
  type: string /* Add any additional properties for action if needed */;
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
