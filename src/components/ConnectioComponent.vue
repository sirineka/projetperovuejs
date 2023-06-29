<template>
    <section>
        <form>
            <div class="form">
                <label for="name">Nom et prenom:  </label>
                <input type="text" name="name" required>
            </div>
            <div class="form">
                <label for="text">Adresse: </label>
                <input type="text" name="text" required>
            </div>
            <div class="form">
                <label for="tel">Mobile: </label>
                <input type="tel" name="tel"  required>
            </div>
            <div class="form">
                <label for="date">Date de rendez-vous: </label>
                <input type="date" name="date"  required>
            </div>
            <div class="form">
                <label for="time">heure de rendez-vous: </label>
                <input type="time" name="time"  required>
            </div>
            <div class="form">
                <label for="message">Votre message: </label>
                <textarea></textarea>
            </div>
            <div class="form-btn">
                <input type="submit" value="Confirmer">
            </div>
</form>


       <!-- <VDatePicker v-model="date" mode="dateTime" />-->

    </section>
</template>
<script>//setup
//import 'v-calendar/style.css';

//import { ref } from 'vue';
//const date = ref(new Date());


</script>
<style scoped>
section{
    padding-top: 10rem;
    text-align: center;
    width: 100%;
}
.form{
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 30% 50%;
    gap: 1em;
}
.form-btn input{
    padding: .5rem 3rem;

}

</style>