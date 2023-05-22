<template>
  <q-page>
    <div class="row col-12 col-md-12 q-pa-md">
      <div class=" col-12 col-md-8 q-pa-md">
        <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
          <q-step :name="1" title="Formas de pagamento" icon="fa-regular fa-circle" :done="done1">
            <formaPagaComponents />
            <q-stepper-navigation>
              <q-btn @click="() => { done1 = true; step = 2 }" :disabled="!useCheckout.vezes" color="primary"
                label="Continuar" />
            </q-stepper-navigation>
          </q-step>
          <q-step :name="2" title="Dados do pagamento" caption="Optional" icon="fa-regular fa-circle" :done="done2">
            <cartaoComponents />
            <q-stepper-navigation>
              <q-btn flat @click="step = 1" color="primary" label="Voltar" class="q-ml-sm" />
              <q-btn @click="() => { done2 = true; step = 3 }" color="primary" :disabled="!useCheckout.formCard.numberCard
                || !useCheckout.formCard.nameCard
                || !useCheckout.formCard.cpf
                || !useCheckout.formCard.validadeCard
                || !useCheckout.formCard.cvvCard" label="Continuar" />
            </q-stepper-navigation>
          </q-step>
          <q-step :name="3" title="Revisão" icon="fa-regular fa-circle" :done="done3">
            <revisaoComponents />
            <q-stepper-navigation>
              <q-btn flat @click="step = 2" color="primary" label="Voltar" class="q-ml-sm" />
              <q-btn color="primary" @click="done3 = true; step = 4" label="Continuar" />
            </q-stepper-navigation>
          </q-step>
          <q-step :name="4" icon="fa-regular fa-circle" :done="done4">
            <cuncluidoComponents />
            <q-stepper-navigation>
              <q-btn color="primary" label="Finalizar" @click="reloadPage" />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
      <div class=" col-12 col-md-4 q-pa-md">
        <detalhesConponents />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useCheckoutStore } from 'src/stores/checkout.store';
import formaPagaComponents from 'src/components/formaPagaComponents.vue'
import detalhesConponents from '../components/detalhesConponents.vue'
import cartaoComponents from '../components/cartaoComponents.vue'
import revisaoComponents from 'src/components/revisaoComponents.vue';
import cuncluidoComponents from '../components/cuncluidoComponents.vue'

export default {
  name: 'IndexPage',
  components: {
    detalhesConponents,
    formaPagaComponents,
    cartaoComponents,
    revisaoComponents,
    cuncluidoComponents,
  },
  methods: {
    reloadPage() {
      location.reload();
    }
  },
  setup() {
    const useCheckout = useCheckoutStore()
    return {
      step: ref(1), useCheckout
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f0f0f0;
}
</style>
