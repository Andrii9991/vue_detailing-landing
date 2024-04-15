<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "informationPopUp",
  props: {
    text: {
      default: "Заявку відправлено успішно!",
    },
    isPopUpVisible: {
      default: false,
      required: true,
    },
  },
  // created() {
  //   setTimeout(() => {
  //     this.$emit("update:isPopUpVisible", false);
  //   }, 3000);
  // },
};
</script>

<style scoped lang="scss">
.information-popup {
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 24px;
  background-color: red;
  color: $white;
}
</style>
