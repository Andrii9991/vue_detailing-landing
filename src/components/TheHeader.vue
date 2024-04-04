<template>
  <div class="header">
    <div class="header__container">
      <h2 class="logo">De Stup</h2>
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="list-item"><a href="#about-us">Про нас</a></li>
          <li class="list-item"><a href="#services">Наші послуги</a></li>
          <li class="list-item">Портфоліо</li>
          <li class="list-item">Контакти</li>
        </ul>
      </nav>
      <span class="number">
        <a class="number__link" href="tel:+380 98 459 70 64"
          >+380 98 459 70 64</a
        >
      </span>
      <BaseButton @click.native="isOpenModal" label="Замовити дзвінок" />
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "TheHeader",
  components: {
    BaseButton,
  },
  data() {
    return {};
  },

  methods: {
    isOpenModal() {
      this.$store.commit("modal/setOpenModal");
    },
  },
};
</script>

<style lang="scss">
.header {
  // position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: $black;
  color: $white;

  &__container {
    width: 1240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 16px 24px;

    .navigation {
      &__list {
        display: flex;
        list-style-type: none;

        .list-item {
          margin-right: 20px;

          &:hover {
            color: $neon;
            cursor: pointer;
          }
        }
      }
    }

    .number {
      &__link {
        color: $white;
      }
    }
  }
}
</style>
