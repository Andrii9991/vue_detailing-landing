<!-- <template>
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
      <BaseButton
        class="navigation-button"
        @click.native="isOpenModal"
        label="Замовити дзвінок"
        :isDisabled="disabledButton"
      />
      <button class="header__burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</template>



<script>
import BaseButton from "./BaseButton.vue";
import { mapState } from "vuex";
export default {
  name: "TheHeader",
  components: {
    BaseButton,
  },
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
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: $black;
  color: $white;

  &__container {
    width: 1240px;
    display: flex;
    justify-content: space-between;
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

    .header__burger {
      display: none;
      position: relative;
      width: 40px;
      height: 40px;
      border: none;
      background-color: red;

      span {
        position: absolute;
        background-color: white;
        width: 30px;
        height: 3px;
        left: 5px;
      }

      span:nth-child(1) {
        transform: translateY(-10px);
      }
      span:nth-child(3) {
        transform: translateY(10px);
      }
    }
  }
}
@media (max-width: 992px) {
  .header {
    &__container {
      .navigation {
        position: absolute;
        right: 0;
        top: 100px;

        &__list {
          flex-direction: column;
          gap: 30px;
          .list-item {
          }
        }
      }

      .number {
        &__link {
        }
      }

      .header__burger {
        display: block;
      }
    }
  }
}

@media (max-width: 992px) {
  .number {
    display: none;
  }
}
</style> -->

<template>
  <header class="header">
    <a href="" class="header__logo">Лого</a>
    <div class="header__menu menu">
      <div
        @click="isOpenMenu"
        class="menu__icon"
        :class="{ active: !isOpenBurgerMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="menu__body" :class="{ active: !isOpenBurgerMenu }">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#about-us" class="menu__link">Про нас</a>
          </li>
          <li class="menu__item">
            <a href="#services" class="menu__link">Наші послуги</a>
          </li>
          <li class="menu__item">
            <a href="#portfolio" class="menu__link">Портфоліо</a>
          </li>
          <li class="menu__item">
            <a href="#contacts" class="menu__link">Контакти</a>
          </li>
          <li class="menu__item">
            <a href="#subscribe" class="menu__link">Відгуки</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TheHeader",
  components: {},
  data() {
    return {
      isOpenBurgerMenu: false,
    };
  },

  computed: {
    ...mapState({
      disabledButton: (state) => state.modal.isOpened,
    }),
  },

  methods: {
    isOpenModal() {
      this.$store.commit("modal/setOpenModal");
    },
    isOpenMenu() {
      this.isOpenBurgerMenu = !this.isOpenBurgerMenu;
    },
  },
};
</script>

<style lang="scss">
/*--------------------Шапка--------------------*/
.header {
  background-color: #000;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &__logo {
    background-color: black;
    padding: 5px;
    text-decoration: none;
  }
}
/*--------------------/Шапка--------------------*/

/*--------------------Меню--------------------*/

.menu {
  &__icon {
    display: none;
    color: red;
    @media (max-width: 768px) {
      display: block;
      width: 30px;
      height: 18px;
      position: relative;
      z-index: 5;
      cursor: pointer;
      span {
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition: all 0.2s;
        &:first-child {
          top: 0;
        }
        &:last-child {
          top: auto;
          bottom: 0;
        }
      }
      &.active {
        span {
          transform: scale(0);
          &:first-child {
            transform: rotate(-45deg);
            top: calc(50% - 1px);
          }
          &:last-child {
            transform: rotate(45deg);
            bottom: calc(50% - 1px);
          }
        }
      }
    }
  }
  // .menu__body
  &__body {
    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      left: -100%;
      height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.2s;
    }
    &.active {
      left: 0;
    }
  }
  // .menu__list
  &__list {
    list-style-type: none;
    display: flex;
    gap: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 30px;
      gap: 0;
      height: 100%;
      width: 60%;
      background-color: $orange;
      overflow: auto;
    }
  }
  // .menu__link
  &__link {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      display: block;
      font-size: 30px;
      line-height: 70px;
    }
  }
}

/*--------------------/Меню--------------------*/
</style>
