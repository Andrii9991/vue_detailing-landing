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
          <i class="pi pi-wrench" style="font-size: 2rem"> </i>
          <h2 class="item-title">{{ service.title }}</h2>
          <img :src="service.images" alt="" />
          <p class="item-text">
            <strong>{{ service.description }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TheServices",
  data() {
    return {
      services: [],
    };
  },

  methods: {
    async getAllServices() {
      const response = await axios.get(
        `https://vue-de-stup-default-rtdb.europe-west1.firebasedatabase.app/services.json`
      );
      this.services = response.data;
    },
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      .service-item {
        text-align: center;
        padding: 20px 40px;
        margin: 16px;
        border-radius: 8px;
        box-shadow: 0 0 0 1px black inset;
        transition: 0.5s;
        height: 350px;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-y: auto;
        .pi {
          margin: 8px 0;
        }

        .item-title {
          margin: 16px 0;
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
.service-item::-webkit-scrollbar {
  width: 8px; /* Ширина прокрутки */
  height: 90px;
  border-radius: 8px;
}

.service-item::-webkit-scrollbar-track {
  background: #f1f1f1; /* Колір фону треку */
}

.service-item::-webkit-scrollbar-thumb {
  background: #888; /* Колір смуги прокрутки */
  border-radius: 8px; /* Радіус кутів смуги прокрутки */
}

.service-item::-webkit-scrollbar-thumb:hover {
  background: #555; /* Колір смуги прокрутки при наведенні миші */
}
</style>
