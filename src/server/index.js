const express = require('express')
const cors = require('cors')
const pool = require('./pool')

const app = express()

const port = 5000;

//middleware
app.use(cors())
app.use(express.json())

//ROUTES//

//get some users
app.get('/users/:maxId/:limit', async (req, res) => {
    try {
        const { maxId, limit } = req.params
        const users = (await pool.query(
            'SELECT * FROM users WHERE id > $1 LIMIT $2',
            [maxId, limit]
        )).rows
        res.json(users)
    } catch(e) {
        console.error(e.message)
    }
})

/*app.post("", async (req, res) => {
    try {

    } catch (e) {
        console.error(e.message);
    }
});*/

/*app.put("/users/:id", async (req, res) => {
    try {

    } catch (e) {
        console.error(e.message);
    }
});*/

/*app.delete("/users/:id", async (req, res) => {
    try {

    } catch (e) {
        console.log(e.message);
    }
});*/

app.listen(port, () => {
    console.log(`server has started on port ${port}`)
})