<template>
    <header>
        <nav class="nav-desktop" :style="{ background: navBackground }">
                <router-link to="/" class="logo"><img src="../assets/logo.png" alt="logo"></router-link>
            <div class="nav-links">
                <router-link to="/catalogue" class="link">Catalogue</router-link>
                <router-link to="/nouveautes" class="link">Nouveautés</router-link>
                <router-link to="/connection" class="link">Contact</router-link>


                <button @click="showModal" class="favoris"> <img class="img-favoris" src="../assets/heart-straight.png"></button>
                <span class="circle" :style="{background: modalCompleted}"></span>
                <p class="nbr">{{ nbrFavoris }}</p>
                <div v-if="isShowModal" class="popup">
                <div class="popup-text">
                    <button @click="closeModal">&times;</button>
                        <div class="popup-textimg" v-for ="favorie in favoris" :key="favorie.id">
                            <p>{{favorie.description}} </p>
                            <img :src="getImageUrl(favorie.src)" alt="">
                            <i @click="removeFavoris" class="fa-solid fa-trash-can"></i>
                        </div>
                    
                </div>
                </div>



                <button><router-link to="/connection" class="connection">Prendre rendez-vous</router-link></button>
            </div>
        </nav>
        <nav class="nav-mobile" :style="{ background: navBackground }">
            <div class="top-nav">
                <router-link to="/" class="logo"><img src="../assets/logo.png" alt="logo"></router-link>
                <button v-if="!mobileNavIsOpen" @click="mobileNavIsOpen = true"><img src="../assets/hamb.png"></button>
                <button v-else @click="mobileNavIsOpen = false"><img src="../assets/x.png"></button>
            </div>
            <Transition>
            <div v-if="mobileNavIsOpen" @click="mobileNavIsOpen = false" class="nav-links">
                <router-link to="/catalogue" class="link">Catalogue</router-link>
                <router-link to="/nouveautes" class="link">Nouveautés</router-link>
                <router-link to="/connection" class="link">Contact</router-link>

                <button @click.stop="showModal" class="favoris"><img src="../assets/heart-straight.png"></button>
                <div v-if="isShowModal" class="popup">
                <div class="popup-text">
                    <button @click="closeModal">&times;</button>
                        <div class="popup-textimg" v-for ="favorie in favoris" :key="favorie.id">
                            <p>{{favorie.description}} </p>
                            <img :src="getImageUrl(favorie.src)" alt="">
                        </div>
                    
                </div>
                </div>

                <button>
                <router-link to="/contact" class="connection">Prendre rendez-vous</router-link></button>
            </div>
            </Transition>
        </nav>
    </header>
</template>
<script>
import {useShopStore} from '../stores/shop.js'
import {mapState} from 'pinia'
export default{
    
    data(){
    return{
        mobileNavIsOpen: false,
        isShowModal: false,
        currentScroll: 0,

    }
},
computed: {
        //j'ai appelé le tableau 
        //j'ai importer le tableau favoris rempli
    ...mapState(useShopStore, ['favoris']),

    navBackground: function(){
    return this.currentScroll <= 300 ? "transparent" : "white"
    },

    modalCompleted: function (){
     return this.favoris.length !==0 ? 'red' : 'white'

    },
    nbrFavoris: function(){
        return this.favoris.length 
    }

},
//il regarde si le tableau est vide il appele la function closeModal
//pour fermer  la modal s'il est vide
watch:{
    favoris (oldfavoris, newfavoris){
        if(newfavoris.length == 0){
            this.closeModal()
        }
    }
},

     
methods: {
    showModal: function(){
        if(this.favoris.length !==0){
            this.isShowModal = true
        }else{
            this.closeModal
        }
    },
    closeModal: function(){
    this.isShowModal = false

        },
   
//chemin absolu de l'image
    getImageUrl(src) {
    return `/public/${src}`;
  },


  //le scroll de la navbar
    handleScroll(){
        //on affecte à la data "currentScroll" la valeur du scroll actuel dans la fenetre
    this.currentScroll = window.scrollY
    },
//supprimer les articles dans la modal en relation avec le stores (avant on instansier le store)    
    removeFavoris: function(){
    const FavorisStore = useShopStore();
    FavorisStore.removeFavoris(this.favoris)
        },
    },
created() {
        //on ajoute un event listener au scroll, qui va appeler la méthode "handleScroll"
    window.addEventListener("scroll", this.handleScroll)
 
},
unmounted(){
    window.removeEventListener("scroll", this.handleScroll)
},

  }
</script>
<style scoped>

.nav-mobile{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw; 
    z-index:999;
}
.nav-mobile .nav-links{
    flex-direction: column;
    align-items: center;
    background: white;
    height: 100vh;
}
.nav-mobile .top-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 0.5rem;

}
.top-nav img{
    height: 3rem;
    background: white;
    color: black;

}
.logo img{
   width: 150px;
   
}
.nav-desktop{
    position:fixed;
    display: none;
    /**display: flex;**/
    justify-content: space-between;
    padding: 0rem 2rem;
    align-items: center;
    z-index: 1;
    width: 100%;
}
.nav-links{
    display: flex;
    gap: 1rem;
    align-items: center;
   
}
.nav-links img{
    width: 30px;
}
.link:hover{
    color: rgb(233, 172, 6);
}
.connection:hover{
    color: rgb(233, 172, 6);
}
.connection{
    padding: 2rem;
}
.favoris{
    border: none;
    background-color: rgba(0, 0, 0, 0);
}
.popup{
position:fixed;
right: 0;
left: 0;
bottom: 0;
top:0;
z-index: 999;
background-color: rgba(0, 0, 0, 0.7);
overflow: auto;

}
.popup-text{
    background-color: white;
    align-items: center;
    margin: 70px 300px;
    position: relative;
}
.popup-textimg{
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 1em;
    margin: 1rem 1rem;
    padding: .5rem;
    overflow: auto;
}
.popup-textimg img{
    width: 300px
}
.popup-text button{
    top: 20px;
    right: 30px;
    font-size: 30px;
    font-weight: bold;
    color: #eec511;
    position: absolute;
}
.img-favoris{
    position: relative;
}
.circle{
    position: relative;
    right: 3%;
    bottom: 39%;
    width:10px;
    height: 10px;
    border-radius: 50%;
}
.nbr{
    position: absolute;
    right: 17%;
    top: 50%;
    font-size: .7rem;
    color: red;
}

@media screen and (min-width: 1200px) {
    .nav-desktop{
        display: flex;
       
    }
    .nav-mobile{
        display: none;
    }
    
}
@media screen and (max-width:1200px){
    .nav-mobile{
        padding-right: 1rem;
    }
    .popup{
position:fixed;
right: 0;
left: 0;
bottom: 0;
top:0;
z-index: 999;
background-color: rgba(0, 0, 0, 0.7);
overflow: auto;

}
.popup-text{
    background-color: white;
    align-items: center;
    margin: 70px 20px;
    position: relative;

}
.popup-textimg{
    display: grid;
    grid-template-columns: 20% 70%;
    gap: 1em;
    margin: 1rem 0rem;
    padding: 1rem;
    overflow: auto;
}
.popup-textimg img{
    width: 200px
}
.popup-text button{
    top: 20px;
    right: 30px;
    font-size: 30px;
    font-weight: bold;
    color: #eec511;
    position: absolute;
}

    
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>