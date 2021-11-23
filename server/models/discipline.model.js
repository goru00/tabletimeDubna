module.exports = (sequelize, Seqielize) => {
    const Discipline = sequelize.define("disciplines", {
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
            allowNull: true
        }
    });
    return Discipline;
};