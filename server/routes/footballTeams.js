const express = require('express');
const router = express.Router();

router.get('/league', async (req, res) => {
    const data = await footballTeams.makeRequest("FL1")
    console.log(data)
    return res.json({
        data: data.teams
    });
});

router.get('/league/:id', async (req, res) => {
        const data = await footballTeams.makeRequest(req.params.id)
        return res.json({
        data: data.teams
        });
    });

module.exports = router;