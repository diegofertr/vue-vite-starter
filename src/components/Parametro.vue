<template>
  <h1 class="text-4xl mb-4">Parametros</h1>
  <button
    type="button"
    class="inline-flex px-5 py-3 my-4 bg-transparent rounded-md text-indigo-500 hover:bg-indigo-50"
    @click="openModalForm()">
    <!-- fill="#200E32" -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path class="fill-current" d="M13.7554969,-4.61852778e-14 C17.5901495,-4.61852778e-14 20,2.39226033 20,6.25329815 L20,6.25329815 L20,8.82145998 C20,9.02359667 19.9191181,9.21732894 19.775362,9.35943259 C19.631606,9.50153624 19.4369515,9.58018684 19.2348285,9.57783641 L19.2348285,9.57783641 L19.2348285,9.56024626 C18.8122359,9.56024626 18.469657,9.21766731 18.469657,8.79507476 L18.469657,8.79507476 L18.469657,6.25329815 C18.469657,3.20140721 16.7985928,1.53034301 13.7554969,1.53034301 L13.7554969,1.53034301 L6.25329815,1.53034301 C3.21020229,1.53034301 1.53034301,3.21020229 1.53034301,6.25329815 L1.53034301,6.25329815 L1.53034301,13.7554969 C1.53034301,16.7897977 3.21020229,18.469657 6.25329815,18.469657 L6.25329815,18.469657 L13.7554969,18.469657 C16.7985928,18.469657 18.469657,16.7897977 18.469657,13.7554969 C18.469657,13.3329044 18.812236,12.9903255 19.2348285,12.9903255 C19.657421,12.9903255 20,13.3329044 20,13.7554969 C20,17.6077397 17.6077397,20 13.7554969,20 L13.7554969,20 L6.25329815,20 C2.39226033,20 -1.77635684e-14,17.6077397 -1.77635684e-14,13.7554969 L-1.77635684e-14,13.7554969 L-1.77635684e-14,6.25329815 C-1.77635684e-14,2.39226033 2.39226033,-4.61852778e-14 6.25329815,-4.61852778e-14 L6.25329815,-4.61852778e-14 Z M10.0703606,11.644679 C10.2741412,11.6491963 10.4674733,11.7357687 10.6065507,11.8847802 C10.7456281,12.0337917 10.8186774,12.232628 10.8091469,12.4362357 L10.8091469,12.4362357 L10.8091469,13.4036939 L10.7955242,13.5238147 C10.7649048,13.6813039 10.685283,13.826302 10.5665048,13.9371617 C10.4180321,14.0757363 10.2205591,14.1496 10.0175901,14.1424802 C9.59703523,14.1234633 9.2688063,13.7717894 9.27880387,13.3509235 L9.27880387,13.3509235 L9.27880387,12.3834653 C9.28568227,12.180488 9.37297317,11.9885721 9.52144592,11.8499975 C9.66991867,11.7114229 9.86739169,11.6375592 10.0703606,11.644679 Z M10.0351803,5.84872469 C10.1203259,5.84870167 10.2039709,5.86303427 10.2828907,5.89036543 C10.5977648,5.98519473 10.826737,6.27720335 10.826737,6.62269129 L10.826,9.014 L13.4300792,9.01495163 C13.5177801,9.01392578 13.6040633,9.02814945 13.685387,9.05617989 C13.8039309,9.09234507 13.9138048,9.15791752 14.0032321,9.24838466 C14.1453357,9.39214068 14.2239863,9.58679518 14.2216871,9.78891821 C14.2216871,10.2047356 13.8897621,10.5445307 13.4740545,10.5540897 L6.65787159,10.5540897 C6.58627001,10.552462 6.5171219,10.5411482 6.45166777,10.5214177 C6.11715106,10.43812 5.87028403,10.1381217 5.86626366,9.78012313 C5.86396444,9.57800011 5.94261504,9.38334561 6.08471869,9.23958959 C6.22682234,9.09583357 6.42055461,9.01493796 6.62269129,9.01495163 L6.62269129,9.01495163 L9.26121372,9.01495163 L9.26121372,6.61389622 C9.27067438,6.19186946 9.61307298,5.85336175 10.0351803,5.84872469 Z" transform="translate(2 2)"/></svg>
    <span class="ml-2">Nuevo parametro</span>
  </button>
  <!-- {{ params }} -->
  <!-- <div class="mt-5">
    <ul>
      <li v-for="(param, idx) in params" :key="idx">
        <em class="font-bold">{{ param['clave'] }}</em>: {{ param['valor'] }}
      </li>
    </ul>
  </div> -->

  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clave
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                  <!-- <span class="sr-only">Edit</span> -->
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(param, idx) in params" :key="idx">
                <td class="px-6 py-4 whitespace-nowrap">
                  <em class="font-bold">{{ param['clave'] }}</em>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ param['valor'] }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ param['estado'] }}
                    <!-- Active -->
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button @click="onEditItem(param)" class="text-yellow-500 hover:text-yellow-700 inline-flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-current" d="M19.9898 18.9533C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533H19.9898ZM16.0299 3.69906L17.5049 4.87078C18.1097 5.34377 18.513 5.96726 18.6509 6.62299C18.8101 7.3443 18.6403 8.0527 18.1628 8.66544L9.3764 20.0279C8.97316 20.5439 8.37891 20.8341 7.74222 20.8449L4.24039 20.8879C4.04939 20.8879 3.89021 20.7589 3.84777 20.5761L3.0519 17.1255C2.91395 16.4912 3.0519 15.8355 3.45514 15.3303L9.68413 7.26797C9.79025 7.13898 9.98126 7.11855 10.1086 7.21422L12.7297 9.29967C12.8994 9.43942 13.1329 9.51467 13.377 9.48242C13.8969 9.41792 14.2471 8.94493 14.1941 8.43969C14.1622 8.1817 14.0349 7.96671 13.8651 7.80546C13.812 7.76246 11.3183 5.76301 11.3183 5.76301C11.1591 5.63401 11.1273 5.39752 11.2546 5.23735L12.2415 3.95706C13.1541 2.78534 14.7459 2.67784 16.0299 3.69906Z" fill="#323232"/>
                    </svg>
                  </button>
                  <button @click="onDeleteItem(param['id'])" class="text-red-500 hover:text-red-700 inline-flex ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-current" d="M18.9391 8.69713C19.1384 8.69713 19.3193 8.78413 19.4623 8.93113C19.5955 9.08813 19.6626 9.28313 19.6432 9.48913C19.6432 9.55712 19.1102 16.2971 18.8058 19.134C18.6152 20.875 17.4929 21.932 15.8094 21.961C14.5149 21.99 13.2496 22 12.0038 22C10.6811 22 9.38763 21.99 8.13206 21.961C6.50498 21.922 5.38168 20.846 5.20079 19.134C4.88763 16.2871 4.36439 9.55712 4.35467 9.48913C4.34494 9.28313 4.41108 9.08813 4.54529 8.93113C4.67756 8.78413 4.86818 8.69713 5.06852 8.69713H18.9391ZM14.0647 2C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647Z" fill="#323232"/>
                    </svg>
                  </button>


                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-if="modalForm" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <form @submit.prevent="saveParametro" method="POST">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg v-if="!!formState.id" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" d="M19.9898 18.9533C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533H19.9898ZM16.0299 3.69906L17.5049 4.87078C18.1097 5.34377 18.513 5.96726 18.6509 6.62299C18.8101 7.3443 18.6403 8.0527 18.1628 8.66544L9.3764 20.0279C8.97316 20.5439 8.37891 20.8341 7.74222 20.8449L4.24039 20.8879C4.04939 20.8879 3.89021 20.7589 3.84777 20.5761L3.0519 17.1255C2.91395 16.4912 3.0519 15.8355 3.45514 15.3303L9.68413 7.26797C9.79025 7.13898 9.98126 7.11855 10.1086 7.21422L12.7297 9.29967C12.8994 9.43942 13.1329 9.51467 13.377 9.48242C13.8969 9.41792 14.2471 8.94493 14.1941 8.43969C14.1622 8.1817 14.0349 7.96671 13.8651 7.80546C13.812 7.76246 11.3183 5.76301 11.3183 5.76301C11.1591 5.63401 11.1273 5.39752 11.2546 5.23735L12.2415 3.95706C13.1541 2.78534 14.7459 2.67784 16.0299 3.69906Z" fill="#323232"/>
                </svg>
                <svg v-if="!formState.id" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path class="fill-current" d="M13.7554969,-4.61852778e-14 C17.5901495,-4.61852778e-14 20,2.39226033 20,6.25329815 L20,6.25329815 L20,8.82145998 C20,9.02359667 19.9191181,9.21732894 19.775362,9.35943259 C19.631606,9.50153624 19.4369515,9.58018684 19.2348285,9.57783641 L19.2348285,9.57783641 L19.2348285,9.56024626 C18.8122359,9.56024626 18.469657,9.21766731 18.469657,8.79507476 L18.469657,8.79507476 L18.469657,6.25329815 C18.469657,3.20140721 16.7985928,1.53034301 13.7554969,1.53034301 L13.7554969,1.53034301 L6.25329815,1.53034301 C3.21020229,1.53034301 1.53034301,3.21020229 1.53034301,6.25329815 L1.53034301,6.25329815 L1.53034301,13.7554969 C1.53034301,16.7897977 3.21020229,18.469657 6.25329815,18.469657 L6.25329815,18.469657 L13.7554969,18.469657 C16.7985928,18.469657 18.469657,16.7897977 18.469657,13.7554969 C18.469657,13.3329044 18.812236,12.9903255 19.2348285,12.9903255 C19.657421,12.9903255 20,13.3329044 20,13.7554969 C20,17.6077397 17.6077397,20 13.7554969,20 L13.7554969,20 L6.25329815,20 C2.39226033,20 -1.77635684e-14,17.6077397 -1.77635684e-14,13.7554969 L-1.77635684e-14,13.7554969 L-1.77635684e-14,6.25329815 C-1.77635684e-14,2.39226033 2.39226033,-4.61852778e-14 6.25329815,-4.61852778e-14 L6.25329815,-4.61852778e-14 Z M10.0703606,11.644679 C10.2741412,11.6491963 10.4674733,11.7357687 10.6065507,11.8847802 C10.7456281,12.0337917 10.8186774,12.232628 10.8091469,12.4362357 L10.8091469,12.4362357 L10.8091469,13.4036939 L10.7955242,13.5238147 C10.7649048,13.6813039 10.685283,13.826302 10.5665048,13.9371617 C10.4180321,14.0757363 10.2205591,14.1496 10.0175901,14.1424802 C9.59703523,14.1234633 9.2688063,13.7717894 9.27880387,13.3509235 L9.27880387,13.3509235 L9.27880387,12.3834653 C9.28568227,12.180488 9.37297317,11.9885721 9.52144592,11.8499975 C9.66991867,11.7114229 9.86739169,11.6375592 10.0703606,11.644679 Z M10.0351803,5.84872469 C10.1203259,5.84870167 10.2039709,5.86303427 10.2828907,5.89036543 C10.5977648,5.98519473 10.826737,6.27720335 10.826737,6.62269129 L10.826,9.014 L13.4300792,9.01495163 C13.5177801,9.01392578 13.6040633,9.02814945 13.685387,9.05617989 C13.8039309,9.09234507 13.9138048,9.15791752 14.0032321,9.24838466 C14.1453357,9.39214068 14.2239863,9.58679518 14.2216871,9.78891821 C14.2216871,10.2047356 13.8897621,10.5445307 13.4740545,10.5540897 L6.65787159,10.5540897 C6.58627001,10.552462 6.5171219,10.5411482 6.45166777,10.5214177 C6.11715106,10.43812 5.87028403,10.1381217 5.86626366,9.78012313 C5.86396444,9.57800011 5.94261504,9.38334561 6.08471869,9.23958959 C6.22682234,9.09583357 6.42055461,9.01493796 6.62269129,9.01495163 L6.62269129,9.01495163 L9.26121372,9.01495163 L9.26121372,6.61389622 C9.27067438,6.19186946 9.61307298,5.85336175 10.0351803,5.84872469 Z" transform="translate(2 2)"/></svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  {{ formState.id !== null ? 'Editar' : 'Crear'}} parametro
                </h3>
                <div class="mt-2">
                  <div class="grid grid-cols-1 space-y-4">
                    <div>
                      <label for="clave" class="block text-sm font-medium text-gray-700">Clave</label>
                      <input
                        type="text"
                        name="clave"
                        id="clave"
                        v-model="formState.clave"
                        placeholder="Introduzca la clave"
                        class="mt-1 p-2 bg-gray-100 focus:ring-indigo-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-red-600 rounded-md"
                      >
                    </div>

                    <div>
                      <label for="valor" class="block text-sm font-medium text-gray-700">Valor</label>
                      <input
                        type="text"
                        name="valor"
                        id="valor"
                        v-model="formState.valor"
                        placeholder="Introduzca el valor"
                        class="mt-1 p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Guardar cambios
            </button>
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="closeModalForm()"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive } from 'vue'

  const formState = reactive({
    id: null,
    clave: '',
    valor: '',
  });

  const params = ref([]);
  const modalForm = ref(false);
  // const clave = ref('');
  // const valor = ref('');

  onMounted(async () => {
    console.log('parametros mounted!')
    fetchParametros();
  })

  const fetchParametros = async () => {
    const parametros = await fetch(`http://localhost:8081/api/admin/parametro`).then(r => r.json())
    console.log('Parametros obtenidos de servicio :: ', parametros);
    params.value = parametros;
  }

  const openModalForm = () => modalForm.value = true;
  const closeModalForm = () => modalForm.value = false;

  const onEditItem = (params) => {
    const tmpParam = {...params}
    formState.id = tmpParam['id']
    formState.clave = tmpParam['clave']
    formState.valor = tmpParam['valor']
    openModalForm()
  }

  const onDeleteItem = async (itemId) => {
    const confirmResult = confirm('hoy es lunes ?');
    if (confirmResult) {
      const data = await fetch(`http://localhost:8081/api/admin/parametro/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(r => r.json());

      console.log('data eliminacion :::: ', data);

      fetchParametros();
    }
  }

  const saveParametro = async () => {
    if (formState.id !== null) {
      console.log('isEditiing');
      const dataUpdating = await fetch(`http://localhost:8081/api/admin/parametro/${formState.id}`, {
        method: 'PUT',
        // mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "clave": formState.clave,
          "valor" : formState.valor,
          "estado": "ACTIVO"
        })
      }).then(r => r.json());

      console.log('data actualizacion :::: ', dataUpdating);
    } else {
      console.log('isCreating');
      const data = await fetch("http://localhost:8081/api/admin/parametro", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "clave": formState.clave,
          "valor" : formState.valor,
          "estado": "ACTIVO"
        })
      }).then(r => r.json());

      console.log('datita :::: ', data);
    }
    closeModalForm();
    fetchParametros();
  }



</script>