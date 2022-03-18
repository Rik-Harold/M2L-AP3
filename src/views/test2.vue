<template>
  <div class="home">
    <div class="banner">
      <div class="banniere">
        <img src="../assets/img/M2L_net_rond.png" id="banner">
        <div>
          <h1>M2L</h1>
          <h3>Maison des Ligues de Lorraine</h3>
        </div>
      </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-3" id="Ligues">
                <div class="row article">
                <div class="col-md-12">
                    <div class="card text-white bg-warning hidden">
                        <img src="../assets/img/bowling.jpg" class="card-img bowling" alt="..." />
                        <h5 class="card-title titreligue">BOWLING</h5>
                        <div class="card-img-overlay overlay" id="bowling">
                            <p class="card-text text-hidden"><strong>Le bowling, également appelé jeu de quilles, est un jeu qui consiste à renverser des quilles à l’aide d’une boule.</strong></p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row article">
                <div class="col-md-12">
                    <div class="card text-white bg-warning hidden">
                    <img src="../assets/img/foot.jpg" class="card-img foot" alt="..." />
                    <h5 class="card-title titreligue">FOOTBALL</h5>
                    <div class="card-img-overlay overlay" id="foot">
                        <p class="card-text text-hidden"><strong>Le football est un sport collectif qui se joue principalement au pied avec un ballon. Il oppose deux équipes de onze joueurs dans un stade, que ce soit sur un terrain gazonné.</strong></p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="row article">
                <div class="col-md-12">
                    <div class="card text-white bg-warning hidden">
                    <img src="../assets/img/tennis.jpg" class="card-img tennis" alt="..." />
                    <h5 class="card-title titreligue">TENNIS</h5>
                    <div class="card-img-overlay overlay" id="tennis">
                        <p class="card-text text-hidden"><strong>Le tennis est un sport de raquette qui oppose soit deux joueurs soit quatre joueurs qui forment deux équipes de deux.</strong></p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="row article">
                <div class="col-md-12">
                    <div class="card text-white bg-warning hidden">
                        <img src="../assets/img/plongee.jpg" class="card-img plongee" alt="..." />
                        <h5 class="card-title titreligue">PLONGEE</h5>
                        <div class="card-img-overlay overlay" id="plongee">
                            <p class="card-text text-hidden"><strong>La plongée sous-marine est une activité consistant à rester sous l’eau marine soit en apnée dans le cas de la plongée libre, en respirant à l’aide d’un narguilé.</strong></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-5" id="M2L">
                <div class="row">
                <div class="col-md-12">
                    <img src="../assets/img/locaux.jpg" class="card-img" alt="..." />
                </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="presentation">Présentation</h5>
                        <p class="pres">
                        La M2L (Maison des Ligues de Lorraine) est une structure financée à 100% par le Conseil Régional de Lorraine qui fournit des espaces et des services aux différentes ligues sportives régionales.
                        Elle est de nos jours dirigé par le CROS (accord passé entre le conseil régional et le Comité Régional Olympique et Sportif de Lorraine).
                        M2L regroupe de nombreux sports, du tennis à la plongée sous-marine en passant par le football.
                        Sur les pages suivantes vous retrouverez les ligues, leurs résultats et leurs actualité. Pour toute question, se référer à la page contact.
                        </p>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <div class="card text-white bg-warning">
                            <img src="../assets/img/president-2.jpg" class="card-img president" alt="..." />
                            <h5 class="card-title titreligue">Jean-Marc HASS BECKER<br><br>Président du comité régional olympique et sportifs Grand Est</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3" id="Formulaires">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card login-form">
                        <div class="card-body">
                            <!-- Titre du formulaire -->
                            <h3 class="card-title text-center titleForm">CONNEXION</h3>
                            <div class="card-text">
                            <!-- Conteneur du formulaire -->
                            <div class="formulaire">
                                <div class="form-group">
                                <!-- Zone de saisie de l'email -->
                                <input
                                  type="email"
                                  id="email-1"
                                  class="form-control form-control-sm"
                                  v-model="email"
                                  placeholder="Email"
                                  required
                                />
                                </div>
                                <div class="form-group my-4">
                                <!-- Zone de saisie du mot de passe -->
                                <input
                                  type="password"
                                  id="mdp"
                                  class="form-control form-control-sm"
                                  v-model="mdp"
                                  placeholder="Mot de passe"
                                  required
                                />
                                </div>
                                <!-- Bouton de redirection vers la vue correspondante -->
                                <button class="btn btn-warning w-100" @click="connexion(email, mdp, instance)">Se connecter</button>
                                <!-- Zone du mot de passe oublié -->
                                <div class="mdpForget">Mot de passe oublié ? Cliquez <a href="#">ici</a>.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-md-12">
                    <div class="card login-form">
                    <div class="card-body">
                        <!-- Titre du formulaire -->
                        <h3 class="card-title text-center titleForm">CONTACTEZ-NOUS</h3>
                        <div class="card-text">
                        <!-- Conteneur du formulaire de contact -->
                        <div class="formulaire">
                            <div class="form-group">
                            <!-- Zone de saisie du nom et du prénom -->
                            <input
                                type="text"
                                id="nameContact"
                                class="form-control form-control-sm"
                                placeholder="Nom et prénom"
                                required
                            />
                            </div>
                            <div class="form-group mb-4">
                            <!-- Zone de saisie de l'email -->
                            <input
                                type="email"
                                id="email-2"
                                class="form-control form-control-sm"
                                placeholder="E-mail"
                                required
                            />
                            </div>
                            <div class="form-group mb-4">
                            <!-- Zone de saisie du message -->
                            <textarea
                                class="form-control form-control-sm"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                            ></textarea>
                            </div>
                            <!-- Bouton de redirection vers la vue correspondante -->
                            <button
                            class="btn btn-warning w-100"
                            >Envoyer</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="text-center my-5">
                        <h6 class="text-uppercase fw-bold">
                          MAISON DES LIGUES DE LORRAINE
                        </h6>
                        <img src="../assets/img/M2L_flou2.png">
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

    <div id="back-to-top">
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center active"><i class="fas fa-arrow-up"></i></a>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.index.js'
import router from '@/router/index.js'
import { verifIdentifiants } from '../services/userService.js'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  },
  data: () => {
    return {
      email: '',
      mdp: '',
      instance: null
    }
  },
  methods: {
    // Fonction de récupération des données
    selectData: () => {
      traitement()
        .then(res => res.json())
        .then(data => {
          // Récupération et stockage des données
          this.data = data
        })
    },
    // FONCTION DE VERIFICATION DE CONNEXION
    connexion: (email, mdp, instance) => {
      // Vérification des identifiants de connexion
      verifIdentifiants(email, mdp)
        .then(res => res.json())
        .then(data => {
          // Vérification de l'état de la variable
          if (data.info === 'correct') {
            // Enregistrement des données correspondantes
            // this.$store.commit('setDataUserConnect', {
            //   id: data.id,
            //   statut: data.statut
            // })
            // Détection du statut du connecté
            switch (data.statut) {
              case 'adherent':
                // Redirection vers l'espace membre adhérent
                instance.$router.push({
                  name: 'Bordereau',
                  params: { idAdherent: data.id }
                })
                break
              case 'tresorier':
                // Redirection vers l'espace membre trésorier
                instance.$router.push({ name: 'Allbordereau' })
                break
              case 'admin':
                // Récupération
                // instance.$store.commit('setAllUserData', data.userData)
                store.commit('setAllUserData', data.userData)
                // Redirection vers l'interface administrateur
                // instance.$router.push({ name: 'GestionUser' })
                router.push({ name: 'GestionUser' })
                // alert('Bienvenu l\'administrateur !')
                // console.log(data)
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