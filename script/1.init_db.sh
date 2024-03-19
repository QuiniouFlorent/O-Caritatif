export PGUSER=
export PGPASSWORD=

# Suppression BDD si existante

dropdb

# Suppression User si existante

dropuser 

# Création d'un User

createuser  -P

# Création de la BDD

createdb

#sqitch deploy
#sqitch verify
#npm install
#DEBUG=seeding node data/seeding.js