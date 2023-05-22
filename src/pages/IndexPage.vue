<template>
  <q-page>
    <div class="row col-12 col-md-12 q-pa-md">

      <div class=" col-12 col-md-8 q-pa-md">

        <q-stepper class="" v-model="step" ref="stepper" alternative-labels color="primary" animated>
          <q-step :name="1" title="Forma de pagamento" icon="settings" :done="step > 1">
            <cardsComponents />

          </q-step>

          <q-step :name="2" title="Dados de pagamento" icon="create_new_folder" :done="step > 2">
            <cartaoTeste />
          </q-step>

          <q-step :name="3" title="Revisão" icon="add_comment">

          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finish' : 'Continue'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back"
                class="q-ml-sm" />
            </q-stepper-navigation>
          </template>
        </q-stepper>

      </div>

      <div class="row col-12 col-md-4 q-pa-md">
        <detailsConponents />
      </div>
    </div>

  </q-page>
</template>

<script>
import { ref } from 'vue'
import detailsConponents from '../components/detailsConponents.vue'
import cardsComponents from 'src/components/cardsComponents.vue'
import { useVezesStore } from 'src/stores/example-store';
import cartaoComponents from '../components/cartaoComponents.vue'
import cartaoTeste from '../components/cartaoTeste.vue';
export default {
  name: 'IndexPage',
  components: {
    detailsConponents,
    cardsComponents,
    cartaoTeste,
    // cartaoComponents,
  },

  setup() {
    const Vezes = useVezesStore()
    return {
      step: ref(1), Vezes
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
