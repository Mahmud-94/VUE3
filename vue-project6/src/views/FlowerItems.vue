<template>
    <div>
        <ul>
            <li v-for="x in puspa" :key="x">{{ x.name }}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                puspa:[
                    {name:'puspa1', url:'abc1.jpg'},
                    {name:'puspa2', url:'abc2.jpg'},
                    {name:'puspa3', url:'abc3.jpg'},
                    {name:'puspa4', url:'abc4.jpg'},
                ]
            }
        },
        provide(){
            return{
                pushpa:this.puspa
            }
        }
        
    }
</script>

<style scoped>

</style>