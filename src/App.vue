<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from '@/components/Nav/Navbar.vue';

</script>

<template>
  <NavbarVue></NavbarVue>
  <div class=" ">
    <RouterView />
  </div>
</template>
