<template>
  <div id="bordereau" class="w-100">
    <!-- Barre de navigation adhérent -->
    <Header />

    <!-- Contenu de la page -->
    <section class="container" >
      <!-- Titre de la page -->
      <h3 class="mt-5 text-center">MES FICHES DE FRAIS</h3>

      <!-- Tableau d'affichage des fiches de frais du bordereau courant -->
      <div class="mt-3 conteneur-table">
        <table class="table table-striped table-responsive-sm table-responsive-md text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Motif</th>
              <th>Trajet</th>
              <th>Kms parcourus</th>
              <th>Coût Trajet</th>
              <th>Péages</th>
              <th>Repas</th>
              <th>Hébergement</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ficheDeFrais, index) in bordereauFormat" :key="index" >
              <td>{{ index + 1 }}</td>
              <td>{{ ficheDeFrais.dateFicheFrais }}</td>
              <td>{{ ficheDeFrais.motif }}</td>
              <td>{{ ficheDeFrais.trajet }}</td>
              <td>{{ ficheDeFrais.kmParcouru }} km</td>
              <td>
                {{ ficheDeFrais.coutTrajet }}
                <span v-if="ficheDeFrais.coutTrajet != '-'"> &euro;</span>
              </td>
              <td>
                {{ ficheDeFrais.coutPeage }}
                <span v-if="ficheDeFrais.coutPeage != '-'"> &euro;</span>
              </td>
              <td>
                {{ ficheDeFrais.coutRepas }}
                <span v-if="ficheDeFrais.coutRepas != '-'"> &euro;</span>
              </td>
              <td>{{ ficheDeFrais.coutHebergement }}
                <span v-if="ficheDeFrais.coutHebergement != '-'"> &euro;</span>
              </td>
              <td>
                <!-- Modification d'une fiche de frais -->
                <router-link class="btn btn-secondary" :to="{ name: 'Fichefrais', params: { idFiche: ficheDeFrais.id } }">Modifier</router-link>
                <!-- Suppression d'une fiche de frais -->
                <button class="ms-1 btn btn-secondary" @click="deleteFiche(this, ficheDeFrais.id)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Ajout d'une nouvelle fiche de frais -->
      <div v-if="$store.state.statut == 'adherent'" class="mt-5 container text-center">
        <router-link class="btn btn-warning" to="/adherent/fiche-de-frais/0">AJOUTER UNE NOTE DE FRAIS</router-link>
      </div>
      <!-- Consulter le bordereau -->
      <div v-else-if="$store.state.statut == 'tresorier' || $store.state.statut == 'admin'" class="mt-5 container text-center">
        <router-link class="btn btn-warning" to="/adherent/mon-bordereau">CONSULTER LE BORDEREAU</router-link>
      </div>
    </section>
  </div>
</template>

<script>
// Importation des vues
import Header from '@/components/Header.vue'
import { selectAllFicheFrais, deleteFicheFrais, selectMotifs } from '../../services/userService.js'
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
      bordereau: null,
      bordereauFormat: [],
      motifs: null
    }
  },
  beforeMount () {
    // Fonction de récupération des motifs de fiches de frais
    selectMotifs()
      .then(res => res.json())
      .then(data => {
        if (data.statut === 'disponible') {
          // Récupération et stockage des motifs
          this.motifs = data.motif
        }
      })
    // Fonction de récupération du bordereau
    selectAllFicheFrais(this.$store.state.adherentFicheFrais, 2022)
      .then(res => res.json())
      .then(data => {
        // Récupération et stockage des fiches de frais
        this.bordereau = data
        // Formatage du bordereau et récupération du contenu
        this.bordereauFormat = this.bordereauFormate(this)
      })
    // Sauvegarde de l'id de l'adhérent
    this.idUser = this.$store.state.idUser
  },
  methods: {
    // Supression d'une fiche de frais
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
    // Mise à jour de la liste des fiches de frais
    miseAJour: (instance) => {
      selectAllFicheFrais(instance.$store.state.adherentFicheFrais, 2022)
        .then(res => res.json())
        .then(data => {
          console.log('Actualisation')
          // Récupération et stockage des fiches de frais
          instance.bordereau = data
          // Formatage du bordereau et récupération du contenu
          instance.bordereauFormat = instance.bordereauFormate(instance)
        })
    },
    // Formatage de la date de chaque fiche de frais
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
    },
    // Récupération du cout total d'une frais du bordereau
    valeur: (cout, nb) => {
      if (nb === 0) {
        return ('-')
      } else {
        return (nb * cout)
      }
    },
    // Formatage du bordereau
    bordereauFormate: (instance) => {
      // Variables de stockage
      let bordereau = null
      bordereau = []
      // // Parcours de la liste des fiches de frais
      instance.bordereau.forEach(ficheFrais => {
        // Formatage de la date de frais
        const dateFrais = instance.formatDate(instance, ficheFrais.date_ligne_frais)
        // Kilométrage
        const km = ficheFrais.km * ficheFrais.km_valide
        const trajetCout = parseInt(km * 0.28)
        // Vérification et formatage des frais facultatifs
        let peage = null
        if (ficheFrais.peage_valide !== 0) {
          peage = instance.valeur(ficheFrais.cout_peage, ficheFrais.peage_valide)
        } else {
          peage = '-'
        }
        let repas
        if (ficheFrais.repas_valide !== 0) {
          repas = instance.valeur(ficheFrais.cout_repas, ficheFrais.repas_valide)
        } else {
          repas = '-'
        }
        let hebergemennt
        if (ficheFrais.hebergement_valide !== 0) {
          hebergemennt = instance.valeur(ficheFrais.cout_hebergement, ficheFrais.hebergement_valide)
        } else {
          hebergemennt = '-'
        }
        // Détection du motif
        let motifFrais = ''
        instance.motifs.forEach(motifData => {
          if (motifData.id_motif === ficheFrais.id_motif) {
            motifFrais = motifData.libelle
          }
        })
        // Formatage de la fiche de frai du bordereau
        bordereau.push({
          id: ficheFrais.id_ligne_frais,
          dateFicheFrais: dateFrais,
          motif: motifFrais,
          trajet: ficheFrais.trajet,
          kmParcouru: km,
          coutTrajet: trajetCout,
          coutPeage: peage,
          coutRepas: repas,
          coutHebergement: hebergemennt
        })
      })
      // Mise à disposition du bordereau
      return bordereau
    }
  }
}
</script>

<style lang="scss" scoped>
</style>