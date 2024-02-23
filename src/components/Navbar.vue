<template>
  <header
    :class="{ 'bg-black': !scrolled || dark, 'bg-white': scrolled || !dark }"
    class="fixed top-0 z-20 h-20 w-screen flex items-center border-b border-gray-300 duration-150 ease-in-out"
  >
    <div class="w-36 mx-44">
      <router-link to="/">
        <LogoIconGray v-if="!scrolled && dark" />
        <LogoIcon v-if="scrolled || !dark" />
      </router-link>
    </div>
    <nav>
      <ul
        :class="{
          'text-gray-300': !scrolled && dark,
          'text-black': scrolled || !dark,
        }"
      >
        <router-link
          :to="route.path"
          class="cursor-pointer"
          v-for="route in routes"
          :key="route"
        >
          <li class="inline-block w-14 mr-24" v-if="route.meta.isMenu">
            {{ route.title }}
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
import LogoIconGray from "../assets/logo-gray.svg";
import LogoIcon from "../assets/logo.svg";
import { ref, onMounted, onBeforeUnmount } from "vue";
import router from "../router";

export default {
  components: {
    LogoIcon,
    LogoIconGray,
  },
  setup() {
    const scrolled = ref(false);
    // 라우터의 정보 가져오기
    const routes = ref([]);
    const dark = ref(true);

    // 스크롤 위치에 따라 헤더 색상 변경
    const handleScroll = () => {
      scrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      routes.value = router.options.routes;
      // 네브바 다크모드 확인
      dark.value = router.currentRoute.value.meta.dark || false;
    });

    router.afterEach((to) => {
      dark.value = to.meta.dark || false;
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      scrolled,
      routes,
      dark,
    };
  },
};
</script>
<style></style>
