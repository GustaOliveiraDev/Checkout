<template>
  <div class="col-12 col-12-md ">
    <q-card class="q-pa-lg">
      <div class="flex justify-between">
        Pedido (Gustavo Oliveira de Moura) detalhes
      </div>

      <q-separator />

      <div class="row justify-between q-my-md">
        <div  class="row ">
          <div class="bg-grey-5 q-mx-sm q-px-sm"> {{ Vezes.vezes }}</div>
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
  </div>
</template>

<script>
import { useVezesStore } from 'src/stores/example-store';
export default {
  setup() {
  const Vezes = useVezesStore()
  return{
    Vezes,
  }
}
}
</script>

<style></style>
