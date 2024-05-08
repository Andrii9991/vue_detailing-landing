<template>
  <div class="services-wrapper" id="services">
    <div class="services">
      <h1 class="services__title">НАШІ ПОСЛУГИ</h1>
      <div class="services__cards">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-item"
          :class="{ active: service.active }"
        >
          <h2 class="item-title">{{ service.title }}</h2>
          <div class="wrapper-image">
            <img class="image" :src="service.images" :alt="service.title" />
          </div>
          <div class="actions">
            <BaseButton
              :isDisabled="disabledButton"
              class="accept-button"
              label="Замовити послугу"
              size="small"
              href="#contacts"
              styleButton="white"
            ></BaseButton>
            <BaseButton
              @click.native="toggleDescription(service)"
              class="description-button"
              :label="service.active ? 'Закрити' : 'Детальніше'"
              styleButton="blue"
              size="small"
            ></BaseButton>
          </div>

          <div class="service-description" :class="{ active: service.active }">
            <strong>{{ service.description }}</strong>
          </div>
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
      this.services = response.data.map((service) => ({
        ...service,
        active: false,
      }));
    },

    toggleDescription(selectedService) {
      this.services.forEach((service) => {
        if (service === selectedService) {
          service.active = !service.active;
        } else {
          service.active = false;
        }
      });
    },

    onOpenModal() {
      this.$store.commit("modal/setOpenModal");
    },
  },

  async mounted() {
    await this.getAllServices();
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
        grid-template-columns: repeat(auto-fill, minmax(400px, 50%));
        justify-content: center;
      }

      @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 50%));
        justify-content: center;
      }

      .service-item {
        text-align: center;
        position: relative;
        margin: 16px;
        box-shadow: 0 0 0 2px black inset;
        transition: 0.5s;
        height: 250px;
        overflow: hidden;

        &.active {
          background-color: $black;
        }

        .item-title {
          position: absolute;
          width: 100%;
          top: 10%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          color: white;
          margin: 16px 0;
        }

        .actions {
          position: absolute;
          display: flex;
          width: 100%;
          justify-content: space-around;
          bottom: 10px;
          display: flex;
          justify-content: space-around;

          @media (max-width: 992px) {
            flex-direction: column;
          }
          .description-button {
            z-index: 8;
          }
        }

        .service-description {
          text-align: left;
          padding: 16px 20px;
          position: absolute;
          bottom: -100%;
          z-index: 7;
          transition: 0.2s;
          background-color: $grey;
          color: white;
          transition: all 0.5s;

          &.active {
            top: 0;
          }
        }

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
              transform: scale(1.05);
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
          // transform: translateY(-10px);
          box-shadow: 0 0 0 1px orange inset;
        }
      }
    }
  }
}
</style>
