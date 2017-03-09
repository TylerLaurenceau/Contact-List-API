// Require your controllers here
const ContactController = require("../controllers/contact")

module.exports = (app) => {
  // Add your routes here
  app.get('/contacts/',ContactController.findAll);
  app.get('/contacts/:id', ContactController.find);
  app.post('/contacts/', ContactController.create);
  app.put('/contacts/:id', ContactController.update);
  app.delete('/contacts/:id', ContactController.takeOut);
};
