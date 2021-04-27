#!/usr/bin/env bash
echo "Creating mongo users..."
mongo admin --host localhost -u root -p changeme --eval "db.createUser({user: 'mongodb', pwd: 'changeme', roles: [{role: 'readWrite', db: '${projectName}_db'}]}); db.createUser({user: 'admin', pwd: 'PASS', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
echo "Mongo users created."
