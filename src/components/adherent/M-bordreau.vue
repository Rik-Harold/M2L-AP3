<template>
  <div id="m-bordereau">
    <!-- Barre de navigation adhérent -->
    <Header />

    <!-- CONTRENU DU BORDEREAU A IMPRIMER -->
    <div id="positionPdf" class="d-flex justify-content-center controls">
      <div id="pdf" class="pdf" style="background-color:white;color:black;text-align: left;margin:20px 20px;">
        <!-- Logo de la M2L -->
        <div style="width:50%;margin-bottom: 40px;">
          <img src="../../assets/img/head_bordereau.jpg" alt="head of bordereau" style="width:100%;">
        </div>
        <!-- Titre du bordereau -->
        <div style="text-align: left; display: inline-block;margin-bottom: 20px;">
            <h4 style="font-size: 14pt;font-weight: bold;">Note de frais des bénévoles</h4>
        </div>

        <!-- Identité du bénévole -->
        <div style="width:30%; float:right;background-color: #CCFFCC;margin-right: 10%;text-align: center;margin-bottom: 20px;padding: 10px 0px;">
          <h4 style="font-size: 14pt;font-weight: bold;">Année civile {{ annee }}</h4>
        </div>
        <div style="width:100%;margin-bottom: 40px;">
          <p style="font-weight: bold;">Je soussigné (e) </p>
          <p style="background-color: #CCFFCC;text-align: center;margin-right: 10%;padding: 10px 0px;">{{ nom + ' ' + prenom }}</p>
          <p style="font-weight: bold;">demeurant</p>
          <p style="background-color: #CCFFCC;text-align: center;margin-right: 10%;padding: 10px 0px;">{{ rue }}, {{ cp }} - {{ ville }}</p>
          <p style="font-weight: bold;">certifie renoncer au remboursement des frais ci-dessous et les laisser à l'association</p>
          <p style="background-color: #CCFFCC;text-align: center;margin-right: 10%;padding: 10px 0px;">Salle d'Armes de Villers lès Nancy, 1 rue Rodin - 54600 Villers lès Nancy</p>
          <p style="font-weight: bold;">en tant que don.</p>
        </div>

        <!-- Mention des frais de déplacement -->
        <div style="text-align: left; display: inline-block;">
          <p style="font-weight: bold;">Frais de déplacement</p>
        </div>
        <!-- Tarif kilométrique -->
        <div style="width:60%; float:right;text-align: center;">
          <p>Tarif kilométrique appliqué pour le remboursement : 0,28 €</p>
        </div>

        <!-- Tableau d'affichage du bordereau -->
        <table style="width:100%;border-collapse: collapse;border: 1px solid black;text-align: center;color: black;margin-bottom: 30px;">
          <thead>
            <tr>
              <th width="10%" >Date jj/mm/aaaa</th>
              <th width="15%" >Motif</th>
              <th width="15%" >Trajet</th>
              <th width="10%" >Kms parcourus</th>
              <th width="10%" >Coût Trajet</th>
              <th width="10%" >Péages</th>
              <th width="10%" >Repas</th>
              <th width="10%" >Hébergement</th>
              <th width="10%" >Total</th>
            </tr>
          </thead>
          <tbody style="background-color: #CCFFCC;">
            <tr v-for="(ficheDeFrais, index) in bordereauFormat" :key="index" style="padding-top: 15px;padding-bottom: 15px;">
              <td id="libelle">{{ ficheDeFrais.dateFicheFrais }}</td>
              <td>{{ ficheDeFrais.motif }}</td>
              <td>{{ ficheDeFrais.trajet }}</td>
              <td>{{ ficheDeFrais.kmParcouru }} km</td>
              <td>
                {{ ficheDeFrais.coutTrajet }}
                <span v-if="ficheDeFrais.coutTrajet != '-'"> &euro;</span>
              </td>
              <td>
                {{ ficheDeFrais.coutPeage }}
                <span v-if="ficheDeFrais.coutPeage != '-'"> &euro;</span>
              </td>
              <td>
                {{ ficheDeFrais.coutRepas }}
                <span v-if="ficheDeFrais.coutRepas != '-'"> &euro;</span>
              </td>
              <td>{{ ficheDeFrais.coutHebergement }}
                <span v-if="ficheDeFrais.coutHebergement != '-'"> &euro;</span>
              </td>
              <td>{{ ficheDeFrais.total }} &euro;</td>
            </tr>
            <tr>
              <td>{{ montantTotal }} &euro;</td>
            </tr>
          </tbody>
        </table>

        <!-- Représentant légal -->
        <div style="width:100%;">
          <p style="font-weight: bold;">Je suis le représentant légal des adhérents suivants :</p>
          <div style="background-color: #CCFFCC;text-align: center;margin-right: 10%;">
            <!-- Nom et numéro de licence de l'adhérent -->
            <p>{{ nom + '  ' + prenom }}, licence n° {{ licence }} </p>
          </div>
        </div>
        <!-- Montant total des frais du bordereau -->
        <div style="width:100%;margin-top: 20px;margin-bottom: 30px;">
          <p style="font-weight: bold;">Montant total des dons<span style="margin-left:60px;background-color:#CCFFFF;text-align:center;padding:0px 40px;font-weight: normal;">{{ montantTotal }} &euro;</span></p>
        </div>
        <!-- Note de justificatifs -->
        <div style="width:100%;text-align: center;font-style:italic;">
          <p>Pour bénéficier du reçu de dons, cette note de frais doit être accompagnée de tous les justificatifs correspondants.</p>
        </div>
        <!-- Date de signature -->
        <div style="width:100%;padding: 20px 30px;font-style:italic;margin-left: 30%;margin-top: 10px;margin-bottom: 10px;">
          <p>A<span style="background-color:#CCFFCC;margin:0px 20px;padding:10px 60px">{{ ville }}</span>Le<span style="background-color:#CCFFCC;margin:0px 20px;padding:10px 60px">{{ new Date().toLocaleDateString() }}</span></p>
        </div>
        <!-- Signature de l'adhérent -->
        <div style="width:100%;padding: 20px 30px;font-style:italic;margin-left: 25%;margin-top: 10px;margin-bottom: 30px;">
          <p>Signature du bénévole<span style="background-color:#CCFFCC;margin:0px 30px;padding:30px 150px">[signé]</span></p>
        </div>
        <!-- Section réservée au trésorier modifiable -->
        <div v-if="$store.state.statut == 'tresorier'" style="border: 1px solid black;background-color:#FF8BD8;width: 55%;margin-bottom: 50px;">
          <p style="text-align: center;font-weight: bold;">Partie réservée à l'association</p>
          <p style="margin:15px 0px;">N° d'ordre du Reçu :<span id="num_ordre" style="margin-left: 170px;"></span></p>
          <p style="margin:15px 0px;">Remis le :<input style="width:200px;text-align: center;border: none; border-bottom: dotted black 1px;margin-left: 150px;background-color:#FF8BD8;" type="text" :value="new Date().toLocaleDateString()"/></p>
          <p style="margin-top:15px;margin-bottom: 35px;">Signature du Trésorier : <input style="width:300px;text-align: center;border: none; border-bottom: dotted black 1px;margin-left: 50px;background-color:#FF8BD8;" type="text" placeholder="[Saisir votre nom complet ici]"/></p>
        </div>
        <!-- Section réservée au trésorier non-modifiable -->
        <div v-else style="border: 1px solid black;background-color:#FF8BD8;width: 55%;margin-bottom: 50px;">
          <p style="text-align: center;font-weight: bold;">Partie réservée à l'association</p>
          <p style="margin:15px 0px;">N° d'ordre du Reçu :<span id="num_ordre" style="margin-left: 80px;"></span></p>
          <p style="margin:15px 0px;">Remis le :</p>
          <p style="margin-top:15px;margin-bottom: 35px;">Signature du Trésorier : </p>
        </div>
      </div>
    </div>

    <!-- Bouton de conversion du bordereau en pdf - CREATION -->
    <div v-if="disponible == 'indisponible'" class="d-flex justify-content-center controls" style="margin-top: 10px;margin-bottom: 10px;">
      <button id="send_getPDF" class="btn btn-warning" @click="docPDF(this, annee, id)">Créer et télécharger le bordereau</button>
    </div>
    <!-- Bouton de conversion du bordereau en pdf - MISE A JOUR -->
    <div v-else class="d-flex justify-content-center controls" style="margin-top: 10px;margin-bottom: 10px;">
      <button id="send_getPDF" class="btn btn-warning" @click="docPDF(this, annee, id)">Mettre à jour et télécharger le bordereau</button>
    </div>

    <!-- Gestion du bordereau - TRESORIER -->
    <div v-if="$store.state.statut == 'tresorier'" class="d-flex justify-content-center controls" style="margin-bottom: 50px;">
      <div class='btn btn-warning all-ligne-frais-button-user'><span><i class="bi bi-arrow-left-short"></i></span>
        <!-- Vérification des fiches de frais -->
        <router-link to="/adherent/bordereau" class="accueil">Voir les fiches de frais</router-link>
      </div>
      <div class='btn btn-warning all-ligne-frais-button-user ms-2'><span><i class="bi bi-arrow-left-short"></i></span>
        <!-- Bouton de retour à l'accueil trésorier -->
        <router-link to="/tresorier/les-bordereaux" class="accueil">Revenir à l'accueil</router-link>
      </div>
    </div>
    <!-- Gestion du bordereau - ADMIN -->
    <div v-else-if="$store.state.statut == 'admin'" class="d-flex justify-content-center controls" style="margin-bottom: 50px;">
      <div class='btn btn-warning all-ligne-frais-button-user'><span><i class="bi bi-arrow-left-short"></i></span>
        <!-- Vérification des fiches de frais -->
        <router-link to="/adherent/bordereau" class="accueil">Voir les fiches de frais</router-link>
      </div>
      <div class='btn btn-warning all-ligne-frais-button-user ms-2'><span><i class="bi bi-arrow-left-short"></i></span>
        <!-- Bouton de retour à l'accueil admin -->
        <router-link to="/admin/gestion-utilisateurs" class="accueil">Revenir à l'accueil</router-link>
      </div>
    </div>
    <!-- Bouton de retour à l'accueil adhérent -->
    <div v-else class="d-flex justify-content-center controls" style="margin-bottom: 50px;">
      <div class='btn btn-warning all-ligne-frais-button-user'><span><i class="bi bi-arrow-left-short"></i></span>
        <router-link to="/adherent/bordereau" class="accueil">Revenir à l'accueil</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint new-cap: ["error", { "newIsCap": false }] */
// Importation des vues
import Header from '@/components/Header.vue'
// Importation des fonctions de traitement
import { selectAllFicheFrais, selectDataAdherent, selectMotifs, selectBordereauData, addBordereau, updateBordereau } from '../../services/userService.js'
import jsPDF from 'jspdf'
export default {
  name: 'ModelBordereau',
  components: {
    Header
  },
  data () {
    return {
      annee: 2022,
      bordereau: [],
      bordereauFormat: [],
      id: 0,
      nom: '',
      prenom: '',
      rue: '',
      cp: '',
      ville: '',
      licence: 0,
      montantTotal: 0,
      motifs: null,
      disponible: '',
      bordereauData: {
        id: 0,
        src: '',
        valide: 0,
        frais: 0
      }
    }
  },
  beforeMount () {
    // Récupération des données du bordereau de l'utilisateur
    this.miseAJourDataBordereau(this)
    // Fonction de récupération des motifs de fiches de frais
    selectMotifs()
      .then(res => res.json())
      .then(data => {
        if (data.statut === 'disponible') {
          // Récupération et stockage des motifs
          this.motifs = data.motif
        }
      })
    // Fonction de récupération et de traitemennt des fiches de frais de l'adhérent
    selectAllFicheFrais(this.$store.state.adherentFicheFrais, 2022)
      .then(res => res.json())
      .then(data => {
        // Récupération et stockage des fiches de frais
        this.bordereau = data
        // Formatage du bordereau et récupération du contenu
        this.bordereauFormat = this.bordereauFormate(this)
      })
    // Récupération des données de l'adhérent
    this.recupData(this)
  },
  methods: {
    test: () => {
      // const pdf = document.getElementById('bordereau')
      console.log(document.getElementById('bordereau'))
    },
    // Formatage de la date
    formatDate: (instance, dateLigneFrais) => {
      // Récupération de la date de la ligne de frais
      const newDate = dateLigneFrais.substr(0, 10)
      const dateObject = new Date(newDate)
      let jour = dateObject.getDate()
      let mois = dateObject.getMonth() + 1
      if (dateObject.getDate() < 10) {
        jour = '0' + jour
      }
      if (dateObject.getMonth() < 10) {
        mois = '0' + mois
      }
      // Formatage
      const formatDateFull = jour + '/' + mois + '/' + dateObject.getFullYear()
      // Mise à disposition du nouveau format de la date
      return formatDateFull
    },
    // Récupération des données de l'adhérent
    recupData: (instance) => {
      // Fonction de récupération des données de l'adhérent
      selectDataAdherent(instance.$store.state.adherentId)
        .then(res => res.json())
        .then(data => {
          // Récupération et initialisation des données de l'adhérent
          instance.id = data.fiche[0].id_demandeur
          instance.nom = data.fiche[0].nom
          instance.prenom = data.fiche[0].prenom
          instance.rue = data.fiche[0].rue
          instance.cp = data.fiche[0].cp
          instance.ville = data.fiche[0].ville
          instance.licence = data.fiche[0].num_licence
        })
    },
    // Traitement du bordererau en pdf
    docPDF: (instance, annee, id) => {
      // Récupération du document à imprimer
      const modeleBordereau = document.getElementById('pdf')
      // Nom du bordereau
      const pdfName = 'bordereau_' + annee + '_' + id + '.pdf'
      // Orienntation du fichier pdf
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [1600, 1270]
      })
      // Sauvegarde du fichier
      doc.html(modeleBordereau, {
        margin: 20,
        callback: function (doc) {
          // Création du bordereau
          doc.save(pdfName)
          // Mise à jour de la source du bordereau
          instance.bordereauData.src = pdfName
          // Vérification du type d'action à exécuter
          if (instance.disponible === 'indisponible') {
            // Création du bordereau
            addBordereau(instance.bordereauData.src, instance.$store.state.adherentFicheFrais, instance.bordereauData.valide, instance.annee)
              .then(res => res.json())
              .then(data => {
                if (data.message === 'creation') {
                  // Notification de la création du bordereau
                  alert('Bordereau créé avec succès !')
                } else {
                  // Notification de l'erreur
                  alert('Erreur lors de la création du bordereau !')
                }
              })
          } else {
            // Ajout du montant total des frais du bordereau
            instance.bordereauData.frais = instance.montantTotal
            // Mise à jour du bordereau
            updateBordereau(instance.bordereauData)
              .then(res => res.json())
              .then(data => {
                if (data.message === 'update') {
                  // Notification de la création du bordereau
                  alert('Bordereau mis à jour avec succès !')
                } else {
                  // Notification de l'erreur
                  alert('Erreur lors de la mise à jour du bordereau !')
                }
              })
          }
          // Mise à jour des informations
          instance.miseAJourDataBordereau(instance)
        }
      })
    },
    // Récupération du cout total d'une frais du bordereau
    valeur: (cout, nb) => {
      if (nb === 0) {
        return ('-')
      } else {
        return (nb * cout)
      }
    },
    // Formatage du bordereau
    bordereauFormate: (instance) => {
      // Variables de stockage
      let bordereau = null
      bordereau = []
      // // Parcours de la liste des fiches de frais
      instance.bordereau.forEach(ficheFrais => {
        // Sommes des frais de la fiche
        let totalFraisFiche = 0
        // Formatage de la date de frais
        const dateFrais = instance.formatDate(instance, ficheFrais.date_ligne_frais)
        // Kilométrage
        const km = ficheFrais.km * ficheFrais.km_valide
        const trajetCout = parseInt(km * 0.28)
        totalFraisFiche += trajetCout
        // Vérification et formatage des frais facultatifs
        let peage = null
        if (ficheFrais.peage_valide !== 0) {
          peage = instance.valeur(ficheFrais.cout_peage, ficheFrais.peage_valide)
          totalFraisFiche += peage
        } else {
          peage = '-'
        }
        let repas
        if (ficheFrais.repas_valide !== 0) {
          repas = instance.valeur(ficheFrais.cout_repas, ficheFrais.repas_valide)
          totalFraisFiche += repas
        } else {
          repas = '-'
        }
        let hebergemennt
        if (ficheFrais.hebergement_valide !== 0) {
          hebergemennt = instance.valeur(ficheFrais.cout_hebergement, ficheFrais.hebergement_valide)
          totalFraisFiche += hebergemennt
        } else {
          hebergemennt = '-'
        }
        // Détection du motif
        let motifFrais = ''
        instance.motifs.forEach(motifData => {
          if (motifData.id_motif === ficheFrais.id_motif) {
            motifFrais = motifData.libelle
          }
        })
        // Formatage de la fiche de frai du bordereau
        bordereau.push({
          dateFicheFrais: dateFrais,
          motif: motifFrais,
          trajet: ficheFrais.trajet,
          kmParcouru: km,
          coutTrajet: trajetCout,
          coutPeage: peage,
          coutRepas: repas,
          coutHebergement: hebergemennt,
          total: totalFraisFiche
        })
        // Mise à jour du montant total des frais du bordereau
        instance.montantTotal += totalFraisFiche
      })
      // Mise à disposition du bordereau
      return bordereau
    },
    // Fonction de récupération des motifs de fiches de frais
    miseAJourDataBordereau: (instance) => {
      selectBordereauData(instance.$store.state.adherentFicheFrais, instance.annee)
        .then(res => res.json())
        .then(data => {
          if (data.statut === 'disponible') {
            // Détection de la disponibilité du bordereau
            instance.disponible = data.statut
            instance.bordereauData.id = data.bordereau[0].id_bordereau
            instance.bordereauData.src = data.bordereau[0].src_bordereau
            instance.bordereauData.valide = data.bordereau[0].valide
            instance.bordereauData.frais = data.bordereau[0].frais
          } else {
            // Détection de l'indisponibilité du bordereau
            instance.disponible = data.statut
          }
        })
    }
  }
}
</script>

<style>
#pdf {
  max-width: 1200px;
}
.accueil {
  text-decoration: none;
  color: #000000;
}
</style>