<template>

    <q-card class="q-pa-lg">
      <div class="flex justify-between">
        Pedido (Gustavo Oliveira de Moura) detalhes
      </div>

      <q-separator />

      <div class="row justify-between q-my-md">
        <div  class="row ">
          <div class="bg-green q-mx-sm q-px-sm"> {{ useCheckout.vezes }}</div>
        </div>

        <div>
          R$ 10.00
        </div>

      </div>

      <q-separator />

      <div class="flex justify-between">
        <div>
          Subtotal
        </div>

        <div>
          R$ 10.00
        </div>
      </div>

      <div class="flex justify-between">
        <div>
          Tarifas
        </div>

        <div>
          R$ 0.00
        </div>

      </div>

      <q-separator />

      <div class="flex justify-between q-my-md">
        <div>
          Total
        </div>

        <div>
          R$ 10.00
        </div>
      </div>

    </q-card>

</template>

<script>
import { useCheckoutStore } from 'src/stores/checkout.store';
export default {
  setup() {
  const useCheckout = useCheckoutStore()
  return{
    useCheckout,
  }
}
}
</script>

<style></style>
