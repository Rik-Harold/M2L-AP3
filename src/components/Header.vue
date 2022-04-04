<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-m2l w-100">
      <div class="container">
        <!-- Nom de l'organisme -->
        <a class="navbar-brand" href="#"><img src="../assets/img/M2L_net_rond.png" /><span>M2L</span></a>
        <!-- Bouton responsive -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- Liste des liens de navigation : ADMIN -->
          <ul class="navbar-nav" v-if="$store.state.statut === 'admin'" >
            <li class="nav-item" v-for="(item, index) in pagesAdmin" :key="index">
              <router-link :to="item.id" class="nav-link">{{ item.nom }}</router-link>
            </li>
          </ul>
          <!-- Liste des liens de navigation : ADHERENT -->
          <ul class="navbar-nav" v-else-if="$store.state.statut === 'adherent'" >
            <li class="nav-item" v-for="(item, index) in pagesAdherent" :key="index">
              <router-link :to="item.id" class="nav-link">{{ item.nom }}</router-link>
            </li>
          </ul>
          <!-- Liste des liens de navigation : TRESORIER -->
          <ul class="navbar-nav" v-else-if="$store.state.statut === 'tresorier'">
            <li class="nav-item" v-for="(item, index) in pagesTresorier" :key="index">
              <router-link :to="item.id" class="nav-link">{{ item.nom }}</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Récapîtulatif des bordereaux</a>
            </li>
          </ul>
          <!-- Liste des liens de navigation : DEMANDEUR -->
          <ul class="navbar-nav" v-else>
            <li class="nav-item">
              <a href="#" class="nav-link">Maison des Ligues de Lorraine</a>
            </li>
          </ul>
          <!-- Bouton de déconnexion -->
          <div class="h-100 deconnect">
            <router-link to="/" class="deconnexion"><i class="fas fa-sign-out-alt"></i></router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'Header',
  data () {
    return {
      pagesAdmin: [
        {
          id: '/admin/gestion-utilisateurs',
          nom: 'Gestion des utilisateurs'
        },
        {
          id: '/admin/ajouter-utilisateur/0',
          nom: 'Ajouter un utilisateur'
        },
        {
          id: '/admin/modifier-demandeur',
          nom: 'Ajouter un adhérent'
        },
        {
          id: '/tresorier/les-bordereaux',
          nom: 'Bordereaux adhérents'
        }
      ],
      pagesAdherent: [
        {
          id: '/adherent/bordereau',
          nom: 'Mes Fiches de Frais'
        },
        {
          id: '/adherent/fiche-de-frais/0',
          nom: 'Ajouter une fiche de frais'
        },
        {
          id: '/adherent/mon-bordereau',
          nom: 'Mon Bordereau'
        }
      ],
      pagesTresorier: [
        {
          id: '/tresorier/les-bordereaux',
          nom: 'Afficher les bordereaux'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#navbar
{
  margin-bottom: 20px;
  color: #e02131;
  padding: 0;
  ul
  {
    li
    {
      padding: 15px;
      .nav-link
      {
        font-size: 120%;
      }
    }
  }
  .deconnect
  {
    padding: 15px;
    .deconnexion
    {
      color: #fff;
      // color: #2b4c88;
      text-decoration: none;
    }
  }
  .navbar-brand
  {
    color: #2b4c88;
    font-weight: 600;
    img
    {
      height: 50px;
    }
    span
    {
      margin-left: 5px;
    }
  }
  .bg-m2l
  {
    background: rgb(254,200,22);
  }
}
</style>