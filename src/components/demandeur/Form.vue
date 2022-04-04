<template>
    <div class="container mt-5">
        <!-- Titre du formulaire -->
        <h1 class="h1 text-center">Formulaire d'adhésion</h1>
        <!-- Conteneur des données du formulaire -->
        <div class="container">
            <div class="row">
                <div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                    <form class="formulaire">
                        <div class="form-group mb-3">
                            <label class="form-label" id="nom">Nom :</label>
                            <input type="text" class="form-control" v-model="nom" placeholder="Votre nom..." required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="prenom">Prénom :</label>
                            <input type="text" class="form-control" v-model="prenom" placeholder="Votre prénom..." required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="dateNaissance">Date de naissance :</label>
                            <input type="date" class="form-control" v-model="dateNaissance" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="email">Adresse électronique :</label>
                            <input type="email" class="form-control" v-model="email" placeholder="xxxx@email.com" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="rue">Rue :</label>
                            <input type="text" class="form-control" v-model="rue" placeholder="Votre rue..." required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="cp">Code Postal :</label>
                            <input type="number" class="form-control" v-model="cp" placeholder="eg: 75000" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="ville">Ville :</label>
                            <input type="text" class="form-control" v-model="ville" placeholder="Votre ville..." required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="numLicence">Numéro de licence :</label>
                            <input type="number" class="form-control" v-model="numLicence" maxlength="9" placeholder="Entrez le numéro de votre licence" required />
                        </div>
                        <div class="container text-center">
                            <button class="btn btn-warning" type="submit">VALIDER</button>
                        </div>
                        <div class="container text-center">
                            <router-link class="btn btn-warning" to="/demandeur/informations">VALIDER</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Importation des fonctions de traitement
// import { selectLigues, createDemandeur } from '../../services/userService.js'
export default {
  name: 'Form',
  data () {
    return {
      nom: '',
      prenom: '',
      email: '',
      numLicence: '',
      rue: '',
      cp: null,
      ville: '',
      dateNaissance: null
    }
  }
}
</script>

<style>
</style>