import * as dotenv from "dotenv";
import {Sequelize} from "sequelize"

dotenv.config({path:'./.env'});

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);

(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("connected to database");
    }catch(e){
        console.log("connection error",e);
    }
})();