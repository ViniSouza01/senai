const express = require('express');
const app = express();

router.get('/calcula/:operacao');


app.listen(3000, () =>{
    console.log('server running on port 3000');
});