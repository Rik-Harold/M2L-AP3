import { createStore } from 'vuex'

export default createStore({
  state: {
    idUser: 0,
    adherentId: 0,
    statut: '',
    allUser: [],
    mesNotesDeFrais: [
      {
        id: 4,
        date: '12-06-2021',
        trajet: 'Paris - Lyon',
        km: 147,
        peage: 26,
        repas: 35.8,
        hebergement: 80
      },
      {
        id: 5,
        date: '04-11-2021',
        trajet: 'Viry Châtillon - Evry',
        km: 3.6,
        peage: 0,
        repas: 35.8,
        hebergement: 0
      }
    ]
  },
  mutations: {
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
    setBordereauIdAdherent (state, id) {
      // Initialisation de l'id de l'utilisateur connecté
      state.adherentId = id
    },
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
    getFichesFrais: state => {
      return state.mesNotesDeFrais
    },
    getStatut: state => {
      return state.statut
    },
    getDataUser: state => {
      return state.allUser
    }
  }
})