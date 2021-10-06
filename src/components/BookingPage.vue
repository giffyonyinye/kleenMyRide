<template>
    <section class="pt-28">
        <div class=" flex justify-center">
        
            <div class=" border text-center pt-10 bg-gray-200 rounded-lg">
                <p class=" font-bold text-xl mb-4 text-yellow-700">Welcome to Kleen My ride</p>
                <p>Your car cleanliness is our top priority. </p>
                <p>Take these few steps to book with us.</p>

                <img src="../assets/Images/carwash.png" alt="">
            </div>

            <div class=" border w-1/3">
                <div class=" text-center bg-yellow-200 p-2                                         ">
                    <p class=" font-semibold text-yellow-700">Book Us</p>
                    <p>You are just few steps away.</p>
                </div>
                <div class=" ml-10 mt-6 mr-10">
                    <form @submit.prevent="book">
                        <div class=" flex">
                            <div >
                                <label for="First Name">First Name</label><br>
                                <input class="border outline-none mt-1 p-1 rounded-lg border-yellow-200" type="text" name="first_name" id="first_name" v-model="firstName">
                                <p class=" text-sm text-red-600" v-if="firstNamevalidity === 'invalid'">this field cannot be empty</p>
                            </div>

                            <div class=" ml-10">
                                <label for="Last Name">Last Name</label><br>
                                <input class="border outline-none mt-1 p-1 rounded-lg border-yellow-200" type="text" name="last_name" id="last_name" v-model="lastName">
                                <p class=" text-sm text-red-600" v-if="lastNamevalidity === 'invalid'">this field cannot be empty</p>
                            </div>
                        </div>

                        <div>
                            <div class=" mt-2">
                                <label for="Email Address">Email Address</label><br>
                                <input class="border outline-none mt-1 w-full p-1 rounded-lg border-yellow-200" type="text" name="email" id="email" v-model="email">
                                <p class=" text-sm text-red-600" v-if="emailValidity === 'invalid'">this field cannot be empty</p>
                            </div>

                            <div class="mt-2">
                                <label for="Phone Number">Phone Number</label><br>
                                <input class="border outline-none mt-1 w-full p-1 rounded-lg border-yellow-200" type="number" name="phone" id="phone" v-model="phone">
                                <p class=" text-sm text-red-600" v-if="phoneValidity === 'invalid'">this field cannot be empty</p>

                            </div>
                        </div>

                        <div class=" flex mt-2 ">
                            <div >
                                <label for="State">State</label><br>
                                <input class="border outline-none mt-1 p-1 rounded-lg border-yellow-200" type="text" name="state" id="state" v-model="state">
                                <p class=" text-sm text-red-600" v-if="stateValidity === 'invalid'">this field cannot be empty</p>
                            </div>

                            <div class=" ml-10">
                                <label for="City">City</label><br>
                                <input class="border outline-none mt-1 p-1 rounded-lg border-yellow-200" type="text" name="city" id="city" v-model="city">
                                <p class=" text-sm text-red-600" v-if="cityValidity === 'invalid'">this field cannot be empty</p>
                            </div>
                        </div>

                        <div class=" mt-2">
                            <label for="Address">Residential Address</label><br>
                            <input class="border outline-none mt-1 w-full p-1 rounded-lg border-yellow-200" type="text" name="address" id="address" v-model="address">
                                <p class=" text-sm text-red-600" v-if="addressValidity === 'invalid'">this field cannot be empty</p>
                        </div>

                        <div class=" mt-2 mb-2">
                            <label for="packages">Select a package plan</label>
                            <select class="w-full outline-none border p-1 rounded-lg border-yellow-200" name="package" id="package" v-model="packages">
                                <option selected value="Deluxe">Basic - N15,000</option>
                                <option value="Deluxe">Deluxe - N25,000</option>
                                <option value="Deluxe">Deluxe - N25,000</option>
                            </select>
                            <p class=" text-sm text-red-600" v-if="packagesValidity === 'invalid'">this field cannot be empty</p>
                        </div>
                        <div class=" text-center  p-4">
                            <button class=" w-1/3 m-auto bg-yellow-300 p-2  rounded-lg  ">Book Now</button>
                        </div>
                    
                    </form>   
                    
                </div>

                
               
            </div>
            
        </div>
        
    </section>
</template>

<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            state : "",
            city: "",
            address: "",
            packages: "",
            firstNamevalidity : "",
            lastNamevalidity : "",
            emailValidity: "",
            phoneValidity : "",
            stateValidity : "",
            cityValidity :"",
            addressValidity: "",
            packagesValidity: ""

        }
    },

    methods: {
        book() {
            if(this.firstName == '') {
                this.firstNamevalidity = 'invalid'
            } else {
                this.firstNamevalidity = "valid"
            }

            if(this.lastName == '') {
                this.lastNamevalidity = 'invalid'
            } else {
                this.lastNamwvalidity = "valid"
            }

            if(this.email == '') {
                this.emailValidity = 'invalid'
            } else {
                this.emailValidity = "valid"
            }

            if(this.phone == '') {
                this.phoneValidity = 'invalid'
            } else {
                this.phoneValidity = "valid"
            }

            if(this.state == '') {
                this.stateValidity = 'invalid'
            } else {
                this.stateValidity = "valid"
            }

            if(this.city == '') {
                this.cityValidity = 'invalid'
            } else {
                this.cityValidity = "valid"
            }

            if(this.address == '') {
                this.addressValidity = 'invalid'
            } else {
                this.addressValidity = "valid"
            }

            if(this.packages == '') {
                this.packagesValidity = 'invalid'
            } else {
                this.packagesValidity = "valid"
            }


        }
    }
}
</script>