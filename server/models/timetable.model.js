module.exports = (sequelize, Sequelize) => {
    const Timetable = sequelize.define("timetables", {
        parityid: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        dayId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        lessonId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        cabinetId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        groupId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        disciplineId: {
            type: Sequelize.STRING
        },
        teacherId: {
            type: Sequelize.STRING
        },
        facultieId: {
            type: Sequelize.STRING
        },
        formatId: {
            type: Sequelize.STRING
        }
    });
    return Timetable;
};