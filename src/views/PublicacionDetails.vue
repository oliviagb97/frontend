<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
    name: "ProductDetails",
    components: {
        Header,
        Footer,

    },
    data: function () {
        return {
            product: {
                id: "",
                title: "",
                description: "",
                img: "",
                price: ""
            }
        }
    },
    mounted: function () {
        let productId = this.$route.params.id;

        let direccion = `https://api.escuelajs.co/api/v1/products/${productId}`;
        axios.get(direccion).then(data => {
            this.product.id = data.data;
            this.product.title = data.data.title;
            this.product.description = data.data.description;
            this.product.img = data.data.images[0];
            this.product.price = data.data.price;
        }
        );
    }
}
</script>

<template>
    <div>
        <Header />

        <div class="container">
            <h4 style="margin-bottom: 25px;">Detalles de Producto</h4>

<div class="details-container row">
    <div class="product-img col-6">
        <img :src="product.img"
        alt="mouse corsair" class="img">
    </div>
    <div class="product-decription-container col-6">
        <h2><div class="product-title">{{product.title}}</div></h2>
        <hr>
        <div class="product-description">{{ product.description }}</div>
        <div class="product-price"> Price: <strong>{{ product.price }} € </strong></div>
    </div>
</div>
        </div>

        <Footer />
    </div>
</template>

<style scoped>
h4 {
    text-align: center;
}


.product-description{
    font-size: 24px;
    margin-top: 40px;
}
img{
    border-radius: 20px;
}
.product-price{
    font-size: 20px;
    margin-top: 25px;
    text-align: right;
}
</style>