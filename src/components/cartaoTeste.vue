<template>
  <div class="row col-12 col-md-12 q-pa-md justify-center">
    <div class=" cartaoTeste ">
      <div class="bandeiraTeste">
        <img src="../../public/imgs/MasterCard_Logo.svg.png" alt="bandeiraCartao">
      </div>

      <div class="chipTeste">
        <img src="../../public/imgs/chip.png" alt="bandeiraCartao">
      </div>

      <div class="numeroTeste">
        0000 0000 0000 0000
      </div>

      <div class="nomeTeste">
       Gustavo Olivera de Moura
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.cartaoTeste{
  width: 450px;
  height: 250px;
  border-radius: 25px;
  background-color: blue;
}

.bandeiraTeste img{
  width: 80px;
  height: 50px;
  position: absolute;
  right: 150px;
  top: 50px;
}

.chipTeste img{
  width: 50px;
  height: 50px;

  position: absolute;
  left: 150px;
  top: 100px;
}


</style>
