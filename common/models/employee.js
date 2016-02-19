module.exports = function (Employee) {
    Employee.create = function (data, cb) {
        console.log("OVERWRITTEN CREATE METHOD");

        data.image = this.storeImage();
        console.log(data);
        create.call(Employee, data, cb)
    }


    Employee.storeImage = function (image) {
        // TODO: parse uploaded image, save in file system and return the relative URL

        return null;
    }
};