<template>
  <div
    class="w-screen bg-pageBgGray flex flex-1 flex-col items-center justify-around pt-20"
  >
    <div
      class="flex flex-1 items-center justify-center bg-white space-x-10 w-full h-24 py-2"
    >
      <div class="h-14 flex justify-center items-center">메시지 전송</div>
      <div class="h-14 flex justify-center items-center">발신번호 관리</div>
      <div class="h-14 flex justify-center items-center">주소록 관리</div>
      <div class="h-14 flex justify-center items-center">발송결과</div>
    </div>

    <div>
      <div class="message-section mt-14 flex flex-col items-center">
        <div class="font-PretendardBold text-4xl">메세지 전송</div>
        <div class="space-x-4 mt-9">
          <button class="w-80 h-16 bg-buttonPurple rounded-lg">
            문자 메시지
          </button>
          <button class="w-80 h-16 bg-gray-100 rounded-lg">
            알림톡 (카카오)
          </button>
          <button class="w-80 h-16 bg-gray-100 rounded-lg">
            친구톡 (카카오)
          </button>
        </div>
        <div
          class="border-b border-gray-200 w-full py-8 space-y-1 text-textGray"
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
          class="flex flex-1 w-full py-9 justify-between border-b border-gray-200"
        >
          <div class="w-3/5">
            <div class="border-b border-gray-200">
              <div>수신번호</div>
              <div>
                <input placeholder="휴대폰번호 (숫자만 입력)" type="number" />
                <button>+ 추가</button>
                <textarea
                  class="w-full h-60 resize-none"
                  placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요. 최대 1만 건까지 붙여넣기 가능합니다."
                ></textarea>
              </div>
              <div>
                <button>주소록 불러오기</button>
                <button>파일 불러오기</button>
                <button>최근 전송 내역</button>
              </div>
            </div>
            <div class="border-b border-gray-200 py-7">
              <div>발신번호</div>
              <select
                placeholder="전송할 발신번호 선택"
                class="w-full h-14 border bg-lightGray2"
              >
                <option value="">전송할 발신번호 선택</option>
              </select>
            </div>
            <div class="border-b border-gray-200 py-7">
              <div>메세지 입력</div>
              <div class="bg-lightGray2 w-full p-6">
                <input
                  type="text"
                  placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)"
                  class="w-full h-14 border bg-white border-borderGray"
                />
                <div class="flex w-full justify-between">
                  <button class="">단문 SMS</button>
                  <div class="flex items-center">
                    <span>0</span><span>/90byte</span>
                    <div>
                      <img src="../assets/그룹 49953.png" class="w-9 h-9" />
                    </div>
                  </div>
                </div>
                <textarea
                  class="w-full h-72 resize-none"
                  placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로, 이미지 추가 시 포토 문자로 자동 전환 됩니다."
                ></textarea>
              </div>
            </div>
          </div>
          <div class="">
            <div class="phone p-3.5">
              <img src="../assets/그룹 46623.png" class="rotate-90 w-11 h-11" />
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col border-b border-gray-200 py-10">
          <div class="font-PretendardSemiBold text-xl">발송 설정</div>
          <div><button>즉시 발송</button><button>예약 발송</button></div>
        </div>
        <div
          class="flex justify-center items-center text-xl text-white font-PretendardMedium rounded-lg w-full h-16 bg-buttonPurple mt-9"
        >
          발송하기
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
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
}
</style>
