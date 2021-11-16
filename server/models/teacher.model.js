module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teachers", {
        teacherId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return Teacher;
};