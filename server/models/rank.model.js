module.exports = (sequelize, Seqielize) => {
    const Rank = sequelize.define("ranks", {
        rankId: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        name: {
            type: Seqielize.STRING
        }
    });
    return Rank;
};