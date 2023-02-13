<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Product from '@/components/Product.vue';
import axios from 'axios';

export default {
    name: "Dashboard",
    data() {
        return {
            ListaProductos: null,
            Limit: 30,
            Offset: 0
        }
    },
    components: {
        Header,
        Footer,
        Product
    },
    mounted: function () {
        let direccion = `https://api.escuelajs.co/api/v1/products?limit=${this.Limit}&offset=${this.Offset}`;
        axios.get(direccion).then(data => {
            this.ListaProductos = data.data;
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
            <h4>Listado de Productos</h4>
            <div class="row">
                <Product v-for="producto in ListaProductos" 
                :id=producto.id :title="producto.title" :img="producto.images[0]" :key="producto.id"/>
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