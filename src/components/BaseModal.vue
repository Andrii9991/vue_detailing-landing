<template>
  <div class="base-modal">
    <div class="base-modal__container">
      <h1 class="modal-title">Залиште заявку</h1>
      <h3 class="modal-subtitle">Менеджер зв'яжеться з вами найблищим часом</h3>

      <form class="modal-form" @submit.prevent="onSubmit">
        <fieldset class="input-border">
          <label for="name">Ваше ім'я</label>
          <input type="text" placeholder="Ім'я" v-model="name" />
        </fieldset>
        <fieldset class="input-border">
          <label for="phone">Номер телефону</label>

          <input type="phone" placeholder="+380" v-model="phone" />
        </fieldset>

        <BaseButton
          class="accept-button"
          label="Залишити заявку"
          size="big"
          styleButton="margin"
        />
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import axios from "axios";
export default {
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

  // methods: {
  //   onSubmit() {

  //     const token = "7098972697:AAEVGCTgXpqmBXFkIBZS64JEw1e776WsW5o";
  //     const CHAT_ID = " -1002133912380";
  //     const URI_API = `https://api.telegram.org/bot${token}/sendMessage`;

  //     const messageText = `<b>Заявка з сайту</b>`;

  //     axios.post(URI_API, {
  //       chat_id: CHAT_ID,
  //       parse_mode: "html",
  //       text: messageText,
  //     });
  //   },
  // },
  methods: {
    onSubmit() {
      // URL для відправки повідомлення в Телеграм
      const telegramAPI =
        "https://api.telegram.org/bot7098972697:AAEVGCTgXpqmBXFkIBZS64JEw1e776WsW5o/sendMessage";

      // Текст повідомлення, який ви хочете відправити
      const messageText = `Ім'я: ${this.name}\nНомер телефону: ${this.phone}`;

      // Об'єкт з даними, які будуть відправлені через POST запит
      const data = {
        chat_id: "-1002133912380", // ID вашого чату у Телеграм
        text: messageText,
      };

      // Виконуємо POST запит до API Телеграм з використанням Axios
      axios
        .post(telegramAPI, data)
        .then((response) => {
          console.log("Повідомлення відправлено успішно:", response.data);
          // Додайте тут будь-які додаткові дії після успішного відправлення повідомлення
        })
        .catch((error) => {
          console.error("Помилка під час відправки повідомлення:", error);
          // Додайте тут обробку помилок, якщо потрібно
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.base-modal {
  position: fixed;
  padding: 20px;
  width: 500px;
  height: 450px;
  top: 100px;

  left: calc(50% - 250px);
  border-radius: 8px;
  z-index: 1;
  background-color: black;
  color: white;

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
        padding: 12px;
        margin: 8px 0;
      }
    }

    .accept-button {
      width: 100%;
    }
  }
}
</style>
