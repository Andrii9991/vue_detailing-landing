<template>
  <div class="home-page">
    <i
      @click="closeModal"
      v-if="isOpenModal"
      class="pi pi-times"
      style="font-size: 2rem"
    ></i>

    <a href="#header">
      <i class="pi pi-angle-up" style="font-size: 3rem"></i>
    </a>

    <BaseModal v-if="isOpenModal" class="base-modal" />
    <TheHeader />
    <TheAboutUs />
    <TheServices />
    <ThePortfolio />
    <TheReviews />
    <TheContactsPage />
    <TheFooter />
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
      popUpVisible: true,
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
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  overflow: hidden;

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
    z-index: 100;
    color: white;
    background-color: $grey-lite;
    border-radius: 50%;
    bottom: 40px;
    right: 30px;
    z-index: 10000000000000000000000000000000000000000000000000000000000000000000000000000000;
    overflow: hidden;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
}
</style>
