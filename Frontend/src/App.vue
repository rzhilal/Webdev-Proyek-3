<template lang="html">
  <div classs="">

    <h4> List Users </h4>

    <ul v-for="user in users" :key="user.id">
      <li>{{user.name}}</li>
    </ul>

  </div>

</template>

<script>
  import axios from 'axios'
import { resolveComponents } from 'uri-js'

  export default {
  name: 'App',
  Components: {
    HelloWorld
  },  
    data(){
      return{
        users: []
      }
    },
    methods:{
      load(){
        axios.get('http://localhost:3000/users')
        .then((res)=>{
          this.users = res.data
        })
        .catch(()=> {
          alert('error load data')
        })
      }
    },
    mounted(){
      this.load()
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  