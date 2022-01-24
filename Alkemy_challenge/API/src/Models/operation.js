const { DataTypes , Sequelize , Model} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Operation", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    concept: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
};




// -----------------------------------------------------------------------------------------
// const {conn} = require("../db");

// class Operation extends Model {}



// Operation.init({
//     id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         allowNull: false,
//         defaultValue: DataTypes.UUIDV4,
//     },
//     concept: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     amount: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//     },
//     date: {
//         type: DataTypes.DATE,
//         allowNull: false,
//     },
//     type: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }
// }, {
//   conn,
//   modelName: "Operation",
// });


// module.exports = Operation;

