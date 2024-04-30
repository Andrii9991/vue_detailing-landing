<template>
  <div class="base-modal">
    <div class="base-modal__container">
      <h1 class="modal-title">Залишіть заявку</h1>
      <h3 class="modal-subtitle">Менеджер зв'яжеться з вами найблищим часом</h3>

      <form class="modal-form" @submit.prevent="onSubmit">
        <fieldset class="input-border">
          <label for="name">Ваше ім'я</label>
          <input type="text" placeholder="Ім'я" v-model="name" />
        </fieldset>
        <fieldset class="input-border">
          <label for="phone">Номер телефону</label>

          <input
            type="phone"
            placeholder="+380"
            v-model="phone"
            v-maska
            data-maska="+380-(##)-##-##-###"
          />
        </fieldset>

        <BaseButton
          class="accept-button"
          label="Залишити заявку"
          size="big"
          styleButton="margin"
          :isDisabled="disabledButton"
        />
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import { vMaska } from "maska";
import axios from "axios";
export default {
  directives: { maska: vMaska },
  name: "BaseModal",
  components: {
    BaseButton,
  },

  data() {
    return {
      name: "",
      phone: "",
    };
  },

  computed: {
    disabledButton() {
      return this.name === "" || this.phone === "" || this.phone.length < 19;
    },
  },

  methods: {
    onSubmit() {
      if (this.name !== "" && this.phone !== "") {
        this.disabledButton = !this.disabledButton;

        const telegramAPI =
          "https://api.telegram.org/bot7098972697:AAEVGCTgXpqmBXFkIBZS64JEw1e776WsW5o/sendMessage";

        const messageText = `Ім'я: ${this.name}\nНомер телефону: ${this.phone}`;

        const data = {
          chat_id: "-1002133912380",
          text: messageText,
        };

        axios
          .post(telegramAPI, data)
          .then((response) => {
            console.log("Повідомлення відправлено успішно:", response.data);
          })
          .catch((error) => {
            console.error("Помилка під час відправки повідомлення:", error);
          });

        this.$store.commit("modal/setOpenModal");
        this.disabledButton = !this.disabledButton;
      } else {
        console.log("Поля пусті");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.base-modal {
  position: fixed;
  padding: 20px;
  margin: 8px;
  width: 500px;
  // height: 450px;
  top: 100px;
  left: calc(50% - 250px);
  border-radius: 8px;
  z-index: 102;
  background-color: black;
  color: white;

  @media (max-width: 520px) {
    width: 350px;
    left: calc(50% - 175px);
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;

    .modal-title {
      margin-bottom: 16px;
    }

    .modal-subtitle {
      margin-bottom: 16px;
    }

    .close {
      position: absolute;
      top: 4px;
      right: 6px;

      &:hover {
        cursor: pointer;
      }
    }

    .modal-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 24px;

      .input-border {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
        padding: 8px;
        border-radius: 8px;
        border: none;
      }
      input {
        height: 20px;
        border-radius: 8px;
        padding: 20px 12px;
        margin: 8px 0;
      }
    }

    .accept-button {
      width: 100%;
    }
  }
}
</style>
