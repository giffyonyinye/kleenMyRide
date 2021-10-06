<template>
    <div class="pt-20">
        <div>
            <div class=" flex justify-center">
                <img class=" w-full h-96 object-cover " src="../assets/Images/carwash3.jpg" alt="car">
            </div>

        </div>

        <div class=" flex justify-center md:flex-col">
            <div class=" w-1/2 mt-10 md:w-full md:p-2">
                <p class=" font-medium mb-4 text-xl">Contact Information</p>
                <div>
                    <p>
                        <span class="  bg-yellow-700 rounded-md p-1 mr-4">
                            <font-awesome-icon icon="phone" class=" text-white mr-1"></font-awesome-icon>
                        </span>
                        <a href="tel:09013970506" >09013970506</a>,  
                        <span><a href="tel: 08062291870">08062291870 </a></span>  
                    </p>
                    <p class=" mt-4">
                        <span class="  bg-yellow-700 rounded-md p-1 mr-4">
                            <font-awesome-icon icon="map-marker" class=" text-white mr-1"></font-awesome-icon>
                        </span>
                        Suite 1, Nma Shopping Plaza, by Bachievers Hotel, Old Aba Road, Port Harcourt, Rivers State

                    </p>
                    <p class=" mt-4">
                        <span class="  bg-yellow-700 rounded-md p-1 mr-4">
                            <font-awesome-icon icon="envelope" class=" text-white mr-1"></font-awesome-icon>
                        </span>
                        <a 
                        href="mailto:kleenmyride@kleenmyride.com">kleenmyride@kleenmyride.com
                            </a> 
                    </p>
                </div>
            </div>

            <div class=" w-1/3 mt-10 md:w-full md:p-2">
                <form @submit.prevent="sendMessage">
                    <div class=" mt-2">
                        <label for="name">Name</label><br>
                        <input class="border outline-none mt-1 w-full p-1 rounded-lg border-yellow-200" type="text" name="name" id="name" v-model="name">
                        <p class=" text-sm text-red-600" v-if="nameValidity === 'invalid'">this field cannot be empty</p>
                    </div>

                    <div class=" mt-2">
                        <label for="Email Address">Email Address</label><br>
                        <input class="border outline-none mt-1 w-full p-1 rounded-lg border-yellow-200" type="text" name="email" id="email" v-model="email">
                        <p class=" text-sm text-red-600" v-if="emailValidity === 'invalid'">this field cannot be empty</p>
                    </div>

                    <div class="mt-2">
                        <label for="subject">Subject</label><br>
                        <input class="border outline-none mt-1 w-full p-1 rounded-lg border-yellow-200" type="text" name="subject" id="subject" v-model="subject">
                        <p class=" text-sm text-red-600" v-if="subjectValidity === 'invalid'">this field cannot be empty</p>

                    </div>

                    <div class="mt-2">
                        <label for="subject">Write your message</label><br>
                        <textarea rows="8"
                            class="border outline-none mt-1 w-full p-1 rounded-lg border-yellow-200" type="text" name="subject" id="subject" v-model="message">
                        </textarea>
                        <p class=" text-sm text-red-600" v-if="messageValidity === 'invalid'">this field cannot be empty</p>

                    </div>

                    <div class=" mt-2">
                        <button class=" w-1/3 m-auto bg-yellow-300 p-2 text-yellow-700  rounded-lg  ">Send Message </button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
            nameValidity: "",
            emailValidity: "",
            subjectValidity: "",
            messageValidity: ""
        }
    },

    methods: {
        sendMessage() {
            if (this.name === "") {
                this.nameValidity = "invalid"
            } else {
                this.nameValidity = "valid"
                 return this.name = ""
            }

            if (this.email === "") {
                this.emailValidity = "invalid"
            } else {
                this.emailValidity = "valid"
                return this.email = ""
            }

            if (this.subject === "" ) {
                this.subjectValidity = "invalid"
            } else {
                this.subjectValidity = "valid"
                return this.subject = ""
            }

            if ( this.message === "" ) {
                this.messageValidity = "invalid"
            } else {
                this.messageValidity = "valid"
                return this.message = ""
            }
        }
    }
}
</script>