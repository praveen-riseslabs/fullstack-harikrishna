const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    emp_name: {
        type: String,
        required: true
    },
    emp_id: {
        unique: true,
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    reporting_manager: {
        type: String,
        required: true,
    },
    hr_manager: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

const EmployeeModel = mongoose.model('employee', EmployeeSchema);
module.exports = EmployeeModel;