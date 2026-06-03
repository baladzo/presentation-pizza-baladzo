# Pizza Baladzo — Site de présentation bancaire

Site vitrine professionnel en français pour présenter Pizza Baladzo aux banques, partenaires, organismes d'aide et collectivités.

## Structure du dossier

Le site est volontairement organisé en pages séparées pour éviter une longue page unique :

1. `index.html` — accueil synthétique du projet.
2. `business-plan.html` — rubrique dédiée au business plan.
3. `previsionnel-financier.html` — rubrique dédiée au prévisionnel financier.
4. `contact.html` — coordonnées et pièces utiles.

## Contrôle HTML

Chaque page commence par une structure HTML standard afin d'éviter l'affichage de code brut dans le navigateur :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
```

Toutes les balises `meta`, `title`, `link` et leurs attributs `content` restent dans le `<head>`. Les pages contiennent des liens de navigation vers `index.html`, `business-plan.html`, `previsionnel-financier.html` et `contact.html`.

## Modifier le site

- Modifier le contenu éditorial dans le fichier HTML de la page concernée.
- Modifier le design noir/violet, les cartes, les tableaux et le responsive dans `styles.css`.
- Modifier le comportement du menu mobile dans `script.js`.

## Lancer en local

Depuis la racine du projet :

```bash
python3 -m http.server 4173
```

Puis ouvrir <http://localhost:4173>.
