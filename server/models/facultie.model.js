module.exports = (sequelize, Seqielize) => {
    const Facultie = sequelize.define("faculties", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Seqielize.STRING,
            allowNull: false
        },
        description: {
            type: Seqielize.STRING,
            allowNull: false
        }
    });
    return Facultie;
};