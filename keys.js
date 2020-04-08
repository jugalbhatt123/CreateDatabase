dbPassword = 'mongodb+srv://<username>:<password>@mycluster-bftbr.mongodb.net/test?retryWrites=true&w=majority'
console.log(dbPassword);

module.exports = {
    mongoURI: dbPassword
};

