module.exports = (sequelize, Seqielize) => {
    const Dow = sequelize.define("dows", {
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
    return Dow;
};