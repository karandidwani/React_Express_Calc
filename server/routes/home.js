var mysql = require('./mysql');

function signup(req, res) {


    var firstname = req.body.firstname;
    var lastname = req.body.password;
    var email = req.body.email;
    var password = req.body.password;

    var sqlInsertQuery = "insert into dropboxdb.userdata (firstname, lastname, email, password) values ('"+firstname+"','"+lastname+"','"+email+"','"+password+"');";

    console.log("Query is "+sqlInsertQuery);

    mysql.insertData(function (err){
        if(err){
            throw err;
            console.log("error in inserting data is :"+err);
        }else{

                res.setHeader('Content-Type', 'application/json');
                console.log("result after inserting data is :");
               // res.send(JSON.stringify({result: result}));
                console.log("hello");
                res.send({status:201,message: "User Data Inserted"});

        }
    },sqlInsertQuery);
}

exports.signup = signup;