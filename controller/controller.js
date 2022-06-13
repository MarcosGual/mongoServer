const { Gato } = require("../models/model");

const vistaUno = (req, res) => {
  res.render("index", { title: "Express" });
};

const vistaGatitos = async (req, res) => {
  const gatitos = await Gato.find();
  res.json({ gatitos });
};

const crearGatito = async (req, res) => {
  console.log(req.body);
  try {
    const gatito = new Gato(req.body);
    await gatito.save();
    console.log("miau");
    res.json({ msg: "miau" });
  } catch (e) {
    //res.json({ msg: "No se puede crear el gatito..." });
    res.status(501).json({ msg: "No se puede crear el gatito... intente luego por favor." });
  }
};

module.exports = { vistaUno, crearGatito, vistaGatitos };
