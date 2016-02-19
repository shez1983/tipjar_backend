module.exports = function (server) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/', server.loopback.status());
    server.use(router);

//    var Employee = server.models.Employee;
//    var persistedModelCreate = Employee.create;
//    console.log("SERVER: " + JSON.stringify() + ",");
//
//    console.log("SERVER.MODELS: " + JSON.stringify(server.models) + ",");
//
//    Employee.create = function (data, callback) {
//        //        console.log("OVERWRITTEN CREATE METHOD");
//        //        console.log("SERVER: " + JSON.stringify(server) + ",");
//        //        console.log("SERVER.MODELS: " + JSON.stringify(server.models) + ",");
//
//        console.log("EMPOLYEE: " + JSON.stringify(this) + ",");
//        console.log("DATA: " + JSON.stringify(data) + ",");
//        console.log("CALLBACK: " + JSON.stringify(callback));
//
//        persistedModelCreate.call(Employee, data, function (err, models) {
//            console.log("---CALLBACK ERR: " + JSON.stringify(err) + ",");
//            console.log("---CALLBACK MODELS: " + JSON.stringify(models));
//            return data;
//        });
//    }
};


//module.exports = function(app) {
//  var Note = app.models.Note;
//  var find = Note.find;
//  var cache = {};
// 
//  Note.find = function(filter, cb) {
//    var key = '';
//    if(filter) {
//      key = JSON.stringify(filter);
//    }
//    var cachedResults = cache[key];
//    if(cachedResults) {
//      console.log('serving from cache');
//      process.nextTick(function() {
//        cb(null, cachedResults);
//      });
//    } else {
//      console.log('serving from db');
//      find.call(Note, function(err, results) {
//        if(!err) {
//          cache[key] = results;
//        }
//        cb(err, results);
//      });;
//    }
//  }
//}