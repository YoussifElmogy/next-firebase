import { axiosFetch } from "@/utils/axiosUtility";

export async function fetchProducts() {
  return axiosFetch("products", "GET");
}

export async function deleteProduct(productId) {
  return axiosFetch(`products/${productId}`, "DELETE");
}
