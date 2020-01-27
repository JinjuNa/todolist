<template>
  <section class="list">
    <ul>
        <li v-bind:key=index v-for="(item, index) in propsdata" v-bind:class="{ active: item.isActive }">
          <label class="container">{{item.text}}
          <input type="checkbox" v-model="item.isActive">
          <span class="checkmark"></span>
          
        </label>
        <!-- <i class="far fa-trash-alt" v-on:delete-single-item="DeleteSingleItem"></i> -->
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
  data : function() {
return {
    idx : 0
  };
},
  methods :{
      DeleteItem : function(){
        this.$emit('DeleteItemApp')
      },
      DeleteSingleItem : function(){
        this.idx = 0;
        this.$emit('DelteSingleItemApp', this.idx )
      }
  }
}

</script>

<style scoped>
ul{
  margin-left:100px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  /* font-size: 22px; */
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


</style>
