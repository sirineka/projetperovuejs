<template>
    <div class="contact">
        <div class="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.328496451185!2d11.09031546673508!3d36.85069009638615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d331a3592427d%3A0x10e1adc8c3fa8c29!2zQXRlbGllciBoYWxh2KfZhNit2YjYsdmK2KkgaGF1dGUgY291dHVyZQ!5e0!3m2!1sfr!2sfr!4v1686129389521!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
        <div class="details">
            <div class="div1"><i class="fa-solid fa-location-dot"></i></div>
            <div class="div2"><p>Rue, Nador 8090, Tunisie</p></div>
            <div class="div3"><i class="fa-sharp fa-regular fa-clock"></i></div>
            <div class="div4"><p>lundi 08:00–18:00</p></div>
            <div class="div5"><p>Mardi 08:00–18:00</p></div>
            <div class="div6"><p>Mercredi 08:00–18:00</p></div>
            <div class="div7"><p>Jeudi 08:00–18:00</p></div>
            <div class="div8"><p>Vendredi 08:00–18:00</p></div>
            <div class="div9"><p>Samedi Fermé</p></div>
            <div class="div10"><p>Dimanche Fermé</p></div>
            <div class="div11"><i class="fa-solid fa-phone"></i></div>
            <div class="div12"><p>+216 40 714 597</p></div>
            <div class="div13">
                <a href="https://www.facebook.com/HalaBenSlima" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div class="div14">
            <p>https://www.facebook.com/HalaBenSlima</p>
            </div>
            <div class="div15"><i class="fa-brands fa-instagram"></i>
            </div>
            <div class="div16">
            <p >instagram</p>
            </div>

        </div>
    </div>
    
</template>
<script>
export default{

}</script>
<style scoped>
.contact{
    margin: 3rem 0;
    padding: 2rem 0;
    display: grid;
    grid-template-columns:50% 50%;
    align-items: center;
    box-shadow: 0px 0px 5px  #f27b34;
    background-color: rgb(248, 239, 229);
}
.location{
    text-align: center;
    
}
iframe{
    box-shadow: 2px 2px 2px 2px rgb(112, 111, 111);
}
.details {
    display: grid;
    grid-template-columns: 100px 400px;
    grid-template-rows: repeat(11, 1fr);
    grid-column-gap: .5px;
    grid-row-gap: 3px;  
}
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3{ grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
.div5 { grid-area: 3 / 2 / 4 / 3; }
.div6 { grid-area: 4 / 2 / 5 / 3; }
.div7 { grid-area: 5 / 2 / 6 / 3; }
.div8 { grid-area: 6 / 2 / 7 / 3; }
.div9 { grid-area: 7 / 2 / 8 / 3; }
.div10 { grid-area: 8 / 2 / 9 / 3; }
.div11 { grid-area: 9 / 1 / 10 / 2; }
.div12 { grid-area: 9 / 2 / 10 / 3; }
.div13{ grid-area: 10 / 1 / 11 / 2; }
   
.div14 { grid-area: 10 / 2 / 11 / 3; }
.div15{ grid-area: 11 / 1 / 12 / 2; }
.div16{ grid-area: 11 / 2 / 12 / 3; }

</style>