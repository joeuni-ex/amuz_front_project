<template>
  <!-- 히어로 섹션 -->
  <div class="h-screen bg-black flex flex-1">
    <!-- 왼쪽 -->
    <div class="flex flex-1 md:flex w-1/2 justify-center items-center">
      <div class="text-center md:text-left space-y-5 md:space-y-10 z-10">
        <span class="text-lg text-gray-100 md:text-2xl"
          >인터넷 문자 메시지 전송의 모든 것</span
        >
        <div class="md:space-y-7">
          <p
            class="gradation-text3 text-4xl font-PretendardExtraBold md:text-6xl"
          >
            가장 빠르고 안정적인
          </p>
          <p
            class="gradation-text3 text-4xl font-PretendardExtraBold md:text-6xl"
          >
            문자 서비스 SENDGO
          </p>
        </div>
        <div class="flex mt-16">
          <button
            class="w-1/2 h-12 md:w-52 md:h-16 md:py-4 mx-2 rounded-full bg-purple text-white text-center md:text-xl hover:bg-indigo-500"
          >
            회원가입
          </button>
          <button
            class="w-1/2 h-12 md:w-52 md:h-16 md:py-4 mx-2 rounded-full bg-darkGray text-gray-300 text-center md:text-xl hover:bg-gray-700"
          >
            로그인
          </button>
        </div>
      </div>
      <div
        class="bg-darkGray rounded-3xl overflow-hidden w-full lg:hidden opacity-25 absolute bottom-0 right-0 z-0"
      >
        <img src="../assets/main-hero-image4.png" class="w-full" />
      </div>
    </div>
    <!-- 오른쪽 (모바일 사이즈에서는 hidden)-->
    <div class="hidden xl:flex w-1/2 h-screen overflow-hidden space-x-8">
      <!-- 1 -->
      <div
        class="flex flex-col items-center justify-end w-64 h-full translate-y-36"
      >
        <div
          class="bg-purple rounded-3xl main-hero-content mb-6 overflow-hidden"
        >
          <img src="../assets/main-hero-image1.png" />
        </div>
        <div class="bg-darkGray rounded-3xl main-hero-content overflow-hidden">
          <img src="../assets/main-hero-image2.png" />
        </div>
      </div>
      <!-- 2 -->
      <div
        class="flex flex-col items-center justify-end w-64 h-full translate-y-10"
      >
        <div
          class="bg-darkGray rounded-3xl main-hero-content2 mb-6 overflow-hidden"
        >
          <img src="../assets/main-hero-image3.png" class="-translate-y-0" />
        </div>
        <div class="bg-purple rounded-3xl main-hero-content2 overflow-hidden">
          <img src="../assets/main-hero-image4.png" />
        </div>
      </div>
      <!-- 3-->
      <div
        class="flex flex-col items-center justify-end w-64 h-full -translate-y-32"
      >
        <div
          class="bg-purple rounded-3xl main-hero-content2 mb-6 overflow-hidden"
        >
          <img src="../assets/main-hero-image5.png" class="-translate-y-20" />
        </div>
        <div class="bg-darkGray rounded-3xl main-hero-content2 relative">
          <img
            src="../assets/main-hero-image6.png"
            class="absolute hero-image -translate-y-20"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- 메인 두 번째 섹션 -->
  <div
    class="mt-52 md:mt-0 h-screen bg-white flex flex-1 flex-col justify-center items-center space-y-14"
  >
    <div class="flex flex-col justify-center items-center space-y-6">
      <img
        src="../assets/main-second-icon1.png"
        class="w-12 h-12 md:w-16 md:h-16"
      />
      <div class="text-center space-y-3">
        <p class="text-2xl font-PretendardBold my-3 md:text-5xl">
          복잡한 인터넷 문자 서비스를
        </p>
        <p class="text-2xl font-PretendardBold my-3 md:text-5xl">
          간편하게 만나보세요.
        </p>
      </div>

      <p class="text-lg text-gray-500 md:text-xl">
        모든 종류의 인터넷 SMS를 편리하게.
      </p>
    </div>
    <!-- 두번 째 메인 섹션 카드들 -->
    <div
      class="flex-wrap flex justify-around items-center space-y-5 md:space-y-0 md:flex-nowrap"
    >
      <div
        class="main-second-content flex flex-col justify-center items-center space-y-4 mx-6"
      >
        <img
          src="../assets/main-second-icon2.png"
          class="w-12 h-12 md:w-16 md:h-16"
        />
        <div class="text-center">
          <p class="font-PretendardSemiBold md:text-2xl">메시지 용량에</p>
          <p class="font-PretendardSemiBold md:text-2xl">제한 받지 않고 전송</p>
        </div>

        <div class="text-center">
          <p class="font-PretendardMedium text-gray-500 md:text-xl">
            메시지 용량 걱정없이 단문 메시지는
          </p>
          <p class="font-PretendardMedium text-gray-500 md:text-xl">
            물론 장문, 사진까지 전송이 가능합니다.
          </p>
        </div>
      </div>
      <div
        class="main-second-content flex flex-col justify-center items-center space-y-4 mx-6"
      >
        <img
          src="../assets/main-second-icon3.png"
          class="w-12 h-12 md:w-16 md:h-16"
        />
        <div class="text-center">
          <p class="font-PretendardSemiBold md:text-2xl">모든 종류의</p>
          <p class="font-PretendardSemiBold md:text-2xl">
            문자 메시지를 한번에
          </p>
        </div>

        <div class="text-center">
          <p class="font-PretendardMedium text-gray-500 md:text-xl">
            메시지 용량 걱정없이 단문 메시지는
          </p>
          <p class="font-PretendardMedium text-gray-500 md:text-xl">
            물론 장문, 사진까지 전송이 가능합니다.
          </p>
        </div>
      </div>
      <div
        class="main-second-content flex flex-col justify-center items-center space-y-4 mx-6"
      >
        <img
          src="../assets/main-second-icon4.png"
          class="w-12 h-12 md:w-16 md:h-16"
        />
        <div class="text-center">
          <p class="font-PretendardSemiBold md:text-2xl">간편한 광고</p>
          <p class="font-PretendardSemiBold md:text-2xl">문자 메시지 설정</p>
        </div>

        <div class="text-center">
          <p class="font-PretendardMedium text-gray-500 md:text-xl">
            광고 설정 버튼 클릭 한번으로
          </p>
          <p class="font-PretendardMedium text-gray-500 md:text-xl">
            080 수신 거부 번호가 적용됩니다.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 메인 세 번째 섹션 -->
  <div
    class="mt-52 flex flex-1 flex-col justify-center items-center w-full md:mt-44"
  >
    <!-- 세 번째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-6">
      <img
        src="../assets/main-third-icon1.png"
        class="w-12 h-12 md:w-16 md:h-16"
      />
      <div class="text-center space-y-3">
        <p class="text-2xl font-PretendardBold md:text-5xl">샌드고의 다양한</p>
        <p class="text-2xl font-PretendardBold md:text-5xl">
          기능들을 살펴보세요
        </p>
      </div>
      <p class="text-lg text-gray-500 md:text-xl">
        고객님들의 입장에서 고민하였습니다.
      </p>
    </div>
    <!-- 세 번째 섹션 컨텐츠 -->
    <div class="mt-8 md:flex flex-col md:mt-24">
      <div
        class="flex-wrap flex justify-center md:flex-nowrap md:justify-normal space-y-5 md:space-y-0"
      >
        <div class="main-third-content1 relative">
          <div class="mt-4 space-y-1">
            <p class="text-xl md:text-3xl font-PretendardBold">
              자주 전송하는 내용이 있나요?
            </p>
            <p class="text-lg md:text-3xl font-PretendardBold text-mainGray">
              템플릿으로 메시지 내용을
            </p>
            <p class="text-lg md:text-3xl font-PretendardBold text-mainGray">
              저장하여 간편하게 전송하세요.
            </p>
          </div>
          <img
            src="../assets/main-third-image1.png"
            class="main-third-image1 absolute bottom-0 right-0"
          />
        </div>
        <div class="main-third-content2 relative">
          <div class="mt-4 space-y-1">
            <p class="text-xl md:text-3xl font-PretendardBold gradation-text2">
              크레딧 구매 시, 보너스 크레딧 증정
            </p>
            <p class="text-lg md:text-3xl font-PretendardBold text-mainPurple">
              크레딧 상품을 구매하면 상품 별
            </p>
            <p class="text-lg md:text-3xl font-PretendardBold text-mainPurple">
              보너스 크레딧을 증정합니다
            </p>
          </div>
          <img
            src="../assets/main-third-image2.png"
            class="main-third-image2 absolute bottom-0 right-4 md:right-10"
          />
        </div>
      </div>
      <div
        class="flex-wrap flex justify-center mt-5 space-y-5 md:mt-10 md:flex-nowrap md:justify-normal md:space-y-0"
      >
        <div class="main-third-content3 relative">
          <div class="mt-4 space-y-1">
            <p class="text-xl md:text-3xl font-PretendardBold text-mainBlue">
              전송 후 바로 발송확인 기능
            </p>
            <p
              class="text-lg md:text-3xl font-PretendardBold text-mainLightBlue"
            >
              메시지 전송 후 바로 발송현황 창에서
            </p>
            <p
              class="text-lg md:text-3xl font-PretendardBold text-mainLightBlue"
            >
              현재 메시지 전송 현황을 알려드립니다
            </p>
          </div>
          <img
            src="../assets/main-third-image3.png"
            class="main-third-image3 absolute bottom-0 right-0"
          />
        </div>
        <div class="main-third-content4 relative">
          <div class="mt-4 space-y-1">
            <p
              class="text-xl md:text-3xl font-PretendardBold text-mainThirdBrown"
            >
              누르면 바로 전송완료
            </p>
            <p class="text-lg md:text-3xl font-PretendardBold text-lightGray">
              누르자마자 수신인에게
            </p>
            <p class="text-lg md:text-3xl font-PretendardBold text-lightGray">
              바로 전달됩니다
            </p>
          </div>
          <img
            src="../assets/main-third-image4.png"
            class="main-third-image4 absolute bottom-0 right-4 md:right-14"
          />
        </div>
      </div>
    </div>
  </div>
  <!--메인 네번 째 섹션 -->
  <div
    class="flex flex-1 flex-col justify-center items-center w-full mt-36 md:mt-60"
  >
    <!-- 네번 째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-6">
      <img
        src="../assets/main-forth-icon1.png"
        class="w-12 h-12 md:w-16 md:h-16"
      />
      <div class="text-center space-y-3">
        <p class="text-2xl font-PretendardBold md:text-5xl">
          정확도와 다양함은 물론
        </p>
        <p class="text-2xl font-PretendardBold md:text-5xl">
          신뢰할 수 있는 보안까지
        </p>
      </div>
      <p class="text-lg mt-6 text-gray-500">
        고객님들의 간편함을 고민하였습니다
      </p>
    </div>
    <!-- 네번 째 섹션 컨텐츠 -->
    <div class="flex mt-14 flex-wrap justify-center md:flex-nowrap">
      <div class="main-fourth-content1">
        <div class="text-left w-full space-y-3 mt-4">
          <p class="text-lg md:text-3xl font-PretendardBold">
            일반 SMS는 기본, 카카오톡까지
          </p>
          <p class="text-lg md:text-3xl font-PretendardBold text-gray-600">
            종류와 상관없이 모두 전송해 드립니다
          </p>
        </div>
        <img src="../assets/main-forth-image1.png" class="main-forth-image1" />
      </div>
      <div class="main-fourth-content2">
        <div class="text-left space-y-3 mt-4">
          <p class="text-lg md:text-3xl font-PretendardBold text-mainBrown">
            강력한 보안을 제공합니다.
          </p>
          <p class="text-lg md:text-3xl font-PretendardBold text-lightBrown">
            신뢰할 수 있는 최신의 보안 시스템을
          </p>
          <p class="text-lg md:text-3xl font-PretendardBold text-lightBrown">
            적용하여 개인정보를 보호합니다
          </p>
        </div>
        <div class="text-lg w-full flex justify-end">
          <img
            src="../assets/main-forth-image2.png"
            class="main-forth-image2"
          />
        </div>
      </div>
    </div>
    <div class="main-fourth-content3">
      <div class="text-center space-y-3 mt-4 md:mt-16">
        <p class="text-lg md:text-3xl font-PretendardBold">
          놀라운 수신율을 경험해 보세요
        </p>
        <p class="text-lg md:text-3xl font-PretendardBold text-gray-600">
          샌드고의 정확한 수신율은 99.8%에 달합니다
        </p>
      </div>
      <img src="../assets/main-forth-image3.png" class="main-forth-image3" />
    </div>
  </div>

  <!--메인 다섯 번째 섹션 -->
  <div
    class="flex flex-1 flex-col bg-blackBg justify-center items-center w-full h-screen mt-56"
  >
    <!-- 다섯 번째 섹션 타이틀 -->
    <div class="flex flex-col items-center space-y-10">
      <div class="space-y-6">
        <div class="text-center space-y-6">
          <p class="gradation-text font-PretendardBold text-4xl md:text-6xl">
            비즈니스 광고의 시작,
          </p>
          <p class="gradation-text font-bold text-4xl md:text-6xl">
            이제 샌드고와 함께 하세요
          </p>
        </div>
      </div>
      <div class="flex mt-6">
        <button
          class="w-40 md:w-52 md:h-16 py-4 mx-2 rounded-full bg-purple text-white text-center md:text-xl hover:bg-indigo-500"
        >
          메시지 바로가기
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
/* 텍스트 그라데이션 적용 */
.gradation-text {
  background: transparent linear-gradient(90deg, #b6b7f7 0%, #7fb2fe 100%) 0% 0%
    no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradation-text2 {
  background: transparent linear-gradient(270deg, #6264f6 0%, #7f3add 100%) 0%
    0% no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradation-text3 {
  background: transparent linear-gradient(90deg, #9fbafd 0%, #4e81ff 100%) 0% 0%
    no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 히어로 섹션 */
.main-hero-content {
  width: 254px;
  height: 443px;
}
.main-hero-content2 {
  width: 254px;
  height: 609px;
}
.hero-image {
  max-width: none;
  width: 340px;
}

/* 메인 두번 째 섹션 */
.main-second-content {
  width: 80%;
  height: 32%;
  background: #f0f0fa 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
  padding: 7% 5%;
}

/* 메인 세번 째 섹션 */
.main-third-content1 {
  display: flex;
  flex-direction: column;
  width: 78%;
  height: 300px;
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 7% 5%;
  overflow: hidden;
}
.main-third-image1 {
  width: 70%;
  height: 50%;
  opacity: 1;
}
.main-third-content2 {
  width: 78%;
  height: 300px;
  background: #e9ebfd 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 7% 5%;
  overflow: hidden;
}
.main-third-image2 {
  width: 280px;
  height: 38%;
  opacity: 1;
}
.main-third-content3 {
  width: 78%;
  height: 300px;
  background: #dbe5ff 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 7% 5%;
  overflow: hidden;
}
.main-third-image3 {
  width: 200px;
  height: 40%;
  opacity: 1;
}
.main-third-content4 {
  width: 78%;
  height: 300px;
  background: transparent linear-gradient(180deg, #fafaee 0%, #fbfbf0 100%) 0%
    0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 7% 5%;
  overflow: hidden;
}
.main-third-image4 {
  width: 55%;
  height: 60%;
  opacity: 1;
}
/* 메인 네번 째 섹션 */
.main-fourth-content1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dceff4 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  width: 78%;
  height: 300px;
  padding: 7% 5%;
  overflow: hidden;
}
.main-forth-image1 {
  width: 70%;
}
.main-fourth-content2 {
  display: flex;
  flex-direction: column;
  background: #fbfbef 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  width: 78%;
  height: 300px;
  padding: 7% 5%;
  margin-top: 20px;
  overflow: hidden;
}
.main-forth-image2 {
  margin-top: 20px;
  width: 50%;
  height: 70%;
}
.main-fourth-content3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 78%;
  height: 300px;
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border-radius: 25px;
  padding: 7% 5%;
  opacity: 1;
  margin-top: 20px;
  overflow: hidden;
}
.main-forth-image3 {
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 40%;
}
/* 반응형 */
@media (min-width: 768px) {
  /* 메인 두번 째 섹션 */
  .main-second-content {
    width: 444px;
    height: 349px;
    background: #f0f0fa 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
    padding: 0;
  }

  /* 세 번째 섹션 */
  .main-third-content1 {
    display: flex;
    flex-direction: column;
    width: 626px;
    height: 597px;
    background: #f8f9fa 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    padding: 54px;
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
    padding: 54px;
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
    padding: 54px;
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
    padding: 54px;
  }
  .main-third-image4 {
    width: 416px;
    height: 432px;
    opacity: 1;
  }
  /* 네 번째 섹션 */

  .main-fourth-content1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #dceff4 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    width: 688px;
    height: 597px;
    padding: 54px;
  }
  .main-forth-image1 {
    margin-top: 60px;
    width: 342px;
    height: 310px;
  }
  .main-fourth-content2 {
    display: flex;
    flex-direction: column;
    background: #fbfbef 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    width: 688px;
    height: 597px;
    padding: 54px;
    margin-left: 44px;
    margin-top: 0px;
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
    padding: 0;
    margin-top: 0px;
  }
  .main-forth-image3 {
    position: absolute;
    bottom: 0;
    width: 704px;
    height: 286px;
  }
}
</style>
