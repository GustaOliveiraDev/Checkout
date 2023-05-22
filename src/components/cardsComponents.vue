<template>
  <div class="col-12 col-md-12 q-pa-md  ">

  <div class="col-12 col-md-12 q-pa-md cardsContainer ">
    <div>
      <img class="img" src="../../public/imgs/masterCadendVisa.png" alt="">
    </div>
    <div class="select">
      <input v-model="Vezes.$state.vezes" type="radio" value="Cartão de credito 1X">
      <label for="">
        Catao de credito
      </label>
    </div>
  </div>

  <div class="col-12 col-md-12 q-pa-md cardsContainer ">
    <div>
      <img class="img" src="../../public/imgs/masterCadendVisa.png" alt="">
    </div>
    <div class="select">
      <input v-model="Vezes.$state.vezes" type="radio" value="Cartão de debito 1X">
      <label for="">
        Catao de debito
      </label>
    </div>
  </div>


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

<style>
.cardsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3em;
  width: 600px;

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.img {
  width: 150px;
  height: 60px;
}

.select {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
