<template>
  <div class="about-us" id="about-us">
    <div class="about-us__container">
      <div class="content">
        <h1 class="content__title">
          Найкраще місце детейлингу Вашого авто у Тернополі
        </h1>

        <h3 class="content__subtitle">
          Ми надаємо весь спектр послуг детейлінгу як власникам нових
          автомобілів, так і для авто з пробігом. Вміємо та знаємо, який догляд
          необхідний для ретро-автомобілів та мотоциклів, тому поціновувачам
          такого виду транспорту нам теж є що запропонувати. Свою роботу ми
          сприймаємо як мистецтво!
        </h3>
        <div class="content__actions">
          <BaseButton
            @click.native="isOpenModal"
            size="big"
            styleButton="orange"
            class="coll"
            label="Консультація"
          />
          <BaseButton size="big" class="portfolio" label="Приклади робіт" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  name: "TheAboutUs",
  comments: {
    BaseButton,
  },

  methods: {
    isOpenModal() {
      this.$store.commit("modal/setOpenModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  display: flex;
  justify-content: center;
  min-width: 100vh;
  height: 100vh;
  background: url(../assets/main.jpg);

  &__container {
    display: flex;
    min-width: 1240px;

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
