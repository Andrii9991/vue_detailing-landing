<template>
  <div class="home-page">
    <i
      @click="closeModal"
      v-if="isOpenModal"
      class="pi pi-times"
      style="font-size: 2rem"
    ></i>
    <BaseModal v-if="isOpenModal" class="base-modal" />
    <TheHeader class="test" />
    <TheAboutUs class="test" />
    <TheServices />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheAboutUs from "@/components/TheAboutUs.vue";
import BaseModal from "@/components/BaseModal.vue";
import { mapState } from "vuex";
import TheServices from "@/components/TheServices.vue";
export default {
  name: "HomePage",
  components: {
    TheHeader,
    TheAboutUs,
    BaseModal,
    TheFooter,
    TheServices,
  },
  data() {
    return {};
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
  .pi {
    position: fixed;
    z-index: 100;
    color: white;
    top: 4px;
    right: 4px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
