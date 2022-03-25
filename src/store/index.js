import { createStore } from 'vuex'

export default createStore({
  state: {
    idUser: 0,
    adherentId: 0,
    adherentFicheFrais: 0,
    idDocCerfa: 0,
    statut: '',
    allUser: []
  },
  mutations: {
    // RECUPERATION DES DONNES GLOBALES DE L'UTILISATEUR CONNECTE
    setDataUserConnect (state, infoUser) {
      // Initialisation de l'id de l'utilisateur connecté
      state.idUser = infoUser.id
      // Initialisation du statut de l'utilisateur connecté
      state.statut = infoUser.statut
      // Vérification du statut de l'adhérent
      if (infoUser.statut) {
        state.adherentId = infoUser.id
      }
    },
    // MODIFICATION DE L'IDENTIFIANT DU BORDEREAU
    setBordereauIdAdherent (state, id) {
      // Initialisation de l'id de l'utilisateur connecté
      state.adherentId = id
    },
    // MODIFICATION DE L'IDENTIFIANT DU BORDEREAU
    setFicheFraisIdAdherent (state, id) {
      // Initialisation de l'id de l'adhérent connecté
      state.adherentFicheFrais = id
    },
    // RECUPERATION DE LA DISPONIBILITE DU BORDEREAU DE L'ADHERENT
    setIdDocCerfa (state, id) {
      // Initialisation de la variable
      state.idDocCerfa = id
    },
    // MODIFICATION DE TOUTES LES DONNEES
    setAllUserData (state, data) {
      // Récupération des données
      state.allUser = data
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    // RECUPERATION DE L'IDENTIFIANT DE L'ADHERENT
    getAdherentFiche: state => {
      return state.adherentFicheFrais
    },
    // RECUPERATION DE L'IDENTIFIANT DE L'UTILISATEUR
    getStatut: state => {
      return state.statut
    },
    getDataUser: state => {
      return state.allUser
    }
  }
})