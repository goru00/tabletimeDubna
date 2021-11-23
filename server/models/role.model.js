module.exports = (sequelize, Seqielize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Seqielize.STRING,
            allowNull: false
        }
    });
    return Role;
};