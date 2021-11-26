module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teachers", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Teacher;
};