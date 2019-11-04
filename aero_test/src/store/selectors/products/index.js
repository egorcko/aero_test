
export const selectProductsList = state => state.products.list;
export const selectProductsLoaded = state => state.products.isLoaded;
export const selectProductsLoading = state => state.products.isLoading;
export const selectProductsError = state => state.products.error;