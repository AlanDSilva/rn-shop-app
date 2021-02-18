export const DELETE_ITEM = "DELETE_ITEM";

export const deleteItem = (itemId) => {
  return { type: DELETE_ITEM, itemId: itemId };
};
