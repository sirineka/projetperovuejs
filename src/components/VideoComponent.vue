<template>
    <section :class="{reversed: reversed}">
        <div class="content">
            <h3>{{ title }}</h3>
            <slot/>
        </div>
        <div class="video">
            <video autoplay muted loop playsinline @click="pause" ref="video">
                <source :src="videoUrl">
            </video>
        </div>
    </section>
</template>
<script>
export default{
   props:{
    title: String,
    video: String,
    reversed: Boolean
   },
    methods:{
        pause: function(){
            this.$refs.video.paused ? this.$refs.video.play() : this.$refs.video.pause()
        }
    },
    computed:{
        videoUrl: function(){
            //cree un chemin absolue de l'image
            return new URL(this.video, import.meta.url).href
        }
    }
   
}
</script>
<style scoped>
section{
    display: grid;
    grid-template-columns:50% 50%;
    margin: 4rem 2rem;
    text-align: center;
    justify-content: center;
    align-items: center;

}
section.reversed{
    grid-template-columns: 50% 50;
}
section.reversed .video{
    order: 1;
}
section.reversed .content{
    order: 2;
}
video{
    width: 100%;
    height: 600px;
}
@media screen and (max-width: 1200px){
    section, section.reversed{
        grid-template-columns: 100%;
}
section.reversed .video{
    order: 2;
}
section.reversed .content{
    order: 1;
}

}




</style>