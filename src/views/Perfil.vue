<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios
 from 'axios';
export default {
    name: "Perfil",
    components: {
        Header,
        Footer
    },
    data: function () {
        return {
            usuario: {
                id: "",
                img: "",
                email: "",
                role: "",
                name: ""
            }
        }
    },
    mounted: function () {
        
        const config = {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
      
      axios.get("https://api.escuelajs.co/api/v1/auth/profile", config).then(
        response => {
            
          if(response.status == 200){
            console.log(response);
            this.usuario.id = response.data.id;            
            this.usuario.name = response.data.name;  
            this.usuario.img = response.data.avatar;
            this.usuario.email = response.data.email;
            this.usuario.role = response.data.role;
          }else{
            this.$router.push("/"); 
          }      
        }
      ).catch((exception) => {
        console.log(exception);
        //this.$router.push("/"); 
      });    
    }
}

</script>

<template>
    <div>
        <Header />
        <div class="container">
            <h4>Detalles de Producto</h4>

           <div class="profile-container">
            <div class="user-name">{{ usuario.name }}</div>
            <div class="user-img"><img :src="usuario.img" alt=""></div>
            <div class="user-email">{{ usuario.email }}</div>
            <div class="user-role">{{ usuario.role }}</div>
           </div>      
        </div>
       
        <Footer />
    </div>
</template>

<style scoped>
h4 {
    text-align: center;
}

.user-name{
    font-size: 25px;
    font-weight: bolder;
}
.profile-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user-email{
    font-size: 25px;
    margin-top: 15px;
}

.user-role{
    font-size: 16px;
    color: rgb(77, 75, 75);
}
img{
    margin-top: 10px;
    border-radius: 20px;
    width: 400px;
    height: auto;
}
</style>