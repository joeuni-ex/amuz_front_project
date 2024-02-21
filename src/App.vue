<template>
  <!-- 네브바 -->
  <header
    class="h-20 w-screen flex items-center bg-black border-b border-gray-300"
  >
    <div class="text-white w-36 mx-44">
      <LogoIcon />
    </div>
    <nav>
      <ul>
        <li class="text-gray-300 inline-block w-14 mr-24">메세지</li>
        <li class="text-gray-300 inline-block w-14 mr-24">크레딧</li>
      </ul>
    </nav>
  </header>
  <!-- 히어로 섹션1 -->
  <div class="w-screen h-screen bg-black flex flex-1">
    <div class="flex w-1/2 bg-white">
      <span>인터넷 문자 메시지 전송의 모든 것</span>
      <span>인터넷 문자 메시지 전송의 모든 것</span>
      <div>
        <button class="w-52 rounded-full bg">회원가입</button>
        <button class="w-52">로그인</button>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import LogoIcon from "./assets/logo.svg";

export default {
  components: {
    LogoIcon,
  },
};
</script>
<style></style>
