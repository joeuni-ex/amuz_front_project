<template>
  <header
    :class="{ 'bg-black': !scrolled || dark, 'bg-white': scrolled || !dark }"
    class="fixed top-0 z-20 w-screen border-b border-gray-300 duration-150 ease-in-out"
  >
    <nav class="flex items-center md:w-4/5 h-full">
      <div class="mx-16 md:mx-44">
        <router-link to="/">
          <LogoIconGray v-if="!scrolled && dark" />
          <LogoIcon v-if="scrolled || !dark" />
        </router-link>
      </div>
      <div class="flex items-center w-full h-20">
        <!-- Desktop Menu -->
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

        <!-- Mobile Menu Button -->
        <div
          class="w-full justify-end mx-16 md:hidden flex items-center"
          :class="{
            'text-gray-300': !scrolled && dark,
            'text-black': scrolled || !dark,
          }"
        >
          <button @click="toggleMobileMenu">
            <Bar fill="#ffffff" />
          </button>
        </div>
      </div>
    </nav>
    <!-- Mobile Menu Items -->
    <transition name="fade">
      <div
        v-if="mobileMenuVisible"
        class="md:hidden flex flex-col items-center justify-center w-full"
      >
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
            class="w-full h-16 flex justify-center items-center"
            :class="{ active: route.path === $route.path }"
            v-if="route.meta.isMenu"
            @click="toggleMobileMenu"
          >
            {{ route.title }}
          </div>
        </router-link>
      </div>
    </transition>
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
    const routes = ref([]);
    const dark = ref(true);
    const mobileMenuVisible = ref(false); //모바일 메뉴

    // 스크롤 위치에 따라 헤더 색상 변경
    const handleScroll = () => {
      scrolled.value = window.scrollY > 0;
    };

    //모바일 메뉴 토글
    const toggleMobileMenu = () => {
      mobileMenuVisible.value = !mobileMenuVisible.value;
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
      mobileMenuVisible,
      toggleMobileMenu,
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
