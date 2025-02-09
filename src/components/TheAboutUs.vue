<template>
  <div class="about-us" id="about-us">
    <div class="about-us__container">
      <div class="content">
        <h1 class="content__title">
          Найкраще місце детейлінгу Вашого авто в Тернополі
        </h1>

        <h3 class="content__subtitle">
          Ми надаємо весь спектр послуг детейлінгу як власникам нових
          автомобілів, так і для авто з пробігом.
        </h3>
        <div class="content__actions">
          <BaseButton
            class="coll"
            @click.native="isOpenModal"
            :isDisabled="disabledButton"
            href="#header"
            size="big"
            styleButton="white"
            label="Консультація"
          />
          <BaseButton
            class="portfolio"
            href="#portfolio"
            styleButton="blue"
            size="big"
            label="Приклади робіт"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import { mapState } from "vuex";

export default {
  components: { BaseButton },
  name: "TheAboutUs",

  data() {
    return {};
  },

  computed: {
    ...mapState({
      disabledButton: (state) => state.modal.isOpened,
    }),
  },

  methods: {
    isOpenModal() {
      this.$store.commit("modal/setOpenModal");
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
.about-us {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
  background: url(../assets/aboutUs.jpg) no-repeat center;
  background-color: rgba(0, 0, 0, 0.607);
  background-blend-mode: overlay;

  @media (max-width: 768px) {
    background: url(../assets/main.jpg) no-repeat center;
    background-blend-mode: overlay;
  }

  &__container {
    display: flex;
    width: 1240px;
    padding: 16px 24px;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      max-width: 660px;
      color: white;

      &__title {
        backdrop-filter: black;
        margin-bottom: 24px;

        @media (max-width: 767px) {
          font-size: 36px;
        }
        @media (max-width: 400px) {
          font-size: 32px;
        }
      }

      &__subtitle {
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
        font-family: "Titillium Web", sans-serif;
        @media (max-width: 767px) {
          font-size: 26px;
          line-height: 34px;
        }

        @media (max-width: 400px) {
          font-size: 16px;
        }
      }

      &__actions {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 36px;

        .coll {
          width: 100%;
        }

        .portfolio {
          width: 100%;
        }
      }
    }
  }
}
</style>
