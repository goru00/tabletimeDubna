module.exports = (sequelize, Seqielize) => {
    const Cabinet = sequelize.define("cabinets", {
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
    return Cabinet;
};