import Sequelize from "sequelize";

export const sequelize = new Sequelize("alkemy", "postgres", "agus1234", {
  host: "localhost",
  dialect: "postgres",
});
