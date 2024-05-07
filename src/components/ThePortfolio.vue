<template>
  <div class="base-portfolio" id="portfolio">
    <div class="portfolio-carousel">
      <h1 class="portfolio-title">Приклади наших робіт</h1>
      <carousel
        class="portfolio-carousel__wrapper"
        v-model="currentSlide"
        :perPage="1"
        :loop="true"
        :minSwipeDistance="1"
        :centerMode="true"
        :autoplayTimeout="8000"
      >
        <slide
          class="item-content"
          v-for="image in portfolioImages"
          :key="image"
        >
          <img class="image-wpapper__item" :src="image" alt="product-image" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
export default {
  name: "ThePortfolio",
  components: {
    Carousel,
    Slide,
  },

  data() {
    return {
      portfolioImages: [],
      currentSlide: 4,
    };
  },

  methods: {
    async getAllPortfolioPhotos() {
      const response = await axios.get(
        `https://vue-de-stup-default-rtdb.europe-west1.firebasedatabase.app/portfolio.json`
      );
      let portfolioPhotos = [];
      portfolioPhotos = response.data;

      const images = portfolioPhotos.map((item) => item.image);

      this.portfolioImages = [...images];
    },
  },

  async mounted() {
    await this.getAllPortfolioPhotos();
  },
};
</script>

<style scoped lang="scss">
.base-portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(26, 26, 26);
  padding: 36px 24px;
  margin-bottom: 2px;
  width: 100%;
  height: 100%;
  @media (max-width: 489px) {
    padding: 24px 16px;
  }

  .portfolio-carousel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    text-align: center;
    max-width: 1200px;

    .portfolio-title {
      color: white;
      padding-top: 20px;

      @media (max-width: 767px) {
        font-size: 32px;
      }
      @media (max-width: 489px) {
        font-size: 24px;
      }
    }

    &__wrapper {
      min-height: 300px;
      border-radius: 24px;
      margin: 16px;

      &:hover {
        cursor: pointer;
      }
      .item-content {
        padding: 10px 0;
        border-radius: 16px;
        width: auto;

        .image-wpapper__item {
          box-shadow: -1px 2px 7px 2px black;
          margin: 8px;
          width: auto;
          max-height: 550px;
          transition: 0.5s;

          @media (max-width: 992px) {
            width: auto;
            height: 440px;
          }

          @media (max-width: 767px) {
            width: auto;
            height: 250px;
          }

          @media (max-width: 489px) {
            width: auto;
            height: 200px;
          }

          &:hover {
            transform: scale(0.95);
          }
        }
      }
    }
  }
}
</style>
