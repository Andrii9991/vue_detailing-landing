<template>
  <div class="services-wrapper" id="services">
    <div class="services">
      <h1 class="services__title">Наші послуги</h1>
      <div class="services__cards">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-item"
        >
          <h2 class="item-title">{{ service.title }}</h2>
          <div class="wrapper-image">
            <img class="image" :src="service.images" alt="" />
          </div>
          <BaseButton
            @click.native="test"
            class="button"
            label="Замовити послугу"
          ></BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseButton from "./BaseButton.vue";
import { mapState } from "vuex";

export default {
  name: "TheServices",
  components: {
    BaseButton,
  },
  data() {
    return {
      services: [],
    };
  },

  computed: {
    ...mapState({
      disabledButton: (state) => state.modal.isOpened,
    }),
  },

  methods: {
    async getAllServices() {
      const response = await axios.get(
        `https://vue-de-stup-default-rtdb.europe-west1.firebasedatabase.app/services.json`
      );
      this.services = response.data;
    },
  },

  test() {
    // this.$store.commit("modal/setOpenModal");
    console.log("ss");
  },

  async mounted() {
    await this.getAllServices();
    console.log(this.services);
  },
};
</script>

<style lang="scss" scoped>
.services-wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;

  .services {
    width: 1240px;

    &__title {
      text-align: center;
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
      @media (max-width: 797px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 50%));
        justify-content: center;
      }

      .service-item {
        text-align: center;
        // padding: 20px 40px;
        position: relative;
        margin: 16px;
        border-radius: 8px;
        box-shadow: 0 0 0 1px black inset;
        transition: 0.5s;
        height: 250px;
        overflow: hidden;

        .pi {
          margin: 8px 0;
        }

        .item-title {
          position: absolute;
          width: 100%;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          color: white;

          margin: 16px 0;
        }

        .button {
          position: absolute;
          // display: none;
          z-index: 2;
          width: 70%;
          transform: translate(-50%, -50%);
          bottom: 10%;
          left: 50%;
          transition: 0.5s;
        }

        // &:hover {
        //   .button {
        //     display: block; // Показуємо кнопку при наведенні на .service-item
        //   }
        // }

        .wrapper-image {
          display: flex;
          justify-content: center;
          align-items: center;
          .image {
            width: 100vh;
            height: 300px;
            filter: brightness(30%);
            transition: 0.5s;

            &:hover {
              filter: brightness(50%);
            }
          }
        }

        .item-text {
          text-align: left;
          margin: 16px 0;
          color: grey;
        }

        &:hover {
          cursor: pointer;
          transform: translateY(-10px);
          box-shadow: 0 0 0 1px orange inset;
        }
      }
    }
  }
}
// .service-item::-webkit-scrollbar {
//   width: 8px; /* Ширина прокрутки */
//   height: 90px;
//   border-radius: 8px;
// }

// .service-item::-webkit-scrollbar-track {
//   background: #f1f1f1; /* Колір фону треку */
// }

// .service-item::-webkit-scrollbar-thumb {
//   background: #888; /* Колір смуги прокрутки */
//   border-radius: 8px; /* Радіус кутів смуги прокрутки */
// }

// .service-item::-webkit-scrollbar-thumb:hover {
//   background: #555; /* Колір смуги прокрутки при наведенні миші */
// }
</style>
