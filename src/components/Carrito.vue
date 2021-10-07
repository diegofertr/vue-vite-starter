<template>
  <!-- <h1 class="text-2xl">Número de productos a comprar</h1>
  <div class="flex items-center space-x-4 my-4">
    <span class="text-3xl font-bold">{{ store.state.products.length }}</span>
  </div> -->
  <!-- <div class="container mx-auto mt-10">
  </div> -->
  <div v-if="store.state.products.length > 0" class="flex">
    <div class="w-4/6 bg-white px-10 py-10">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Carrito de compra</h1>
        <!-- <h2 class="font-semibold text-2xl">{{store.state.products.length}} Item{{store.state.products.length !== 1 ? 's' : ''}}</h2> -->
      </div>
      <div class="flex mt-10 mb-5">
        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Descripción</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Cantidad</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Precio</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
      </div>

      <!-- inicio -->
      <div v-for="(producto, index) in productos" :key="index" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 border-b">
        <div class="flex w-2/5">
          <div class="flex items-center">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg> -->
            <span class="text-md font-medium w-auto">
              {{ producto.descripcion }}
            </span>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <button @click="descontarCantidadProducto(index, producto.precioUnitario)" :disabled="producto.cantidad === 1" :class="{ 'text-gray-300': producto.cantidad === 1, 'text-gray-600': producto.cantidad > 1 }">
            <svg class="fill-current w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </button>

          <!-- <input class="mx-2 border text-center w-8" type="text" :value="producto.cantidad"> -->
          <span class="mx-2 border text-center w-8">{{ producto.cantidad }}</span>

          <button @click="aumentarCantidadProducto(index, producto.precioUnitario)">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </button>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">Bs {{ producto.precioUnitario }}</span>
        <span class="text-center w-1/5 font-semibold text-sm">Bs {{ producto.subTotal }}</span>
        <!-- <span class="text-center w-1/5 font-semibold text-sm"></span> -->
      </div>
      <!-- fin -->

      <!-- <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">

        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
        Continue Shopping
      </a> -->
    </div>

    <div id="summary" class="w-2/6 px-8 py-10 bg-gray-100 rounded-md">
      <div class="border-b border-gray-300 py-5">
        <h1 class="font-semibold text-2xl border-b pb-8">Datos de facturación</h1>
        <div class="my-2">
          <label class="font-medium uppercase mb-2" for="razonSocial">Razon social</label>
          <input
            class="w-full p-2 my-2 rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            type="text"
            name="razonSocial"
            id="razonSocial"
            v-model="datosFacturacion.razonSocialCliente"
          >
        </div>
        <div class="my-2">
          <label class="font-medium uppercase mb-2" for="nit">Nit</label>
          <input
            class="w-full p-2 my-2 rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            type="text"
            name="nit"
            id="nit"
            v-model="datosFacturacion.nitCliente"
          >
        </div>
        <div class="my-2">
          <label class="font-medium uppercase mb-2" for="correo">Correo electrónico</label>
          <input
            class="w-full p-2 my-2 rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            type="text"
            name="correo"
            id="correo"
            v-model="datosFacturacion.emailCliente"
          >
        </div>
      </div>
      <div class="my-5">
        <h1 class="font-semibold text-2xl border-b pb-8">Detalle de compra</h1>
        <div class="flex justify-between mt-5 mb-5 text-gray-500">
          <span class="font-medium text-sm">Subtotal</span>
          <span class="font-medium text-sm">Bs. {{ costoTotal }}</span>
        </div>
        <div class="border-t mt-5">
          <div class="flex font-bold justify-between py-6 text-lg">
            <span>Costo total</span>
            <span>Bs. {{ costoTotal }}</span>
          </div>
          <button class="bg-primary font-semibold hover:bg-opacity-70 py-3 text-sm text-white uppercase w-full border-0 rounded-md focus:outline-none focus:ring-4 focus:ring-primary">
            PAGAR
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center pt-28">
    <h1 class="text-5xl text-gray-700">El carrito de compras esta vacío</h1>
  </div>

</template>

<script>
import imgTramite from '/src/assets/tramite.svg'
import { inject, onMounted, ref, watchEffect } from 'vue'

export default {
  setup() {
    const store = inject('store')
    const productos = ref([])
    const costoTotal = ref(0)
    const datosFacturacion = ref({
      razonSocialCliente: 'BRITO',
      nitCliente: '777666555',
      emailCliente: 'alanbrito@mail.com'
    })

    onMounted(async () => {
      console.log('carrito mounted!')
      procesarCarrito()
    })

    // watchEffect(() => {})

    const procesarCarrito = () => {
      console.log('store.state.products :: ', store.state.products);
      const tmpProducts = [ ...store.state.products ];
      let contadorProductos = [];
      // tmpProducts.findIndex()
      console.log('tmpProducts :: ', tmpProducts);
      let _costoTotal = 0;
      tmpProducts.forEach((producto) => {
        _costoTotal += producto.precioUnitario;
        const idxProducto = contadorProductos.findIndex((el) => el.codigo === producto.codigo);
        console.log('existe producto ? ', idxProducto !== -1);
        if (idxProducto !== -1) {
          // el producto ya esta en el carrito
          const productTmp = {...contadorProductos[idxProducto]}
          productTmp.cantidad += 1;
          productTmp.subTotal += producto.precioUnitario;
          contadorProductos[idxProducto] = {...productTmp}
        } else {
          // insertamos la primera vez el producto en el carrito
          contadorProductos.push({
            ...producto,
            cantidad: 1,
            subTotal: producto.precioUnitario
          })
        }
      })

      console.log('CARRITO PROCESADO > ', contadorProductos);
      productos.value = contadorProductos;
      costoTotal.value = _costoTotal;
    }

    const aumentarCantidadProducto = (idxProducto, precioUnitario) => {
      console.log('Incrementando cantidad de producto....');
      const tmpProductos = [...productos.value];
      // const tmpProducto = {...tmpProductos[idxProducto]};
      tmpProductos[idxProducto].cantidad += 1;
      tmpProductos[idxProducto].subTotal += precioUnitario;
      productos.value = tmpProductos;
      costoTotal.value += precioUnitario;
    }

    const descontarCantidadProducto = (idxProducto, precioUnitario) => {
      console.log('Incrementando cantidad de producto....');
      const tmpProductos = [...productos.value];
      // const tmpProducto = {...tmpProductos[idxProducto]};
      // if (tmpProductos[idxProducto].cantidad > 1) {
      //   }
      tmpProductos[idxProducto].cantidad -= 1;
      tmpProductos[idxProducto].subTotal -= precioUnitario;
      productos.value = tmpProductos;
      costoTotal.value -= precioUnitario;
    }

    return {
      // params
      imgTramite,
      store,
      productos,
      datosFacturacion,
      // Functions
      aumentarCantidadProducto,
      descontarCantidadProducto,
      costoTotal
    }
  },
}
</script>