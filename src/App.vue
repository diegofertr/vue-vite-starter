<template>
  <div class="bg-gray-800 p-3 flex justify-between items-center">
    <div class="mx-2">
      <h1 class="text-xl text-gray-200">Sistema Cliente</h1>
    </div>
    <div class="flex justify-around p-2 space-x-4">
      <!-- <router-link to="/" active-class="border-b-2 border-indigo-200" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</router-link> -->
      <router-link to="/" active-class="bg-gray-900" class="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</router-link>
      <!-- <router-link to="/parametro" active-class="border-b-2 border-indigo-200" class="text-gray-200">Parametros</router-link> -->
      <router-link to="/parametro" active-class="bg-gray-900" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Parametros</router-link>
      <!-- <router-link to="/pago" active-class="border-b-2 border-indigo-200" class="text-gray-200">Pagos</router-link> -->
      <router-link to="/pago" active-class="bg-gray-900" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pagos</router-link>
      <!-- <router-link to="/factura" active-class="border-b-2 border-indigo-200" class="text-gray-200">Facturas</router-link> -->
      <router-link to="/factura" active-class="bg-gray-900" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Facturas</router-link>
    </div>
  </div>
  <div class="px-20 pt-5">
    <router-view />
  </div>
</template>