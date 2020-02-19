  
const express = require('express');

// database access using knex
const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    // list of accounts
    db.select('*').from('cars')
      .then(accounts => {
        res.status(200).json(accounts);
      })
      .catch(error => {
        console.log(error);
  
        res.status(500).json({ error: "failed to get the list of accounts" });
      });
  });

router.get('/:id', (req, res) => {
  db.select('*').from('cars')
    .where({ id: req.params.id })
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to get requested account" });
    });
});

  // add an account
router.post('/', (req, res) => {
db('cars')
    .insert(req.body, 'id')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "failed to add the accounts" });
    });
});

router.put('/:id', (req, res) => {
  // update an account
  const id = req.params.id;
  const changes = req.body;
  db('cars')
    .where({ id }) 
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      console.log(error);
        res.status(500).json({ error: "failed to update the accounts" });
    });
});

 // delete an account
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db('cars')
    .where({ id }) 
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to delete the account" });
    });
});



module.exports = router;