const { List } = Immutable; // eslint-disable-line no-undef

const App = (initialState, sideEffects) => { // eslint-disable-line no-unused-vars
  let state = initialState;

  state.forEach((v, k) => {
    List()
      .concat(sideEffects.get(k))
      .forEach(sideEffect => sideEffect(v));
  });

  return (updater) => {
    const newState = updater(state);

    newState.forEach((v, k) => {
      if (v !== state.get(k)) {
        List()
          .concat(sideEffects.get(k))
          .forEach(sideEffect => sideEffect(v));
      }
    });

    state = newState;
  };
};
