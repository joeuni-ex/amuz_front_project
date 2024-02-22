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
        <router-link
          :to="route.path"
          class="cursor-pointer"
          v-for="route in routes"
          :key="route"
        >
          <div v-if="route.meta.isMenu">
            <li class="inline-block w-14 mr-24">{{ route.title }}</li>
          </div>
          ㅎㅇㅎㅇ
        </router-link>
      </ul>
    </nav>
  </header>
  <router-view />
  <!-- footer -->
  <Footer />
</template>
<script>
import LogoIcon from "./assets/logo.svg";
import Footer from "./components/Footer.vue";
import Home from "./pages/Home.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import router from "./router";

export default {
  components: {
    LogoIcon,
    Home,
    Footer,
  },
  setup() {
    const scrolled = ref(false);
    const routes = ref([]);

    console.log(router.options.routes);

    // 스크롤 위치에 따라 헤더 색상 변경
    const handleScroll = () => {
      scrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
      routes.value = router.options.routes;
    });

    return {
      scrolled,
      routes,
    };
  },
};
</script>
<style></style>
