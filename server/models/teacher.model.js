module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teachers", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return Teacher;
};