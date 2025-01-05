<template>
    <div>

        <h1>Registration Form</h1>
        <div ref="infoShow" id="display">...</div>

        <hr>

        <div>{{ fullname }}</div>
        <div>{{ gender }}</div>
        <div>{{ district }}</div>
        <div> {{ languages }}</div>
        <div>{{ address }}</div>
        
        <form @submit.prevent="FormSubmit" style="background-color: yellowgreen; width: 300px;">
            Name: <br><input type="text" name="fullname" id="" v-model="fullname"><br>
            Gender: <br>
            Male <input type="radio" name="gender" id="" value="male" v-model="gender">
            Female <input type="radio" name="gender" id="" value="female" v-model="gender"> <br>
            District: <br>
            <select name="district" v-model="district">
                <option disabled selected>Select One</option>
                <option>Dhaka</option>
                <option>Barisal</option>
                <option>Khulna</option>
                <option>Rangpur</option>
            </select><br>


            Interested Language: <br>
            <input type="checkbox" name="PHP" v-model="languages" value="PHP" id=""> PHP
            <input type="checkbox" name="Javascript" v-model="languages" value="Javascript" id=""> Javascript
            <input type="checkbox" name="VUE" v-model="languages" value="VUE" id=""> VUE
            <br>
            Address: <br>
            <textarea name="address" v-model="address"></textarea><br>
            <input type="submit" name="submit" value="Submit" id="">
           

        </form>

    </div>
</template>

<script>

    export default {
        data(){
           return{

                fullname: '',
            gender: '',
            district: '',
            languages: [],
            address: '',
            info:''
            }           
        }, 


        methods: {
            FormSubmit(){
                this.info += "Full Name: " + this.fullname + "<br/>";
                this.info += "Gender: " + this.gender +"<br/>";
                this.info += "District: " + this.district +"<br/>";
                this.info += "Language: " + this.languages +"<br/>";
                this.info += "Address: " + this.address +"<br/>";
                this.$refs.infoShow.innerHTML = this.info;

            }
        },
        
    }
</script>

<style scoped>
#display{
    background-color: rgb(92, 180, 227);
}

</style>