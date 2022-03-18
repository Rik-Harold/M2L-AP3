<template>
  <div>
    <!-- Routeur --
    <router-view v-slot="slot">
      <transition name="movePage" mode="out-in">
        <component :is="slot.Component"></component>
      </transition>
    </router-view> -->
    <router-view />
  </div>
</template>

<style>
/* Importation de la police "Roboto" */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body
{
  height: 100%;
  font-family: 'Roboto', sans-serif;
  /* min-width: 505px; */
  /* min-width: 992px; */
  /* background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); */
  /* background-size: cover; */
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
</style>