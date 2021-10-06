<template>
  <div>
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from './components/TheFooter.vue'
export default {
  components : {
    TheHeader,
    TheFooter
  }
  
}
</script>
<style src="./assets/tailwind.css"> 

</style>