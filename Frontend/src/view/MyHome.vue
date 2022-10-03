<template>
<div class="navbarnya">
 <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">BE x FE</a>
    <form @submit.prevent="postItem" class="d-flex" role="search">
      <input class="form-control me-2" v-model="form.id" name="id" type="hidden" placeholder="id_" aria-label="Search">
      <input class="form-control me-2" v-model="form.name" name="name" type="text" placeholder="Nama" aria-label="Nama">
    
      <button class="btn btn-outline-success" v-show="!updateSubmit" type="submit">Input</button>
      <button class="btn btn-outline-success" v-show="updateSubmit" v-on:click="Update(form)" name="button" type="button">Update</button>
    </form>
  </div>
</nav>
</div>
    <div>
        <!-- <h1> ADD USERS </h1>
        <form @submit.prevent="postItem">
            <input  type="hidden" v-model="form.id" name="id" placeholder="id_input" />
            <input type="text" v-model="form.name" name="name" placeholder="name_input" />
            <button type="submit" v-show="!updateSubmit">add</button> 
            <button type="button" v-show="updateSubmit" v-on:click="Update(form)" name="button">Update</button>
        </form> -->
        <h3>DATA USERS</h3>
        <div class="table-content">
          <table class="table table-boordered table-light">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td><button type="button" v-on:click="Edit(user)" name="button">Edit</button></td>
                        <td><button type="button" v-on:click="Delete(user)" name="button">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "MyHome",
        data() {
            return {
                form: {
                    id: "",
                    name: "",
                },
                users: [],
            };
        },
        methods: {
            getItem() {
                axios.get('http://localhost:3000/users')
                .then((response)=> {
                    this.users = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log("Error Get Data", error);
                });
            },
            postItem() {
                axios.post('http://localhost:3000/users', this.form)
                .then(()=> {
                    this.getItem();
                    this.form.id= "";
                    this.form.name = "";
                    alert("Berhasil post data")
                })
                .catch((error) => {
                    console.log("error post data", error);
                });
            },
            Edit(user) {
                this.updateSubmit = true;
                this.form.id = user.id;
                this.form.name = user.name;
            },
            Update(form) {
                axios
                .put(`http://localhost:3000/users/${form.id}`, {
                    name: this.form.name,
                })
                .then(() => {
                    this.getItem();
                    this.form.id = "";
                    this.form.name = "";
                    this.updateSubmit = false;
                    alert("Data terupdate...");
                })
                .catch((err) => {
                    console.log(err);
                    console.warn();
                     alert("!Error update data");
                });
            },
            Delete(user) {
             axios
                .delete("http://localhost:3000/users/" + user.id)
                .then(() => {
                    this.getItem();
                    this.form.name = " ";
                    alert("Data berhasil terhapus");
                })
                .catch(() => {
                    console.log("Error Hapus Data");
                });
            }
         },
         mounted() {
            this.getItem();
        },
    };
</script>
<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #1a212b;
    }
    .table-content{
        margin: 20px 100px;
    }
    .form-label{
      color: white;
    }
    .navbar{
        width: 100%;
        top: 0px;
    }
    body{
        top: 0;
    }
    </style>