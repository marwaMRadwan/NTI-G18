const bcrypt = require("bcryptjs")
let pass = "123456"

const x = async() => {
    try{
        let a =  await bcrypt.hash(pass, 10)
        console.log(a)
        let b = await bcrypt.compare(pass, a)
        console.log(b);
    }
    catch(e){
        console.log(e)
    }
}

x()