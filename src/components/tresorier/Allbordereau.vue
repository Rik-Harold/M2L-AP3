<template>
  <div id="allBordereau">
    <!-- Barre de navigation adhérent -->
    <Header />

    <!-- Contenu des bordereaux -->
    <div class="container mt-3">
      <!-- Titre de la page -->
      <h3 class="text-center">BORDEREAUX DE L'ANNEE {{ annee }}</h3>

      <!-- Contenu des bordereaux -->
      <table class="mt-5 table table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom et Prénom Adhérent</th>
            <th>Bordereau</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bordereau, index) in adherentsFormat(this)" :key="index" >
            <td>{{ index + 1 }}</td>
            <td>{{ bordereau.name }}</td>
            <td v-if="bordereau.src_bordereau != ''" @click="modifAdherentId(this, bordereau.id)" class="voirBordereau" >
              Voir le bordereau
            </td>
            <td v-else class="pasDeBordereau">Non disponible</td>
            <!-- Vérification du bordereau en cas d'absence du bordereau -->
            <td v-if="bordereau.src_bordereau == ''">
              <button @click="modifAdherentId(this, bordereau.adherent, bordereau.id)" class="ms-1 btn btn-secondary">En attente</button>
            </td>
            <!-- Document CERFA -->
            <td v-else-if="bordereau.src_bordereau != '' && bordereau.bordereauValide == 1">
              <button class="ms-1 btn btn-success">Document CERFA</button>
            </td>
            <!-- Validation du bordereau -->
            <td v-else-if="bordereau.src_bordereau != '' && bordereau.bordereauValide == 0">
              <button class="ms-1 btn btn-primary" @click="documentCerfa(this, bordereau.id)" >Validation</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// Importation de la navbarre
import Header from '@/components/Header.vue'
import { selectAllBordereau, selectAllAdherentBordereau } from '../../services/userService.js'
// Traitements
export default {
  name: 'Allbordereau',
  components: {
    Header
  },
  data () {
    return {
      annee: 2022,
      bordereaux: [],
      adherents: [],
      bordereau: [
        {
          id: 15,
          name: 'Jean Pierre',
          src_bordereau: 'bordereau',
          bordereauValide: false
        },
        {
          id: 16,
          name: 'Jean Marc',
          src_bordereau: '',
          bordereauValide: false
        },
        {
          id: 20,
          name: 'Mr Inconnu',
          src_bordereau: 'bordereau',
          bordereauValide: true
        },
        {
          id: 21,
          name: 'Madame X',
          src_bordereau: '',
          bordereauValide: false
        }
      ]
    }
  },
  beforeMount () {
    // Fonction de récupération du bordereau
    selectAllBordereau(this.annee)
      .then(res => res.json())
      .then(data => {
        // Récupération et stockage des fiches de frais
        this.bordereaux = data
      })
    // Fonction de récupération des adhérents
    selectAllAdherentBordereau()
      .then(res => res.json())
      .then(data => {
        // Récupération et stockage des adhérents
        this.adherents = data
      })
  },
  methods: {
    modifAdherentId: (instance, idAdherent, idFicheFrais) => {
      // Initialisation des identifiants de l'adhérent de ladhérent
      instance.$store.commit('setBordereauIdAdherent', idAdherent)
      instance.$store.commit('setFicheFraisIdAdherent', idFicheFrais)
      // Redirection vers le bordereau de l'utilisateur
      instance.$router.push({ name: 'ModelBordereau' })
    },
    // Redirection vers le document CERFA
    documentCerfa: (instance, id) => {
      // Modification de l'utilisateur du bordereau
      instance.$store.commit('setBordereauIdAdherent', id)
      // Redirection vers le modèle de documentation cerfa
      instance.$router.push({ name: 'DocumentCerfa' })
    },
    // Formatage de la liste des adhérents et des bordereaux
    adherentsFormat: (instance) => {
      // Création du tableau formaté d'adhérents
      let adherentsBordereaux = null
      adherentsBordereaux = []
      // Parcours de la ligne des adhérents
      instance.adherents.forEach(adherent => {
        const id = adherent.id_demandeur
        // Vérification de la disponibilité du bordereau
        let srcBordereau = ''
        let valide = null
        instance.bordereaux.forEach(bordereau => {
          if (bordereau.adherent_id === id) {
            // Récupération de la valeur de disponibilité des bordereaux
            srcBordereau = bordereau.src_bordereau
            valide = bordereau.valide
          }
        })
        // Initialisation des données de l'adhérent
        adherentsBordereaux.push({
          id: id,
          name: adherent.nom + ' ' + adherent.prenom,
          src_bordereau: srcBordereau,
          bordereauValide: valide,
          adherent: adherent.id_utilisateur
        })
      })
      // Mise à disposition du bordereau formaté
      return adherentsBordereaux
    }
  }
}
</script>

<style>
#allBordereau
{
  min-width: 716px;
}
.pasDeBordereau {
  color: #ff0000 !important;
}
.voirBordereau:hover {
  background: rgb(102, 207, 76);
  color: #fff;
  cursor: pointer;
  letter-spacing: 1pt;
  transition: all .5s ease;
}
</style>