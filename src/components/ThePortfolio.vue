<template>
  <div class="base-portfolio" id="portfolio">
    <div class="portfolio-carousel">
      <h1 class="portfolio-title">ПРИКЛАДИ НАШИХ РОБІТ</h1>
      <carousel
        class="portfolio-carousel__wrapper"
        v-model="currentSlide"
        :perPage="1"
        :loop="true"
        :minSwipeDistance="1"
        :centerMode="true"
        :autoplayTimeout="8000"
        :navigationEnabled="true"
        paginationActiveColor="#007cb9"
        paginationPosition="bottom-overlay"
      >
        <slide
          class="item-content"
          v-for="item in portfolioImages"
          :key="item.image"
        >
          <img class="image-wpapper__item" :src="item.image" :alt="item.alt" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "ThePortfolio",
  components: {
    Carousel,
    Slide,
  },

  data() {
    return {
      portfolioImages: [
        {
          image: require("@/assets/portfolio/1.svg"),
          alt: "фото з портфоліо",
        },
        {
          image: require("@/assets/portfolio/2.svg"),
          alt: "фото з портфоліо",
        },
        {
          image: require("@/assets/portfolio/3.svg"),
          alt: "фото з портфоліо",
        },
        {
          image: require("@/assets/portfolio/4.svg"),
          alt: "фото з портфоліо",
        },
        {
          image: require("@/assets/portfolio/5.svg"),
          alt: "фото з портфоліо",
        },
        {
          image: require("@/assets/portfolio/6.svg"),
          alt: "фото з портфоліо",
        },
        {
          image: require("@/assets/portfolio/7.svg"),
          alt: "фото з портфоліо",
        },
      ],
      currentSlide: 0,
    };
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
  opacity: 0;
  animation: fadeIn 4s forwards;
  @media (max-width: 489px) {
    padding: 24px 16px;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
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
      border-radius: 24px;
      width: 940px;
      margin: 16px;

      &:hover {
        cursor: pointer;
      }

      .item-content {
        padding: 10px 0;
        border-radius: 16px;
        height: 550px;
        width: auto;

        @media (max-width: 767px) {
          height: 350px;
        }

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
