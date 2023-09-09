const app = require('./app')

const port = 5000;
app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
})