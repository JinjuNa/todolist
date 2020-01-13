<template>
  <section class="list">
    <ul>
        <li v-bind:key=index v-for="(item, index) in propsdata" v-bind:class="{ active: item.isActive }">
        <input type="checkbox" v-model="item.isActive">{{item.text}}
        </li>
    </ul>
    <Footer v-on:delete-item="DeleteItem"></Footer>
  </section>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'List',
  props: ['propsdata'],
  components : {
    Footer
  },
  methods :{
      DeleteItem : function(){
        this.$emit('DeleteItemApp')
      }
  }
}

</script>
