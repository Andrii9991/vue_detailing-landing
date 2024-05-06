<template>
  <div class="home-page">
    <i
      @click="closeModal"
      v-if="isOpenModal"
      class="pi pi-times"
      style="font-size: 2rem"
    ></i>
    <BaseModal v-if="isOpenModal" class="base-modal" />
    <TheHeader />
    <TheAboutUs />
    <TheServices />
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
// import informationPopUp from "../components/informationPopUp.vue";
import TheServices from "@/components/TheServices.vue";
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
    TheReviews,
    TheContactsPage,
    // informationPopUp,
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
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  overflow: hidden;
  .pi {
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
}
</style>
