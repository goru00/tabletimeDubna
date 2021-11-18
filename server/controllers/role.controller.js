const db = require('../models');
const Role = db.role;

exports.getRoles = (req, res) => {
    Role.findAll( { raw: true} )
    .then(roles => {
        var role = [];
        for (let i = 0; i < roles.length; i++) {
            role.push({
                id: roles[i].id,
                name: roles[i].name
            });
        }
        res.status(200).send(role);
    }).catch(err => {
        res.status(500).send( { message: err } );
    });
};