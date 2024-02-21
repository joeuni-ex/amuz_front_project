<template>
  <!-- 네브바 -->
  <header
    class="fixed top-0 h-20 w-screen flex items-center bg-black border-b border-gray-300"
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
    <div class="flex w-1/2 justify-center items-center">
      <div class="space-y-6">
        <span class="text-white">인터넷 문자 메시지 전송의 모든 것</span>
        <div>
          <p class="hero-section-text">가장 빠르고 안정적인</p>
          <p class="hero-section-text">문자 서비스 SENDGO</p>
        </div>

        <div class="flex mt-6">
          <button
            class="w-52 h-16 py-4 mx-2 rounded-full bg-purple text-white text-center"
          >
            회원가입
          </button>
          <button
            class="w-52 h-16 py-4 mx-2 rounded-full bg-darkGray text-gray-300 text-center"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
    <div></div>
  </div>
  <!-- 두번 째 메인 섹션 -->
  <div
    class="w-screen h-screen bg-white flex flex-1 flex-col justify-center items-center space-y-14"
  >
    <div class="flex flex-col w-screen justify-center items-center space-y-4">
      <img src="./assets/그룹 49920.png" class="w-16 h-16" />
      <div class="text-center">
        <p class="text-3xl font-bold my-3">복잡한 인터넷 문자 서비스를</p>
        <p class="text-3xl font-bold my-3">간편하게 만나보세요.</p>
      </div>

      <p class="text-gray-500">모든 종류의 인터넷 SMS를 편리하게.</p>
    </div>
    <!-- 두번 째 메인 섹션 카드들 -->
    <div class="flex justify-around w-3/4">
      <div
        class="w-96 h-80 bg-lightPurple rounded-3xl flex flex-col justify-center items-center space-y-3"
      >
        <img src="./assets/그룹 49917.png" class="w-16 h-16" />
        <div class="text-center">
          <p class="font-bold text-xl">메시지 용량에</p>
          <p class="font-bold text-xl">제한 받지 않고 전송</p>
        </div>

        <div class="text-center">
          <p class="text-gray-500 font-semibold text-sm">
            메시지 용량 걱정없이 단문 메시지는
          </p>
          <p class="text-gray-500 font-semibold text-sm">
            물론 장문, 사진까지 전송이 가능합니다.
          </p>
        </div>
      </div>
      <div
        class="w-96 h-80 bg-lightPurple rounded-3xl flex flex-col justify-center items-center space-y-3"
      >
        <img src="./assets/그룹 49918.png" class="w-16 h-16" />
        <div class="text-center">
          <p class="font-bold text-xl">메시지 용량에</p>
          <p class="font-bold text-xl">제한 받지 않고 전송</p>
        </div>

        <div class="text-center">
          <p class="text-gray-500 font-semibold text-sm">
            메시지 용량 걱정없이 단문 메시지는
          </p>
          <p class="text-gray-500 font-semibold text-sm">
            물론 장문, 사진까지 전송이 가능합니다.
          </p>
        </div>
      </div>
      <div
        class="w-96 h-80 bg-lightPurple rounded-3xl flex flex-col justify-center items-center space-y-3"
      >
        <img src="./assets/그룹 49919.png" class="w-16 h-16" />
        <div class="text-center">
          <p class="font-bold text-xl">메시지 용량에</p>
          <p class="font-bold text-xl">제한 받지 않고 전송</p>
        </div>

        <div class="text-center">
          <p class="text-gray-500 font-semibold text-sm">
            메시지 용량 걱정없이 단문 메시지는
          </p>
          <p class="text-gray-500 font-semibold text-sm">
            물론 장문, 사진까지 전송이 가능합니다.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 세번 째 메인 섹션 -->
  <div class="flex flex-1 flex-col justify-center items-center">
    <!-- 세번 째 섹션 타이틀 -->
    <div>
      <img src="./assets/그룹 49921.png" class="w-16 h-16" />
    </div>
    <!-- 세번 째 섹션 컨텐츠 -->
    <div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
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
<style>
.hero-section-text {
  font-size: 2.7rem;
  font-weight: bold;
  background: linear-gradient(90deg, #9fbafd 0%, #4e81ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
