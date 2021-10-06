<template>
    <section>
        <header class="fixed z-10 w-full bg-white flex justify-around border-b-2 p-2 ">
            <div>
                <img class=" w-22 h-16" src="../assets/Images/logo.png" alt="">
            </div>

            <nav class=" nav md:hidden">
                <ul>
                    <li class="inline-block mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'home'}"   to="/">Home</router-link></li>
                    <li class="inline-block mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'about'}"   to="/About">About</router-link></li>
                    <li class="inline-block mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'service'}"  to="/services">Services</router-link></li>
                    <li class="inline-block mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'package'}" to="/package">Packages</router-link></li>
                    <li class="inline-block mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'contact'}" to="/contact">Contact Us</router-link></li>
                </ul>
            </nav>

            <div class=" ">
                <li class="inline-block mt-4 w-24 border-2 border-black text-center rounded-lg p-2 "><router-link  to="/booking">Book Now</router-link></li>
            </div>

            <div>
                <font-awesome-icon v-show="mobile" @click="toggleMobileNav" :class="{'icon-active' : mobileNav}" icon="bars" class=" hidden md:block mt-4 text-2xl "></font-awesome-icon>
            </div>
            <transition name="mobile-nav" class="absolute top-0 left-0 bg-yellow-200 h-screen p-2 w-1/2 ">
                <nav v-show="mobileNav" class="dropDDownNav">
                <ul>
                    <li class=" mr-12 mt-8 w-22 "><router-link :class="{active: $route.name === 'home'}"   to="/">Home</router-link></li>
                    <li class=" mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'about'}"   to="/About">About</router-link></li>
                    <li class=" mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'service'}"  to="/services">Services</router-link></li>
                    <li class=" mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'package'}"  to="/package">Packages</router-link></li>
                    <li class=" mr-12 mt-8 w-22"><router-link :class="{active: $route.name === 'contact'}"  to="/contact">Contact Us</router-link></li>
                </ul>
            </nav>
            </transition>
            
        </header>
    </section>
</template>

<script>

export default {
    data() {
        return {
            mobile: true,
            mobileNav: null,
        }
    },

    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
    }
}
</script>


