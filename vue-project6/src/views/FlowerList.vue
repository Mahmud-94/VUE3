<template>
    <div>
        <ul>
            <li v-for="x in puspa" :key="x">{{ x.name }}</li>
        </ul>

    </div>
</template>

<script>
    export default {
       
    inject: ['pushpa']

    }
</script>

<style scoped>

</style>