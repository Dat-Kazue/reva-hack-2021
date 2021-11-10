const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://deon:deondmello@deonps.antgg.mongodb.net/reva_hack?retryWrites=true&w=majority');
}
