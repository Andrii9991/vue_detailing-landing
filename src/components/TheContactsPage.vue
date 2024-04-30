<template>
  <div class="contacts" id="contacts">
    <div class="contacts__container">
      <div class="contact-left">
        <h1 class="title">Контакти</h1>
        <ul class="contact-list">
          <li class="list-item">
            <i
              class="pi pi-map-marker"
              style="font-size: 1.4rem; color: orange"
            ></i>

            <a
              href="https://www.google.com.ua/maps/place/%D0%94%D0%B5%D1%82%D0%B5%D0%B9%D0%BB%D1%96%D0%BD%D0%B3+%D1%81%D1%82%D1%83%D0%B4%D1%96%D1%8F+%C2%ABDestup%C2%BB/@49.5369738,25.5192715,17z/data=!3m1!4b1!4m6!3m5!1s0x473037c4aa60da59:0xe17025d4708c2ee4!8m2!3d49.5369703!4d25.5218464!16s%2Fg%2F11vs977h3w?hl=ru&entry=ttu"
              ><strong>м.Тернопіль, Підгороднє,</strong>
              <p>вул. Тараса Шевченка</p></a
            >
          </li>
          <li class="list-item">
            <i
              class="pi pi-envelope"
              style="font-size: 1.4rem; color: orange"
            ></i>
            <strong>
              <a
                href="https://www.google.com/maps/place/%D0%9F%D1%96%D0%B4%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D0%B5,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+46003/@49.5263304,25.5241389,13z/data=!4m6!3m5!1s0x47303703b8031499:0xee0e92336b8ffcce!8m2!3d49.5355598!4d25.5276081!16s%2Fg%2F121y51s6?entry=ttu"
                >stup@gmail.com</a
              >
            </strong>
          </li>
          <li class="list-item">
            <i class="pi pi-phone" style="font-size: 1.4rem; color: orange"></i>
            <a href="+380 98 459 70 64">
              <strong>+380 98 459 70 64</strong>
            </a>
          </li>
        </ul>
        <h5>
          <strong>Підписуйтесь</strong> на наші соціальні мережі, тут ви зможете
          переглядати наші роботи в деталях та дізнаватись про наші акції
          першими
        </h5>
        <ul class="social-list">
          <li class="social-item">
            <a href="https://www.instagram.com/de_stup?igsh=N21wc3g2cHFid3Jh">
              <i class="pi pi-instagram" style="font-size: 1.7rem"></i>
            </a>
          </li>
          <li class="social-item">
            <a href="https://t.me/stup44">
              <i class="pi pi-telegram" style="font-size: 1.7rem"></i>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.tiktok.com/@de_stup?_t=8lvesgA2XB7">
              <i class="pi pi-tiktok" style="font-size: 1.7rem"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="input-right">
        <h1 class="right-title">Зв'язок з нами</h1>
        <form class="contacts-form" @submit.prevent="onSubmit">
          <input v-model="name" type="text" placeholder="Ваше ім'я" />
          <input
            v-model="phone"
            v-maska
            data-maska="+380-(##)-##-##-###"
            type="phone"
            placeholder="Тел. +380-(_ _)__ __ ___"
          />
          <input v-model="mark" type="name" placeholder="Рік та модель авто" />
          <input v-model="comment" type="text" placeholder="Коментар" />

          <BaseButton
            class="confirm-button"
            styleButton="orange"
            label="Відправити"
            :isDisabled="disabledButton"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

import { vMaska } from "maska";
import axios from "axios";

export default {
  components: { BaseButton },
  name: "TheContactsPage",
  directives: { maska: vMaska },
  data() {
    return {
      name: "",
      phone: "",
      mark: "",
      comment: "",
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
          "https://api.telegram.org/bot7098972697:AAEVGCTgXpqmBXFkIBZS64JEw1e776WsW5o/sendMessage";

        const messageText = `Ім'я: ${this.name}\nНомер телефону: ${this.phone}\n Марка авто: ${this.mark}\n Коментар: ${this.comment}`;

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

        this.name = "";
        this.phone = "";
        this.mark = "";
        this.comment = "";
      } else {
        console.log("Поля пусті");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 100px;
  width: 100%;
  height: 100vh;
  padding: 16px;
  background: url(../assets/test.jpg) no-repeat center;
  background-color: rgba(26, 26, 26, 1);

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1020px;
    height: 100vh;
    color: white;

    @media (max-width: 829px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 100%;
    }

    .contact-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      max-width: 400px;
      @media (max-width: 829px) {
        text-align: center;
      }

      .contact-list {
        width: 100%;
      }

      .social-list {
        margin-top: 30px;
        display: flex;
        text-align: left;
        width: 100%;
        @media (max-width: 829px) {
          justify-content: center;
          margin-bottom: 36px;
        }

        .social-item {
          margin-right: 20px;

          @media (max-width: 829px) {
            margin: 0 20px;
          }
        }
      }

      h5 {
        width: 100%;
        text-align: left;

        @media (max-width: 829px) {
          text-align: center;
        }
      }
      p {
        margin-left: 34px;
      }

      ul {
        list-style-type: none;
        margin: 20px 0;
      }

      li {
        margin: 16px 0;
      }

      a {
        transition: 0.2s;
        color: white;
        &:hover {
          color: orange;
        }
      }

      i {
        margin-right: 12px;
      }
    }

    .input-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      // width: 50%;
      @media (max-width: 829px) {
        margin-bottom: 100px;
        padding: 16px 24px;
      }

      .right-title {
        margin-bottom: 20px;
        width: 100%;
      }

      .contacts-form {
        display: flex;
        flex-direction: column;

        input {
          width: 400px;
          margin: 16px;
          font-size: 20px;
          padding: 10px;
          border: none;

          @media (max-width: 829px) {
            width: 300px;
            margin-bottom: 8px;
          }
        }

        .confirm-button {
          margin-top: 16px;
        }
      }
    }

    a {
      color: black;
    }
  }
}
</style>
