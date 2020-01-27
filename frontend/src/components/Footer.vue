<template>
  <section class="footer">
    <button v-on:click="deleteClick">CLEAR</button>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  methods : {
                deleteClick : function(){
                    this.$emit('delete-item')
                }
            }
}
</script>

<style scoped>
.footer{
  text-align: center;
}
.footer button{
    width:100px;
    height: 30px;
    background-color: #2196F3;
    border:none;
    border-radius: 15px;
    color:white;
  }
</style>