<template>
  <!-- 네브바 -->
  <Navbar />
  <!-- 라우터 뷰 -->
  <router-view />
  <!-- footer -->
  <Footer />
</template>
<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {},
};
</script>
<style></style>
