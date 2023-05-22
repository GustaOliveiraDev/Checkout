import { defineStore } from "pinia";

export const useCheckoutStore = defineStore("Checkout", {
  state: () => {
    return {
      vezes: null,
      formCard: {
        numberCard: "",
        nameCard: "",
        validadeCard: "",
        cvvCard: "",
        bandeira: "",
        cpf: "",
        parcelas: "",
      },
    };
  },
});
