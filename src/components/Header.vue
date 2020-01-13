<template>
  <section class="header">
    <div>
        <input type='text' v-model='addItem'>
        <button v-on:click='btnClick'>추가</button>
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
