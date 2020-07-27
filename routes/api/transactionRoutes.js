const express = require("express");
const db = require("../../models");
const router = express.Router();


// router.get("/holding", (req, res) => {
//     db.Holding.find({ user_id: req.user.id }).then((results) => {
//         res.json({
//             data: results,
//         })
//     })
// });


router.post("/transactions/addcoin", (req, res) => {
    console.log(req.body)
    db.Transaction.create({
        coin: req.body.coin,
        quantity: parseFloat(req.body.quantity),
        user_id: req.user.id,
        buyPrice: parseFloat(req.body.buyPrice),
        currency: req.body.currency,
        startDate: req.body.startDate
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

// router.patch("/holding/:id", ({ body, params }, res) => {
//     db.Holding.findByIdAndUpdate(
//         params.id,
//         {
//             $set: { "holding_current": name },
//             $push: { "holding_history": body.transaction }
//         },
//         { new: true, runValidators: true }
//     ).then((updated) => {
//         res.json({
//             data: updated,
//         });
//     });
// });


// router.delete("/holding/:id", (req, res) => {
//     db.Holding.findByIdAndDelete(req.params.id).then((deleted) => {
//         res.json({
//             data: true,
//         });
//     });
// });


module.exports = router
