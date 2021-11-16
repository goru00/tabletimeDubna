module.exports = (sequelize, Seqielize) => {
    const Grade = sequelize.define("grades", {
        gradeId: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        name: {
            type: Seqielize.STRING
        }
    });
    return Grade;
};