<template>
  <!-- <h1 class="text-2xl">Número de productos a comprar</h1>
  <div class="flex items-center space-x-4 my-4">
    <span class="text-3xl font-bold">{{ store.state.products.length }}</span>
  </div> -->
  <!-- <div class="container mx-auto mt-10">
  </div> -->
  <div class="flex">
    <div class="w-4/6 bg-white px-10 py-10">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Carrito de compra</h1>
        <h2 class="font-semibold text-2xl">{{store.state.products.length}} Item{{store.state.products.length !== 1 ? 's' : ''}}</h2>
      </div>
      <div class="flex mt-10 mb-5">
        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Cantidad</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Precio</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
      </div>

      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="flex w-2/5">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="text-md font-medium w-auto">Inspección Técnica Vehicular</span>
            <!-- <div class="flex flex-col ml-3 ">
            </div> -->
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
          </svg>

          <input class="mx-2 border text-center w-8" type="text" value="1">

          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
          </svg>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">Bs 400.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">Bs 400.00</span>
      </div>

      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="flex w-2/5">
          <div class="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="text-md font-medium">Folio Real Actualizado</span>
            <!-- <div class="flex flex-col ml-3 ">
            </div> -->
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
          </svg>

          <input class="mx-2 border text-center w-8" type="text" value="1">

          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
          </svg>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">Bs 200.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">Bs 200.00</span>
      </div>
      <!-- <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">

        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
        Continue Shopping
      </a> -->
    </div>

    <div id="summary" class="w-2/6 px-8 py-10 bg-gray-100 rounded-md">
      <h1 class="font-semibold text-2xl border-b pb-8">Detalle de compra</h1>
      <div class="flex justify-between mt-5 mb-5 text-gray-500">
        <span class="font-medium text-sm">Subtotal</span>
        <span class="font-medium text-sm">Bs. 600</span>
      </div>
      <!-- <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select class="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div> -->
      <div class="border-t mt-5">
        <div class="flex font-semibold justify-between py-6 text-sm">
          <span>Costo total</span>
          <span>Bs. 600</span>
        </div>
        <button class="bg-primary font-semibold hover:bg-opacity-70 py-3 text-sm text-white uppercase w-full rounded-md">PAGAR</button>
      </div>
    </div>
  </div>

</template>

<script>
import imgTramite from '/src/assets/tramite.svg'
import { inject } from 'vue'

export default {
  setup() {
    const store = inject('store')

    return {
      imgTramite,
      store
    }
  },
}
</script>