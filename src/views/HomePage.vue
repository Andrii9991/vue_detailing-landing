<template>
  <div class="home-page">
    <div v-if="isLoading" class="preloader">
      <span class="loader"></span>
    </div>

    <div v-else>
      <i
        @click="closeModal"
        v-if="isOpenModal"
        class="pi pi-times"
        style="font-size: 2rem"
      ></i>

      <a href="#header" v-show="scrollY > 500">
        <i class="pi pi-angle-up" style="font-size: 3rem"></i>
      </a>

      <BaseModal v-if="isOpenModal" class="base-modal" />
      <TheHeader class="header" />
      <TheAboutUs />
      <TheServices />
      <ThePortfolio />
      <TheReviews />
      <TheContactsPage />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheAboutUs from "@/components/TheAboutUs.vue";
import BaseModal from "@/components/BaseModal.vue";
import TheServices from "@/components/TheServices.vue";
import ThePortfolio from "@/components/ThePortfolio.vue";
import TheReviews from "@/components/TheReviews.vue";
import TheContactsPage from "@/components/TheContactsPage.vue";
import { mapState } from "vuex";

export default {
  name: "HomePage",
  components: {
    TheHeader,
    TheAboutUs,
    BaseModal,
    TheFooter,
    TheServices,
    ThePortfolio,
    TheReviews,
    TheContactsPage,
  },
  data() {
    return {
      isLoading: true,
      scrollY: 0,
    };
  },

  computed: {
    ...mapState({
      isOpenModal: (state) => state.modal.isOpened,
    }),
  },

  methods: {
    closeModal() {
      this.$store.commit("modal/setOpenModal");
      if (this.disabledButton) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },

  async mounted() {
    await window.addEventListener("scroll", this.handleScroll);

    await setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  overflow: hidden;

  .header {
    position: fixed;
    z-index: 9;
  }

  .pi-times {
    position: fixed;
    z-index: 100;
    color: white;
    top: 4px;
    right: 4px;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
  }

  .pi-angle-up {
    position: fixed;
    color: white;
    background-color: $grey-lite;
    border-radius: 50%;
    bottom: 40px;
    right: 30px;
    z-index: 9;
    overflow: hidden;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
}

.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
