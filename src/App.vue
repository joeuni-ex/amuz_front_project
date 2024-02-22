<template>
  <!-- 네브바 -->
  <Navbar />
  <!-- 메인 -->
  <router-view />
  <!-- footer -->
  <Footer />
</template>
<script>
import Footer from "./components/Footer.vue";
import Home from "./pages/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    Home,
    Footer,
  },
  setup() {},
};
</script>
<style></style>
