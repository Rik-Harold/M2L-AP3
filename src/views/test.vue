<template>
  <div class="home container">
    <div class="global-container">
        <div class="card login-form">
            <div class="card-body">
                <!-- Titre du formulaire -->
                <h1 class="card-title text-center">CONNEXION</h1>
                <div class="card-text">
                    <!-- Conteneur du formulaire -->
                    <div class="formulaire">
                        <div class="form-group">
                            <!-- Zone de saisie de l'email -->
                            <input type="email" id="email" class="form-control form-control-sm" v-model="email" placeholder="Email"/>
                        </div>
                        <div class="form-group my-4">
                            <!-- Zone de saisie du mot de passe -->
                            <input type="password" id="mdp" class="form-control form-control-sm" v-model="mdp" placeholder="Mot de passe"/>
                        </div>
                        <!-- Bouton de redirection vers la vue correspondante -->
                        <button class="btn btn-primary w-100" @click="connexion(email, mdp, instance)">Se connecter</button>
                        <!-- Zone du mot de passe oublié -->
                        <div class="mdpForget">
                            Mot de passe oublié ? Cliquer <a href="#">ici</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { verifIdentifiants } from '../services/userService.js'

export default {
  name: 'Home',
  data: () => {
    return {
      email: '',
      mdp: '',
      instance: null
    }
  },
  mounted () {
    this.instance = this
  },
  methods: {
    // FONCTION DE VERIFICATION DE CONNEXION
    connexion: (email, mdp, instance) => {
      // Vérification des identifiants de connexion
      verifIdentifiants(email, mdp)
        .then(res => res.json())
        .then(data => {
          // Vérification de l'état de la variable
          if (data.info === 'correct') {
            // Enregistrement des données correspondantes
            instance.$store.commit('setDataUserConnect', {
              id: data.id,
              statut: data.statut
            })
            // Détection du statut du connecté
            switch (data.statut) {
              case 'adherent':
                // Redirection vers l'espace membre adhérent
                instance.$router.push({ name: 'Bordereau', params: { idAdherent: data.id } })
                break
              case 'tresorier':
                // Redirection vers l'espace membre trésorier'
                instance.$router.push({ name: 'Allbordereau' })
                break
              default:
                // Redirection vers l'interface administrateur
                alert('Bienvenu Mr l\'administrateur')
                break
            }
          } else if (data.info === 'incorrect') {
            // Message d'alerte
            alert('Email ou mot de passe incorrect !')
          } else {
            // Redirection vers le formulaire d'inscription du demandeur
            instance.$router.push({ name: 'Form' })
          }
        })
    }
  }
}
</script>

<style>
.home
{
  padding-top: 100px;
}
.global-container
{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0d6efd;
}
.formulaire
{
  padding: 10px;
  font-size: 14px;
  border-top: 30px;
}
.login-form
{
  width: 380px;
  height: 380px;
  background-color: #1a2226 !important;
  /* background-color: #f5f5f5 !important; */
  border-radius: 10px !important;
}
/* Style du titre du formulaire */
.card-title
{
  font-weight: 900;
  padding: 20px;
}
/* Style des champs de saisie */
input[type="email"], input[type="password"]
{
  /* background: #1a2226; */
  border: 2px solid #0db8de;
  border: none;
  border-radius: 10px;
  padding: 10px;
  /* margin-bottom: 15px; */
}
input[type="email"]:focus, input[type="password"]:focus
{
  /* background: #1a2226; */
  border: none;
  outline: none;
}
/* Style de la zone de mot de passe oublié */
.mdpForget
{
  padding: 10px 0px;
  color: #c3dbe0;
}
</style>