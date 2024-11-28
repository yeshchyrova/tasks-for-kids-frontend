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

// export const handleGetAllParentsFulfilled = (state, { payload }) => {
//   state.items = payload;
// };
// export const handleAddParentFulfilled = (state, { payload }) => {
//   state.items.push(payload);
// };

// export const handleDeleteContactFulfilled = (state, { payload }) => {
//   state.items = state.items.filter((contact) => contact.id !== payload.id);
// };
