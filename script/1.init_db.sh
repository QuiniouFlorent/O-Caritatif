export PGUSER=postgres
export PGPASSWORD=postgres

# Suppression BDD si existante

dropdb ocaritatif

# Suppression User si existante

dropuser ocaritatif

# Création d'un User

createuser ocaritatif

# Création de la BDD

createdb ocaritatif

#sqitch deploy
#sqitch verify
#npm install
#DEBUG=seeding node data/seeding.js