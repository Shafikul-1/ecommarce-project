<script setup>
import { ref, reactive } from 'vue'
//import  from '.'
const Dropdown = ref(false);
const mobileMenu = ref(false);

// Theme Change
const showThmeIcon = ref(true);
const changeTheme = (changeTheme)=>{
  if (changeTheme) {
    const html = document.querySelector('html');
    html.classList.add('dark');
    showThmeIcon.value = false;
  } else {
    const html = document.querySelector('html');
    html.classList.remove('dark');
    showThmeIcon.value = true;
  }
}

</script>

<template>
  <div class="">
    <nav class="bg-indigo-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <i class="fa-solid fa-xmarks-lines text-black dark:text-white"></i>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommarce</span>
        </RouterLink>

       <!-- Mobile Menu Start -->
       <button @click="mobileMenu = !mobileMenu" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <i class="fa-solid fa-bars-staggered text-black dark:text-white"></i>
       </button>
       <!-- Mobile Menu End -->
       <div class="md:hidden">
         <!-- Theme Start -->
         <button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Theme Change</span>
            <i v-if="showThmeIcon === true" @click="changeTheme(true)" class="fa-solid fa-circle-half-stroke"></i>
            <i v-if="showThmeIcon === false" @click="changeTheme(false)" class="fa-solid fa-sun"></i>
          </button>
          <!-- Theme End -->
       </div>

        <div :class="mobileMenu ? '' : 'hidden'" class="w-full md:block md:w-auto">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <RouterLink to="/" :class="{ 'lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]': $route.path === '/' }" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">Home</RouterLink>
            </li>
            <li class="relative">
                <button @click="Dropdown = !Dropdown" class="hoverContent flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown 
                    <i class="fa-solid fa-chevron-down ml-2"></i>
                </button>
                <!-- Dropdown menu -->
                <div v-if="Dropdown" class="absolute  z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" >
                    <ul class=" py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li>
                        <RouterLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</RouterLink>
                      </li>
                    </ul>
                    <div class="py-1">
                      <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</RouterLink>
                    </div>
                </div>
            </li>
            <li>
              <RouterLink to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</RouterLink>
            </li> 
         
          </ul>
        </div>

        <!-- Theme Start -->
        <button class="hidden md:block inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Theme Change</span>
          <i v-if="showThmeIcon === true" @click="changeTheme(true)" class="fa-solid fa-circle-half-stroke"></i>
          <i v-if="showThmeIcon === false" @click="changeTheme(false)" class="fa-solid fa-sun"></i>
        </button>
        <!-- Theme End -->

      </div>
    </nav>
    </div>
</template>

<style scoped>

</style>

