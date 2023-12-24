<script setup>
import { ref, onMounted, defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
defineComponent({
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            700: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
    }),

})

let product = ref([])
onMounted(() => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(
            result => {
                product.value = result.products
            }
        );
})
</script>

<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints" :itemsToShow="1.35" :autoplay="2000" :wrapAround="true">
        <Slide v-for="item in product" :key="item.id">
            <div class="carousel__item">
                <div class="">
                    <img :src="item.thumbnail" :alt="item.title" layout="fill" class="min-w-full h-[200px]" />
                    <div class="p-6">
                        <h5
                            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {{ item.title }}</h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{{
                            item.description }}</p>
                    </div>
                    <div class="p-6 pt-0">
                        <button
                            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button" data-ripple-light="true">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </Slide>

        <template #addons="{ slidesCount }">
            <Navigation v-if="slidesCount > 1" />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
.carousel__slide {
    padding: 5px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
  .carousel__pagination {
    max-width: 100% !important;
    overflow: hidden;
  }
</style>