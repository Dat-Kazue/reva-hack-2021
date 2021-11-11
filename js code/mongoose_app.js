const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://deon:deondmello@deonps.antgg.mongodb.net/reva_hack?retryWrites=true&w=majority');
}

const blogSchema = new Schema({
    report_id:  String,
    user_name : String,
    defination_c:   String, // here the user defines the type of crime committed
    discription_of_crime : [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    image: Buffer,
    meta: {
      report_id: Number,
      time_:  [{type:Date,default: Date.now}]
    }
  });

// ceating model
