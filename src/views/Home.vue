<template>
  <div class="home">
    <div class="banner">
      <div class="banniere">
        <img src="../assets/img/M2L_net_rond.png" id="banner" />
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
              La M2L regroupe de nombreux sports, du tennis à la plongée sous-marine en passant par le football.
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
                      <button
                        class="btn btn-warning w-100"
                        @click="connexion(email, mdp, this)"
                      >Se connecter</button>
                      <!-- Zone du mot de passe oublié -->
                      <div class="mdpForget">
                        Mot de passe oublié ? Cliquez
                        <a href="#">ici</a>.
                      </div>
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
                  <h3 class="card-title text-center titleForm">Contactez-nous</h3>
                  <div class="card-text">
                    <!-- Conteneur du formulaire de contact -->
                    <div class="formulaire">
                      <div class="form-group mb-4">
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
                        type="submit"
                        class="btn btn-warning w-100"
                      >Envoyer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="text-center mt-5">
                <h5 class="fw-bold mb-3" id="logo">
                  MAISON DES LIGUES DE LORRAINE
                </h5>
                <img src="../assets/img/M2L_flou2.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pied de page -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { verifIdentifiants } from '../services/userService.js'
// Importation de composant externe
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  },
  data: () => {
    return {
      email: '',
      mdp: ''
    }
  },
  mounted () {
    this.initialisation(this)
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
                // Initialisation de l'id de ladhérent pour ses fiches de frais
                instance.$store.commit('setFicheFraisIdAdherent', data.adherentIdFicheFrais)
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
              case 'demandeur':
                // Notification d'attente
                alert('Votre demande d\'adhésion est toujours en cours de traitement.\n\nVeuillez réessayer plus tard.')
                break
              case 'admin':
                // Récupération
                instance.$store.commit('setAllUserData', data.userData)
                // Redirection vers l'interface administrateur
                instance.$router.push({ name: 'GestionUser' })
                break
            }
          } else if (data.info === 'incorrect') {
            // Message d'alerte
            alert('Email ou mot de passe incorrect !')
          } else {
            // Redirection vers le formulaire d'inscription du demandeur
            instance.$router.push({ name: 'FormDemandeur' })
          }
        })
    },
    // Réinitialisation de tous les attributs
    initialisation: (instance) => {
      instance.$store.commit('setDataUserConnect', {
        id: 0,
        statut: ''
      })
      // instance.$store.commit('setFicheFraisIdAdherent', data.adherentIdFicheFrais)
      // instance.$store.commit('setFicheFraisIdAdherent', data.adherentIdFicheFrais)
      // instance.$store.commit('setFicheFraisIdAdherent', data.adherentIdFicheFrais)
      // instance.$store.commit('setFicheFraisIdAdherent', data.adherentIdFicheFrais)
    }
  }
}
</script>

<style>
/* STYLE DE LA BANNIERE */
.banner {
  margin-bottom: 20px;
}
.banniere {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(254,200,22);
  background: radial-gradient(circle, rgba(254,200,22,1) 0%, rgba(254,199,22,1) 11%, rgba(254,199,22,1) 14%, rgba(254,199,22,1) 23%, rgba(254,199,22,1) 29%, rgba(254,199,22,1) 36%, rgba(254,199,22,1) 45%, rgba(254,199,22,1) 54%, rgba(254,199,22,1) 62%, rgba(249,172,27,1) 78%, rgba(224,33,49,1) 100%);
}
#banner {
  height: 118px;
  width: 118px;
  border-radius: 50%;
  margin-left: 15px;
}
.banner h1 {
  z-index: 500;
  margin-left: auto;
  margin-right: auto;
  color: #2b4c88;
  text-align: center;
  font-weight: 900;
  letter-spacing: 2px;
}
.banner h3 {
  z-index: 500;
  margin-left: auto;
  margin-right: auto;
  color: #e02131;
  background: rgb(254, 200, 22);
  text-align: center;
}

/* STYLE DE LA SECTION DE PRESENTATION DE LA M2L */
#M2L {
  border-radius: 10px;
  color: #fec816;
  border-style: solid;
  border-width: 3px;
  padding: 0.5%;

  background: #FEC816;
  background: -moz-linear-gradient(-45deg, #FEC816 0%, #E02131 100%);
  background: -webkit-linear-gradient(-45deg, #FEC816 0%, #E02131 100%);
  background: linear-gradient(135deg, #FEC816 0%, #E02131 100%);

  margin-right: 2%;
  margin-bottom: 40px;

  -webkit-box-shadow: 5px 5px 0px 0px rgb(255, 208, 53),
    10px 10px 0px 0px rgb(255, 214, 79), 15px 15px 0px 0px rgb(253, 225, 132),
    20px 20px 0px 0px rgb(255, 226, 130), 25px 25px 0px 0px rgb(255, 240, 190),
    1px 10px 11px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 0px 0px rgb(255, 207, 49),
    10px 10px 0px 0px rgb(252, 215, 95), 15px 15px 0px 0px rgb(253, 221, 116),
    20px 20px 0px 0px rgb(255, 232, 158), 25px 25px 0px 0px rgb(255, 237, 180),
    1px 10px 11px 5px rgba(0, 0, 0, 0);
}
.presentation {
  color: white;
  text-align: center;
  text-shadow: 4px 2px 4px rgb(0, 0, 0);
}
.pres {
  color: white;
  padding: 5px;
  text-align: center;
  text-shadow: 4px 2px 4px rgb(0, 0, 0);
}

/* STYLE DE LA SECTION LIGUES */
#Ligues {
  border-radius: 10px;
  color: #fec816;
  border-style: solid;
  border-width: 3px;
  padding: 0.5%;

  background: #FEC816;
  background: -moz-linear-gradient(-45deg, #FEC816 0%, #E02131 100%);
  background: -webkit-linear-gradient(-45deg, #FEC816 0%, #E02131 100%);
  background: linear-gradient(135deg, #FEC816 0%, #E02131 100%);

  margin-right: 3%;
  margin-bottom: 40px;

  -webkit-box-shadow: 5px 5px 0px 0px rgb(255, 208, 53),
    10px 10px 0px 0px rgb(255, 214, 79), 15px 15px 0px 0px rgb(253, 225, 132),
    20px 20px 0px 0px rgb(255, 226, 130), 25px 25px 0px 0px rgb(255, 240, 190),
    1px 10px 11px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 0px 0px rgb(255, 207, 49),
    10px 10px 0px 0px rgb(252, 215, 95), 15px 15px 0px 0px rgb(253, 221, 116),
    20px 20px 0px 0px rgb(255, 232, 158), 25px 25px 0px 0px rgb(255, 237, 180),
    1px 10px 11px 5px rgba(0, 0, 0, 0);
}

/* Adaptation de la hauteur des images */
img.tennis, img.foot, img.plongee, img.bowling
{
  height: 200px;
}
img.president
{
  height: 300px;
}

/* Style des articles */
.article
{
  text-align: center;
  margin-bottom: 5px;
  cursor: pointer;
}

.login-form {
  border-radius: 10px;
  border: 3px solid rgb(254, 200, 22);
  padding: 0.5% 1%;
  margin-bottom: 20px;

  -webkit-box-shadow: 5px 5px 0px 0px rgb(255, 208, 53),
    10px 10px 0px 0px rgb(255, 214, 79), 15px 15px 0px 0px rgb(253, 225, 132),
    20px 20px 0px 0px rgb(255, 226, 130), 25px 25px 0px 0px rgb(255, 240, 190),
    1px 10px 11px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 0px 0px rgb(255, 207, 49),
    10px 10px 0px 0px rgb(252, 215, 95), 15px 15px 0px 0px rgb(253, 221, 116),
    20px 20px 0px 0px rgb(255, 232, 158), 25px 25px 0px 0px rgb(255, 237, 180),
    1px 10px 11px 5px rgba(0, 0, 0, 0);

    background: #FEC816;
    background: -moz-linear-gradient(-45deg, #FEC816 0%, #E02131 100%);
    background: -webkit-linear-gradient(-45deg, #FEC816 0%, #E02131 100%);
    background: linear-gradient(135deg, #FEC816 0%, #E02131 100%);
}

/* STYLE DES FORMULAIRES */
#Formulaires {
    margin-bottom: 40px;
}
#Formulaires h5 {
  color: #2b4c88;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  text-shadow: 4px 2px 4px rgb(0, 0, 0);

}
.formulaire {
  padding: 10px;
  font-size: 14px;
  border-top: 30px;

}
/* Style du titre du formulaire */
.card-title {
  font-weight: 900;
  padding: 20px;
  text-align: center;
}

.card-text{
  text-align: center;
}

.titleForm {
  color: #2b4c88;
  font-size: 20;
  padding-top: 5px;
  padding-bottom: 20px;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}

/* Style des champs de saisie */
.formulaire input, .formulaire textarea {
  border-radius: 10px;
  padding: 10px;

}
.formulaire input:focus, .formulaire textarea:focus
{
  border: none;
  outline: none;
}
/* Style de la zone de mot de passe oublié */
.mdpForget {
  padding: 10px 0px;
  color: #2b4c88;
}

.hidden {
  position: relative;
  width: 100%;
}
.image {
    display: block;
    width: 100%;
    height: auto;
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #2B4C88
}
.hidden:hover .overlay {
  opacity: 90%;
}
.text-hidden {
  color: #fec816;
  font-size: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%, 20%, 50%, 20%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.titreligue {
  color: #e02131;
  text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.664);
}

.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 998;
  background: #2B4C88;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition-duration: 2.5s;
}
.back-to-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}
.back-to-top:hover {
  background: #86c0da;
  color: #fff;
}
.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
h5#logo
{
  color: #e02131;
}
</style>