<template>
  <section class="footer">
    <button v-on:click="deleteClick">전체지우기</button>
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
