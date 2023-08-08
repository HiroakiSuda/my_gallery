<template>
  <div class="absolute w-full xs:h-[1200px] md:h-[750px] lg:h-[900px] bg-main_bg">

    <div 
      class="rerative mt-16 mx-auto bg-gray-200  border border-gray-800 rounded-lg
      xs:h-[950px] xs:w-[70%] 
      md:h-[600px] md:w-[760px]
      lg:h-[700px] lg:w-[950px]
      xl:h-[550px] xl:w-[1200px] 
    ">
      <div class="text-start mt-[-50px] ml-[80%] lg:ml-[90%]">
        <router-link to="/">
          <button class="p-2 xs:text-md md:text-lg bg-gray-300 rounded">
            戻る
          </button>
        </router-link>
      </div>

      <div class="pt-6 pl-6 text-start xs:text-xl md:text-3xl font-bold">
        クグロフ・アルザシアン
      </div>
      <div class="pt-6 pl-6 text-start sm:w-[100%] md:w-[50%]">
        ブリオッシュタイプのアルザス地方のクグロフ。
      </div>
      <hr class="border border-gray-300 mt-6 
        ms:w-[100%] md:w-[50%] xl:w-[100%]">
        <div>
          <img :src="'slider/kouglof.png'" alt=""
            class="rounded-xl
              xs:mt-[20px] xs:ml-[30px] xs:w-[200px] xs:h-[200px]
              md:mt-[-100px] md:ml-[430px] md:w-[250px] md:h-[250px] 
              lg:mt-[-100px] lg:ml-[500px] lg:w-[300px] lg:h-[300px]
              xl:mt-[10px] xl:ml-[50px] xl:w-[350px] xl:h-[350px]
              ">
          <!-- <img :src="" alt=""
            class="rounded-xl
              xs:mt-[40px] xs:ml-[30px] xs:w-[200px] xs:h-[200px]
              md:mt-[40px] md:ml-[90px] md:w-[250px] md:h-[250px] 
              lg:mt-[50px] lg:ml-[20px] lg:w-[300px] lg:h-[300px]
              xl:mt-[-350px] xl:ml-[460px] xl:w-[350px] xl:h-[350px]
              "> -->
          <!-- <img :src="" alt=""
            class="rounded-xl
              xs:mt-[40px] xs:ml-[25px] xs:w-[200px] xs:h-[200px]
              md:mt-[-250px] md:ml-[430px] md:w-[250px] md:h-[250px] 
              lg:mt-[-300px] lg:ml-[290px] lg:ml-[45%] lg:w-[300px] lg:h-[300px]
              xl:mt-[-350px] xl:ml-[800px] xl:w-[350px] xl:h-[350px]
              "> -->
        </div>
    </div>

    <div class="rerative text-start mt-[20px] ml-[70%] md:hidden">
      <router-link to="/">
        <button class="p-2 xs:text-md md:text-lg bg-gray-300 rounded">
          戻る
        </button>
      </router-link>
    </div>

  </div>
</template>

<script setup>

</script>


