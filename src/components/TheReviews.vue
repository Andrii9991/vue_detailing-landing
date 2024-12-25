<template>
  <div class="base-reviews">
    <div class="reviews-carousel">
      <h1 class="reviews-title">ВІДГУКИ ПРО НАС</h1>
      <carousel
        class="reviews-carousel__wrapper"
        v-model="currentSlide"
        :perPage="widthWindow"
        :paginationEnabled="false"
        :loop="true"
        :minSwipeDistance="1"
        :centerMode="true"
        :autoplay="true"
        :autoplayTimeout="8000"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <slide
          class="item-content"
          v-for="item in reviewsImages"
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
  name: "TheReviews",
  components: {
    Carousel,
    Slide,
  },

  data() {
    return {
      reviewsImages: [
        {
          image: require("@/assets/reviews/1.jpg"),
          alt: "фото з відгуком",
        },
        {
          image: require("@/assets/reviews/2.jpg"),
          alt: "фото з відгуком",
        },
        {
          image: require("@/assets/reviews/3.jpg"),
          alt: "фото з відгуком",
        },
        {
          image: require("@/assets/reviews/4.jpg"),
          alt: "фото з відгуком",
        },
        {
          image: require("@/assets/reviews/5.jpg"),
          alt: "фото з відгуком",
        },
      ],
      currentSlide: 1,
      widthWindow: 3,
    };
  },

  methods: {
    onResize() {
      let innerWidth = document.documentElement.clientWidth;
      if (innerWidth <= 1200 && innerWidth > 767) {
        this.widthWindow = 2;
      } else if (innerWidth <= 767) {
        this.widthWindow = 1;
      }
    },
  },

  async mounted() {
    this.onResize();
  },
};
</script>

<style scoped lang="scss">
.base-reviews {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(26, 26, 26);
  padding: 36px 24px;
  width: 100%;
  height: 100vh;
  @media (max-width: 489px) {
    padding: 24px 16px;
  }

  .reviews-carousel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    text-align: center;

    .reviews-title {
      color: white;

      @media (max-width: 767px) {
        font-size: 32px;
      }
      @media (max-width: 489px) {
        font-size: 24spx;
      }
    }

    &__wrapper {
      min-height: 300px;
      border-radius: 24px;
      margin: 16px;
      @media (max-width: 1200px) {
        max-width: 700px;
      }

      @media (max-width: 767px) {
        max-width: 400px;
      }

      @media (max-width: 489px) {
        max-width: 300px;
      }

      &:hover {
        cursor: pointer;
      }
      .item-content {
        padding: 10px 0;
        border-radius: 16px;
        @media (max-width: 489px) {
          max-width: 300px;
        }

        .image-wpapper__item {
          box-shadow: -1px 2px 7px 2px black;
          margin: 8px;
          width: 245px;
          height: 380px;
          transition: 0.5s;

          @media (max-width: 489px) {
            width: 190px;
            height: auto;
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
