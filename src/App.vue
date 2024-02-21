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
  <!-- 히어로 섹션 -->
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
    <div class="flex justify-around w-3/4 space-x-5">
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
  <div
    class="flex flex-1 flex-col justify-center items-center w-screen h-screen"
  >
    <!-- 세번 째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-4">
      <img src="./assets/그룹 49921.png" class="w-16 h-16" />
      <div class="text-center space-y-2">
        <p class="font-bold text-3xl">샌드고의 다양한</p>
        <p class="font-bold text-3xl">기능들을 살펴보세요</p>
      </div>
      <p class="text-gray-500">고객님들의 입장에서 고민하였습니다.</p>
    </div>
    <!-- 세번 째 섹션 컨텐츠 -->
    <div class="flex w-4/5">
      <div class="main-image-container mx-">
        <div>
          <p>크레딧 구매 시, 보너스 크레딧 증정</p>
          <p>크레딧 상품을 구매하면 상품 별</p>
          <p>보너스 크레딧을 증정합니다</p>
        </div>
        <img src="./assets/마스크 그룹 140.png" />
      </div>
      <div class="main-image-container">
        <div>
          <p>크레딧 구매 시, 보너스 크레딧 증정</p>
          <p>크레딧 상품을 구매하면 상품 별</p>
          <p>보너스 크레딧을 증정합니다</p>
        </div>
        <img src="./assets/그룹 49952.png" class="main-image" />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <!-- 네번 째 메인 섹션 -->
  <div
    class="flex flex-1 flex-col justify-center items-center w-screen h-screen"
  >
    <!-- 네번 째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-4">
      <img src="./assets/그룹 49923.png" class="w-16 h-16" />
      <div class="text-center space-y-2">
        <p class="font-bold text-3xl">정확도와 다양함은 물론</p>
        <p class="font-bold text-3xl">신뢰할 수 있는 보안까지</p>
      </div>
      <p class="text-gray-500">고객님들의 간편함을 고민하였습니다</p>
    </div>
    <!-- 네번 째 섹션 컨텐츠 -->
  </div>

  <!-- 다섯 번째 메인 섹션 -->
  <div
    class="flex flex-1 flex-col bg-blackBg justify-center items-center w-screen h-screen"
  >
    <!-- 다섯 째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-10">
      <div class="space-y-6">
        <div class="text-center">
          <p class="hero-section-text">비즈니스 광고의 시작</p>
          <p class="hero-section-text">이제 샌드고와 함께 하세요</p>
        </div>
      </div>
      <div class="flex mt-6">
        <button
          class="w-52 h-16 py-4 mx-2 rounded-full bg-purple text-white text-center"
        >
          회원가입
        </button>
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
/* 텍스트 그라데이션 적용 */
.hero-section-text {
  font-size: 2.7rem;
  font-weight: bold;
  background: transparent linear-gradient(90deg, #b6b7f7 0%, #7fb2fe 100%) 0% 0%
    no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.main-image-container {
  width: 750px;
  height: 597px;
  background-color: #e9ebfd;
  position: relative;
  border-radius: 25px;
}
.main-image {
  width: 644px;
  height: 321px;
  position: absolute;
  bottom: 0;
}
</style>
