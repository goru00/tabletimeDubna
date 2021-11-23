module.exports = (sequelize, Seqielize) => {
    const Cabinet = sequelize.define("cabinets", {
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
    return Cabinet;
};