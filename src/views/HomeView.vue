<script setup>
import { ref, reactive } from 'vue'
import Carosule from '@/components/Carosule.vue';

const production = ref([
    {
        img: 'https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png',
        name: 'Safe Payments'
    },
    {
        img: 'https://icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png',
        name: 'Nationwide Delivery'
    },
    {
        img: 'https://icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png',
        name: 'Free & Easy Returns'
    },
    {
        img: 'https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png',
        name: 'Best Price Guaranteed'
    },
    {
        img: 'https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png',
        name: '100% Authentic Products'
    },
    {
        img: 'https://icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png',
        name: 'Daraz Verified'
    }
]);

</script>

<template>
<div class="p-3">
    <div class="grid grid-cols-12 gap-2">
        <div class="col-span-3">
        <div class="bg-black text-white w-full hidden md:block">
            <ul>
                <li>1ok</li>
                <li>2ok</li>
                <li>3ok</li>
                <li>4ok</li>
                <li>5ok</li>
                <li>6ok</li>
                <li>7ok</li>
                <li>8ok</li>
                <li>9ok</li>
                <li>10ok</li>
            </ul>
        </div>
        </div>
        <div class="md:col-span-9 col-span-12 w-full">
           <Carosule></Carosule>
        </div>
    </div>
    <!-- Cerasole End -->


    <!-- card-channels -->
    <div class="card-channels bg-[#FFE8DE] mt-8 rounded-md">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-3  ">
            <div v-for="(productionItem, index) in production" :key="index"
                class="flex justify-center my-3" >
                <img :src="productionItem.img" alt="">
                <p class="text-sm font-thin  text-[19px]">{{ productionItem.name }}</p>
            </div> 
        </div>
    </div>
</div>
</template>

<style scoped>

</style>