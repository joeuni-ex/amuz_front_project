<template>
  <!-- 네브바 -->
  <header
    :class="{ 'bg-black': !scrolled, 'bg-white': scrolled }"
    class="fixed top-0 z-20 h-20 w-screen flex items-center border-b border-gray-300 duration-150 ease-in-out"
  >
    <div class="w-36 mx-44">
      <LogoIcon />
    </div>
    <nav>
      <ul :class="{ 'text-gray-300': !scrolled, 'text-black': scrolled }">
        <li class="inline-block w-14 mr-24">메세지</li>
        <li class="inline-block w-14 mr-24">크레딧</li>
      </ul>
    </nav>
  </header>
  <Home />
  <!-- footer -->
  <Footer />
</template>
<script>
import LogoIcon from "./assets/logo.svg";
import Footer from "./components/Footer.vue";
import Home from "./pages/Home.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  components: {
    LogoIcon,
    Home,
    Footer,
  },
  setup() {
    const scrolled = ref(false);

    // 스크롤 위치에 따라 헤더 색상 변경
    const handleScroll = () => {
      scrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      scrolled,
    };
  },
};
</script>
<style></style>
