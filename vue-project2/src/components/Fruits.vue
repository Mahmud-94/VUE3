<template>
    <div>
        <ul style="text-align: left">
           
            <li v-for="(i, index) in fruits" :key="index">{{ i }}</li>
        </ul>

        <ul style="text-align: left">
            <li v-bind:key="i" v-for="i in fruits">{{ i }}</li>
           
        </ul>

        <ul style="text-align: left">
            <li v-for="i in fruits">{{ i }}</li>
           
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                fruits:[
                    "Mango",
                    "Apple",
                    "Ornge",
                    "Grapes"
                ]
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>