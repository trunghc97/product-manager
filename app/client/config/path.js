const origin = "https://product-manager-trunghc.herokuapp.com"

const Path = {
  root: () => `${origin}/products`,
  delete: (id) => `${origin}/products/${id}`,
  edit: (id) => `${origin}/products/${id}`
}

export default Path;
