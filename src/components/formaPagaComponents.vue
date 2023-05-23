<template>
  <div class="col-12 col-md-12 q-pa-md q-gutter-y-md">
    <div class="row col-12 col-md-12 q-pa-md  justify-center border">
      <img class="pagamentoImg" src="../../public/imgs/masterCadendVisa.png" height="100" width="300" alt="bandeiras Cartão">
      <q-radio class="row col-12 col-md-12 q-pa-md justify-center" v-model="useCheckout.vezes" val="Cartão de credito 1X"
        label="Cartão de credito" />
    </div>
    <div class="row col-12 col-md-12 q-pa-md justify-center border">
      <img class="pagamentoImg" src="../../public/imgs/masterCadendVisa.png" height="100" width="300" alt="bandeiras Cartão">
      <q-radio class="row col-12 col-md-12 q-pa-md justify-center" v-model="useCheckout.vezes" val="Cartão de debito 1X"
        label="Cartão de debito" />
    </div>
  </div>
</template>

<script>
import { useCheckoutStore } from 'src/stores/checkout.store';
export default {
  setup() {
    const useCheckout = useCheckoutStore()
    return {
      useCheckout,
    }
  }
}
</script>

<style>
.border {
  border: 1px solid black;
  border-radius: 20px;
}

</style>
