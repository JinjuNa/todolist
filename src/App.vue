<template>
  <div id="app">
        <!-- <Header v-on:add-item="AddItem"></Header>
        <List v-bind:propsdata="list" v-on:DeleteItemApp ="Delete"></List> -->
        <router-view></router-view>
  </div>
</template>

<script>
// import Header from './components/Header.vue'

export default {
  name: 'app',
  data : function() {
return {
                list : [
                     {text : "숙제하기", isActive: false},
                     {text : "청소하기", isActive: false}
                ],
            };
},
  methods : {
      AddItem : function(val){
        this.list.push({text : val, isActive: false})
      },
      Delete : function(){
        this.list = []
      }
  },
  components: {
    // Header,
    // List
  }
}

</script>

<style>
      ul{
          list-style: none;
      }
      .active{
        text-decoration: line-through;
        color: red;
      }
</style>
