export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};