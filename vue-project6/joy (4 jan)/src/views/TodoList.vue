<template>
    <ul>
        <todo-item v-for="x in items" :key="x"  :todo-name="x" style="background-color: lightgreen;" />
    </ul>
    <input placeholder="Enter here to add new Todo" v-model="newItem" @keydown.enter="addItem">
    <button @click="addItem">ADD</button>
  
</template>

<script>
export default {
data(){
    return{
        newItem: '',
        items:[
            'Laravel',
            'React Laravel',
            'Vue Laravel',
        ]
    }
},
methods:{
    addItem(){
        this.items.push(this.newItem)
        this.newItem='';
    }
}

}
</script>

<style>
ul {
    width: 150px;
  }
</style>