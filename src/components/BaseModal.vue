<template>
  <div class="base-modal">
    <div class="base-modal__container">
      <h1 class="modal-title">Залишіть заявку</h1>
      <h3 class="modal-subtitle">Менеджер зв'яжеться з вами найблищим часом</h3>

      <form class="modal-form" @submit.prevent="onSubmit">
        <fieldset class="input-border">
          <label for="name"> <strong>Ваше ім'я</strong> </label>
          <input type="text" placeholder="Ім'я" v-model="name" />
        </fieldset>
        <fieldset class="input-border">
          <label for="phone"> <strong>Номер телефону</strong> </label>

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
          styleButton="blue"
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
        const telegramAPI =
          "https://api.telegram.org/bot6818318370:AAHSpjQuef4aJW9EemQxwWoouCPQDws1N10/sendMessage";

        const messageText = `Ім'я: ${this.name}\nНомер телефону: ${this.phone}`;

        const data = {
          chat_id: "-1002102183532",
          text: messageText,
        };

        axios
          .post(telegramAPI, data)
          .then((response) => {
            console.log("Повідомлення відправлено успішно:", response.data);
            this.$toast.open({
              message: "Заявка відправлена успішно, очікуйте дзвінка!",
              duration: 2000,
              position: "top-right",
            });
          })
          .catch((error) => {
            console.error("Помилка під час відправки повідомлення:", error);
            this.$toast.default({
              message: "Щось пішло не так!",
              duration: 2000,
              position: "top-right",
            });
          });

        this.$store.commit("modal/setOpenModal");
      } else {
        console.log("Поля пусті");
      }

      if (this.disabledButton) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
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
  top: 70px;
  bottom: 50px;
  left: calc(50% - 250px);
  border-radius: 8px;
  background-color: black;
  color: white;
  z-index: 10;

  @media (max-width: 520px) {
    width: 350px;
    left: calc(50% - 185px);
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
      text-align: center;
      width: 80%;
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
