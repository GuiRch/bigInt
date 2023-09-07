# BigInt

La problématique est que lorsque qu'on multiplie un entier par une puissance de 10 négative trop élevée, apparaissent des erreurs de calcul.
La première idée pour palier à ce problème est de faire les opération en factorisant la formule à calculer. 
Dans notre cas cela reviens à calculer en premier la valeur de l'exposant de la puissance de 10.

Pour intéragir avec le code, vous pouvez utiliser le menu défini dans `main.js`. Placez vous à la racine du projet et executez la commande `node .`, vous verrez apparaitre un menu qui vous proposera différentes options d'intéraction.

## ExponentFirst (option 1 et 2)

Dans le fichier `exponentFirst.js` on retrouve deux fonctions : 

* `exponentFirst` qui permet de factoriser une formule de la forme "a * 10 ** expA * 10 ** expB" en "a * 10 ** (expA + expB)".
* `factorizeExponents` qui est la version pour n exposants de la fonction `exponentFisrt` et qui permet de factoriser des formules comme "a * 10 ** expN0 * ... * 10 ** expNn" en "a * 10 ** (expN0 + ... + expNn).

## Factorize (option 3)

Les deux formules précédentes nécéssitent que quelqu'un puisse lire la formule pour la décomposer. J'ai donc décidé de faire une fonction qui à l'aide d'un RegEx soit capable de décomposer une formule mathématique pour en déterminer les facteurs et les exposants.

Une formule comme " 100001 * 10 ** 18 * 10 ** -17" sera retournée sous la forme " 100001 * 10 * 1"

## BigInt (option 4)

Les fonctions présentée ci-dessus permettent de contourner les erreurs de calculs obtenue lorsque l'on multiplie des puissances de 10 négatives et positives entre elles. Les puissance de 10 sont factorisées et ramenées à des puissances acceptable pour l'ordinateur.

Mais dans certain cas extrèmes cela ne suffit pas et des erreurs de calculs apparaissent. Notamment lorsque la valeur calculée dépasse la valeur `MAX_SAFE_INTEGER`.
Pour palier à ce problème particulier et dans notre cas précis j'ai décidé d'essayer une approche différentes.

Dans le fichier `bigInt.js` on retrouve une liste d'expérimentation sur les entier et les flotant pour souligner les différents points bloquants.

L'idée ici est d'ajouter des "0" sur une chaine de caractère que l'on convertira ensuite en flottant
