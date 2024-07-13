//to start the node.js server
import app from "./app.js";                                             

app.listen(process.env.PORT,()=>{                                       
    console.log(`Server Running On Port ${process.env.PORT}`);          
});                                                                     