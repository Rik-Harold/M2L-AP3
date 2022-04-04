<template>
  <div id="documentCerfa">
    <!-- Barre de navigation adhérent -->
    <Header />

    <!-- Contenu du document à remplir et imprimer -->
    <div id="positionPdf" class="d-flex justify-content-center controls">
      <div id="pdf" style="background-color:white;color:black;text-align: left;margin:20px 20px;font-family: 'Times New Roman', Times, serif;">
        <div class="container">
          <div class="row">
            <div class="col-2 md-auto" style="margin-bottom: 10px;">
              <!-- Logo de l'organisme -->
              <img src="../../assets/img/cerfa_logo.png" alt="cerfa logo" style="width:100%;">
            </div>
            <!-- Type de document -->
            <div class="col-8 md-auto text-center" style="margin-bottom: 20px;margin-top: 30px;">
              <h4><strong>Reçu dons aux oeuvres</strong></h4>
              <p>(Articles 200 et 238 bis du Code général des impôts)</p>
            </div>
            <!-- Numéro du document -->
            <div class="col-2 md-auto text-center" style="margin-bottom: 15px;margin-top: 30px;">
              <p>Numéro d'ordre du reçu</p>
              <h4 style="border: 1px solid black; padding: 2px 15px;"><strong>{{ annee }}-{{ id }}</strong></h4>
            </div>
          </div>
        </div>
        <div class="my-auto" style="text-align: center;margin-bottom: 10px;width: 100%;border: black 1px solid;background-color: darkgray;">
          <h4 style="font-size: 16pt;font-weight: bold;">Bénéficiaire des versements</h4>
        </div>
        <!-- Données de l'organisme -->
        <div id="div1" class="px-3" style="width: 100%;border: black 1px solid;padding-top: 5px;margin-bottom: 5px;">
          <h5 style="font-size: 14pt;font-weight: bold;">Nom ou dénomination:</h5>
          <h5 class="text-center"> Salles d'Armes de Villers lès Nancy</h5>
          <h5 style="font-size: 14pt;font-weight: bold;">Adresse:</h5>
          <h5 class="text-center"> 1, rue Rodin - 654800 Villers-lès-Nancy</h5>
          <h5 style="font-size: 14pt;font-weight: bold;">Objet:</h5>
          <h5 class="text-center"> Club d'Escrime</h5>
          <h5 style="font-size: 14pt;font-weight: bold;">Cochez la case concernée(1) :</h5>
          <p><span :class="{ 'bg-dark': selection[0] }" @click="selectionUnique(this, 0)" class="fill-square px-2 mr-1" style="border: black solid 1px; cursor: pointer;"></span>Oeuvre ou organisme d'intérêt général.</p>
          <p><span :class="{ 'bg-dark': selection[1] }" @click="selectionUnique(this, 1)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Fondation d'entreprise.</p>
          <p><span :class="{ 'bg-dark': selection[2] }" @click="selectionUnique(this, 2)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Association ou fondation reconnue d'utilité publique par décret en date du <input style="width:200px;border: none; border-bottom: dotted black 1px;text-align: center;" type="text"/> publié au Journal Officiel du <input style="width:200px;border: none; border-bottom: dotted black 1px;text-align: center;" type="text"/></p>
          <p><span :class="{ 'bg-dark': selection[3] }" @click="selectionUnique(this, 3)" class="fill-square px-2 mr-1" style="border: black solid 1px; cursor: pointer;"></span>Musée de France</p>
          <p><span :class="{ 'bg-dark': selection[4] }" @click="selectionUnique(this, 4)" class="fill-square px-2 mr-1" style="border: black solid 1px; cursor: pointer;"></span>Association culturelle ou de bienfaisance autorisée à recevoir des dons et legs par décision en date du délivrée par le préfet de <input style="width:350px;border: none; border-bottom: dotted black 1px;text-align: center;" type="text"/></p>
          <p><span :class="{ 'bg-dark': selection[5] }" @click="selectionUnique(this, 5)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Etablissement d'enseignment supérieur ou artistique privé, à but non lucratif, agréé par décision en date du <input style="width:200px;border: none; border-bottom: dotted black 1px;text-align: center;" type="text"/></p>
          <p><span :class="{ 'bg-dark': selection[6] }" @click="selectionUnique(this, 6)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Association fournissant gratuitement une aide alimentaire ou des soins médicaux à des personnes en difficulté ou favorisant leur logement.</p>
          <p><span :class="{ 'bg-dark': selection[7] }" @click="selectionUnique(this, 7)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Organisme ayant pour objet exclusif de participer financièrement à la création d'enptreprises.</p>
          <p><span :class="{ 'bg-dark': selection[8] }" @click="selectionUnique(this, 8)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Association située dans le département de la Moselle, du Bas-Rhin ou du Haut-Rhin dont la mission a été reconnue d'utilité publique par arrêté préfectoral en date du <input style="width:200px;border: none; border-bottom: dotted black 1px;text-align: center;" type="text"/></p>
          <p><span :class="{ 'bg-dark': selection[9] }" @click="selectionUnique(this, 9)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Etablissement public des cultes reconnu d'Alsace-Moselle.</p>
          <p><span :class="{ 'bg-dark': selection[10] }" @click="selectionUnique(this, 10)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Société ou organisme agréé de recherche scientifique ou technique (2)</p>
          <p><span :class="{ 'bg-dark': selection[11] }" @click="selectionUnique(this, 11)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Organisme ayant pour activité principale l'organisation de festivals (2)</p>
        </div>
        <!-- Données du donateur -->
        <div class="my-auto" style="text-align: center;margin-bottom: 10px;width: 100%;border: black 1px solid;background-color: darkgray;">
          <h4 style="font-size: 16pt;font-weight: bold;">Donateur</h4>
        </div>
        <div class="px-3" style="width: 100%;border: black 1px solid;padding-top: 5px;margin-bottom: 10px;">
          <h5 style="font-size: 14pt;"><span style="font-weight: bold;margin-right: 15px;">Nom:</span>{{ nom }} {{ prenom }}</h5>
          <h5 style="font-size: 14pt;"><span style="font-weight: bold;margin-right: 15px;">Adresse:</span> {{ rue }}, {{ cp }} - {{ ville }}</h5>
          <p>Code postal  {{ cp }}    Commune   {{ ville }} </p>
        </div>
        <!-- Type de versement du don -->
        <div id="div2" class="px-3" style="width: 100%;border: black 1px solid;padding-top: 5px;margin-bottom: 10px;">
          <p style="margin-bottom: 15px;">Le bénéficiaire reconnaît avoir reçu au titre des versements ouvrant droit à réduction d'impôt, la somme de:<span style="font-weight: bold;font-size: large;margin-left: 15px;">{{ montant }} &euro;</span></p>
          <p style="margin-bottom: 15px;overflow: hidden;display: block;">Somme en toutes lettres: <input style="width:100%;border: none; border-bottom: dotted black 1px;text-align: center;" type="text"/></p>
          <p style="margin-bottom: 15px;">Date du paiement: <input style="width:400px;border: none; border-bottom: dotted black 1px;text-align: center;" type="text" :value="new Date().toLocaleDateString()"/></p>
          <p style="margin-bottom: 15px;">Mode de versement:</p>
          <p><span :class="{ 'bg-dark': choix[0] }" @click="choixUnique(this, 0)" class="fill-square px-2 mr-1" style="border: black solid 1px; cursor: pointer;"></span>Numéraire</p>
          <p><span :class="{ 'bg-dark': choix[1] }" @click="choixUnique(this, 1)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Chèque ou virement</p>
          <p><span :class="{ 'bg-dark': choix[2] }" @click="choixUnique(this, 2)" class="fill-square px-2 mr-1" style="border: black solid 1px;cursor: pointer;"></span>Autres (3)</p>
          <div class="row">
            <div class="col-9"></div>
            <div class="col-3 text-center">
              <p>Date et signature</p>
              <input style="width:200px;text-align: center;border: none; border-bottom: dotted black 1px;" type="text" :value="new Date().toLocaleDateString()"/>
            </div>
          </div>
          <div class="row">
            <div class="col-9"></div>
            <div class="col-3 text-center"><input style="width: 100%; height: 80px; border: 1px solid black; margin-bottom: 15px;"/></div>
          </div>
        </div>
        <!-- Mentions -->
        <div class="px-3" style="font-size: 10pt;">
            <p style="margin-bottom: 3px;">(1)   ou n'indiquez que les renseignements concernant l'organisme</p>
            <p style="margin-bottom: 3px;">(2)   dons effectués pas les entreprises</p>
            <p style="margin-bottom: 3px;">(3)   notamment: abandon de revenus ou de produits; frais engagés par les bénévoles, dont ils ne demandent pas le remboursement</p>
        </div>
      </div>
    </div>

    <!-- Bouton de conversion du bordereau en pdf -->
    <div class="d-flex justify-content-center controls" style="margin-top: 10px;margin-bottom: 10px;">
      <button id="send_getPDF_cerfa" class="btn btn-warning" @click="docPDF(this, annee, id)">Télécharger et sauvegarder en PDF</button>
    </div>

    <!-- Retour à l'accueuil -->
    <div class="d-flex justify-content-center controls" style="margin-bottom: 50px;">
      <div v-if="$store.state.statut == 'tresorier'" class='btn btn-warning all-bordereaux-button'><span><i class="bi bi-arrow-left-short"></i></span>
        <!-- Bouton de retour à l'accueil - TRESORIER -->
        <router-link to="/tresorier/les-bordereaux" class="accueil">Revenir à l'accueil</router-link>
      </div>
      <div v-else-if="$store.state.statut == 'admin'" class='btn btn-warning all-bordereaux-button'><span><i class="bi bi-arrow-left-short"></i></span>
        <!-- Bouton de retour à l'accueil admin -->
        <router-link to="/admin/gestion-utilisateurs" class="accueil">Revenir à l'accueil</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint new-cap: ["error", { "newIsCap": false }] */
// Importation des vues
import Header from '@/components/Header.vue'
// Importation des fonctions de traitement
import { selectDataAdherent, sendDocumentCerfa } from '../../services/userService.js'
import jsPDF from 'jspdf'
export default {
  name: 'DocumentCerfa',
  components: {
    Header
  },
  data () {
    return {
      selection: [false, false, false, false, false, false, false, false, false, false, false, false],
      choix: [false, false, false],
      annee: 2022,
      montant: 0,
      id: 0,
      nom: '',
      prenom: '',
      rue: '',
      cp: 0,
      ville: ''
    }
  },
  beforeMount () {
    // Récupératon des doonnées de l'adhérent
    this.recupData(this)
  },
  methods: {
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
        })
    },
    // Traitement du bordererau en pdf
    docPDF: (instance, annee, id) => {
      // Récupération du document à imprimer
      const documentCerfa = document.getElementById('pdf')
      // Nom du bordereau
      const pdfName = 'document_cerfa_' + annee + '_' + id + '.pdf'
      // Orienntation du fichier pdf
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [1790, 1000]
      })
      // Sauvegarde du fichier
      doc.html(documentCerfa, {
        margin: 20,
        callback: function (doc) {
          doc.save(pdfName)
          sendDocumentCerfa(instance.$store.state.idDocCerfa, pdfName)
            .then(res => res.json())
            .then(data => {
              if (data.message === 'update') {
                // Alerte de réception
                alert('Document enregistré !')
              } else {
                // Notification
                alert('Erreur lors de l\'enregistrement !\n\nVeuillez vous reconnecter et réessayez')
              }
            })
        }
      })
    },
    // Fonction de sélection du mode de versement
    choixUnique: (instance, num) => {
      for (let index = 0; index < instance.choix.length; index++) {
        if (index === num) {
          instance.choix[index] = true
        } else {
          instance.choix[index] = false
        }
      }
    },
    // Fonction de sélection du type d'organise
    selectionUnique: (instance, num) => {
      for (let index = 0; index < instance.selection.length; index++) {
        if (index === num) {
          instance.selection[index] = true
        } else {
          instance.selection[index] = false
        }
      }
    }
  }
}
</script>

<style>
#pdf {
  max-width: 990px;
}
.accueil {
  text-decoration: none;
}
</style>