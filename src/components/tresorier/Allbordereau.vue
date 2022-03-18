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
          <tr v-for="(bordereau, index) in bordereau" :key="index" >
            <td>{{ index + 1 }}</td>
            <td>{{ bordereau.nom + ' ' + bordereau.prenom }}</td>
            <td v-if="bordereau.src_bordereau != ''" @click="modifAdherentId(this, bordereau.id)" class="voirBordereau" >
              Voir le bordereau
            </td>
            <td v-else class="pasDeBordereau">Non disponible</td>
            <!-- Vérification du bordereau en cas d'absence du bordereau -->
            <td v-if="bordereau.src_bordereau == ''">
              <button @click="modifAdherentId(this, bordereau.id)" class="ms-1 btn btn-secondary">En attente</button>
            </td>
            <!-- Document CERFA -->
            <td v-else-if="bordereau.src_bordereau != '' && bordereau.bordereauValide">
              <button class="ms-1 btn btn-success">Document CERFA</button>
            </td>
            <!-- Validation du bordereau -->
            <td v-else-if="bordereau.src_bordereau != '' && !bordereau.bordereauValide">
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
import { selectAllBordereau } from '../../services/userService.js'
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
      bordereau: [
        {
          id: 15,
          nom: 'Jean',
          prenom: 'Pierre',
          src_bordereau: 'bordereau',
          bordereauValide: false
        },
        {
          id: 16,
          nom: 'Jean',
          prenom: 'Marc',
          src_bordereau: '',
          bordereauValide: false
        },
        {
          id: 20,
          nom: 'Mr',
          prenom: 'Inconnu',
          src_bordereau: 'bordereau',
          bordereauValide: true
        },
        {
          id: 21,
          nom: 'Madame',
          prenom: 'X',
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
  },
  methods: {
    modifAdherentId: (instance, id) => {
      // Modification de l'utilisateur du bordereau
      instance.$store.commit('setBordereauIdAdherent', id)
      // Redirection vers le modèle du bordereau
      instance.$router.push({ name: 'ModelBordereau' })
    },
    documentCerfa: (instance, id) => {
      // Modification de l'utilisateur du bordereau
      instance.$store.commit('setBordereauIdAdherent', id)
      // Redirection vers le modèle de documentation cerfa
      instance.$router.push({ name: 'DocumentCerfa' })
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
  color: #ff0000;
}
.voirBordereau:hover {
  background: rgb(102, 207, 76);
  color: #fff;
  cursor: pointer;
  letter-spacing: 1pt;
  transition: all .5s ease;
}
</style>