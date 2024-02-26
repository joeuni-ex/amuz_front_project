<template>
  <div class="bg-pageBgGray flex flex-1 flex-col items-center pt-20">
    <!-- 상단 카테고리 -->
    <Category selectedCategory="메시지 전송" :categoryList="categoryList" />
    <!-- 메시지 페이지 -->
    <div>
      <div
        class="message-section mt-14 flex flex-col items-center md:container"
      >
        <div class="font-PretendardBold text-xl md:text-3xl lg:text-4xl">
          메세지 전송
        </div>
        <div class="space-x-4 md:space-x-6 lg:space-x-8 mt-9">
          <button
            class="w-24 h-10 md:w-44 md:h-16 lg:w-80 lg:h-16 bg-buttonPurple rounded-lg text-sm md:text-xl text-white font-PretendardMedium"
          >
            문자 메시지
          </button>
          <button
            class="w-24 h-10 md:w-44 md:h-16 lg:w-80 lg:h-16 bg-gray-100 rounded-lg text-sm md:text-xl font-PretendardMedium text-gray-500"
          >
            알림톡 (카카오)
          </button>
          <button
            class="w-24 h-10 md:w-44 md:h-16 lg:w-80 lg:h-16 bg-gray-100 rounded-lg text-sm md:text-xl font-PretendardMedium text-gray-500"
          >
            친구톡 (카카오)
          </button>
        </div>
        <div
          class="text-sm md:text-base border-b border-gray-300 w-full py-8 space-y-1 text-textGray"
        >
          <p>
            • 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.
          </p>
          <p>
            • 90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이
            가능합니다.
          </p>
        </div>

        <!-- 하단 -->
        <div
          class="flex flex-1 w-full py-9 flex-col items-center lg:flex-row lg:items-stretch justify-between border-b border-gray-300"
        >
          <div class="w-full lg:w-3/5">
            <!-- 수신번호 -->
            <div class="border-b border-gray-300 space-y-3 pb-8">
              <div class="font-PretendardSemiBold md:text-xl">수신번호</div>
              <div>
                <input
                  placeholder="휴대폰번호 (숫자만 입력)"
                  type="number"
                  class="w-9/12 h-10 md:w-9/12 md:h-14 border bg-lightGray2 text-sm md:text-base rounded-lg pl-6"
                />
                <button
                  class="w-16 h-10 md:w-28 md:h-14 ml-4 rounded-lg bg-buttonPurple text-sm md:text-xl text-white"
                >
                  + 추가
                </button>
                <div
                  class="flex flex-col border w-full h-64 border-borderGray p-3 rounded-lg my-4"
                >
                  <textarea
                    class="w-full h-52 resize-none text-sm md:text-base"
                    placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.&#13;&#10;최대 1만 건까지 붙여넣기 가능합니다."
                  ></textarea>
                  <div class="flex w-full justify-between">
                    <div class="text-sm md:text-base">
                      <p class="font-PretendardSemiBold">
                        총<span
                          class="text-buttonPurple3 font-PretendardSemiBold"
                        >
                          0</span
                        >명
                      </p>
                    </div>
                    <div
                      class="underline decoration-1 cursor-pointer text-gray-500 font-PretendardMedium text-sm md:text-base"
                    >
                      모두 삭제
                    </div>
                  </div>
                </div>
              </div>

              <!-- 수신번호 불러오기 버튼  -->
              <div class="flex justify-between">
                <div
                  class="flex justify-center items-center w-28 h-10 md:w-44 md:h-14 border border-borderGray rounded-lg text-gray-500 cursor-pointer text-xs md:text-base"
                >
                  <img src="../assets/message-icon1.png" class="w-6 h-6" />
                  주소록 불러오기
                </div>
                <div
                  class="flex justify-center items-center w-28 h-10 md:w-44 md:h-14 border border-borderGray rounded-lg text-gray-500 cursor-pointer text-xs md:text-base"
                >
                  <img src="../assets/message-icon2.png" class="w-6 h-6" />
                  파일 불러오기
                </div>
                <div
                  class="flex justify-center items-center w-28 h-10 md:w-44 md:h-14 border border-borderGray rounded-lg text-gray-500 cursor-pointer text-xs md:text-base"
                >
                  <img src="../assets/message-icon3.png" class="w-6 h-6" />
                  최근 전송 내역
                </div>
              </div>
            </div>
            <!-- 발신 번호  -->
            <div class="border-b border-gray-300 py-8 space-y-3">
              <div class="font-PretendardSemiBold md:text-xl">발신번호</div>
              <select
                placeholder="전송할 발신번호 선택"
                class="w-full h-14 bg-lightGray2 rounded-lg pl-5 text-gray-500 text-sm md:text-base"
              >
                <option value="">전송할 발신번호 선택</option>
              </select>
            </div>
            <!-- 메시지 입력 -->
            <div class="pt-8 space-y-3">
              <div class="font-PretendardSemiBold md:text-xl">메세지 입력</div>
              <div
                class="bg-lightGray2 w-full p-4 md:p-6 rounded-lg border border-borderGray"
              >
                <input
                  type="text"
                  placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)"
                  class="w-full h-14 border bg-white border-borderGray pl-5 rounded-lg text-sm md:text-base"
                />
                <div class="flex w-full justify-between my-4">
                  <button
                    class="w-20 h-7 md:w-24 md:h-9 text-white bg-buttonPurple3 rounded-3xl text-sm md:text-base"
                  >
                    단문 SMS
                  </button>
                  <div class="flex items-center">
                    <span
                      class="text-buttonPurple3 font-PretendardSemiBold text-sm md:text-base"
                      >0</span
                    >
                    <span
                      class="font-PretendardMedium text-gray-500 text-sm md:text-base"
                    >
                      / 90byte</span
                    >
                    <div class="ml-2">
                      <img
                        src="../assets/message-icon4.png"
                        class="w-5 md:w-9 md:h-9"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="border w-full h-72 border-borderGray rounded-lg my-4 p-5 bg-white"
                >
                  <!-- 메시지 입력창 -->
                  <textarea
                    class="w-full h-48 resize-none text-sm md:text-base"
                    placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로,&#13;&#10;이미지 추가 시 포토 문자로 자동 전환 됩니다."
                  ></textarea>
                  <!-- 태그 -->
                  <div class="flex justify-end w-full">
                    <div
                      class="w-20 h-8 md:w-28 md:h-11 ml-2 flex justify-center items-center bg-gray-100 rounded-lg md:rounded-3xl text-gray-500 cursor-pointer text-sm md:text-base"
                    >
                      치환코드
                    </div>
                    <div
                      class="w-20 h-8 md:w-28 md:h-11 ml-2 flex justify-center items-center bg-gray-100 rounded-3xl text-gray-500 cursor-pointer text-sm md:text-base"
                    >
                      템플릿
                    </div>
                    <div
                      class="w-20 h-8 md:w-28 md:h-11 ml-2 flex justify-center items-center bg-gray-100 rounded-3xl text-gray-500 cursor-pointer text-sm md:text-base"
                    >
                      문자도구
                    </div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center border-y border-gray-300 py-7"
                >
                  <p class="font-PretendardSemiBold md:text-xl">
                    광고성 문자(080 수신거부번호 포함)
                  </p>
                  <img
                    src="../assets/message-icon5.png"
                    class="cursor-pointer w-10 md:w-16"
                  />
                </div>
                <!-- 이미지 추가 -->
                <div>
                  <p class="font-PretendardSemiBold md:text-xl my-4">
                    이미지 추가
                  </p>
                  <div
                    class="flex justify-center items-center w-24 h-24 border bg-white cursor-pointer rounded-lg border-borderGray"
                  >
                    <plusIcon />
                  </div>
                  <div class="w-full pt-3 space-y-1 text-textGray">
                    <p class="text-gray-500 text-sm md:text-lg">
                      • 이미지는 최대 3장까지 첨부 가능합니다.
                    </p>
                    <p class="text-gray-500 text-sm md:text-lg">
                      • 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 오른쪽 스마트폰 카드 -->
          <div class="w-full flex justify-center mt-10 lg:mt-0">
            <div class="phone p-3.5">
              <img
                src="../assets/message-phone-icon.png"
                class="rotate-90 w-11 h-11"
              />
            </div>
          </div>
        </div>
        <!-- 발송 설정 -->
        <div class="flex w-full flex-col border-b border-gray-300 py-7">
          <div class="font-PretendardSemiBold md:text-xl mb-4">발송 설정</div>
          <div class="flex space-x-4">
            <div
              class="flex justify-center items-center h-10 w-1/2 md:h-14 lg:w-1/4 lg:h-16 border-2 border-buttonPurple rounded-lg shadow-md cursor-pointer"
            >
              <img src="../assets/message-icon8.png" class="mr-1" />
              <span
                class="text-buttonPurple md:text-xl font-PretendardMedium mr-5"
                >즉시 발송
              </span>
            </div>
            <div
              class="flex justify-center items-center h-10 w-1/2 md:h-14 lg:w-1/4 lg:h-16 bg-gray-100 rounded-lg cursor-pointer"
            >
              <img src="../assets/message-icon7.png" class="mr-1" />
              <span class="text-gray-500 md:text-xl font-PretendardMedium mr-5"
                >예약 발송
              </span>
            </div>
          </div>
        </div>
        <div
          class="flex justify-center items-center md:text-xl text-white font-PretendardMedium rounded-lg w-full h-12 md:h-16 bg-buttonPurple hover:bg-indigo-500 mt-9 cursor-pointer"
        >
          발송하기
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import plusIcon from "../assets/message-icon6.svg";
import Category from "../components/Category.vue";

export default {
  components: {
    plusIcon,
    Category,
  },
  setup() {
    const categoryList = ["발신번호 관리", "주소록 관리", "발송결과"];

    return {
      categoryList,
    };
  },
};
</script>
<style>
.message-section {
  width: 100vw;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 24px;
  opacity: 1;
  padding: 5%;
  margin-bottom: 200px;
}
.phone {
  max-width: 350px;
  width: 85%;
  height: 560px;
  background: #eaf8ff 0% 0% no-repeat padding-box;
  border: 5px solid #4d4d4d;
  border-radius: 22px;
  opacity: 1;
  margin-left: 0px;
  position: sticky;
  top: 80px;
  z-index: 1;
}

/* 반응형 */
@media (min-width: 768px) and (max-width: 1024px) {
  .phone {
    width: 401px;
    height: 660px;
    background: #eaf8ff 0% 0% no-repeat padding-box;
    border: 5px solid #4d4d4d;
    border-radius: 22px;
    opacity: 1;
    margin-left: 0px;
    position: sticky;
    top: 80px;
    z-index: 1;
  }
}
@media (min-width: 1025px) {
  .message-section {
    width: 1223px;
    height: 2212px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 24px;
    opacity: 1;
    padding: 53px 96px 72px 96px;
    margin-bottom: 200px;
  }
  .phone {
    width: 401px;
    height: 775px;
    background: #eaf8ff 0% 0% no-repeat padding-box;
    border: 5px solid #4d4d4d;
    border-radius: 22px;
    opacity: 1;
    margin-left: 68px;
    position: sticky;
    top: 80px;
    z-index: 1;
  }
}
</style>
