const Contact = require("../models").Contact;

module.exports = {
  create(req,res) {
    Contact.create({
      name: req.body.name,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      photo_url: req.body.photo,
      email: req.body.email,
    })
    .then(contact => res.status(200).send(contact))
    .catch(error => res.status(400).send(error));
},


findAll (req, res) {
  Contact.findAll()
  .then(contacts => res.status(200).send(contacts))
  .catch(error => res.status(400).send(error));
},


find (req, res) {
  Contact.findById(req.params.id)
  .then(contacts => res.status(200).send(contacts))
  .catch(error => res.status(400).send(error));
},


update(req, res) {
  Contact.update(req.body, {
    fields: ['name', 'phone', 'city', 'state', 'photo', 'email'],
    where: {
      id:req.params.id
    }
  })
.then(contact => res.status(200).send(contact))
.catch(error => res.status(400).send(error));
},


takeOut(req, res) {
  Contact.destroy({
  where: {
    id:req.params.id
  }
})
.then(contact => res.status(200).send(contacts))
.catch(error => res.status(400).send(error));
}
}
