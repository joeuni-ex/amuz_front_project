<template>
  <!-- 네브바 -->
  <header
    :class="{ 'bg-black': !scrolled, 'bg-white': scrolled }"
    class="fixed top-0 h-20 w-screen flex items-center border-b border-gray-300 duration-150 ease-in-out"
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
  <!-- 메인 두 번째 섹션 -->
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
  <!-- 메인 세 번째 섹션 -->
  <div class="flex flex-1 flex-col justify-center items-center w-screen">
    <!-- 세 번째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-4">
      <img src="./assets/그룹 49921.png" class="w-16 h-16" />
      <div class="text-center space-y-2">
        <p class="font-bold text-3xl">샌드고의 다양한</p>
        <p class="font-bold text-3xl">기능들을 살펴보세요</p>
      </div>
      <p class="text-gray-500">고객님들의 입장에서 고민하였습니다.</p>
    </div>
    <!-- 세 번째 섹션 컨텐츠 -->
    <div class="flex flex-col w-4/5 mt-24">
      <div class="flex">
        <div class="main-third-content1">
          <div>
            <p class="text-3xl font-bold">크레딧 구매 시, 보너스 크레딧 증정</p>
            <p class="text-3xl font-bold">크레딧 상품을 구매하면 상품 별</p>
            <p class="text-3xl font-bold">보너스 크레딧을 증정합니다</p>
          </div>
          <img src="./assets/main-third-image1.png" class="main-third-image1" />
        </div>
        <div class="main-third-content2">
          <div>
            <p class="text-3xl font-bold">크레딧 구매 시, 보너스 크레딧 증정</p>
            <p class="text-3xl font-bold">크레딧 상품을 구매하면 상품 별</p>
            <p class="text-3xl font-bold">보너스 크레딧을 증정합니다</p>
          </div>
          <img src="./assets/main-third-image2.png" class="main-third-image2" />
        </div>
      </div>
      <div class="flex mt-10">
        <div class="main-third-content3">
          <div>
            <p class="text-3xl font-bold">크레딧 구매 시, 보너스 크레딧 증정</p>
            <p class="text-3xl font-bold">크레딧 상품을 구매하면 상품 별</p>
            <p class="text-3xl font-bold">보너스 크레딧을 증정합니다</p>
          </div>
          <img src="./assets/main-third-image3.png" class="main-third-image1" />
        </div>
        <div class="main-third-content4">
          <div>
            <p class="text-3xl font-bold">크레딧 구매 시, 보너스 크레딧 증정</p>
            <p class="text-3xl font-bold">크레딧 상품을 구매하면 상품 별</p>
            <p class="text-3xl font-bold">보너스 크레딧을 증정합니다</p>
          </div>
          <img src="./assets/main-third-image4.png" class="main-third-image1" />
        </div>
      </div>
    </div>
  </div>
  <!--메인 네번 째 섹션 -->
  <div class="flex flex-1 flex-col justify-center items-center w-screen mt-80">
    <!-- 네번 째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-4">
      <img src="./assets/그룹 49923.png" class="w-16 h-16" />
      <div class="text-center space-y-2">
        <p class="font-bold text-3xl">정확도와 다양함은 물론</p>
        <p class="font-bold text-3xl">신뢰할 수 있는 보안까지</p>
      </div>
      <p class="text-2xl text-gray-500">고객님들의 간편함을 고민하였습니다</p>
    </div>
    <!-- 네번 째 섹션 컨텐츠 -->
    <div class="flex mt-16">
      <div class="main-fourth-content1">
        <div class="text-left space-y-3">
          <p class="text-3xl font-bold">일반 SMS는 기본, 카카오톡까지</p>
          <p class="text-3xl font-bold text-gray-600">
            종류와 상관없이 모두 전송해 드립니다
          </p>
        </div>
        <img src="./assets/main-forth-image1.png" class="main-forth-image1" />
      </div>
      <div class="main-fourth-content2">
        <div class="text-left space-y-3">
          <p class="text-3xl font-bold text-mainBrown">
            강력한 보안을 제공합니다.
          </p>
          <p class="text-3xl font-bold text-lightBrown">
            신뢰할 수 있는 최신의 보안 시스템을
          </p>
          <p class="text-3xl font-bold text-lightBrown">
            적용하여 개인정보를 보호합니다
          </p>
        </div>
        <div class="w-full flex justify-end">
          <img src="./assets/main-forth-image2.png" class="main-forth-image2" />
        </div>
      </div>
    </div>
    <div class="main-fourth-content3">
      <div class="text-center space-y-3 mt-14">
        <p class="text-3xl font-bold">놀라운 수신율을 경험해 보세요</p>
        <p class="text-3xl font-bold text-gray-600">
          샌드고의 정확한 수신율은 99.8%에 달합니다
        </p>
      </div>
      <img src="./assets/main-forth-image3.png" class="main-forth-image3" />
    </div>
  </div>

  <!--메인 다섯 번째 섹션 -->
  <div
    class="flex flex-1 flex-col bg-blackBg justify-center items-center w-screen h-screen mt-56"
  >
    <!-- 다섯 번째 섹션 타이틀 -->
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
  <!-- footer -->
  <footer
    class="w-screen h-72 flex flex-1 flex-col bg-footerBg border-t border-gray-600"
  >
    <div
      class="h-2/5 flex justify-center items-center border-b border-gray-600"
    >
      <div class="flex items-center w-3/5 justify-between">
        <div class="w-36">
          <LogoIcon />
        </div>
        <div class="w-3/5 text-center text-gray-400 space-x-11">
          <span>메세지</span>
          <span>크레딧</span>
        </div>
      </div>
    </div>
    <div class="h-3/5 flex justify-center">
      <div class="w-3/5">
        <p class="text-gray-400 mt-4">
          문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의 해 보세요.
        </p>
        <p class="text-gray-300 mt-3">elegram : @shdevelope</p>
      </div>
    </div>
  </footer>
</template>
<script>
import LogoIcon from "./assets/logo.svg";
import LogoIconGray from "./assets/logo-gray.svg";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  components: {
    LogoIcon,
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
<style>
/* 텍스트 그라데이션 적용 */
.hero-section-text {
  font-size: 3.2rem;
  font-weight: bold;
  background: transparent linear-gradient(90deg, #b6b7f7 0%, #7fb2fe 100%) 0% 0%
    no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* 메인 세번 째 섹션 */
.main-third-content1 {
  width: 626px;
  height: 597px;
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  margin-right: 54px;
}
.main-third-image1 {
  width: 572px;
  height: 320px;
  opacity: 1;
}
.main-third-content2 {
  width: 750px;
  height: 597px;
  background: #e9ebfd 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
}
.main-third-image2 {
  width: 644px;
  height: 321px;
  opacity: 1;
}
.main-third-content3 {
  width: 855px;
  height: 720px;
  background: #dbe5ff 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  margin-right: 45px;
}
.main-third-image3 {
  width: 798px;
  height: 427px;
  opacity: 1;
}
.main-third-content4 {
  width: 520px;
  height: 720px;
  background: transparent linear-gradient(180deg, #fafaee 0%, #fbfbf0 100%) 0%
    0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
}
.main-third-image4 {
  width: 416px;
  height: 432px;
  opacity: 1;
}
/* 메인 네번 째 섹션 */
.main-fourth-content1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #dceff4 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  width: 688px;
  height: 597px;
}
.main-forth-image1 {
  margin-top: 60px;
  width: 342px;
  height: 310px;
}
.main-fourth-content2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fbfbef 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  width: 688px;
  height: 597px;
  padding: 54px;
  margin-left: 44px;
}
.main-forth-image2 {
  margin-top: 50px;
  margin-right: 55px;
  width: 285px;
  height: 317px;
}
.main-fourth-content3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 1420px;
  height: 495px;
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  margin-top: 44px;
}
.main-forth-image3 {
  position: absolute;
  bottom: 0;
  width: 704px;
  height: 286px;
}
</style>
