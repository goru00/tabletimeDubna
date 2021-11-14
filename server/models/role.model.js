module.exports = (sequelize, Seqielize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        name: {
            type: Seqielize.STRING
        }
    });
    return Role;
};