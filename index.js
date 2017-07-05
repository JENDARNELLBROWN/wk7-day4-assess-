const express = require("express");
const app = express();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');




app.listen(3000, function(){
    console.log("App running on local host:3000");
});



app.get("/user/:user2/:nname/:pic/:contact/:school/:jb/:emp/:cando/:call:/street/:loc", function(req, res) {
    let user      = req.params.userId;
        user2     = req.params.userName;
        nname     = req. params.name;
        pic       = req.params.avatar
        contact   = req.params.email;
        school    = req.params.university;
        jb        = req.params.job;
        emp       = req.params.company;
        cando     = req.params.skills;
        call      = req.params.phone;
        street    = req.params.address;
        loc       = req.params.country;



res.send(user + " ", user2 + " " + nname + " " + pic + " " + contact + " " + school + " " + jb + " " + emp + " " + cando + " " + call, " " + street + " " + loc  );
});








// {"id":1,"username":"hjuza0","name":"Hamlen Juza","avatar":"https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1","email":"hjuza0@blogger.com","university":"Pomor State University","job":"Engineer IV","company":"Stark, Feil and Bode","skills":["DMVPN","HDX","Rhino 3D"],"phone":"7-(397)813-7803","address":{"street_num":"78226","street_name":"Ryan","city":"Kamennogorsk","state_or_province":null,"postal_code":"188950","country":"Russia"}},
