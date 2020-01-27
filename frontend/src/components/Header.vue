<template>
  <section class="header">
    <div>
        <input id="inputbox" type='text' v-model='addItem'>
        <button v-on:click='btnClick'>ADD</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  methods : {
                btnClick : function(){
                    this.$emit('add-item', this.addItem)
                    this.addItem = ''
                }
            },
  data : function(){
                return{
                    addItem : ''
                }
            }
}
</script>

<style scoped>
.header {
  text-align: center;
}
  #inputbox{
    border:none;
    background-color: transparent;
    width:50%;
    height: 30px;
    font-size: 25px;
    line-height: 30px;
    border-bottom:2px solid white;
  }

  .header button{
    width:100px;
    height: 30px;
    background-color: #2196F3;
    border:none;
    border-radius: 15px;
    color:white;
  }
</style>
