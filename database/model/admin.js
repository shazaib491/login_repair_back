const mongoose = require('mongoose')
const config = require('./../connection')
const bcrypt = require('bcryptjs');
const adminSchema = ({
  uname: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

const admin = module.exports = mongoose.model('admin', adminSchema);

module.exports.register = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10)
  data.password = hashedPassword;
  const query = {
    email: data.email
  };
  const estimate = await admin.countDocuments(query);
  if (estimate > 0) {
    return estimate;
  } else {
    return await data.save()

  }

}

module.exports.getUSerByEmail = async (email) => {
  return await admin.findOne({
    "email": email
  })



}



module.exports.comparePassword = async (candidiatePassword, hash) => {
  return await bcrypt.compare(candidiatePassword, hash)
}
