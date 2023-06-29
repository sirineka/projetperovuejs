<template>
    <div class="img-overflow">
        <div class="img-text">
            <h1>Haute Couture</h1>
            <hr class="separator" />
            <p>hgnifaryt bebidur bfeiet</p>
         </div>
        <!-- <div class="img-text1">
            <h1>Haute Couture</h1>
            <hr class="separator" />
            <p>hgnifaryt bebidur bfeiet</p>
         </div>
         <div class="img-text2">
            <h1>Haute Couture</h1>
            <hr class="separator" />
            <p>hgnifaryt bebidur bfeiet</p>
         </div>-->
    </div>
</template>
<script></script>
<style scoped>
.img-overflow{
     background-image: url(../assets/photo.jpg);
    background-position: center;
    background-size: cover;
    height: 750px;
    position: relative;
    margin-bottom: 2rem;
}
.img-text{
    width: 35%;
    background-color: rgba(175, 175, 175, 0.6);
    border-radius: var(--border-radius);
    padding: 6em;
    box-shadow: 5px 5px 5px  #f27b34;
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: absolute;
    right: 8%;
    bottom: 28%;
}

 h1{
    color:rgb(240, 122, 52);
    box-shadow:  0 4px 30px rgba(0,0,0, 0.2);;
    font-size: 2rem;
    text-align: center;
}
 p{
    text-align: center;
    color: black;
    font-weight: bold;
}


</style>