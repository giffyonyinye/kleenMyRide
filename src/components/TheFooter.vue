<template>
    <section>
        <section class=" flex p-8 justify-evenly pt-24  md:flex-col">
        <div class="w-1/4 md:w-full">
            <p class=" font-bold text-xl">Kleen My Ride</p>
            <p>Welcome to Kleen my ride. Nigeria’s No. 1 car wash company. Your car cleanliness is our priority.
                We offer home services. We are available in Lagos and Port Harcourt. Our services are satisfactory. Book with us Now.
            </p>

        </div>

        <div class=" w-40">
                <h3 class=" font-bold mb-6">Company</h3>
                <div class="flex ">
                    <div>
                        <p><router-link to="/home">Home</router-link></p>
                        <p><router-link to="/services">Staff</router-link></p>
                        <p><router-link to="/services">Services</router-link></p>
                    </div>
                    <div class=" ml-8">
                        <p><router-link to="/about">About</router-link></p>
                        <p><router-link to="/package">Packages</router-link></p>
                        <p><router-link to="/booking">Book</router-link></p>
                    </div>
                </div>
            </div>

            <div class="w-1/4 md:w-full">
                <h3 class=" font-bold mb-6">Contact</h3>
                <p>
                    <span>
                        <font-awesome-icon icon="phone" class=" text-gray-700 mr-1"></font-awesome-icon>
                    </span>
                    <a href="tel:09013970506" >09013970506</a>,  
                    <span><a href="tel: 08062291870">08062291870 </a></span>  
                </p>
                <p class=" mt-1">
                    <span>
                        <font-awesome-icon icon="map-marker" class=" text-gray-700 mr-1"></font-awesome-icon>
                    </span>
                    Suite 1, Nma Shopping Plaza, by Bachievers Hotel, Old Aba Road, Port Harcourt, Rivers State

                </p>
                <p>
                    <span>
                        <font-awesome-icon icon="envelope" class=" text-gray-700 mr-1"></font-awesome-icon>
                    </span>
                    <a 
                        href="mailto:kleenmyride@kleenmyride.com">kleenmyride@kleenmyride.com
                    </a> 
                </p>
            </div>

            <div class=" w-40">
                <div>
                    <p class=" font-bold mb-6">Social Links</p>
                    <div class=" flex">
                        <img src="../assets/Images/Social.png" alt="IG-icon">
                        <img  class=" w-20 h-12" src="../assets/Images/fbIcon.png" alt="FB-Icon">
                    </div>
                    
                                   
                </div>
               
            </div>
        </section>
        <p class=" mt-10 text-center mb-8">All right reserved. 2021 copyright &copy;</p>

    </section>
    
</template>