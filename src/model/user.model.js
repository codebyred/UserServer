import { DataTypes } from "sequelize";
import {sequelize} from "../config/db.config.js"

export const User = sequelize.define("User",{

    id: {

        type: DataTypes.INTEGER,
        primaryKey:true

    },
    email:{

        type: DataTypes.STRING

    },
    firstName: {

        type: DataTypes.STRING

    },
    lastName:{

        type: DataTypes.STRING

    },
    password:{

        type: DataTypes.STRING

    }

},{
    timestamps:false
});

(async ()=>{
    try{
        await User.sync();
    }catch(e){

    }
    
})();