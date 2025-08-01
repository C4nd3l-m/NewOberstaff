const app = require("./src/server");
const dbCon = require("./src/config/db")

dbCon().then((res) => {
    app.listen(5000, () =>{
        console.log("servidor escuchando en el puerto 5000")
    });
});

