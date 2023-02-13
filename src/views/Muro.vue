<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Publicacion from '@/components/Publicacion.vue';
import axios from 'axios';

export default {
    name: "Muro",
    data() {
        return {
            ListaPublicaciones: null,
            Limit: 10,
            Offset: 0
        }
    },
    components: {
        Header,
        Footer,
        Publicacion
    },
    mounted: function () {
        let direccion = `https://api.escuelajs.co/api/v1/products?limit=${this.Limit}&offset=${this.Offset}`;
        axios.get(direccion).then(data => {
            this.ListaPublicaciones = data.data;
            console.log(data.data[0].images[0]);
        }
        );
    }
}
</script>

<template>
    <div>
        <Header />

        <div class="container">
            <h4> Muro </h4>
            <div class="row">
                <!-- Se conecta con el backend -->
                <!-- <Publicacion v-for="producto in ListaPublicaciones" 
                :id=producto.id :title="producto.title" :img="producto.images[0]" :key="producto.id"/> -->
            </div>         
        </div>
        <Footer />
    </div>
</template>

<style scoped>
h4{
    text-align: center;
}
</style>