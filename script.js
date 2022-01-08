  'use strict';

  /* commentaires
   multilignes
  */

  // commentaire sur une ligne

  /* 1. Ecriture sur le site web*/

  document.write("salut"); // permet d'afficher du contenu dans notre page html
  console.log("Yo ! ça va "); // permet d'ecrire dans la console
  console.dir("Voici une autre methode");

  /* Les boites de dialogues */

  //alert('Mot de passe Incorrect'); // permet d'afficher des alertes (erreurs)
  //prompt("Entrez un mot de passe"); //permet de saisir des données
  //confirm("Continuer ?"); //permer de confirmer

  /* Les variables */

  var maVar1; //declaration de la variable
  maVar1 = "Salut les gens"; //affectation
  console.log(maVar1); //affichage

  var maVar2 = "voilà";
  console.log(maVar2); //affichage

  let prenom = 'Fideline',
      nom = 'Bazana',
      genre = 'Feminin';

      prenom = 'Inconnu';

  console.log("Bonjour je m'appelle" + nom + " " + prenom);



  console.log(prenom);

  /* Le typage */

  //string: chaine de caractère

  let monTexte = "Voici une chaine de caractères";
  console.log(monTexte + "est de type" + typeof(monTexte));

  /* structure conditionnelle */
/*
  const div1 = document.getElementById('status'); //on récupère la div qui a pour id status

  let age = prompt('Indique ton age'); // permet de recuperer l'age saisi par l'utilisateur


  if (age < 18) {
    div1.style.background = "green"; // pour changer la couleur de fond
    div1.style.color = "white"; //pour changer la couleur du texte
    div1.innerText = "Tu es mineur"; //pour ecrire dans la div
  } else {
    div1.style.background = "red";
    div1.style.color = "white";
    div1.innerText = "Tu es majeur";
  }
*/

  /* Opérateurs de comparaison :
      > : superieure à
      <
      >= : superieure ou égale à
      == : égal (valeur) 2 == 2
      === :strictement égal en valeur et en type
      != different de
      && : et

  */


  //exercie 4
/*
  var age= prompt("Saisisez l'age de l'enfant");

  if (age!="" && !isNan(age)) { // si la valeur saisie n'est pas vide et est de type number
    if (monAge >= 6 && monAge <= 7) {
    document.write(" // Tu es Poussin");
    alert('Tu es trop jeune');
    }
    else if (monAge >= 8 && monAge <= 9) {
    document.write(" // Tu es Pupille");
    alert('Tu es trop jeune');
    }
    else if (monAge >= 10 && monAge <= 11) {
    document.write(" // Tu es Minime");
    alert('Tu es trop jeune');
    }
    else if (monAge >= 12 && monAge <= 17) {
    document.write(" // Tu es Cadet");
    }
    else{
    alert("L'enfant n'appartient à une xatégorie");
    }
  }else {
    alert("Erreur: la valeur saisie est incorrect");
  }
*/

/* Les Fonctions*/

// Pour recuperer une div via une class, 2 methodes:

//var div2 = document.getElementsByClassName("none");

var div2 = document.querySelector('.none');

/*juste pour afficher
function displayDiv() {
  if (div2.style.display = "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
}
*/

/*pour afficher et cacher */

function displayDiv() {
  if (div2.style.display != "block") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
}

/*Les objets */

// l'objet voiture avec pour propriétés le type, le modèle et la couleur
const voiture = {type:"Fiat", modele:"500", couleur:"blanc"};


//document.getElementById("infos").innerHTML = "La voiture est de couleur " + voiture.couleur;

/* Les tableaux*/

const voitures = ["Fiat", "Mercedes", "Renault"];

//document.getElementById("infos").innerHTML = voitures;


/* Les boucles et itérations*/

let liste = "";

for (var i = 0; i < voitures.length; i++) {
  liste += voitures[i] + "<br>";
}

document.getElementById("infos").innerHTML = liste;


//declarer un tableau tab
//creer une fonction ajouter_nom() qui va demander à l'utilisateur de saisir un nom qu'on l'on va mettre dans le tableau

//pour mettre la valeur  dans le tableau on utilise  Array.push(alert("nom"));

//creer un deuxième fonction tirage() qui va executer le code suivant
// si la taille du tableau est superieur à 0
// alors tirer au sort un nom du tableau var rand = Math.floor(Math.random()*tab.length);
// afficher une alerte avec pour message "le nom gagnat est :" +tab[rand]
//sinon afficher une alerte "veuillez ajouter des noms"






  /**/
