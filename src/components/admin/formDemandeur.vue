<template>
    <div>
        <!-- Barre de navigation adhérent -->
        <Header />

        <!-- Conteneur du formulaire -->
        <div class="container mt-5">
            <!-- Titre du formulaire -->
            <h1 class="h1 text-center">Création de compte Adhérent</h1>
            <!-- Conteneur des données du formulaire -->
            <div class="container mb-5">
                <div class="row">
                    <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
                        <div class="formulaire" id="formDemandeur">
                            <div class="form-group mb-3">
                                <label class="form-label" id="nom">Nom :</label>
                                <input type="text" name="nom" class="form-control" v-model="nom" placeholder="Votre nom" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="prenom">Prénom :</label>
                                <input type="text" name="prenom" class="form-control" v-model="prenom" placeholder="Votre prénom" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="mdp">Mot de passe :</label>
                                <input type="password" name="mdp" class="form-control" v-model="mdp" placeholder="Votre mot de passe" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="dateNaissance">Date de naissance :</label>
                                <input type="date" name="dateNaissance" class="form-control" v-model="dateNaissance"/>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="email">Adresse électronique :</label>
                                <input type="email" name="email" class="form-control" v-model="email" placeholder="xxxx@email.com" required />
                            </div>
                            <div v-if="$store.state.statut === 'admin'" class="form-group mb-3">
                                <label class="form-label" id="cp">Niveau tarif :</label>
                                <select name="niveauTarif" class="form-control" v-model.number="niveau_tarif">
                                    <option value="1">Ecoles et lycées</option>
                                    <option value="2">Ligues</option>
                                    <option value="3">Entreprises</option>
                                    <option value="4">Particuliers</option>
                                </select>
                            </div>
                            <div v-if="$store.state.statut === 'admin'" class="form-group mb-3">
                                <label class="form-label" id="droitReservation">Droit de réservation :</label>
                                <div>
                                    <div class="form-check">
                                        <input type="radio" name="droitReservation" value="1" class="form-check-input" v-model.number="droit_reservation">
                                        <label class="form-check-label">Autorisé</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" name="droitReservation" value="0" class="form-check-input" v-model.number="droit_reservation">
                                        <label class="form-check-label">Non autorisé</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="rue">Rue :</label>
                                <input type="text" name="rue" class="form-control" v-model="rue" placeholder="Votre rue" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="cp">Code Postal :</label>
                                <input type="number" name="cp" class="form-control" v-model.number="cp" placeholder="eg: 75000" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="ville">Ville :</label>
                                <input type="text" name="ville" class="form-control" v-model="ville" placeholder="Votre ville" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="numLicence">Numéro de licence :</label>
                                <input type="number" name="numLicence" class="form-control" v-model.number="numLicence" placeholder="Entrez le numéro de votre licence" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" id="cp">Ligues :</label>
                                <select name="ligue" class="form-control" v-model.number="id_ligue">
                                    <option v-for="(ligue, index) in ligues" :key="index" :value="ligue.id_ligues"> {{ ligue.nom }} </option>
                                </select>
                            </div>
                            <div v-if="$store.state.statut === 'admin'" class="form-group mb-3">
                                <label class="form-label" id="estAdherent">Est adhérent ?</label>
                                <div>
                                    <div class="form-check">
                                        <input type="radio" name="estAdherent" value="1" class="form-check-input" v-model.number="estAdherent">
                                        <label class="form-check-label">oui</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" name="estAdherent" value="0" class="form-check-input" v-model.number="estAdherent">
                                        <label class="form-check-label">non</label>
                                    </div>
                                </div>
                            </div>
                            <div class="container text-center">
                                <button class="btn btn-warning" name="valide" @click="sauvegarde(this)" >CREER LE COMPTE</button>
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
// Importation des fonctions de traitement
// import { createDemandeur } from '../../services/adminService.js'
import { selectLigues, createDemandeur } from '../../services/userService.js'
// Traitements
export default {
  name: 'FormDemandeur',
  components: {
    Header
  },
  data () {
    return {
      nom: '',
      prenom: '',
      email: '',
      mdp: '',
      numLicence: '',
      rue: '',
      cp: null,
      ville: '',
      dateNaissance: null,
      id_user: 0,
      id_ligue: null,
      estAdherent: true,
      niveau_tarif: 0,
      droit_reservation: null,
      ligues: []
    }
  },
  beforeMount () {
    // Fonction de récupération des ligues disponibles
    selectLigues()
      .then(res => res.json())
      .then(data => {
        // Récupération et stoclkage de la liste des ligues disponibles
        this.ligues = data.ligues
      })
  },
  methods: {
    // Fonction de création/mise à jour de compte adhérent
    sauvegarde: (instance) => {
      if (instance.verif(instance)) {
        if (instance.$store.state.statut === 'admin') {
          // Requête de création d'adhérent ou de demandeur
          createDemandeur(instance.nom, instance.prenom, instance.email, instance.mdp, instance.numLicence, instance.rue, instance.cp, instance.ville, instance.dateNaissance, instance.id_ligue, instance.estAdherent, instance.droit_reservation, instance.niveau_tarif)
            .then(res => res.json())
            .then(data => {
              // Vérification de la création
              if (data.message === 'inscription') {
                // Notification de création
                alert('Nouvel adhérent créé avec succès !')
                // Redirection vers l'interface d'affichage des utilisateurs
                instance.$router.push({ name: 'GestionUser' })
              } else {
                // Notification de l'erreur
                alert('Erreur lors de l\'inscription !')
              }
            })
        } else {
          // Requête de création de demandeur
          createDemandeur(instance.nom, instance.prenom, instance.email, instance.mdp, instance.numLicence, instance.rue, instance.cp, instance.ville, instance.dateNaissance, instance.id_ligue, 0, 0, 3)
            .then(res => res.json())
            .then(data => {
              // Vérification de la création
              if (data.message === 'inscription') {
                // Notification de création
                alert('Votre demande d\'adhésion est en cours de traitement.')
                // Redirection vers l'accueil
                instance.$router.push({ name: 'Home' })
              } else {
                // Notification de l'erreur
                alert('Erreur lors de l\'inscription !')
              }
            })
        }
      } else {
        alert('Tous les champs doivent être remplis !')
      }
    },
    // Vérification des champs
    verif: (instance) => {
      // Variable de vérification
      let test = true
      const donnees = [instance.nom, instance.prenom, instance.email, instance.mdp, instance.numLicence, instance.rue, instance.cp, instance.ville, instance.dateNaissance, instance.id_ligue]
      // Parcours des données
      donnees.forEach(donnee => {
        if (donnee === null || donnee === '' || donnee === 0) {
          test = false
        }
      })
      // Mise à disposition du test
      return test
    }
  }
}
</script>

<style>
</style>