<template>
    <div>
        <h1>Welcome to VUE with Laravel</h1>
        <ul>
            <li v-for="x in posts" :key="x.id">{{ x.title }}</li>
        </ul>

    </div>

    
</template>

<script setup>
        import {usePage} from '@inertiajs/vue3';

        const {posts} = usePage().props
    </script>

<!-- <script setup>
defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
});

</script> -->

<!-- <script>
    export default {
        data(){
            return{
                posts: []
            }
        }
        
    }
</script> -->

<style scoped>

</style>