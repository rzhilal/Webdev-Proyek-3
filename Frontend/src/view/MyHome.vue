<template>
<div class="navbarnya">
 <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">BE x FE</a>
    <form @submit.prevent="postItem" class="d-flex">
      <input class="form-control me-2" v-model="form.id" name="id" type="hidden" placeholder="id_" aria-label="Search">
      <input class="form-control me-2" v-model="form.nama_pengeluaran" name="name" type="text" placeholder="Nama Pengeluaran" aria-label="Nama">
      <input class="form-control me-2" v-model="form.total_pengeluaran" name="name" type="text" placeholder="Total Pengeluaran" aria-label="Total">
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
        <h3>DATA TRANSAKSI</h3>
        <div class="table-content">
          <table class="table table-boordered table-light">
                <thead>
                    <tr>
                        <th scope="col">Tanggal Transaksi</th>
                        <th scope="col">Nama Transaksi</th>
                        <th scope="col">Total Pengeluaran</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Transaksi" :key="user.id">
                        <td>{{ user.tanggal }}</td>
                        <td>{{ user.nama_pengeluaran }}</td>
                        <td>{{ user.total_pengeluaran }}</td>
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
                    tanggal : "",
                    nama_pengeluaran : "",
                    total_pengeluaran : ""
                },
                Transaksi: [],
            };
        },
        methods: {
            getItem() {
                axios.get('http://localhost:8888/api/transaksi')
                .then((response)=> {
                    this.Transaksi = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log("Error Get Data", error);
                });
            },
            postItem() {
                axios.post('http://localhost:8888/api/transaksi', this.form)
                .then(()=> {
                    this.getItem();
                    this.form.id= "";
                    this.form.name = "";
                    alert("Berhasil Input data")
                })
                .catch((error) => {
                    console.log("error Input data", error);
                });
            },
            Edit(user) {
                this.updateSubmit = true;
                this.form._id = user._id;
                this.form.nama_pengeluaran = user.nama_pengeluaran;
                this.form.total_pengeluaran = user.total_pengeluaran;
            },
            Update(form) {
                axios
                .put(`http://localhost:8888/api/transaksi/${form._id}`, {
                    nama_pengeluaran: this.form.nama_pengeluaran,
                   total_pengeluaran: this.form.total_pengeluaran,

                })
                .then(() => {
                    this.getItem();
                    this.form._id = "";
                    this.form.nama_pengeluaran ="";
                    this.form.total_pengeluaran = "";
                    this.updateSubmit = false;
                    alert("Data terupdate");
                })
                .catch((err) => {
                    console.log(err);
                    console.warn();
                    // this.updateSubmit = false;
                    // this.form._id = "";
                    // this.form.nama_pengeluaran ="";
                    // this.form.total_pengeluaran = "";
                     alert("aaaError update data");
                });
            },
            Delete(user) {
             axios
                .delete("http://localhost:8888/api/transaksi/" + user._id)
                .then(() => {
                    this.getItem();
                    this.form._id = "";
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