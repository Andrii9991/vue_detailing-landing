<template>
  <div class="base-reviews">
    <div class="home-carousel">
      <h1 class="reviews-title">Відгуки наших клієнтів</h1>
      <carousel
        class="home-carousel__wrapper"
        v-model="currentSlide"
        :perPage="widthWindow"
        :paginationEnabled="false"
        :loop="true"
        :minSwipeDistance="1"
        :centerMode="true"
      >
        <slide class="item-content" v-for="image in reviewsImages" :key="image">
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
  name: "TheReviews",
  components: {
    Carousel,
    Slide,
  },

  data() {
    return {
      reviewsImages: [],
      currentSlide: 1,
      widthWindow: 3,
    };
  },

  methods: {
    async getAllReviews() {
      const response = await axios.get(
        `https://vue-de-stup-default-rtdb.europe-west1.firebasedatabase.app/reviews.json`
      );
      let reviews = [];
      reviews = response.data;

      const images = reviews.map((item) => item.image);

      this.reviewsImages = [...images];
    },

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
    await this.getAllReviews();
    this.onResize();

    console.log(document.documentElement.clientWidth);
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

  .home-carousel {
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
          width: 250px;
          height: 350px;
          transition: 0.5s;

          @media (max-width: 489px) {
            width: 190px;
            height: 280px;
          }

          &:hover {
            transform: scale(0.95);
          }
        }
      }
    }
  }
  // &__container {
  //   width: 1200px;
  //   height: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   align-items: center;

  //   .reviews-title {
  //     color: white;
  //   }
  // }

  //   .reviews-carousel__wrapper {
  //     width: 100vh;
  //     height: 400px;

  //     .item-content {
  //       display: flex;
  //       align-content: center;
  //       justify-content: center;
  //       width: 100vh;

  //       .image-wpapper__item {
  //         display: flex;
  //         text-align: center;
  //         height: 400px;
  //         width: 270px;
  //         margin: 10px;
  //         box-shadow: -2px 5px 10px 2px black;
  //         @media (max-width: 1200px) {
  //           height: 350px;
  //           width: 230px;
  //         }

  //         @media (max-width: 992px) {
  //           height: 300px;
  //           width: 180px;
  //         }

  //         // @media (max-width: 767px) {
  //         //   height: 350px;
  //         //   width: 220px;
  //         // }
  //       }
  //     }
  //   }
  // }
}
</style>
