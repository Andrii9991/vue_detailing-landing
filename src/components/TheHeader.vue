<template>
  <header class="header">
    <div class="header__container">
      <h2><a href="" class="header__logo">Лого</a></h2>
      <div class="header__menu menu">
        <div
          @click="isOpenMenu"
          class="menu__icon"
          :class="{ active: isOpenBurgerMenu }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav class="menu__body" :class="{ active: isOpenBurgerMenu }">
          <ul class="menu__list">
            <li class="menu-item">
              <a @click="isOpenMenu" href="#about-us" class="menu__link"
                >Про нас</a
              >
            </li>
            <li class="menu-item">
              <a @click="isOpenMenu" href="#services" class="menu__link"
                >Послуги</a
              >
            </li>
            <li class="menu-item">
              <a @click="isOpenMenu" href="#portfolio" class="menu__link"
                >Портфоліо</a
              >
            </li>
            <li class="menu-item">
              <a @click="isOpenMenu" href="#contacts" class="menu__link"
                >Контакти</a
              >
            </li>
            <!-- Mobile contacts -->

            <li class="mobile-item">
              <i
                class="pi pi-map-marker"
                style="color: orange; font-size: 1rem"
              ></i>
              <a
                href="https://www.google.com/maps/place/%D0%9F%D1%96%D0%B4%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D0%B5,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+46003/@49.5263304,25.5241389,13z/data=!4m6!3m5!1s0x47303703b8031499:0xee0e92336b8ffcce!8m2!3d49.5355598!4d25.5276081!16s%2Fg%2F121y51s6?entry=ttu"
              >
                <strong>м.Тернопіль, смт.Підгороднє</strong>
              </a>
            </li>
            <li class="mobile-item">
              <i
                class="pi pi-envelope"
                style="color: orange; font-size: 1rem"
              ></i>
              <a href="stup@gmail.com">
                <strong>stup@gmail.com</strong>
              </a>
            </li>
            <li class="mobile-item">
              <i class="pi pi-phone" style="color: orange; font-size: 1rem"></i>
              <a href="+380 98 459 70 64">
                <strong>+380 98 459 70 64</strong>
              </a>
            </li>

            <div class="mobile-social">
              <i class="pi pi-phone" style="color: orange; font-size: 1.5rem"
                ><a href=""></a
              ></i>
              <i class="pi pi-telegram" style="color: orange; font-size: 1.5rem"
                ><a href=""></a
              ></i>
              <a href="https://www.instagram.com/de_stup?igsh=N21wc3g2cHFid3Jh"
                ><i
                  class="pi pi-instagram"
                  style="color: orange; font-size: 1.5rem"
                ></i
              ></a>
              <i class="pi pi-envelope" style="color: orange; font-size: 1.5rem"
                ><a href=""></a
              ></i>
            </div>
          </ul>
        </nav>
      </div>
      <a class="menu__link number" href="tel:+380 98 459 70 64"
        >+380 98 459 70 64</a
      >
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
      let windowWidth = window.innerWidth;
      this.isOpenBurgerMenu = !this.isOpenBurgerMenu;

      if (this.isOpenBurgerMenu && windowWidth < 767) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style lang="scss">
/*--------------------Шапка--------------------*/
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $black;
  color: $white;

  &__container {
    width: 1240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;

    .header__logo {
      background-color: black;
      padding: 5px;
      text-decoration: none;
    }
  }
}
/*--------------------/Шапка--------------------*/

/*--------------------Меню--------------------*/

.menu {
  &__icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 30px;
      height: 18px;
      position: relative;
      z-index: 101;
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
      z-index: 100;
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
      text-align: center;
      align-items: center;
      height: 100%;
      width: 100%;
      background-color: #1a1a1a;
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

.number {
  padding: 8px 16px;
  border-radius: 16px;
  margin-left: 40px;
  text-decoration: none;
  box-shadow: 0 0 0 1px white inset;

  @media (max-width: 768px) {
    display: none;
  }
}

.mobile-item {
  display: none;

  @media (max-width: 768px) {
    display: block;

    .pi {
      margin-right: 12px;
    }
  }
}

.mobile-social {
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 30px;

    .pi {
      margin: 16px;
    }
  }
}

/*--------------------/Меню--------------------*/
</style>
