module.exports = (sequelize, Seqielize) => {
    const Lesson = sequelize.define("lessons", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true,
            allowNull: false
        },
        startL: {
            type: Seqielize.TIME,
            allowNull: false
        },
        finishL: {
            type: Seqielize.TIME,
            allowNull: false
        }
    });
    return Lesson;
};