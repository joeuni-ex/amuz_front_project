<template>
  <header
    :class="{ 'bg-black': !scrolled || dark, 'bg-white': scrolled || !dark }"
    class="fixed top-0 z-20 h-20 w-screen flex items-center border-b border-gray-300 duration-150 ease-in-out"
  >
    <div class="mx-10 md:mx-44">
      <router-link to="/">
        <LogoIconGray v-if="!scrolled && dark" />
        <LogoIcon v-if="scrolled || !dark" />
      </router-link>
    </div>

    <nav class="flex items-center justify-end mx-10 md:flex w-4/5 h-full">
      <router-link
        :to="route.path"
        :class="{
          'text-gray-300': !scrolled && dark,
          'text-black': scrolled || !dark,
        }"
        v-for="route in routes"
        :key="route"
      >
        <div
          class="hidden md:flex w-44 h-full justify-center items-center"
          :class="{ active: route.path === $route.path }"
          v-if="route.meta.isMenu"
        >
          {{ route.title }}
        </div>
      </router-link>
      <!-- 모바일 메뉴 -->
      <div
        class="md:hidden flex items-center"
        :class="{
          'text-gray-300': !scrolled && dark,
          'text-black': scrolled || !dark,
        }"
      >
        <button>
          <Bar fill="#ffffff" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoIconGray from "../assets/logo-gray.svg";
import LogoIcon from "../assets/logo.svg";
import Bar from "../assets/bar.svg";
import { ref, onMounted, onBeforeUnmount } from "vue";
import router from "../router";

export default {
  components: {
    LogoIcon,
    LogoIconGray,
    Bar,
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
<style>
/* 현재 선택된 페이지 style */
.active {
  border-bottom: 2px solid #4e43ed !important;
  font-weight: 600;
  color: #4e43ed !important;
}
</style>
