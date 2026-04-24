# Site vitrine - Eleveuse de chats

Projet Next.js (App Router) avec une seule page d'accueil pour presenter une chatterie.

## Scripts

- `npm run dev` : lancer le serveur de developpement
- `npm run build` : compiler en production
- `npm run start` : demarrer la version produite
- `npm run lint` : verifier le code

## Stack

- Next.js 16
- React 19
- JavaScript

## Configuration email

1. Dupliquer `.env.example` en `.env.local`.
2. Renseigner `SMTP_USER` et `SMTP_PASS`.
3. Pour Gmail, utiliser un mot de passe d'application.

Les messages du formulaire sont envoyes vers `canifelink@gmail.com` via `app/api/contact/route.js`.
