module.exports = (sequelize, Seqielize) => {
    const FormatStudy = sequelize.define("studyformats", {
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
    return FormatStudy;
};