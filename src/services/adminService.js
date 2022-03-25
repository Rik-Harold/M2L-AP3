// Appel de l'API au serveur pour la récupération des données utilisateurs
async function selectUserData () {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/select/users')
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la récupération des données d'un utilisateur
async function selectUser (id) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/select/user/${id}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la supression des données d'un utilisateur
async function deleteUser (id, statut) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/delete/user/${id}/${statut}`)
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la mise à jour d'un utilisateur
async function updateUser (lid, lemail, lstatut, ldroitReservation, lniveauTarif) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch('/api/update/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: lid,
      email: lemail,
      statut: lstatut,
      droitReservation: ldroitReservation,
      niveauTarif: lniveauTarif
    })
  })
  // Réponse de l'api à la vue
  return await response
}

// Appel de l'API au serveur pour la supression d'un bordereau
async function deleteBordereau (id) {
  // Requête vers l'api et récupération de la réponse
  const response = await fetch(`/api/delete/bordereau/${id}`)
  // Réponse de l'api à la vue
  return await response
}

// Exportation des modules
module.exports = {
  selectUserData,
  selectUser,
  updateUser,
  deleteUser,
  deleteBordereau
}