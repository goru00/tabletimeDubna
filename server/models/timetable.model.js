module.exports = (sequelize, Sequelize) => {
    const Timetable = sequelize.define("timetables", {
        parityid: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        dayId: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        lessonId: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        cabinetId: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        groupId: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        disciplineId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        teacherId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        facultieId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        formatId: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Timetable;
};