const express = require('express');
const app = express();
const cors = require('cors');
const corretorRoutes = require('./src/routes/corretor.routes');
const imoveisRoutes = require('./src/routes/imovel.routes');

app.use(cors());
app.use(express.json());
app.use(corretorRoutes);
app.use(imoveisRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});