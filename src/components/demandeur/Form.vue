<template>
    <div class="container mt-5">
        <!-- Titre du formulaire -->
        <h1 class="h1 text-center">Formulaire d'enregistrement</h1>
        <!-- Conteneur des données du formulaire -->
        <div class="container">
            <div class="row">
                <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
                    <div class="formulaire">
                        <div class="form-group mb-3">
                            <label class="form-label" id="nom">Nom :</label>
                            <input type="text" class="form-control" v-model="nom" placeholder="Votre nom..." />
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="prenom">Prénom :</label>
                            <input type="text" class="form-control" v-model="prenom" placeholder="Votre prénom..."/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="dateNaissance">Date de naissance :</label>
                            <input type="date" class="form-control" v-model="dateNaissance"/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="email">Adresse électronique :</label>
                            <input type="email" class="form-control" v-model="email" placeholder="xxxx@email.com"/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="rue">Rue :</label>
                            <input type="text" class="form-control" v-model="rue" placeholder="Votre rue..."/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="cp">Code Postal :</label>
                            <input type="number" class="form-control" v-model="cp" placeholder="eg: 75000"/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="ville">Ville :</label>
                            <input type="text" class="form-control" v-model="ville" placeholder="Votre ville..."/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label" id="numLicence">Numéro de licence :</label>
                            <input type="number" class="form-control" v-model="numLicence" placeholder="Entrez le numéro de votre licence"/>
                        </div>
                        <div class="container text-center">
                            <router-link class="btn btn-success" to="/demandeur/informations">VALIDER</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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