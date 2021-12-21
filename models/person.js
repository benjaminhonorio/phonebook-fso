const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const url = process.env.MONGODB_URI;

console.log("Connecting to ", url);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    unique: true,
  },
  number: {
    type: String,
    validate: {
      validator: function (v) {
        const arr = v.match(/(\d+)/g);
        if (arr.length) {
          return arr.reduce((acc, el) => acc.concat(el), "").length >= 8;
        }
        return false;
      },
      message: (props) =>
        `${props.value} is not a valid phone number! There should be at least 8 digits`,
    },
    required: true,
  },
});

personSchema.plugin(uniqueValidator);

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
