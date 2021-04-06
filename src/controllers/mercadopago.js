const mercadopago = require ('mercadopago');
const { succesfulCheckoutEmail } = require("../util/succesfulCheckoutEmail");

mercadopago.configure({
    access_token: '***REMOVED***'
});

const MercadoPagoController = async (req, res) => {

  const { preference } = req.body;

  try{
    const response = await mercadopago.preferences.create(preference);
    res.json(response);
  }catch(err){
    res.send(err);
    console.log(err)
  }
}

module.exports = {
  MercadoPagoController
}