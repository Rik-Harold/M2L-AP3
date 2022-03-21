<template>
  <div id="bordereau" class="w-100">
    <!-- Barre de navigation adhérent -->
    <Header :idAdhrent="$store.state.idUser" />

    <!-- Contenu de la page -->
    <section class="container" >
      <!-- Titre de la page -->
      <p class="text-center">Mon Bordereau</p>

      <!-- Tableau d'affichage des fiches de frais du bordereau courant -->
      <div class="conteneur-table">
        <table class="mt-5 table table-striped table-responsive-sm table-responsive-md text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Trajet</th>
              <th>Kilomètre</th>
              <th>Péage</th>
              <th>Repas</th>
              <th>Hébergement</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(noteFrais, index) in bordereau" :key="index" >
              <td>{{ index + 1 }}</td>
              <td>{{ formatDate(this, noteFrais.date_ligne_frais) }}</td>
              <td>{{ noteFrais.trajet }}</td>
              <td>{{ noteFrais.km }} km</td>
              <td v-if="noteFrais.peage_valide > 0" >{{ noteFrais.cout_peage }} €</td>
              <td v-else >-</td>
              <td v-if="noteFrais.repas_valide > 0" >{{ noteFrais.cout_repas }} €</td>
              <td v-else >-</td>
              <td v-if="noteFrais.hebergement_valide > 0" >{{ noteFrais.cout_hebergement }} €</td>
              <td v-else >-</td>
              <td>
                <!-- Modification d'une fiche de frais -->
                <router-link class="btn btn-secondary" :to="{ name: 'Fichefrais', params: { idFiche: noteFrais.id_ligne_frais } }">Modifier</router-link>
                <!-- Suppression d'une fiche de frais -->
                <button class="ms-1 btn btn-danger" @click="deleteFiche(this, noteFrais.id_ligne_frais)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Ajout d'une nouvelle fiche de frais -->
      <div class="mt-5 container text-center">
        <router-link class="btn btn-primary" to="/adherent/fiche-de-frais/0">AJOUTER UNE NOTE DE FRAIS</router-link>
      </div>
    </section>
  </div>
</template>

<script>
// Importation des vues
import Header from '@/components/Header.vue'
import { selectAllFicheFrais, deleteFicheFrais } from '../../services/userService.js'
// Traitement du script
export default {
  name: 'Bordereau',
  components: {
    Header
  },
  data () {
    return {
      idUser: 0,
      idAdherentFiche: 0,
      bordereau: null
    }
  },
  beforeMount () {
    // Fonction de récupération du bordereau
    selectAllFicheFrais(this.$store.state.adherentFicheFrais, 2022)
      .then(res => res.json())
      .then(data => {
        // Récupération et stockage des fiches de frais
        this.bordereau = data
      })
    // Sauvegarde de l'id de l'adhérent
    this.idUser = this.$store.state.idUser
  },
  methods: {
    test: id => {
      console.log(id)
    },
    deleteFiche: (instance, id, userId) => {
      // Fonction de récupération des ligues disponibles
      deleteFicheFrais(id)
        .then(res => res.json())
        .then(data => {
          console.log('Supression')
          // Mise à jour des fiches
          instance.miseAJour(instance)
          // Notification de la supression
          alert('Fiche de l\'id ' + id + ' supprimée !')
        })
    },
    miseAJour: (instance) => {
      selectAllFicheFrais(instance.$store.state.adherentFicheFrais, 2022)
        .then(res => res.json())
        .then(data => {
          console.log('Actualisation')
          // Récupération et stockage des fiches de frais
          instance.bordereau = data
        })
    },
    formatDate: (instance, dateLigneFrais) => {
      // Récupération de la date de la ligne de frais
      const dateObject = new Date(dateLigneFrais)
      let jour = dateObject.getDate()
      let mois = dateObject.getMonth() + 1
      if (dateObject.getDate() < 10) {
        jour = '0' + jour
      }
      if (dateObject.getMonth() < 10) {
        mois = '0' + mois
      }
      // Formatage
      const formatDateFull = jour + '/' + mois + '/' + dateObject.getFullYear()
      // Mise à disposition du nouveau format de la date
      return formatDateFull
    }
  }
}
</script>

<style lang="scss" scoped>

</style>