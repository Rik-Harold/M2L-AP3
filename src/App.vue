<template>
  <div>
    <!-- Routeur -->
    <router-view />
  </div>
</template>

<style lang="scss">
/* Importation de la police "Roboto" */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body
{
  height: 100%;
  font-family: 'Roboto', sans-serif;
  background-repeat: no-repeat;
}
/* Animation de passage d'une page à une autre */
.movePage-enter-from, .movePage-leave-to
{
  opacity: 0;
}
.movePage-enter-active, .movePage-leave-active
{
  transition: opacity 1s ease-in;
  opacity: 1;
}
.btn-warning, .btn-warning:hover, .accueil, .accueil:hover
{
  color: rgba($color: #ffffff, $alpha: 0.7);
}
h1, h3
{
  color: #2b4c88;
}
</style>