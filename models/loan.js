'use strict';
module.exports = function (sequelize, DataTypes) {
    var Loan = sequelize.define('Loan', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_id: DataTypes.INTEGER,
        patron_id: DataTypes.INTEGER,
        loaned_on: DataTypes.DATE,
        returned_on: DataTypes.DATE
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return Loan;
};