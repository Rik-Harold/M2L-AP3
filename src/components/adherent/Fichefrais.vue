<template>
  <section id="bordereau">
    <!-- <Header /> -->
    <Header :idAdhrent="$store.state.idUser" />
    <!-- Formulaire création -->
    <div v-if="$route.params.idFiche == 0" class="container mt-5">
      <!-- Titre du formulaire -->
      <h1 class="h1 text-center">Création d'une fiche de frais</h1>
      <!-- Conteneur des données du formulaire -->
      <div class="container mb-5">
        <div class="row">
          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div class="formulaire">
              <div class="form-group mb-3">
                <label class="form-label" id="dateFrais">Date des frais :</label>
                <input type="date" class="form-control" v-model="dateFrais"/>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="cp">Motif :</label>
                <select name="motif" class="form-control" v-model.number="idMotif">
                  <option v-for="(motif, index) in motifs" :key="index" :value="motif.id_motif"> {{ motif.libelle }} </option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="nom">Trajet :</label>
                <input type="text" class="form-control" v-model.number="trajet" placeholder="eg: Paris - Lyon" />
              </div>
              <label class="form-label" id="prenom">Kilomètres :</label>
              <div class="input-group mb-3">
                <input type="number" class="form-control" v-model.number="km" placeholder="Distance parcourue"/>
                <span class="input-group-text">km</span>
                <input type="number" class="form-control" v-model.number="nbKm" placeholder="Nombre de fois parcouru"/>
              </div>
              <label class="form-label" id="prenom">Péages :</label>
              <div class="input-group mb-3">
                <input type="number" class="form-control" v-model.number="peage" placeholder="Coût du péage"/>
                <span class="input-group-text">€</span>
                <input type="number" class="form-control" v-model.number="nbPeage" placeholder="Nombre de fois passé"/>
              </div>
              <label class="form-label" id="prenom">Repas :</label>
              <div class="input-group mb-3">
                <input type="number" class="form-control" v-model.number="repas" placeholder="Coût du repas"/>
                <span class="input-group-text">€</span>
                <input type="number" class="form-control" v-model.number="nbRepas" placeholder="Nombre de fois pris"/>
              </div>
              <label class="form-label" id="prenom">Hébergement :</label>
              <div class="input-group mb-4">
                <input type="number" class="form-control" v-model.number="hebergement" placeholder="Coût de l'hébergement"/>
                <span class="input-group-text">€</span>
                <input type="number" class="form-control" v-model.number="nbHebergement" placeholder="Nombre de fois utilisé"/>
              </div>
              <div class="container text-center">
                <button class="btn btn-warning" @click="sauvegarde(this)" >VALIDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Formulaire mise à jour -->
    <div v-else-if="$route.params.idFiche > 0" class="container mt-5">
      <!-- Titre du formulaire -->
      <h1 class="h1 text-center">Mise à jour de la fiche de frais</h1>
      <!-- Conteneur des données du formulaire -->
      <div class="container  mb-5">
        <div class="row">
          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div class="formulaire">
              <div class="form-group mb-3">
                <label class="form-label" id="dateFrais">Date des frais :</label>
                <input type="date" class="form-control" v-model="dateFrais"/>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="cp">Motif :</label>
                <select name="motif" class="form-control" v-model.number="idMotif">
                  <option v-for="(motif, index) in motifs" :key="index" :value="motif.id_motif"> {{ motif.libelle }} </option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label class="form-label" id="nom">Trajet :</label>
                <input type="text" class="form-control" v-model.number="trajet" placeholder="eg: Paris - Lyon" />
              </div>
              <label class="form-label" id="prenom">Kilomètres :</label>
              <div class="input-group mb-3">
                <input type="number" class="form-control" v-model.number="km" placeholder="Distance parcourue"/>
                <span class="input-group-text">km</span>
                <input type="number" class="form-control" v-model.number="nbKm" placeholder="Nombre de fois parcouru"/>
              </div>
              <label class="form-label" id="prenom">Péages :</label>
              <div class="input-group mb-3">
                <input type="number" class="form-control" v-model.number="peage" placeholder="Coût du péage"/>
                <span class="input-group-text">€</span>
                <input type="number" class="form-control" v-model.number="nbPeage" placeholder="Nombre de fois passé"/>
              </div>
              <label class="form-label" id="prenom">Repas :</label>
              <div class="input-group mb-3">
                <input type="number" class="form-control" v-model.number="repas" placeholder="Coût du repas"/>
                <span class="input-group-text">€</span>
                <input type="number" class="form-control" v-model.number="nbRepas" placeholder="Nombre de fois pris"/>
              </div>
              <label class="form-label" id="prenom">Hébergement :</label>
              <div class="input-group mb-4">
                <input type="number" class="form-control" v-model.number="hebergement" placeholder="Coût de l'hébergement"/>
                <span class="input-group-text">€</span>
                <input type="number" class="form-control" v-model.number="nbHebergement" placeholder="Nombre de fois utilisé"/>
              </div>
              <div class="container text-center">
                <button class="btn btn-warning" @click="miseAJour(this)" >METTRE A JOUR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importation des vues
import Header from '@/components/Header.vue'
import { selectMotifs, addFicheFrais, updateFicheFrais, selectFicheFrais } from '../../services/userService.js'
// Traitement du script
export default {
  name: 'Fichefrais',
  components: {
    Header
  },
  data () {
    return {
      id: null,
      dateFrais: '',
      dateFicheFrais: '',
      idMotif: null,
      libelleMotif: '',
      trajet: '',
      km: 0,
      nbKm: 1,
      peage: 0,
      nbPeage: 0,
      peageJustificatif: '',
      repas: 0,
      nbRepas: 0,
      hebergement: 0,
      nbHebergement: 0,
      hebergementJustificatif: '',
      motifs: []
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
    // Vérification de la présence de paramètre valide
    if (this.$route.params.idFiche && this.$route.params.idFiche > 0) {
      // Récupération de l'id
      const id = parseInt(this.$route.params.idFiche)
      // Fonction de récupération des données de l'utilisateur
      selectFicheFrais(id, this.$store.state.adherentFicheFrais)
        .then(res => res.json())
        .then(data => {
          // Vérification de la présence
          if (data.statut !== 'indisponible') {
            // Récupération et stockage des données de l'utilisateur
            this.id = id
            this.dateFrais = this.formatDate(data.fiche[0].date_ligne_frais)
            this.idMotif = data.fiche[0].id_motif
            this.trajet = data.fiche[0].trajet
            this.km = data.fiche[0].km
            this.nbKm = data.fiche[0].km_valide
            this.peage = data.fiche[0].cout_peage
            this.nbPeage = data.fiche[0].peage_valide
            this.peageJustificatif = data.fiche[0].peage_justificatif
            this.repas = data.fiche[0].cout_repas
            this.nbRepas = data.fiche[0].repas_valide
            this.hebergement = data.fiche[0].cout_hebergement
            this.nbHebergement = data.fiche[0].hebergement_valide
            this.hebergementJustificatif = data.fiche[0].hebergemenT_justificatif
          } else {
            // Notification de l'absence d'actualisation
            alert('Aucun utilisateur disponible !')
          }
        })
    }
  },
  methods: {
    sauvegarde: (instance) => {
      // Requête de création d'une fiche de frais
      addFicheFrais(instance.trajet, instance.dateFrais, instance.km, instance.nbKm, instance.peage, instance.nbPeage, instance.peageJustificatif, instance.repas, instance.nbRepas, instance.hebergement, instance.nbHebergement, instance.hebergementJustificatif, instance.idMotif, instance.$store.state.adherentFicheFrais)
        .then(res => res.json())
        .then(data => {
          // Vérification de la mise à jour
          if (data.message === 'creation') {
            // Notification de création
            alert('Nouvelle fiche de frais créée avec succès !')
            // Redirection vers l'interface d'affichage des fiches de frais du bordereau
            instance.$router.push({ name: 'Bordereau' })
          } else {
            // Notification de l'erreur
            alert('Erreur lors de l\'inscription !')
          }
        })
    },
    miseAJour: (instance) => {
      // Requête de mise à jour d'une fiche de frais
      updateFicheFrais(instance.id, instance.trajet, instance.dateFrais, instance.km, instance.nbKm, instance.peage, instance.nbPeage, instance.peageJustificatif, instance.repas, instance.nbRepas, instance.hebergement, instance.nbHebergement, instance.hebergementJustificatif, instance.idMotif, instance.$store.state.adherentFicheFrais)
        .then(res => res.json())
        .then(data => {
          // Vérification de la mise à jour
          if (data.message === 'update') {
            // Notification de création
            alert('Mise à jour effectuée !')
            // Redirection vers l'interface d'affichage des fiches de frais du bordereau
            instance.$router.push({ name: 'Bordereau' })
          } else {
            // Notification de l'erreur
            alert('Erreur lors de la mise à jour !')
          }
        })
    },
    // Formatage de la date de la fiche de frais
    formatDate: (dateLigneFrais) => {
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
      const formatDateFull = dateObject.getFullYear() + '-' + mois + '-' + jour
      // Mise à disposition du nouveau format de la date
      return formatDateFull
    }
  }
}
</script>

<style>

</style>