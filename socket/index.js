import { Server} from "socket.io";

const io = new Server({
    cors:{
        origin:"http://localhost:3000"
    }
 });

let onlineUser =[];

const addNewUser = ()

io.on("connection", (socket)=>{
    //io.to().emit("firstEvent","This is test")
   // console.log("someone has connected!");

    socket.on("disconnect", ()=>{
       // console.log("someone has left ");
    })
});

io.listen(3001);