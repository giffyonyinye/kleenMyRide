<template>
  <div>
<the-header></the-header>
  <main>
    <router-view></router-view>
</main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
export default {
  components : {
    TheHeader
  }
  
}
</script>
<style src="./assets/tailwind.css"> 

</style>