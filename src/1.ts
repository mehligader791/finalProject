import { getProducts } from "./productService";
import { getUserId } from "./userContext";

function filterProductsByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

const finalProject = () => {
  const userId = getUserId();
  const products = getProducts();
  const filteredProducts = filterProductsByCategory(products, "Electronics");
  return filteredProducts;
};

export default finalProject;