import * as repo from "../repositories/product.repo";

export async function createProductService(data: any) {
  if (!data.name) throw new Error("Name required");

  return repo.createProductRepo({
    ...data,
    createdAt: new Date(),
  });
}

export async function getProductsService() {
  return repo.getAllProducts();
}
