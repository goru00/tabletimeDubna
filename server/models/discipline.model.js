module.exports = (sequelize, Seqielize) => {
    const Discipline = sequelize.define("disciplines", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        name: {
            type: Seqielize.STRING
        },
        description: {
            type: Seqielize.STRING
        }
    });
    return Discipline;
};