<template>
  <div>
    <!-- Barre de navigation adhérent -->
    <Header />

    <!-- Formulaire création -->
    <div v-if="$route.params.idUser && $route.params.idUser == 0" class="container mt-5">
      <!-- Titre du formulaire -->
      <h1 class="h1 text-center">Formulaire d'enregistrement</h1>
      <!-- Conteneur des données du formulaire -->
      <div class="container mb-5">
        <div class="row">
          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div class="formulaire">
              <div class="form-group mb-3">
                <label class="form-label" id="email">Adresse électronique :</label>
                <input type="email" class="form-control" v-model="email" placeholder="xxxx@email.com"/>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="cp">Statut :</label>
                <select name="statut" class="form-control" v-model="statut">
                  <option value="tresorier">Trésorier</option>
                  <option value="admin">Administrateur</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="cp">Niveau tarif :</label>
                <select name="statut" class="form-control" v-model.number="niveau_tarif">
                  <option value="1">Ecoles et lycées</option>
                  <option value="2">Ligues</option>
                  <option value="3">Entreprises</option>
                  <option value="4">Particuliers</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="numLicence">Droit de réservation :</label>
                <div>
                  <div class="form-check">
                    <input type="radio" name="droit_reservation" value="1" class="form-check-input" v-model.number="droit_reservation">
                    <label class="form-check-label">Autorisé</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" name="droit_reservation" value="0" class="form-check-input" v-model.number="droit_reservation">
                    <label class="form-check-label">Non autorisé</label>
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="rue">Mot de passe :</label>
                <input type="password" class="form-control" v-model="mdp" placeholder="Tapez un mot de pase sécurisé"/>
              </div>
              <!-- Bouton de sauvegarde des données -->
              <div class="container text-center">
                <button class="btn btn-warning" @click="sauvegarde(this)" >SAUVEGARDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Formulaire mise à jour -->
    <div v-else-if="$route.params.idUser && $route.params.idUser > 0" class="container mt-5">
      <!-- Titre du formulaire -->
      <h1 class="h1 text-center">Formulaire de mise à jour</h1>
      <!-- Conteneur des données du formulaire -->
      <div class="container mb-5">
        <div class="row">
          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div class="formulaire">
              <div class="form-group mb-3">
                <label class="form-label" id="email">Adresse électronique :</label>
                <input type="email" class="form-control" v-model="email" placeholder="xxxx@email.com"/>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="cp">Statut :</label>
                <select v-if="statut == 'demandeur' || statut == 'adherent'" name="statut" class="form-control" v-model="statut">
                  <option value="demandeur">Demandeur</option>
                  <option value="adherent">Adhérent</option>
                </select>
                <select v-else name="statut" class="form-control" v-model="statut">
                  <option value="tresorier">Trésorier</option>
                  <option value="admin">Administrateur</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="cp">Niveau tarif :</label>
                <select name="statut" class="form-control" v-model.number="niveau_tarif">
                  <option value="1">Ecoles et lycées</option>
                  <option value="2">Ligues</option>
                  <option value="3">Entreprises</option>
                  <option value="4">Particuliers</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="numLicence">Droit de réservation :</label>
                <div>
                  <div class="form-check">
                    <input type="radio" name="droit_reservation" value="1" class="form-check-input" v-model.number="droit_reservation">
                    <label class="form-check-label">Autorisé</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" name="droit_reservation" value="0" class="form-check-input" v-model.number="droit_reservation">
                    <label class="form-check-label">Non autorisé</label>
                  </div>
                </div>
              </div>
              <!-- Bouton de mise à jour -->
              <div class="container text-center">
                <button class="btn btn-warning" @click="miseAJour(this)" >METTRE A JOUR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importation des vues
import Header from '@/components/Header.vue'
// Importation des middlewares
import { createUser } from '../../services/userService.js'
import { selectUser, updateUser } from '../../services/adminService.js'
export default {
  name: 'FormUser',
  components: {
    Header
  },
  data () {
    return {
      id: 0,
      email: '',
      statut: '',
      niveau_tarif: 0,
      droit_reservation: null,
      mdp: ''
    }
  },
  beforeMount () {
    // Vérification de la présence de paramètre valide
    if (this.$route.params.idUser && this.$route.params.idUser > 0) {
      // Récupération de l'id
      const id = parseInt(this.$route.params.idUser)
      // Conservation de l'instance
      const vue = this
      // Fonction de récupération des données de l'utilisateur
      selectUser(id)
        .then(res => res.json())
        .then(data => {
          // Vérification de la présence
          if (data.statut !== 'indisponible') {
            // Récupération et stockage des données de l'utilisateur
            vue.id = id
            vue.email = data.user[0].email
            vue.statut = data.user[0].statut
            vue.niveau_tarif = data.user[0].niveauTarif
            vue.droit_reservation = data.user[0].droitReservation
          } else {
            // Notification de l'absence d'actualisation
            alert('Aucun utilisateur disponible !')
          }
        })
    }
  },
  methods: {
    sauvegarde: (instance) => {
      // Requête de création
      createUser(instance.email, instance.mdp, instance.statut, instance.droit_reservation, instance.niveau_tarif)
        .then(res => res.json())
        .then(data => {
          // Vérification de la création
          if (data.message === 'inscription') {
            // Notification de création
            alert('Nouvel utilisateur créé avec succès !')
            // Redirection vers l'interface d'affichage des utilisateurs
            instance.$router.push({ name: 'GestionUser' })
          } else {
            // Notification de l'erreur
            alert('Erreur lors de l\'inscription !')
          }
        })
    },
    miseAJour: (instance) => {
      updateUser(instance.id, instance.email, instance.statut, instance.droit_reservation, instance.niveau_tarif)
        .then(res => res.json())
        .then(data => {
          // Vérification de la création
          if (data.message === 'update') {
            // Notification de création
            alert('Mise à jour effectuée !')
            // Redirection vers l'interface d'affichage des utilisateurs
            instance.$router.push({ name: 'GestionUser' })
          } else {
            // Notification de l'erreur
            alert('Erreur lors de la mise à jour !')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>