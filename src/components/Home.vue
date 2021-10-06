<template>
  <h1 class="text-4xl mb-4">Bienvenido al sistema cliente - QA</h1>
  <p>
    Puedes realizar el pago de servicios mediante tarjeta de crédito o CPT
  </p>

  <div class="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-around items-stretch">
    <div class="flex flex-col space-y-3 p-4">
      <img class="w-16" :src=imgTramite alt="img-tramite">
      <h1 class="text-base">Inspección Técnica Vehicular</h1>
      <div class="flex space-x-3 items-center text-secondary bg-gray-100 bg-opacity-70 rounded-lg p-1">
        <span class="text-lg font-semibold flex-1">Bs. 360</span>
        <button class="text-secondary hover:text-opacity-70" @click="store.methods.addProduct({id: 1, codigo: '1AB22', codigoSin: '102021', unidadMedida: 57, precioUnitario: 360, descripcion: 'Inspección Técnica Vehicular'})">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-col space-y-3 p-4">
      <img class="w-16" :src=imgTramite alt="img-tramite">
      <h1 class="text-base">
        Renovación de Licencia para Conducir – Categoría M, P, T, A, B y C
      </h1>
      <div class="flex space-x-3 items-center text-secondary bg-gray-100 bg-opacity-70 rounded-lg p-1">
        <span class="text-lg font-semibold flex-1">Bs. 122.50</span>
        <button class="text-secondary hover:text-opacity-70" @click="store.methods.addProduct({id: 2, codigo: '2AB22', codigoSin: '202021', unidadMedida: 57, precioUnitario: 122.50, descripcion: 'Renovación de Licencia para Conducir – Categoría M, P, T, A, B y C'})">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-col space-y-3 p-4">
      <img class="w-16" :src=imgTramite alt="img-tramite">
      <h1 class="text-base">
        Certificado de Antecedentes Policiales
      </h1>
      <div class="flex space-x-3 items-center text-secondary bg-gray-100 bg-opacity-70 rounded-lg p-1">
        <span class="text-lg font-semibold flex-1">Bs. 80</span>
        <button class="text-secondary hover:text-opacity-70" @click="store.methods.addProduct({id: 3, codigo: '3AB22', codigoSin: '302021', unidadMedida: 57, precioUnitario: 88, descripcion: 'Certificado de Antecedentes Policiales'})">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-col space-y-3 p-4">
      <img class="w-16" :src=imgTramite alt="img-tramite">
      <h1 class="text-base">
        Folio Real Actualizado
      </h1>
      <div class="flex space-x-3 items-center text-secondary bg-gray-100 bg-opacity-70 rounded-lg p-1">
        <span class="text-lg font-semibold flex-1">Bs. 55.40</span>
        <button class="text-secondary hover:text-opacity-70" @click="store.methods.addProduct({id: 4, codigo: '4AB22', codigoSin: '402021', unidadMedida: 57, precioUnitario: 55.40, descripcion: 'Folio Real Actualizado'})">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-col space-y-3 p-4">
      <img class="w-16" :src=imgTramite alt="img-tramite">
      <h1 class="text-base">
        Legalización del certificado de egreso de auxiliares y técnicos medios en salud
      </h1>
      <div class="flex space-x-3 items-center text-secondary bg-gray-100 bg-opacity-70 rounded-lg p-1">
        <span class="text-lg font-semibold flex-1">Bs. 587.70</span>
        <button class="text-secondary hover:text-opacity-70" @click="store.methods.addProduct({id: 5, codigo: '5AB22', codigoSin: '502021', unidadMedida: 57, precioUnitario: 587.70, descripcion: 'Legalización del certificado de auxiliares y técnicos medios en salud'})">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-col space-y-3 p-4">
      <img class="w-16" :src=imgTramite alt="img-tramite">
      <h1 class="text-base">
        Registro plurinacional de artistas
      </h1>
      <div class="flex space-x-3 items-center text-secondary bg-gray-100 bg-opacity-70 rounded-lg p-1">
        <span class="text-lg font-semibold flex-1">Bs. 150</span>
        <button class="text-secondary hover:text-opacity-70" @click="store.methods.addProduct({id: 6, codigo: '6AB22', codigoSin: '602021', unidadMedida: 57, precioUnitario: 150, descripcion: 'Registro plurinacional de artistas'})">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import imgTramite from '/src/assets/tramite.svg'
import { inject } from 'vue'

export default {
  setup() {
    const store = inject('store');

    return {
      store,
      imgTramite
    }
  }
}
</script>