<template>
    <div>
        <button @click="changeVal">Change Text</button><br>
  <p ref="pEl" >This is the initial text</p>
    </div>

    <div>
        <hr>
        <p ref="msg">This is sundan</p>
        <button @click="copyPaste">Click here</button>
        <h1 ref="msgShow">...</h1>
    </div>

    <form action="">
        <input type="text" ref="fullname" name="fullname" @input="inputShow">
    </form>

    <h1 ref="nameShow"></h1>



</template>

<script>
     export default {
    methods: {
      changeVal() { 
        this.$refs.pEl.innerHTML = "Hello!";
      },

      copyPaste() { 
        this.$refs.msgShow.innerHTML = this.$refs.msg.innerHTML;
      },

      inputShow() { 
        this.$refs.nameShow.innerHTML = this.$refs.fullname.value;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>