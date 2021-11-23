module.exports = (sequelize, Seqielize) => {
    const Group = sequelize.define("groups", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Seqielize.STRING,
            allowNull: false
        },
        studentDigit: {
            type: Seqielize.INTEGER,
            allowNull: false
        },
        facultieId: {
            type: Seqielize.STRING,
            allowNull: false
        }
    });
    return Group;
};