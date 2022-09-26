<template>
  <div class="">

    <h4> Test Data </h4>
  
    <ul v-for="user in users" :key="user.id">
      <li>{{user.id}}</li>
      <li>{{user.name}}</li>
    </ul>
  </div>

</template>

<script>
  import axios from 'axios'
// import { resolveComponents } from 'uri-js'

  export default {
  name: 'App',
  Components: {
    //HelloWorld
  },  
    data(){
      return{
        form:{
           id:"",
           name:""
        },
        users: [],
      };
    },
    methods:{
      getLoad(){
        axios.get('http://localhost:3000/users')
        .then((res)=>{
          this.users = res.data
          alert('Jalan');
         
        })
        .catch((err)=> {
          alert('error load data');
          console.log(err);
        })
    },
    
  },
  mounted(){
      this.getLoad()
    }
} 
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  