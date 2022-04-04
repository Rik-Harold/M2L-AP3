// Appel de l'API au serveur pour la récupération des identifiants de connexion
async function verifIdentifiants (email, mdp) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('api/verif/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mail: email,
      password: mdp
    })
  })
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la récupération des ligues
async function selectLigues () {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/select/ligues')
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la récupération des motif de fiches de frais
async function selectMotifs () {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/select/motifs')
  // Réponse de l'api à la vue
  return await response
}

/**
 * REQUETES UTILISATEUR
*/

// Appel de l'API au serveur pour la création d'un nouvel utilisateur
async function createUser (lemail, lmdp, lstatut, ldroitReservation, lniveauTarif) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/create/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: lemail,
      mdp: lmdp,
      statut: lstatut,
      droitReservation: ldroitReservation,
      niveauTarif: lniveauTarif
    })
  })
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la création d'un nouvel adhérent
async function createDemandeur (lnom, lprenom, lemail, lmdp, lnumLicence, lrue, lcp, lville, ldateNaissance, lidLigue, lestAdherent, ldroitReservation, lniveauTarif) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/create/demandeur', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nom: lnom,
      prenom: lprenom,
      email: lemail,
      mdp: lmdp,
      numLicence: lnumLicence,
      rue: lrue,
      cp: lcp,
      ville: lville,
      dateNaissance: ldateNaissance,
      idLigue: lidLigue,
      estAdherent: lestAdherent,
      droitReservation: ldroitReservation,
      niveauTarif: lniveauTarif
    })
  })
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la récupération des données d'un adhérernt
async function selectDataAdherent (idAdherent) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/select/data-adherent/${idAdherent}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la récupération des données adhérents
async function selectAllAdherentBordereau () {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/select/adherents')
  // Réponse de l'api à la vue
  return await response
}

/**
 * REQUETES FICHE DE FRAIS
*/

// Appel de l'API au serveur pour la récupération de toutes les fiches de frais d'un utilisateur à une année donnée
async function selectAllFicheFrais (id, dateBordereau) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/select/bordereau/${id}/${dateBordereau}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la récupération des données d'une fiche de frais
async function selectFicheFrais (id, idAdherent) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/select/fiche-de-frais/${idAdherent}/${id}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la création d'une nouvelle fiche de frais
async function addFicheFrais (ltrajet, ldateLigneFrais, lkm, lkmValide, lcoutPeage, lvalidePeage, lpeageJustificatif, lcoutRepas, lrepasValide, lcoutHebergement, lhebergementValide, lhebergementJustificatif, lidMotif, lidAdherent) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/create/fiche-de-frais', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      trajet: ltrajet,
      dateLigneFrais: ldateLigneFrais,
      km: lkm,
      kmValide: lkmValide,
      coutPeage: lcoutPeage,
      peageValide: lvalidePeage,
      peageJustificatif: lpeageJustificatif,
      coutRepas: lcoutRepas,
      repasValide: lrepasValide,
      coutHebergement: lcoutHebergement,
      hebergementValide: lhebergementValide,
      hebergementJustificatif: lhebergementJustificatif,
      idMotif: lidMotif,
      idAdherent: lidAdherent
    })
  })
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la supression d'une fiche de frais
async function deleteFicheFrais (id) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/delete/fiche-de-frais/${id}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la mise à jour d'une fiche de frais
async function updateFicheFrais (lid, ltrajet, ldateLigneFrais, lkm, lkmValide, lcoutPeage, lvalidePeage, lpeageJustificatif, lcoutRepas, lrepasValide, lcoutHebergement, lhebergementValide, lhebergementJustificatif, lidMotif, lidAdherent) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/update/fiche-de-frais', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: lid,
      trajet: ltrajet,
      dateLigneFrais: ldateLigneFrais,
      km: lkm,
      kmValide: lkmValide,
      coutPeage: lcoutPeage,
      peageValide: lvalidePeage,
      peageJustificatif: lpeageJustificatif,
      coutRepas: lcoutRepas,
      repasValide: lrepasValide,
      coutHebergement: lcoutHebergement,
      hebergementValide: lhebergementValide,
      hebergementJustificatif: lhebergementJustificatif,
      idMotif: lidMotif,
      idAdherent: lidAdherent
    })
  })
  // Réponse de l'api à la vue
  return await response
}

/**
 * REQUETES BORDEREAU
*/

// Appel de l'API au serveur pour la récupération de toutes les fiches de frais d'un utilisateur à une année donnée
async function selectAllBordereau (dateBordereau) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/select/all-bordereau/${dateBordereau}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la récupération des données d'une fiche de frais
async function selectBordereauData (idAdherent, annee) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/select/bordereau-adherent/${idAdherent}/${annee}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la création d'un nouveau bordereau
async function addBordereau (lsrcBordereau, lidAdherent, lvalide, lannee) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/create/bordereau', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      srcBordereau: lsrcBordereau,
      idAdherent: lidAdherent,
      valide: lvalide,
      annee: lannee
    })
  })
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la mise à jour d'un bordereau
async function updateBordereau (bordereau) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/update/bordereau', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: bordereau.id,
      srcBordereau: bordereau.src,
      valide: bordereau.valide,
      frais: bordereau.frais
    })
  })
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour l'ajout du document cerfa
async function sendDocumentCerfa (lid, lsrcCerfa) {
  // Envoi de la requête au serveur
  const response = await fetch(`/api/get/cerfa/${lid}/${lsrcCerfa}`)
  // Réponse de l'api à la vue
  return await response
}

// Exportation des modules // selectBordereau
module.exports = {
  verifIdentifiants,
  selectLigues,
  createUser,
  createDemandeur,
  selectAllFicheFrais,
  selectFicheFrais,
  addFicheFrais,
  deleteFicheFrais,
  updateFicheFrais,
  selectAllBordereau,
  selectBordereauData,
  addBordereau,
  updateBordereau,
  selectMotifs,
  selectDataAdherent,
  sendDocumentCerfa,
  selectAllAdherentBordereau
}