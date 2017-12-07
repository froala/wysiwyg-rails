/*!
 * froala_editor v2.7.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
 * French
 */

$.FE.LANGUAGE['fr'] = {
  translation: {
    // Place holder
    "Type something": "Tapez quelque chose",

    // Basic formatting
    "Bold": "Gras",
    "Italic": "Italique",
    "Underline": "Soulign\u00e9",
    "Strikethrough": "Barr\u00e9",

    // Main buttons
    "Insert": "Ins\u00e9rer",
    "Delete": "Effacer",
    "Cancel": "Annuler",
    "OK": "Ok",
    "Back": "Ant\u00e9rieur",
    "Remove": "Enlever",
    "More": "Plus",
    "Update": "Actualiser",
    "Style": "Style",

    // Font
    "Font Family": "Polices de caract\u00e8res",
    "Font Size": "Taille de la police",

    // Colors
    "Colors": "Couleurs",
    "Background": "Arri\u00e8re-plan",
    "Text": "Texte",
    "HEX Color": "Couleur hexagonale",

    // Paragraphs
    "Paragraph Format": "Formats",
    "Normal": "Normal",
    "Code": "Code",
    "Heading 1": "Titre 1",
    "Heading 2": "Titre 2",
    "Heading 3": "Titre 3",
    "Heading 4": "Titre 4",

    // Style
    "Paragraph Style": "Style de paragraphe",
    "Inline Style": "Style en ligne",

    // Alignment
    "Align": "Aligner",
    "Align Left": "Aligner \u00e0 gauche",
    "Align Center": "Aligner au centre",
    "Align Right": "Aligner \u00e0 droite",
    "Align Justify": "Justifi\u00e9",
    "None": "Aucun",

    // Lists
    "Ordered List": "Liste ordonn\u00e9e",
    "Unordered List": "Liste non ordonn\u00e9e",

    // Indent
    "Decrease Indent": "Diminuer le retrait",
    "Increase Indent": "Augmenter le retrait",

    // Links
    "Insert Link": "Ins\u00e9rer un lien",
    "Open in new tab": "Ouvrir dans un nouvel onglet",
    "Open Link": "Ouvrir le lien",
    "Edit Link": "Modifier le lien",
    "Unlink": "Enlever le lien",
    "Choose Link": "Choisissez le lien",

    // Images
    "Insert Image": "Ins\u00e9rer une image",
    "Upload Image": "T\u00e9l\u00e9charger une image",
    "By URL": "Par URL",
    "Browse": "Feuilleter",
    "Drop image": "D\u00e9posez l'image",
    "or click": "ou cliquez",
    "Manage Images": "Gestion des images",
    "Loading": "Chargement",
    "Deleting": "Suppression",
    "Tags": "\u00c9tiquettes",
    "Are you sure? Image will be deleted.": "Etes-vous s\u00fbr? Image sera supprim\u00e9e.",
    "Replace": "Remplacer",
    "Uploading": "De t\u00e9l\u00e9chargement d'images",
    "Loading image": "De t\u00e9l\u00e9chargement d'images",
    "Display": "Afficher",
    "Inline": "En ligne",
    "Break Text": "Texte scission",
    "Alternate Text": "Texte alternatif",
    "Change Size": "Changer la dimension",
    "Width": "Largeur",
    "Height": "Hauteur",
    "Something went wrong. Please try again.": "Quelque chose a mal tourn\u00e9. Veuillez r\u00e9essayer.",
    "Image Caption": "Légende de l'image",
    "Advanced Edit": "Édition avancée",

    // Video
    "Insert Video": "Ins\u00e9rer une vid\u00e9o",
    "Embedded Code": "Code embarqu\u00e9",
    "Paste in a video URL": "Coller dans une URL vidéo",
    "Drop video": "D\u00e9posez la vidéo",
    "Your browser does not support HTML5 video.": "Votre navigateur ne supporte pas la vidéo html5.",
    "Upload Video": "Télécharger une video",

    // Tables
    "Insert Table": "Ins\u00e9rer un tableau",
    "Table Header": "Ent\u00eate de tableau",
    "Remove Table": "Effacer le tableau",
    "Table Style": "Style de tableau",
    "Horizontal Align": "Aligner horizontale",
    "Row": "Ligne",
    "Insert row above": "Ins\u00e9rer une ligne avant",
    "Insert row below": "Ins\u00e9rer une ligne apr\u00e8s",
    "Delete row": "Effacer la ligne",
    "Column": "Colonne",
    "Insert column before": "Ins\u00e9rer une colonne avant",
    "Insert column after": "Ins\u00e9rer une colonne apr\u00e8s",
    "Delete column": "Effacer la colonne",
    "Cell": "Cellule",
    "Merge cells": "Fusionner les cellules",
    "Horizontal split": "Diviser horizontale",
    "Vertical split": "Diviser verticale",
    "Cell Background": "Fond de la cellule",
    "Vertical Align": "Aligner vertical",
    "Top": "En haut",
    "Middle": "Milieu",
    "Bottom": "En bas",
    "Align Top": "Aligner en haut",
    "Align Middle": "Aligner au milieu",
    "Align Bottom": "Aligner en bas",
    "Cell Style": "Style de cellule",

    // Files
    "Upload File": "T\u00e9l\u00e9charger le fichier",
    "Drop file": "D\u00e9posez le fichier",

    // Emoticons
    "Emoticons": "\u00c9motic\u00f4nes",
    "Grinning face": "Souriant visage",
    "Grinning face with smiling eyes": "Souriant visage aux yeux souriants",
    "Face with tears of joy": "Visage \u00e0 des larmes de joie",
    "Smiling face with open mouth": "Visage souriant avec la bouche ouverte",
    "Smiling face with open mouth and smiling eyes": "Visage souriant avec la bouche ouverte et les yeux en souriant",
    "Smiling face with open mouth and cold sweat": "Visage souriant avec la bouche ouverte et la sueur froide",
    "Smiling face with open mouth and tightly-closed eyes": "Visage souriant avec la bouche ouverte et les yeux herm\u00e9tiquement clos",
    "Smiling face with halo": "Sourire visage avec halo",
    "Smiling face with horns": "Visage souriant avec des cornes",
    "Winking face": "Clin d'oeil visage",
    "Smiling face with smiling eyes": "Sourire visage aux yeux souriants",
    "Face savoring delicious food": "Visage savourant de d\u00e9licieux plats",
    "Relieved face": "Soulag\u00e9 visage",
    "Smiling face with heart-shaped eyes": "Visage souriant avec des yeux en forme de coeur",
    "Smiling face with sunglasses": "Sourire visage avec des lunettes de soleil",
    "Smirking face": "Souriant visage",
    "Neutral face": "Visage neutre",
    "Expressionless face": "Visage sans expression",
    "Unamused face": "Visage pas amus\u00e9",
    "Face with cold sweat": "Face \u00e0 la sueur froide",
    "Pensive face": "pensif visage",
    "Confused face": "Visage confus",
    "Confounded face": "visage maudit",
    "Kissing face": "Embrasser le visage",
    "Face throwing a kiss": "Visage jetant un baiser",
    "Kissing face with smiling eyes": "Embrasser le visage avec les yeux souriants",
    "Kissing face with closed eyes": "Embrasser le visage avec les yeux ferm\u00e9s",
    "Face with stuck out tongue": "Visage avec sortait de la langue",
    "Face with stuck out tongue and winking eye": "Visage avec sortait de la langue et des yeux clignotante",
    "Face with stuck out tongue and tightly-closed eyes": "Visage avec sortait de la langue et les yeux ferm\u00e9s herm\u00e9tiquement",
    "Disappointed face": "Visage d\u00e9\u00e7u",
    "Worried face": "Visage inquiet",
    "Angry face": "Visage en col\u00e9re",
    "Pouting face": "Faire la moue face",
    "Crying face": "Pleurer visage",
    "Persevering face": "Pers\u00e9v\u00e9rer face",
    "Face with look of triumph": "Visage avec le regard de triomphe",
    "Disappointed but relieved face": "D\u00e9\u00e7u, mais le visage soulag\u00e9",
    "Frowning face with open mouth": "Les sourcils fronc\u00e9s visage avec la bouche ouverte",
    "Anguished face": "Visage angoiss\u00e9",
    "Fearful face": "Craignant visage",
    "Weary face": "Visage las",
    "Sleepy face": "Visage endormi",
    "Tired face": "Visage fatigu\u00e9",
    "Grimacing face": "Visage grima\u00e7ante",
    "Loudly crying face": "Pleurer bruyamment visage",
    "Face with open mouth": "Visage \u00e0 la bouche ouverte",
    "Hushed face": "Visage feutr\u00e9e",
    "Face with open mouth and cold sweat": "Visage \u00e0 la bouche ouverte et la sueur froide",
    "Face screaming in fear": "Visage hurlant de peur",
    "Astonished face": "Visage \u00e9tonn\u00e9",
    "Flushed face": "Visage congestionn\u00e9",
    "Sleeping face": "Visage au bois dormant",
    "Dizzy face": "Visage vertige",
    "Face without mouth": "Visage sans bouche",
    "Face with medical mask": "Visage avec un masque m\u00e9dical",

    // Line breaker
    "Break": "Rompre",

    // Math
    "Subscript": "Indice",
    "Superscript": "Exposant",

    // Full screen
    "Fullscreen": "Plein \u00e9cran",

    // Horizontal line
    "Insert Horizontal Line": "Ins\u00e9rez une ligne horizontale",

    // Clear formatting
    "Clear Formatting": "Effacer formatage",

    // Undo, redo
    "Undo": "Annuler",
    "Redo": "R\u00e9tablir",

    // Select all
    "Select All": "Tout s\u00e9lectionner",

    // Code view
    "Code View": "Vue de code",

    // Quote
    "Quote": "Citer",
    "Increase": "Augmentation",
    "Decrease": "Diminution",

    // Quick Insert
    "Quick Insert": "Ins\u00e9rez rapide",

    // Spcial Characters
    "Special Characters": "Caractères spéciaux",
    "Latin": "Latin",
    "Greek": "Grec",
    "Cyrillic": "Cyrillique",
    "Punctuation": "Ponctuation",
    "Currency": "Devise",
    "Arrows": "Flèches",
    "Math": "Math",
    "Misc": "Misc",

    // Print.
    "Print": "Impression",

    // Spell Checker.
    "Spell Checker": "Correcteur orthographique",

    // Help
    "Help": "Aidez-moi",
    "Shortcuts": "Raccourcis",
    "Inline Editor": "Éditeur en ligne",
    "Show the editor": "Montrer l'éditeur",
    "Common actions": "Actions communes",
    "Copy": "Copie",
    "Cut": "Couper",
    "Paste": "Coller",
    "Basic Formatting": "Formatage de base",
    "Increase quote level": "Augmenter le niveau de devis",
    "Decrease quote level": "Baisse du niveau de citation",
    "Image / Video": "Image / vidéo",
    "Resize larger": "Redimensionner plus grand",
    "Resize smaller": "Redimensionner plus petit",
    "Table": "Table",
    "Select table cell": "Sélectionner la cellule du tableau",
    "Extend selection one cell": "Étendre la sélection d'une cellule",
    "Extend selection one row": "Étendre la sélection d'une ligne",
    "Navigation": "La navigation",
    "Focus popup / toolbar": "Focus popup / toolbar",
    "Return focus to previous position": "Retourner l'accent sur le poste précédent",

    // Embed.ly
    "Embed URL": "URL intégrée",
    "Paste in a URL to embed": "Coller dans une url pour intégrer",

    // Word Paste.
    "The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?": "Le contenu collé provient d'un document Microsoft Word. voulez-vous garder le format ou le nettoyer?",
    "Keep": "Garder",
    "Clean": "Nettoyer",
    "Word Paste Detected": "Pate de mots détectée"
  },
  direction: "ltr"
};

}));
