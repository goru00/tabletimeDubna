module.exports = (sequelize, Seqielize) => {
    const Parity = sequelize.define("parities", {
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
    return Parity;
};