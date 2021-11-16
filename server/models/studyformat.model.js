module.exports = (sequelize, Seqielize) => {
    const FormatStudy = sequelize.define("studyformats", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        name: {
            type: Seqielize.STRING
        }
    });
    return FormatStudy;
};