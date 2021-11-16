module.exports = (sequelize, Seqielize) => {
    const Group = sequelize.define("groups", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        name: {
            type: Seqielize.STRING
        },
        studentDigit: {
            type: Seqielize.INTEGER
        },
        facultieId: {
            type: Seqielize.STRING
        }
    });
    return Group;
};