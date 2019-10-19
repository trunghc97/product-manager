const origin = "https://product-manager-trunghc.herokuapp.com"

const Path = {
  root: () => `${origin}/products`,
  delete: (id) => `${origin}/products/${id}`,
  edit: (id) => `${origin}/products/${id}`,
  sign_in: () => `${origin}/users/sign_in`,
  sign_up: () => `${origin}/users`,
  log_out: () => `${origin}/users/sign_out`
}

export default Path;
