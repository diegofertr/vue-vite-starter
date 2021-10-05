import { reactive } from 'vue'

const state = reactive({
  products: [],
})

const methods = {
  addProduct(_product) {
    state.products.push(_product)
  },
  deleteProduct(_product) {
    const idx = state.products.findIndex((p) => p.id == _product.id)
    state.products.splice(idx, 1);
  }
}

export default {
  state,
  methods,
}