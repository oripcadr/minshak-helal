"use strict";

const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());

const axios = require("axios");
const fs = require("fs");

var fileupload = require("express-fileupload");
app.use(fileupload());

app.use(express.static("uploaded_files"));
// app.use(express.static('tamplates'));

app.set("port", process.env.PORT || 4000);

var sql = require("mssql");
//var nodemailer = require('nodemailer');

// //SQL Server configuration
// var config = {
//     "user": "sa",
//     "password": "!transway123", // Database password
//     "server": "IRENA", // Server IP address
//     "database": "neshek", // Database name
//     "options": {
//         "trustServerCertificate": true,
//         "trustedConnection": false ,
//         "enableArithAbort": true,
//         "instancename":"SQLEXPRESS",

//     },
//     port:1433
// }

// SQL Server configuration
// DEV:HELAL- SQL Server configuration
var config = {
  user: "AdminDB",
  password: "Admin123456!", // Database password
  server: "HELAL", // Server IP address
  database: "neshek", // Database name
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 1433,
};

// DEV:ORI- SQL Server configuration
// var config = {
//     "user": "sa1",
//     "password": "ids8eWE234", // Database password
//     "server": "ORI", // Server IP address
//     "database": "neshek", // Database name
//     "options": {
//         "trustServerCertificate": true,
//         "trustedConnection": false ,
//         "enableArithAbort": true//,
// //        "instancename":"SQLEXPRESS",

//     },
//     port:1433

// }

// Connect to SQL Server
sql.connect(config, (err) => {
  if (err) {
    throw err;
  }
  console.log("Connection Successful!");
});

app.get("/test", function (req, res) {
  let final_res = { success: "Neshek 123456" };
  res.send(final_res);
});

app.get("/test_db", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select count(*) from workers";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_workers", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from workers";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_neshek_types", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from neshek_types";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_weapons", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from weapons";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_munitions_info", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from munitions";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_new_action", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into munitions (date,time,action,count,kaliber,worker,asmachta,comments,sign_1, sign_2,files) values ('" +
      req.body.date +
      "','" +
      req.body.time +
      "','" +
      req.body.action +
      "','" +
      req.body.count +
      "','" +
      req.body.kaliber +
      "','" +
      req.body.worker +
      "','" +
      req.body.asmachta +
      "','" +
      req.body.comments +
      "','" +
      req.body.sign_1 +
      "','" +
      req.body.sign_2 +
      "','" +
      req.body.files +
      "')";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_new_site", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into sites (site_name,type,address,contact_person,phone,email ) values ('" +
      req.body.site_name +
      "','" +
      req.body.type +
      "','" +
      req.body.address +
      "','" +
      req.body.contact_person +
      "','" +
      req.body.phone +
      "','" +
      req.body.email +
      "')";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_sites", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from sites";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_site", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "update sites set site_name='" +
      req.body.site_name +
      "',type='" +
      req.body.type +
      "',address='" +
      req.body.address +
      "',contact_person='" +
      req.body.contact_person +
      "',phone='" +
      req.body.phone +
      "',email='" +
      req.body.email +
      "' where id='" +
      req.body.id +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/add_shifts", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into shifts (worker_id,type,start_time,end_time,date) values ('" +
      req.body.worker_id +
      "','" +
      req.body.type +
      "','" +
      req.body.start_time +
      "','" +
      req.body.end_time +
      "','" +
      req.body.date +
      "')";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_shifts", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "update shifts set type='" +
      req.body.type +
      "',start_time='" +
      req.body.start_time +
      "',end_time='" +
      req.body.end_time +
      "' where id='" +
      req.body.id +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_shifts", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from shifts";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_site", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from sites where id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_shift", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from shifts where id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_criticism", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from criticism";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_critics", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();
    let fix_critics = JSON.parse(req.body.fix_criticism);

    let sql_q_2 =
      "insert into criticism (doc_path, sign,type,place,date,worker,subject,score,comments,status) values ('" +
      req.body.doc_path +
      "','" +
      req.body.sign +
      "','" +
      req.body.type +
      "','" +
      req.body.place +
      "','" +
      req.body.date +
      "','" +
      req.body.worker +
      "','" +
      req.body.subject +
      "','" +
      req.body.score +
      "','" +
      req.body.comments +
      "','" +
      req.body.status +
      "'); SELECT SCOPE_IDENTITY() as ID";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response

      let critic_id = recordset3.recordset[0].ID;

      for (let i = 0; i < fix_critics.length; i++) {
        let sql_q_3 =
          "insert into fix_criticism (criticism_id,fix_desc,status) values ('" +
          critic_id +
          "','" +
          fix_critics[i].comment +
          "','" +
          fix_critics[i].status +
          "') ; ";

        request.query(sql_q_3, function (err, recordset4) {});
      }

      res.send({ seccess: true });
    });
  });
});

app.post("/get_fix_criticism_by_id", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "select * from fix_criticism where criticism_id='" +
      req.body.criticism_id +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_users", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from users";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_new_user", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into users (firstname,lastname,role_name,gender,tz,address,phone,email,b_date,user_name,password,mishmarot_1,mishmarot_2,mishmarot_3,neshakim_1,neshakim_2,neshakim_3 ,pikuah_1,pikuah_2,pikuah_3,mlay_1,mlay_2,mlay_3,tafkidim_1,tafkidim_2,tafkidim_3) values ('" +
      req.body.firstname +
      "','" +
      req.body.lastname +
      "','" +
      req.body.role_name +
      "','" +
      req.body.gender +
      "' ,'" +
      req.body.tz +
      "','" +
      req.body.address +
      "','" +
      req.body.phone +
      "','" +
      req.body.email +
      "','" +
      req.body.b_date +
      "','" +
      req.body.user_name +
      "','" +
      req.body.password +
      "' ,'" +
      req.body.mishmarot_1 +
      "','" +
      req.body.mishmarot_2 +
      "','" +
      req.body.mishmarot_3 +
      "','" +
      req.body.neshakim_1 +
      "','" +
      req.body.neshakim_2 +
      "','" +
      req.body.neshakim_3 +
      "','" +
      req.body.pikuah_1 +
      "','" +
      req.body.pikuah_2 +
      "','" +
      req.body.pikuah_3 +
      "','" +
      req.body.mlay_1 +
      "' ,'" +
      req.body.mlay_2 +
      "','" +
      req.body.mlay_3 +
      "' ,'" +
      req.body.tafkidim_1 +
      "','" +
      req.body.tafkidim_2 +
      "','" +
      req.body.tafkidim_3 +
      "')";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/login", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "select * from users where user_name ='" +
      req.body.email +
      "' and password ='" +
      req.body.password +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_eq", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into equipment (snif,eq_type,count_total,count_in_use,in_mahsan, takul, last_update,catogory,supplier,description ,price, img_path) values('" +
      req.body.snif +
      "','" +
      req.body.eq_type +
      "','" +
      req.body.count_total +
      "','" +
      req.body.count_in_use +
      "','" +
      req.body.in_mahsan +
      "','" +
      req.body.takul +
      "', GETDATE(),'" +
      req.body.catogory +
      "','" +
      req.body.supplier +
      "','" +
      req.body.description +
      "','" +
      req.body.price +
      "','" +
      req.body.img_path +
      "');SELECT SCOPE_IDENTITY() as ID";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response

      let eq_in_site = JSON.parse(req.body.eq_in_site);
      console.log(eq_in_site);

      let last_id = recordset3.recordset[0].ID;

      for (let i = 0; i < eq_in_site.length; i++) {
        let sql_q_3 =
          "insert into eq_in_site (site_name,valid_count,in_use,takul,eq_id) values('" +
          eq_in_site[i].site_name +
          "','" +
          eq_in_site[i].valid_count +
          "','" +
          eq_in_site[i].in_use +
          "','" +
          eq_in_site[i].takul +
          "','" +
          last_id +
          "')";
        request.query(sql_q_3);
      }

      res.send(recordset3);
    });
  });
});

app.post("/edit_eq", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "update equipment set img_path='" +
      req.body.img_path +
      "', price='" +
      req.body.price +
      "', description='" +
      req.body.description +
      "', supplier='" +
      req.body.supplier +
      "', catogory='" +
      req.body.catogory +
      "', snif='" +
      req.body.snif +
      "',eq_type='" +
      req.body.eq_type +
      "',count_total='" +
      req.body.count_total +
      "',count_in_use='" +
      req.body.count_in_use +
      "' ,in_mahsan='" +
      req.body.in_mahsan +
      "',takul='" +
      req.body.takul +
      "',last_update=GETDATE()  where id='" +
      req.body.id +
      "'";

    request.query(sql_q_2, function (err, recordset3) {
      let sql_q_4 = "delete from eq_in_site where eq_id='" + req.body.id + "'";

      request.query(sql_q_4);

      let eq_in_site = JSON.parse(req.body.eq_in_site);
      console.log(eq_in_site);

      for (let i = 0; i < eq_in_site.length; i++) {
        let sql_q_3 =
          "insert into eq_in_site (site_name,valid_count,in_use,takul,eq_id) values('" +
          eq_in_site[i].site_name +
          "','" +
          eq_in_site[i].valid_count +
          "','" +
          eq_in_site[i].in_use +
          "','" +
          eq_in_site[i].takul +
          "','" +
          req.body.id +
          "')";
        request.query(sql_q_3);
      }
      res.send(recordset3);
    });
  });
});

app.post("/save_move_eq", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into move_eq (eq_name,from_site,to_site,count,reason,user_name, comments) values ('" +
      req.body.eq_name +
      "','" +
      req.body.from_site +
      "','" +
      req.body.to_site +
      "','" +
      req.body.count +
      "','" +
      req.body.reason +
      "','" +
      req.body.user_name +
      "','" +
      req.body.comments +
      "') ";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_eq", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from equipment where id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_eq", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "SELECT e.*, COALESCE(s.cnt,0) AS site_count FROM equipment e LEFT JOIN ( SELECT eq_id, COUNT(*) cnt FROM eq_in_site GROUP BY eq_id) s ON e.id = s.eq_id;";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_eq_sites", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "select * from eq_in_site where eq_id ='" + req.body.eq_id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_user", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from users where id ='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_alert_tachmoshet", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from alert_tachmoshet";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response

      let sql_q_2 =
        "insert into alert_tachmoshet (tachmoshet_num, send_auto) values('" +
        req.body.tachmoshet_num +
        "','" +
        req.body.send_auto +
        "')";

      // query to the database and get the records
      request.query(sql_q_2, function (err, recordset3) {
        // send records as a response
        res.send(recordset3);
      });
    });
  });
});

app.post("/get_alert_tachmoshet", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from alert_tachmoshet";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_role_permissions", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "select * from role_permission where role_id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/set_role_permission", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();
    let sql_q_2 = "";

    if (req.body.type == "view_opt") {
      sql_q_2 =
        "update role_permission set view_opt='" +
        req.body.view_opt +
        "' where id='" +
        req.body.id +
        "'";
    }

    if (req.body.type == "edit_opt") {
      sql_q_2 =
        "update role_permission set edit_opt='" +
        req.body.edit_opt +
        "' where id='" +
        req.body.id +
        "'";
    }

    if (req.body.type == "delete_opt") {
      sql_q_2 =
        "update role_permission set delete_opt='" +
        req.body.delete_opt +
        "' where id='" +
        req.body.id +
        "'";
    }

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_roles", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "select * from roles";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_role", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from roles where id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/add_role", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into roles (role_name) values ('" + req.body.role_name + "') ";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/edit_role", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "update roles set role_name='" +
      req.body.role_name +
      "' where id='" +
      req.body.id +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_user", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "update users set firstname='" +
      req.body.firstname +
      "', lastname='" +
      req.body.lastname +
      "', role_name='" +
      req.body.role_name +
      "', gender='" +
      req.body.gender +
      "', tz='" +
      req.body.tz +
      "', address='" +
      req.body.address +
      "', phone='" +
      req.body.phone +
      "', email='" +
      req.body.email +
      "', b_date='" +
      req.body.b_date +
      "', user_name='" +
      req.body.user_name +
      "', password='" +
      req.body.password +
      "', mishmarot_1='" +
      req.body.mishmarot_1 +
      "', mishmarot_2='" +
      req.body.mishmarot_2 +
      "', mishmarot_3='" +
      req.body.mishmarot_3 +
      "', neshakim_1='" +
      req.body.neshakim_1 +
      "', neshakim_2='" +
      req.body.neshakim_2 +
      "', neshakim_3='" +
      req.body.neshakim_3 +
      "', pikuah_1='" +
      req.body.pikuah_1 +
      "', pikuah_2='" +
      req.body.pikuah_2 +
      "', pikuah_3='" +
      req.body.pikuah_3 +
      "', mlay_1='" +
      req.body.mlay_1 +
      "', mlay_2='" +
      req.body.mlay_2 +
      "', mlay_3='" +
      req.body.mlay_3 +
      "', tafkidim_1='" +
      req.body.tafkidim_1 +
      "', tafkidim_2='" +
      req.body.tafkidim_2 +
      "', tafkidim_3='" +
      req.body.tafkidim_3 +
      "'  where id ='" +
      req.body.id +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_new_worker", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let worker_equipment_t = JSON.parse(req.body.worker_equipment);

    let sql_q_2 =
      "insert into workers (salery_number,work_start,work_end,gender,last_name,salery_type,user_image, doc_1_date, doc_2_date, doc_3_date,name,role,snif,status,address,t_z,email,phone,b_date,w_level,salery_hour,access_app,access_manage,access_shifts,access_reports,doc_1,doc_2,doc_3) values ('" +
      req.body.salery_number +
      "', '" +
      req.body.work_start +
      "','" +
      req.body.work_end +
      "','" +
      req.body.gender +
      "','" +
      req.body.last_name +
      "','" +
      req.body.salery_type +
      "','" +
      req.body.user_image +
      "','" +
      req.body.doc_1_date +
      "','" +
      req.body.doc_2_date +
      "','" +
      req.body.doc_3_date +
      "',  '" +
      req.body.name +
      "','" +
      req.body.role +
      "','" +
      req.body.snif +
      "','" +
      req.body.status +
      "','" +
      req.body.address +
      "','" +
      req.body.t_z +
      "','" +
      req.body.email +
      "','" +
      req.body.phone +
      "','" +
      req.body.b_date +
      "','" +
      req.body.w_level +
      "','" +
      req.body.salery_hour +
      "','" +
      req.body.access_app +
      "','" +
      req.body.access_manage +
      "','" +
      req.body.access_shifts +
      "','" +
      req.body.access_reports +
      "','" +
      req.body.doc_1 +
      "','" +
      req.body.doc_2 +
      "','" +
      req.body.doc_3 +
      "');SELECT SCOPE_IDENTITY() as ID";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      let worker_id = recordset3.recordset[0].ID;
      // send records as a response
      //    res.send(recordset3);
      for (let i = 0; i < worker_equipment_t.length; i++) {
        let sql_q_3 =
          "insert into worker_equipment (worker_id,eq_type,eq_count,eq_num,eq_comments ,sign ) values ( '" +
          worker_id +
          "', '" +
          worker_equipment_t[i].eq_type +
          "','" +
          worker_equipment_t[i].eq_count +
          "','" +
          worker_equipment_t[i].eq_num +
          "','" +
          worker_equipment_t[i].eq_comments +
          "','" +
          req.body.sign +
          "');SELECT SCOPE_IDENTITY() as ID";

        // console.log(sql_q_3);
        request.query(sql_q_3, function (err, recordset4) {});
      }

      res.send(recordset3);
    });
  });
});

app.post("/get_worker_equipment", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "select * from worker_equipment where worker_id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_new_neshek", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into weapons (sign,form_14,weapon_img,kaliber,model,creator, number,type,statys,place,next_check) values ('" +
      req.body.sign +
      "','" +
      req.body.form_14 +
      "','" +
      req.body.weapon_img +
      "','" +
      req.body.kaliber +
      "','" +
      req.body.model +
      "','" +
      req.body.creator +
      "','" +
      req.body.number +
      "','" +
      req.body.type +
      "','" +
      req.body.statys +
      "','" +
      req.body.place +
      "','" +
      req.body.next_check +
      "')";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_worker", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from workers where id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_munition", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from munitions where id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_new_action", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "update munitions set date='" +
      req.body.date +
      "', time='" +
      req.body.time +
      "',action='" +
      req.body.action +
      "',count='" +
      req.body.count +
      "',kaliber='" +
      req.body.kaliber +
      "',count_left='" +
      req.body.count_left +
      "',worker='" +
      req.body.worker +
      "',place='" +
      req.body.place +
      "',asmachta='" +
      req.body.asmachta +
      "',comments='" +
      req.body.comments +
      "',sign_1='" +
      req.body.sign_1 +
      "',sign_2='" +
      req.body.sign_2 +
      "'  where id='" +
      req.body.id +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_hot_move", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "insert into hot_move (weapon_id,move_to,belong,date,time,sign) values('" +
      req.body.weapon_id +
      "','" +
      req.body.move_to +
      "','" +
      req.body.belong +
      "','" +
      req.body.date +
      "','" +
      req.body.time +
      "','" +
      req.body.sign +
      "')";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      //res.send(recordset3);
    });

    let status = "";
    if (req.body.move_to == "מאבטח") {
      status = "משוייך למאבטח";
    } else {
      status = "בכספת";
    }

    let sql_q_3 =
      "update weapons set belong='" +
      req.body.belong +
      "', statys='" +
      status +
      "' where id='" +
      req.body.weapon_id +
      "'";

    // query to the database and get the records
    request.query(sql_q_3, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_weapon", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 = "delete from weapons where id='" + req.body.id + "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_worker", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let worker_equipment_t = JSON.parse(req.body.worker_equipment);

    let sql_q_2 =
      "update workers set user_image='" +
      req.body.user_image +
      "', work_end='" +
      req.body.work_end +
      "', work_start='" +
      req.body.work_start +
      "',salery_number='" +
      req.body.salery_number +
      "', gender='" +
      req.body.gender +
      "', last_name='" +
      req.body.last_name +
      "',  salery_type='" +
      req.body.salery_type +
      "', name='" +
      req.body.name +
      "',role='" +
      req.body.role +
      "',snif='" +
      req.body.snif +
      "',status='" +
      req.body.status +
      "',address='" +
      req.body.address +
      "',t_z='" +
      req.body.t_z +
      "',email='" +
      req.body.email +
      "',phone='" +
      req.body.phone +
      "',b_date='" +
      req.body.b_date +
      "',w_level='" +
      req.body.w_level +
      "',salery_hour='" +
      req.body.salery_hour +
      "',access_app='" +
      req.body.access_app +
      "',access_manage='" +
      req.body.access_manage +
      "',access_shifts='" +
      req.body.access_shifts +
      "',access_reports='" +
      req.body.access_reports +
      "',doc_1='" +
      req.body.doc_1 +
      "',doc_2='" +
      req.body.doc_2 +
      "',doc_3='" +
      req.body.doc_3 +
      "',doc_1_date='" +
      req.body.doc_1_date +
      "',doc_2_date='" +
      req.body.doc_2_date +
      "',doc_3_date='" +
      req.body.doc_3_date +
      "'  where id='" +
      req.body.id +
      "'";

    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response

      let worker_id = req.body.id;
      // send records as a response

      let sql_q_4 =
        "delete from worker_equipment where worker_id='" + worker_id + "'";

      // console.log(sql_q_3);
      request.query(sql_q_4, function (err, recordset5) {});

      //    res.send(recordset3);
      for (let i = 0; i < worker_equipment_t.length; i++) {
        let sql_q_3 =
          "insert into worker_equipment (worker_id,eq_type,eq_count,eq_num,eq_comments ,sign ) values ( '" +
          worker_id +
          "', '" +
          worker_equipment_t[i].eq_type +
          "','" +
          worker_equipment_t[i].eq_count +
          "','" +
          worker_equipment_t[i].eq_num +
          "','" +
          worker_equipment_t[i].eq_comments +
          "','" +
          req.body.sign +
          "');SELECT SCOPE_IDENTITY() as ID";

        // console.log(sql_q_3);
        request.query(sql_q_3, function (err, recordset4) {});
      }

      res.send(recordset3);
    });
  });
});

app.post("/update_worker_status", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "update workers set status='" +
      req.body.status +
      "' where id='" +
      req.body.id +
      "'";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/add_new_kaliber", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into kalibers (name) values ('" + req.body.name + "')";

    //  console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_new_kaliber", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "update kalibers set name='" +
      req.body.name +
      "' where id ='" +
      req.body.id +
      "'";

    //  console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/add_new_creator_model", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into creators_models (creator,model,kaliber) values ('" +
      req.body.creator +
      "','" +
      req.body.model +
      "','" +
      req.body.kaliber +
      "')";

    //  console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_creators_models", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from creators_models";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_creator_model", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "delete from creators_models where id='" + req.body.id + "'";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_creator_model", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "update creators_models set creator='" +
      req.body.creator +
      "',model='" +
      req.body.model +
      "',kaliber='" +
      req.body.kaliber +
      "' where id='" +
      req.body.id +
      "'";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});
app.post("/add_new_neshek_type", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into neshek_types (name) values ('" + req.body.name + "')";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/edit_new_neshek_type", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "update neshek_types set name='" +
      req.body.name +
      "' where id='" +
      req.body.id +
      "'";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_kalibers", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from kalibers";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_kaliber", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "delete from kalibers where id='" + req.body.id + "'";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_neshek_type", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "delete from neshek_types where id='" + req.body.id + "'";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_eq", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let worker_equipment_t = JSON.parse(req.body.worker_equipment);

    // let sql_q_2 ="update workers set name='"+req.body.name+"',role='"+req.body.role+"',snif='"+req.body.snif+"',status='"+req.body.status+"',address='"+req.body.address+"',t_z='"+req.body.t_z+"',email='"+req.body.email+"',phone='"+req.body.phone+"',b_date='"+req.body.b_date+"',w_level='"+req.body.w_level+"',salery_hour='"+req.body.salery_hour+"',access_app='"+req.body.access_app+"',access_manage='"+req.body.access_manage+"',access_shifts='"+req.body.access_shifts+"',access_reports='"+req.body.access_reports+"',doc_1='"+req.body.doc_1+"',doc_2='"+req.body.doc_2+"',doc_3='"+req.body.doc_3+"',doc_1_date='"+req.body.doc_1_date+"',doc_2_date='"+req.body.doc_2_date+"',doc_3_date='"+req.body.doc_3_date+"'  where id='"+req.body.id+"'";

    // query to the database and get the records
    //   request.query(sql_q_2, function (err, recordset3) {
    // send records as a response

    let worker_id = req.body.worker_id;
    // send records as a response

    let sql_q_4 =
      "delete from worker_equipment where worker_id='" + worker_id + "'";

    // console.log(sql_q_3);
    request.query(sql_q_4, function (err, recordset5) {
      for (let i = 0; i < worker_equipment_t.length; i++) {
        let sql_q_3 =
          "insert into worker_equipment (worker_id,eq_type,eq_count,eq_num,eq_comments ,sign ) values ( '" +
          worker_id +
          "', '" +
          worker_equipment_t[i].eq_type +
          "','" +
          worker_equipment_t[i].eq_count +
          "','" +
          worker_equipment_t[i].eq_num +
          "','" +
          worker_equipment_t[i].eq_comments +
          "','" +
          req.body.sign +
          "');SELECT SCOPE_IDENTITY() as ID";

        //  console.log(sql_q_3);
        request.query(sql_q_3, function (err, recordset4) {});
      }

      res.send({ success: true });
    });

    //    res.send(recordset3);

    // });
  });
});

app.post("/edit_neshek", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let sql_q_2 =
      "update weapons set sign = '" +
      req.body.sign +
      "', form_14 = '" +
      req.body.form_14 +
      "', weapon_img = '" +
      req.body.weapon_img +
      "', kaliber = '" +
      req.body.kaliber +
      "', model = '" +
      req.body.model +
      "',creator = '" +
      req.body.creator +
      "', number='" +
      req.body.number +
      "',type='" +
      req.body.type +
      "',statys='" +
      req.body.statys +
      "',place='" +
      req.body.place +
      "',next_check='" +
      req.body.next_check +
      "' where id='" +
      req.body.id +
      "'";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_system", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into system (language, time_zone, start_time, end_time) values ('" +
      req.body.language +
      "','" +
      req.body.time_zone +
      "','" +
      req.body.start_time +
      "','" +
      req.body.end_time +
      "')";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_system", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "update system set language='" +
      req.body.language +
      "', time_zone='" +
      req.body.time_zone +
      "', start_time='" +
      req.body.start_time +
      "', end_time='" +
      req.body.end_time +
      "'";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_company", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into company (company_name, phone, phone_1, email , logo_path) values ('" +
      req.body.company_name +
      "','" +
      req.body.phone +
      "','" +
      req.body.phone_1 +
      "','" +
      req.body.email +
      "','" +
      req.body.logo_path +
      "')";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/update_company", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "update company set logo_path='" +
      req.body.logo_path +
      "', company_name='" +
      req.body.company_name +
      "', phone='" +
      req.body.phone +
      "', phone_1='" +
      req.body.phone_1 +
      "', email='" +
      req.body.email +
      "' where id=1";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_company", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from  company  where id='" + req.body.id + "'";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_system", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from  system  where id='" + req.body.id + "'";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_site_docs", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from site_docs";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_site_docs", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into site_docs (doc_name, category, dac_date, sign, doc_path) values ('" +
      req.body.doc_name +
      "','" +
      req.body.category +
      "','" +
      req.body.dac_date +
      "','" +
      req.body.sign +
      "','" +
      req.body.doc_path +
      "')";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_company_folder_docs", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into company_folder (file_name, valid_date, file_path) values ('" +
      req.body.doc_name +
      "','" +
      req.body.dac_date +
      "','" +
      req.body.doc_path +
      "')";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_company_folder_docs", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from company_folder";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_company_folder_docs", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "delete from company_folder where id ='" + req.body.id + "'";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_calendar_events", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from calendar_events";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_new_event", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into calendar_events (name,event_date,event_desc) values ('" +
      req.body.event_name +
      "','" +
      req.body.event_date +
      "','" +
      req.body.event_desc +
      "')";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_event", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "delete from calendar_events where id='" + req.body.id + "'";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/edit_event", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "update calendar_events set event_desc = '" +
      req.body.event_desc +
      "' name='" +
      req.body.event_name +
      "' ,event_date='" +
      req.body.event_date +
      "'   where id='" +
      req.body.id +
      "'";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_t_doc", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into training (t_name, t_date, file_path, t_type,t_for) values ('" +
      req.body.t_name +
      "','" +
      req.body.t_date +
      "','" +
      req.body.file_path +
      "','" +
      req.body.t_type +
      "','" +
      req.body.t_for +
      "')";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/get_all_training", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "select * from training ";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/delete_doc_training", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 = "delete from training where id='" + req.body.id + "'";

    //console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_new_cert", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into certificate (org_patrol,org_tz,org_role,org_number,org_phone,valid_date,m_name,m_tz,m_role,m_area,m_org_num,w_create,kaliber,w_number,w_type,bullets_num,bulets_num_text,general_carring,carring_active_only,carring_safe,pass_murshim,sing_1,sign_2,sign_3) values ('" +
      req.body.org_patrol +
      "','" +
      req.body.org_tz +
      "','" +
      req.body.org_role +
      "','" +
      req.body.org_number +
      "','" +
      req.body.org_phone +
      "','" +
      req.body.valid_date +
      "','" +
      req.body.m_name +
      "', '" +
      req.body.m_tz +
      "','" +
      req.body.m_role +
      "','" +
      req.body.m_area +
      "','" +
      req.body.m_org_num +
      "','" +
      req.body.w_create +
      "','" +
      req.body.kaliber +
      "','" +
      req.body.w_number +
      "', '" +
      req.body.w_type +
      "','" +
      req.body.bullets_num +
      "','" +
      req.body.bulets_num_text +
      "','" +
      req.body.general_carring +
      "', '" +
      req.body.carring_active_only +
      "','" +
      req.body.carring_safe +
      "','" +
      req.body.pass_murshim +
      "','" +
      req.body.sing_1 +
      "','" +
      req.body.sign_2 +
      "','" +
      req.body.sign_3 +
      "')";

    // console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/save_cert_neshek", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    //console.log(req.body.sign_2);

    let sql_q_2 =
      "insert into cert_neshek (sign_4, sign_4_w,sign_7_d_t, sign_8_d_t, sign_1_d_t,sign_2_d_t,sign_3_d_t,sign_4_d_t,sign_5_d_t,sign_6_d_t,mahsanit_count,kadurim_count, sign_1_w, sign_2_w, sign_3_w, worker_name,t_z,area,cert_date,organization_mun,organization_date,neshek_id,cert_start,cert_end,sign_1,sign_2,sign_3,mns,approved_docs) values ('" +
      req.body.sign_4 +
      "','" +
      req.body.sign_4_w +
      "', '" +
      req.body.sign_7_d_t +
      "', '" +
      req.body.sign_8_d_t +
      "',   '" +
      req.body.sign_1_d_t +
      "', '" +
      req.body.sign_2_d_t +
      "','" +
      req.body.sign_3_d_t +
      "','" +
      req.body.sign_4_d_t +
      "','" +
      req.body.sign_5_d_t +
      "','" +
      req.body.sign_6_d_t +
      "','" +
      req.body.mahsanit_count +
      "','" +
      req.body.kadurim_count +
      "','" +
      req.body.sign_1_w +
      "','" +
      req.body.sign_2_w +
      "','" +
      req.body.sign_3_w +
      "','" +
      req.body.worker_name +
      "','" +
      req.body.t_z +
      "','" +
      req.body.area +
      "','" +
      req.body.cert_date +
      "','" +
      req.body.organization_mun +
      "','" +
      req.body.organization_date +
      "','" +
      req.body.neshek_id +
      "','" +
      req.body.cert_start +
      "','" +
      req.body.cert_end +
      "','" +
      req.body.sign_1 +
      "','" +
      req.body.sign_2 +
      "','" +
      req.body.sign_3 +
      "','" +
      req.body.mns +
      "','" +
      req.body.approved_docs +
      "') ";

    console.log(sql_q_2);
    // query to the database and get the records
    request.query(sql_q_2, function (err, recordset3) {
      // send records as a response
      res.send(recordset3);
    });
  });
});

app.post("/upload_file", function (req, res) {
  let fileName = "";
  console.log(req.files);
  if (req.files) {
    let img_file = req.files.file;
    let d = new Date();

    const rawName = req.files.file.name;
    const buffer = Buffer.from(rawName, "latin1");
    fileName = buffer.toString("utf8");

    fileName = d.getTime() + "_" + fileName;

    console.log(fileName);

    if (img_file) {
      img_file.mv(__dirname + "/uploaded_files/" + fileName, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("uploaded");
        }
      });
    }
  }

  res.send({ fileName: fileName });
});

setInterval(function () {
  // sync_monday_products();
}, 30000);

const server = app.listen(app.get("port"), function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Node.js API app running at http://%s:%s", host, port);
});

process.on("SIGINT", () => {
  console.log("Received SIGINT. Closing server...");
  server.close(() => {
    console.log("Server closed. Exiting process...");
    process.exit(0);
  });
});
