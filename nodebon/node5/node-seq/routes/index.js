var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../../db/mydb.sqlite3');

/* GET home page. */
router.get('/', (req, res, next) => {
  db.serialize(() => {
    db.all("select  * from user", (err, rows) => {
      if (!err){
          let data = {
            "title" : "Hello!",
            "content": rows
          };
          res.render('index', data);
      } else {
        console.log(err);
      }
    })
  });
});

module.exports = router;
