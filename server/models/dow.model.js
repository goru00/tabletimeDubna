module.exports = (sequelize, Seqielize) => {
    const Dow = sequelize.define("dows", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        name: {
            type: Seqielize.STRING
        }
    });
    return Dow;
};