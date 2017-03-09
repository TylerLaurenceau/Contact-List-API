#Contacts API

##URL
* localhost:8000/contacts/

##Method
* GET | POST | DELETE | PUT

##URL Params
* Name - STRING
* Phone - STRING
* City - STRING
* State - STRING
* Photo_Url - STRING
* email - STRING

##Required Params for creating a new Contact
* Name - STRING
* Phone - STRING

##Optional Params for creating a new Contact
* City - STRING
* State - STRING
* Photo_Url - STRING
* email - STRING

##Success status
* 200

##Error status
* 400

##Routes
*   app.get('/contacts/',ContactController.findAll);
*   app.get('/contacts/:id', ContactController.find);
*   app.post('/contacts/', ContactController.create);
*   app.put('/contacts/:id', ContactController.update);
*   app.delete('/contacts/:id', ContactController.takeOut);
