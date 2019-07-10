const origin = "http://localhost:3000"

const Path = {
  root: () => `${origin}/products`,
  delete: (id) => `${origin}/products/${id}`
}

export default Path;
