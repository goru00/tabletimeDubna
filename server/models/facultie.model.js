module.exports = (sequelize, Seqielize) => {
    const Facultie = sequelize.define("faculties", {
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
    return Facultie;
};