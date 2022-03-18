<template>
  <section id="bordereau">
    <!-- <Header /> -->
    <Header :idAdhrent="$store.state.idUser" />
    <!-- Formulaire création -->
    <div v-if="$route.params.idFiche == 0" class="container mt-5">
      <!-- Titre du formulaire -->
      <h1 class="h1 text-center">Formulaire de fiche de frais</h1>
      <!-- Conteneur des données du formulaire -->
      <div class="container-fluid">
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
                <button class="btn btn-primary" @click="sauvegarde(this)" >VALIDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Formulaire mise à jour -->
    <div v-else-if="$route.params.idFiche > 0" class="container mt-5">
      <!-- Titre du formulaire -->
      <h1 class="h1 text-center">Formulaire de fiche de frais</h1>
      <!-- Conteneur des données du formulaire -->
      <div class="container-fluid">
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
                <button class="btn btn-primary" @click="miseAJour(this)" >METTRE A JOUR</button>
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
import { selectMotifs, addFicheFrais, updateFicheFrais } from '../../services/userService.js'
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
      idMotif: null,
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
  },
  methods: {
    sauvegarde: (instance) => {
      // Requête de création
      addFicheFrais(instance.trajet, instance.dateFrais, instance.km, instance.nbKm, instance.peage, instance.nbPeage, instance.peageJustificatif, instance.repas, instance.nbRepas, instance.hebergement, instance.nbHebergement, instance.hebergementJustificatif, instance.idMotif, instance.$store.state.idUser)
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
      updateFicheFrais(instance.id, instance.trajet, instance.dateFrais, instance.km, instance.nbKm, instance.peage, instance.nbPeage, instance.peageJustificatif, instance.repas, instance.nbRepas, instance.hebergement, instance.nbHebergement, instance.hebergementJustificatif, instance.idMotif, instance.$store.state.idUser)
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
    }
  },
  props: {
    getId: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style>

</style>