<script lang="ts">

import axios from 'axios';

export default {
    name: "Header", 
    data() {
        return {
            isLogin: false
        }
    },
    methods:{        
    logout(){
        localStorage.removeItem('token');
      this.$router.push(`/`);
    },
    login(){
        this.$router.push(`/login`);        
    },
    mounted: function () {
        let login = localStorage.getItem('token');
        if(login){
            this.isLogin = false;
        }else{
            this.isLogin = false;
        }
    }
  }
    
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">      
                    <template v-if="isLogin">              
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/dashboard">Lista de Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" aria-current="page" href="/perfil">Agregar Publicacion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" aria-current="page" href="/perfil">Perfil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="#" v-on:click="logout">Logout</a>                                      
                    </li>   
                </template> 
                <template v-else>                    
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="#" v-on:click="login">Acceder/Registrarse</a>    
                    </li>     
                </template>                
                </ul>
            </div>
        </div>
    </nav>
</template>