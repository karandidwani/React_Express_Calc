var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Root@123',
        database : 'dropboxdb',
        port	 : 3306
    });
    return connection;
}


function insertData(callback,sqlQuery){

    console.log("\nSQL Query::"+sqlQuery);

    var connection=getConnection();

    connection.query(sqlQuery, function(err) {
        if(err){
            console.log("ERROR: " + err.message);
        }
        else
        {	// return err or result
            console.log("DB Results:");
            callback(err);
        }
    });
    console.log("\nConnection closed..");
    connection.end();
}

exports.insertData=insertData;