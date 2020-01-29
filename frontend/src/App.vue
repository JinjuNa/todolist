<template>
  <div id="app">
      <h1>To do List</h1>
        <Header v-on:add-item="AddItem"></Header>
        <List v-bind:propsdata="list" v-on:DeleteItemApp ="Delete" v-on:DeleteSingleItemApp="DeleteSingle"></List>
        
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import axios from 'axios'

export default {
  name: 'app',
  data : function() {
return {
                list : [],
            };
},
  methods : {
      AddItem : function(val){
        this.list.push({text : val, isActive: false})
      },
      Delete : function(){
        this.list = []
      },
      DeleteSingle : function(index){
        console.log(index)
        alert(index);
      },
      getData : function(){
        axios.get('http://localhost:3000/list').then((res) => {
          console.log(res)
          this.list = res.data;
        })
      }
  },
  beforeMount(){
      console.log(this.list)
      this.getData();
      },
  components: {
    Header,
    List
  }
}

</script>

<style>
/* *{
  margin:0;
  padding: 0;
} */
      #app{
        margin: 0 auto;
        width:50%;
        height: 500px;
        background-color: rgb(169, 199, 245);
        border-radius: 5px;
        /* text-shadow: right 2px #333; */
      }
      h1{
        color:white;
        text-align: center;
        padding-top:50px;
      }
      ul{
          list-style: none;
      }
      .active{
        text-decoration: line-through;
        /* color: #ccc; */
      }
</style>
