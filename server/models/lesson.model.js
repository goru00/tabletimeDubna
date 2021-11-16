module.exports = (sequelize, Seqielize) => {
    const Lesson = sequelize.define("lessons", {
        id: {
            type: Seqielize.STRING,
            primaryKey: true
        },
        startL: {
            type: Seqielize.DATE
        },
        finishL: {
            type: Seqielize.DATE
        }
    });
    return Lesson;
};