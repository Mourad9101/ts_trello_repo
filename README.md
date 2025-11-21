📦 ts-trello-cli

Un outil CLI écrit en TypeScript, inspiré de Trello, permettant de gérer des tâches et des tableaux en ligne de commande.

✨ Fonctionnalités

Gestion de tâches (create, list, update, delete)

Gestion de boards (create, list, update, delete)

Sauvegarde automatique dans un fichier JSON

Architecture modulaire (commands, models, utils…)

Utilisation de décorateurs personnalisés

@timestamp → log d'exécution

validate() → validation des arguments

Couverture de tests > 70% via Vitest

Package installé globalement via npm

📥 Installation
npm install -g @mourad9101/ts-trello-cli


Vérification :

ts-task --help
ts-board --help

🚀 Utilisation
📌 Créer une tâche
ts-task task:create "Titre de ma tâche"

📋 Lister les tâches
ts-task task:list

✏️ Modifier une tâche
ts-task task:update <id> "Nouveau titre"

🗑️ Supprimer une tâche
ts-task task:delete <id>

🧱 Architecture du projet
src/
 ├── commands/
 │    ├── BoardCreate.ts
 │    ├── BoardDelete.ts
 │    ├── BoardList.ts
 │    ├── BoardUpdate.ts
 │    ├── TaskCreate.ts
 │    ├── TaskDelete.ts
 │    ├── TaskList.ts
 │    └── TaskUpdate.ts
 ├── interfaces/
 │    ├── BoardInterface.ts
 │    └── TaskInterface.ts
 ├── models/
 │    ├── Board.ts
 │    └── Task.ts
 ├── tests/
 │    ├── mocks/
 │    │    ├── StorageMock.ts
 │    ├── Storage.test.ts
 │    ├── TaskCreate.test.ts
 │    ├── TaskDelete.test.ts
 │    ├── TaskList.test.ts
 │    ├── TaskUpdate.test.ts
 │    ├── Timestamp.test.ts
 │    └── Validate.test.ts
 ├── utils/
 │    ├── storage.ts
 │    ├── timestamp.ts
 │    └── validate.ts
 ├── index.ts
data.json
package.json
tsconfig.json

🧪 Tests
Lancer les tests
npm test

Couverture

✔️ Tests unitaires sur toutes les classes

✔️ Tests fonctionnels sur toutes les commandes CLI

✔️ Couverture > 70%

🛠️ Scripts NPM
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "test": "vitest --run --coverage"
}

📤 Publication NPM

Le package est disponible ici :

👉 https://www.npmjs.com/package/@mourad9101/ts-trello-cli

Installation globale :

npm install -g @mourad9101/ts-trello-cli

🔗 Repository GitHub

👉 https://github.com/Mourad9101/ts_trello_repo

📝 License

MIT – libre d’utilisation et modification.

👤 Auteur

Mourad (Mourad9101)
Étudiant – Projet CLI TypeScript CODA 2025
