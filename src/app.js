import express from "express";
import router from "./router/index.js"
import cors from "cors"
import * as dotenv from "dotenv";

dotenv.config({path:'./.env'});

const app = express();
const port = process.env.PORT || 3008;

app.use(express.json());

app.use(cors(
    {
        origin:[
            "http://localhost:3000",
        ]
    }
));

app.use("/api",router);

app.listen(port, async (err) =>{

    if(err) return console.log(`Could not establish connection on ${port}`);

    console.log(`connection is established on ${port}`);

    const register = async()=>{

        const body = {

            service:"user",
            host:"http://localhost",
            port,
            url:`http://localhost:${port}`
    
        }
    
        const fetchOptions = {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body),
            credentials: "include",
        }
    
        const apiGatewayPort = "3020";
        const apiGatewayURL =  `http://localhost:${apiGatewayPort}/register`;

        await fetch(apiGatewayURL, fetchOptions);
        
    }

    try{    

        await register();

    }catch(e){

        console.log("Could not register to apiGateway");
        
    }
    
});

