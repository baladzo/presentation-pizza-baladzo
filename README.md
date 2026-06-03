# Pizza Baladzo — Site de présentation bancaire

Site vitrine professionnel destiné aux banques, partenaires, organismes d'aide et collectivités pour présenter le projet Pizza Baladzo.

## Structure

Le dossier n'est plus une grande page unique. Il est organisé en pages séparées pour faciliter la lecture bancaire :

1. `index.html` — accueil synthétique du projet.
2. `business-plan.html` — page dédiée au business plan.
3. `previsionnel-financier.html` — page dédiée au prévisionnel financier et aux hypothèses de travail modifiables.
4. `contact.html` — page contact et pièces à joindre.

## Modifier le site

- Le contenu éditorial de chaque page se trouve dans le fichier HTML correspondant.
- Les hypothèses financières à compléter se trouvent dans `previsionnel-financier.html`.
- Le design noir et violet, les cartes, tableaux et adaptations responsive se trouvent dans `styles.css`.
- Le menu mobile se trouve dans `script.js`.

## Contrôle HTML

Chaque page HTML du dossier commence par une structure standard :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
```

Les liens de navigation sont vérifiés entre `index.html`, `business-plan.html`, `previsionnel-financier.html` et `contact.html` afin d'éviter l'affichage de code HTML brut dans la page.

## Lancer en local

Aucune dépendance n'est nécessaire. Depuis la racine du projet :

```bash
python3 -m http.server 4173
```

Puis ouvrir <http://localhost:4173>.
