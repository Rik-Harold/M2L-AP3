<template>
  <div id="gestionUser">
    <!-- Barre de navigation adhérent -->
    <Header />
    <!-- Contenu -->
    <section class="container mt-5">
      <!-- Titre de la section -->
      <h1 class="text-center">Gestion des utilisateurs</h1>

      <!-- Formulaire de critères de recherches -->
      <div class="tri my-3">
        <div class="recherche">
          <div>
            <button @click="searchUser(this)" class="btn btn-outline-secondary"><i class="fas fa-search"></i></button>
          </div>
          <div>
            <input type="text" v-model="search" class="form-control" placeholder="Rechercher un utilisateur" />
          </div>
        </div>

        <!-- Options de filtres -->
        <div class="critereFiltre">
          <div>
            <label id="filtre" >Filtrer par :</label>
          </div>
          <div>
            <select name="filtre" class="form-control" v-model="filtre">
              <option value="adherent">Adhérents</option>
              <option value="tresorier">Trésoriers</option>
              <option value="demandeur">Demandeurs</option>
              <option value="admin">Administrateurs</option>
              <option value="allUser">Tous les utilisateurs</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Tableau d'affichage -->
      <table class="table table-striped table-responsive-sm text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>E-mail</th>
            <th>Statut</th>
            <th>Niveau de tarif</th>
            <th>Droit de réservation</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(utilisateur, index) of filtreUser(this)" :key="index">
            <td> {{ utilisateur.id_utilisateur }} </td>
            <td> {{ utilisateur.email }} </td>
            <td> {{ utilisateur.statut }} </td>
            <td> {{ utilisateur.niveauTarif }} </td>
            <td v-if="utilisateur.droitReservation == 1" >Autorisé</td>
            <td v-else>Non autorisé</td>
            <td>
              <!-- Modification d'un compte utilisateur -->
              <router-link class="btn btn-secondary" :to="{ name: 'FormUser', params: { idUser: utilisateur.id_utilisateur } }">Modifier</router-link>
              <!-- Suppression d'un compte utilisateur -->
              <button class="ms-1 btn btn-secondary" @click="deleteAnUser(this, utilisateur.id_utilisateur, utilisateur.statut)" >Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Création d'un nouvel utilisateur -->
      <div class="my-5 container text-center">
        <router-link class="btn btn-warning" to="/admin/ajouter-utilisateur/0">AJOUTER UN UTILISATEUR</router-link>
      </div>
    </section>
  </div>
</template>

<script>
// Importation des vues
import Header from '@/components/Header.vue'
// Importation des fonctions de traitement
import { selectUserData, deleteUser } from '../../services/adminService.js'
// Traitement du script
export default {
  name: 'GestionUser',
  components: {
    Header
  },
  data () {
    return {
      search: '',
      filtre: 'allUser',
      allUsers: []
    }
  },
  beforeMount () {
    // Fonction de récupération des utilisateur présents
    selectUserData()
      .then(res => res.json())
      .then(data => {
        // Récupération et stockage des utilisateurs
        this.allUsers = data
      })
  },
  methods: {
    filtreUser: (instance) => {
      switch (instance.filtre) {
        case 'adherent':
          // Récupération des Adhérents
          return instance.allUsers.filter(utilisateur => {
            return utilisateur.statut === 'adherent'
          })
        case 'tresorier':
          // Récupération des Trésoriers
          return instance.allUsers.filter(utilisateur => {
            return utilisateur.statut === 'tresorier'
          })
        case 'admin':
          // Récupération des Administrateurs
          return instance.allUsers.filter(utilisateur => {
            return utilisateur.statut === 'admin'
          })
        case 'demandeur':
          // Récupération des Demandeurs
          return instance.allUsers.filter(utilisateur => {
            return (utilisateur.statut === 'demandeur')
          })
        case 'recherche':
          // Récupération des Email triés
          return instance.allUsers.filter(utilisateur => {
            return utilisateur.email.includes(instance.search)
          })
        default:
          // Récupération de tous les utilsateurs
          return instance.allUsers
      }
    },
    searchUser: (instance) => {
      // Recherche
      if (instance.search !== '') {
        instance.filtre = 'recherche'
      }
    },
    deleteAnUser: (instance, id, statut) => {
      // Fonction de récupération des ligues disponibles
      deleteUser(id, statut)
        .then(res => res.json())
        .then(data => {
          // Fonction de récupération des utilisateur présents
          selectUserData()
            .then(res => res.json())
            .then(data => {
              // Récupération et stockage des utilisateurs
              instance.allUsers = data
            })
          // Notification de la supression
          alert('Utilisateur de l\'id ' + id + ' supprimé !')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#gestionUser
{
  h3
  {
    color: #000;
    text-transform: uppercase;
  }
  .tri
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .critereFiltre div, .recherche div
    {
        display: inline-block;
    }
    .recherche button
    {
        border: none;
    }
    #filtre
    {
        margin-right: 5px;
        padding: 6px;
        color: #6c757d;
        font-weight: 500;
    }
    select
    {
        cursor: pointer;
    }
    input:focus, select:focus
    {
        outline: none;
    }
  }
  .td button
  {
    margin-right: 5px;
  }
}
</style>