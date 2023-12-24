<script setup>
import { ref, reactive } from 'vue'
//import  from '.'

const MenuItem = reactive({
  menuLogo: {
    menuIcon: 'https://flowbite.com/docs/images/logo.svg',
    menuText: 'Flowbite',
    alt: 'Ecommarce Logo'
  },
  menuContent: [
    {
      id: 1,
      path: '/',
      name: 'Home',
    },
    {
      id: 2,
      path: '/about',
      name: 'About',
    },
    {
      id: 3,
      path: '/service',
      name: 'Service',
      subMenu: [
        {
          id: 1,
          path: '/development',
          name: 'Development'
        },
        {
          id: 2,
          path: '/design',
          name: 'Design',
          subMenu: [
            {
              id: 1, 
              path: '/other2s',
              name: 'Other2s'
            },
            {
              id: 2, 
              path: '/other',
              name: 'Other',
              subMenu: [
                {
                  id: 1, 
                  path: '/check',
                  name: 'Check'
                },
                {
                  id: 2,
                  path: '/check2',
                  name: 'Check 2'
                },
                {
                  id: 3,
                  path: '/check2s',
                  name: 'Check s2'
                } ,
                {
                  id: 4,
                  path: '/che4ck2s',
                  name: 'Check 4s2'
                } 
              ]
            },
            {
              id: 3, 
              path: '/other2',
              name: 'Other2'
            },
            {
              id: 4, 
              path: '/otheRr2',
              name: 'OtheRr2'
            }
          ]
        },
        {
          id: 3,
          path: '/arts',
          name: 'Arts'
        },
        {
          id: 4,
          path: '/developments',
          name: 'Developments'
        },
        {
          id: 5,
          path: '/developments1',
          name: 'Developments1'
        },
      ]
    },
    {
      id: 4,
      path: '/pricing',
      name: 'Pricing'
    },
    {
      id: 5,
      path: '/contact',
      name: 'Contact'
    }
  ]
})



const showSubmenu = ref(false)
const secondSubMenu = ref(false)
const thredSubMenu = ref(false)
const showHideMenu = ref(true)


</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="MenuItem.menuLogo.menuIcon" class="h-8" :alt="MenuItem.menuLogo.alt" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ MenuItem.menuLogo.menuText }}</span>
      </RouterLink>

      <button @click="showHideMenu = !showHideMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <i class="fa-solid fa-bars text-2xl"></i>
      </button>


        <div :class="showHideMenu ? 'hidden' : ''" class=" w-full md:block md:w-auto">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md:dark:bg-gray-900 ">
            <li v-for="menuBarText in MenuItem.menuContent" :key="menuBarText.id" :class="{ 'text-white bg-black': $route.path === `${menuBarText.path}`}" 
            class="relative dark:bg-gray-800 dark:border-gray-700 flex justify-between hover:bg-gray-400">
              <RouterLink 
                  :to="menuBarText.subMenu ? '#' : menuBarText.path" 
                  @click="menuBarText.subMenu ? showSubmenu = !showSubmenu : ''" 
                  class="py-2 px-3 w-full  "> {{ menuBarText.name }} 
                </RouterLink>

                <button @click="showSubmenu = !showSubmenu" v-if="menuBarText.subMenu">
                  <i class="fa-solid fa-chevron-down hover:bg-gray-400"></i>
                </button>
              <ul v-if="showSubmenu" :class="menuBarText.subMenu ? 'border border-gray-100 rounded-lg bg-gray-200 z-10 absolute w-full top-[2.5rem] md:w-[11rem]' : '' ">
                <li v-for="subMenuText in menuBarText.subMenu" :key="subMenuText.id"
                class=" dark:bg-gray-800 dark:border-gray-700 flex justify-between hover:bg-gray-400">
                <router-link 
                    :to="subMenuText.subMenu ? '#' : subMenuText.path"
                    @click="subMenuText.subMenu ? secondSubMenu = !secondSubMenu : ''" 
                    class="py-2 px-3 w-full  font-normal text-sm">
                    {{ subMenuText.name }}
                  </router-link>

                  <button @click="secondSubMenu = !secondSubMenu" v-if="subMenuText.subMenu">
                    <i class="fa-solid fa-chevron-down hover:bg-gray-400"></i>
                  </button>
                
                  <ul v-if="secondSubMenu" :class="subMenuText.subMenu ? 'border border-gray-200 rounded-lg bg-gray-300 z-10 absolute w-full  top-[4.5rem] ' : '' " >
                    <li v-for="subMenu in subMenuText.subMenu" :key="subMenu.id"
                    class=" dark:bg-gray-800 dark:border-gray-700 flex justify-between hover:bg-gray-400">
                      <router-link :to="subMenu.subMenu ? '#' : subMenu.path"
                          @click="subMenu.subMenu ? thredSubMenu = !thredSubMenu : ''"
                          class="py-2 px-3 w-full text-sm font-normal">
                          {{ subMenu.name }}
                        </router-link>

                        <button @click="thredSubMenu = !thredSubMenu" v-if="subMenu.subMenu">
                          <i class="fa-solid fa-chevron-down hover:bg-gray-400"></i>
                        </button>
                      <ul v-if="thredSubMenu" :class="subMenuText.subMenu ? 'border border-gray-300 rounded-lg bg-gray-400 z-10 absolute w-full top-[4.5rem]' : '' ">
                        <li v-for="subMenus in subMenu.subMenu" :key="subMenus.id"
                        class=" dark:bg-gray-800 dark:border-gray-700 flex justify-between hover:bg-gray-400">
                          <router-link :to="subMenus.path" class="py-2 px-3 w-full text-sm font-normal">{{ subMenus.name }}</router-link>
                        </li>
                      </ul>
                    </li>

                  </ul>
                </li>

              </ul>
            </li>

          </ul>
        </div>
    </div>
  </nav>
</template>

<style scoped></style>