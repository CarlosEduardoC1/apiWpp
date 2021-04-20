const express = require('express');
const cors = require('cors');
const wbm = require('./services/wbm');
const app = express();

const venonRouter = require("./routes/venom");

app.use(cors());
app.options('*', cors());
app.use(express.json());

wbm.start()
.then(e => {console.log('then', e)})
.catch(error => console.log('catch ',error));

app.use('/venon', venonRouter);

app.listen(process.env.PORT || 8512, function () {
    console.log("Express in = ", this.address().port, app.settings.env);
});
