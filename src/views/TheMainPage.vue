<template>
  <div id="about" class="rerative w-full xs:h-[480px] sm:h-[480px] md:h-[600px] lg:h-[800px] xl:h-[750px] bg-main_bg">
    <div class=" pt-4 pl-2 flex">
      <div>
        <img :src="require('/src/assets/img/top_img.jpg')" 
              alt="top_img"
              class="ml-6 
                     xs:w-[300px] xs:h-[230px] 
                     sm:w-[450px] sm:h-[300px]
                     md:w-[600px] md:h-[400px]
                     lg:w-[900px] lg:h-[550px]">
      </div>
      <div class="absolute bg-amber-500 bg-opacity-75 text-black text-start  
                  xs:ml-[120px] xs:mt-[180px] xs:pl-2 xs:pb-8
                  sm:ml-[230px] sm:mt-[220px] 
                  md:w-[350px] md:ml-[400px] md:mt-[240px]
                  lg:w-[500px] lg:ml-[500px] lg:mt-[400px] lg:pt-6 lg:pb-10 lg:pl-6
                  xl:w-[600px] xl:ml-[650px] xl:mt-[300px] xl:pb-20 xl:pl-20">
        <p class="xs:text-2xl md:text-4xl">- About -</p>      
        <p class="xs:text-xl text-2xl pt-2">自宅で作ったパン達</p>      
        <p class="xs:text-[12px] lg:text-lg md:pt-6">元パン屋で今はWeb系のスキルを</p>
        <p class="xs:text-[12px] lg:text-lg lg:pt-2">取得できるよう勉強中です。</p>
        <p class="xs:text-[12px] lg:text-lg lg:pt-2">趣味で作ったパン達の写真置き場です。（笑）</p>
      </div>
    </div>
  </div>

  <div class="absolute w-full">
    <div id="bread" class="pb-4 text-4xl bg-main_bg">- Bread Photos -</div>
    
    <div class="bg-main_bg"> 
      <div class="w-[80%] m-auto pt-4 pb-20">
        <Carousel :autoplay="1500" :itemsToShow="responsiveShow" :wrapAround="true" :transition="900" 
                  ref="carousel" >
          <Slide v-for="slide in slides" :key="slide.index">
            <div>
              <router-link :to="`/` + slide.url">
                <img :src="getImgUrl(slide.img)" alt="" class="hover:opacity-50 rerative">
                <p class="slide_caption absolute
                  top-[7%] left-[6%] xs:text-[10px] sm:text-sm lg:text-md">
                    {{ slide.caption }}
                </p>
              </router-link>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination :totalCount="slides.length" :perPage="4" />
          </template>
        </Carousel>
      </div>
    </div>

    <div id="pieces" class="pt-4 text-3xl text-center bg-main_bg">- Pièces (飾りパン) -</div>

    <div class="w-full  bg-main_bg  pt-10 pb-32">
      <div class="w-[40%] m-auto">
      <swiper
        :effect="'cube'"
        :grabCursor="true"
        :cubeEffect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 50,
          shadowScale: 0.94,
        }"
        :modules="modules"
        :loop="true"
        :speed="1500"
        :autoplay="{delay:1500}"           
      >
        <swiper-slide><img :src="require(`/src/assets/img/piece.jpg`)" alt="piece_1" ></swiper-slide>
        <swiper-slide><img :src="require(`/src/assets/img/piece_1.jpg`)" alt="piece_1" ></swiper-slide>
        <swiper-slide><img :src="require(`/src/assets/img/piece_2.jpg`)" alt="piece_2" ></swiper-slide>
        <swiper-slide><img :src="require(`/src/assets/img/piece_3.jpg`)" alt="piece_3" ></swiper-slide>
        <swiper-slide><img :src="require(`/src/assets/img/piece_4.jpg`)" alt="piece_3" ></swiper-slide>
      </swiper>
    </div>

    </div>
  </div>
    
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const responsiveShow = ref(4);
const updateResponsiveShow = () => {
  if (window.innerWidth < 768) {
    responsiveShow.value = 2;
  } else if (window.innerWidth < 976) {
    responsiveShow.value = 3;
  } else {
    responsiveShow.value = 4;
  }
};

onMounted(() => {
  updateResponsiveShow();
  window.addEventListener('resize', updateResponsiveShow);
});

const slides = [
    { index: 0, img: "babka_3.jpg", caption: "チョコレートバブカ", url: "babka" },
    { index: 1, img: "croissant.jpg", caption: "クロワッサン", url: "croissant" },
    { index: 2, img: "barger.jpg", caption: "バーガー", url:"barger" },
    { index: 3, img: "viennois.jpg", caption: "ヴィエノワ", url: "viennois" },
    { index: 4, img: "fluit.jpg", caption: "カンパーニュ・フリュイ", url: "fluit" },
    { index: 5, img: "kouglof.png", caption: "クグロフ・アルザシアン", url: "kouglof" },
    { index: 6, img: "galette.jpg", caption: "ガレット・デ・ロワ", url: "galette" },
  ];

const getImgUrl = (filename) => {
    return process.env.BASE_URL + "slider/" + filename;
  };

const modules = [EffectCube, Autoplay];

</script>

<style scoped>

.swiper {
  width: 90%;
  height: 90%;
}
.slide_img {
  border-radius: 15px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__viewport {
  perspective: 100%;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.88);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(10deg) scale(0.88);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(-10deg) scale(1.1);
}

.slide_caption {
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  color :rgb(230, 230, 230);
  background-color: rgb(91, 90, 90);
  opacity: 75%;
  border-radius: 5px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  font-size: 20px; 
}
</style>