<template>
  <footer
    class="h-72 flex flex-1 flex-col bg-footerBg border-t border-gray-600"
  >
    <div
      class="h-2/5 flex justify-center items-center border-b border-gray-600"
    >
      <div class="flex items-center w-4/5 md:w-3/5 justify-between">
        <div>
          <LogoIconGray class="w-24 md:w-36" />
        </div>
        <div
          class="w-4/5 md:w-3/5 text-center text-xs md:text-sm text-gray-400 space-x-11"
        >
          <span>메세지</span>
          <span>크레딧</span>
        </div>
      </div>
    </div>
    <div class="h-3/5 flex justify-center">
      <div class="text-sm md:text-base w-4/5 md:w-3/5">
        <p class="text-gray-400 mt-4">
          문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의 해 보세요.
        </p>
        <p class="text-gray-300 mt-3">elegram : @shdevelope</p>
      </div>
    </div>
  </footer>
</template>
<script>
import LogoIconGray from "../assets/logo-gray.svg";

export default {
  components: {
    LogoIconGray,
  },
};
</script>
<style></style>
