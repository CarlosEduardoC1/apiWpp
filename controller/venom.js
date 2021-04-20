const wbm = require('../services/wbm');

exports.send = async (req, res, next) => {
    console.log(req.body);
    const phenes = req.body.phone;
    const msg = req.body.message;
    await wbm.send(phenes, msg)
        .then(() => { return res.status(200).json({ msg: "Mensagem enviada", status: 200 }); })
        .catch(err => { return res.status(400).json({ msg: "error", error: err, status: 400 }) });
},

    exports.contacts = async (req, res, next) => {
        return res.status(200).json({ contatos: contacts });
    }