import {defineStore} from 'pinia'
export const useShopStore = defineStore('shop', {
    state: ()=> {
        return {
            articles: [
                {
                  id:1,
                  src:'./assets/image1.jpg',
                  description: "robe blanche",
                  prix: 500,
                  favorie:'./assets/favorie.png'
                },
                {
                  id:2,
                  src:'./assets/image2.jpg',
                  description: "robe rouge",
                  prix: 300,
                  favorie:'./assets/favorie.png'
                },
                {
                  id:3,
                  src:'./assets/image3.jpg',
                  description: "robe jaune",
                  prix: 450,
                  favorie:'./assets/favorie.png'
                },
                
                {
                  id:4,
                  src:'./assets/image4.jpg',
                  description: "robe verte",
                  prix: 400,
                  favorie:'./assets/favorie.png'
                },
                {
                  id:5,
                  src:'./assets/image5.jpg',
                  description: "robe verte",
                  prix: 400,
                  favorie:'./assets/favorie.png'
                },
                {
                  id:6,
                  src:'./assets/image6.jpg',
                  description: "robe verte",
                  prix: 400,
                  favorie:'./assets/favorie.png'
                },
                {
                  id:7,
                  src:'./assets/image7.jpg',
                  description: "robe verte",
                  prix: 400,
                  favorie:'./assets/favorie.png'
                },
                {
                  id:8,
                  src:'./assets/image8.jpg',
                  description: "robe verte",
                  prix: 400,
                  favorie:'./assets/favorie.png'
                },
                {
                  id:9,
                  src:'./assets/image9.jpg',
                  description: "robe verte",
                  prix: 400,
                  favorie:'./assets/favorie.png'
                },
                

                
             ],
             favoris:[]
           
        }
    },
    
    actions:{
      ajouterAuFavoris: function(article){
        let index = this.favoris.findIndex(function(element){
            return element === article;
        });
        if( index > -1){
            this.favoris.splice(index, 1)
            //là on push les articles favoris

        }else{
            this.favoris.push(article)
        

        }
      },

      removeFavoris: function(index){
        //retirer l'article de la favoris
        this.favoris.splice(index, 1) 
        //mettre à jour le tableau de favoris
        this.favoris = [...this.favoris];
       },
       
       getters:{
           //getArticles() {
            //return this.articles
           //}
           getFavoris(){
            return this.favoris
           },
          
           
          
    }
  }

})