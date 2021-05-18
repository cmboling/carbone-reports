  // const fs = require('fs');
  // const carbone = require('carbone');

  // // Data to inject
  // var data = {
  //   firstname : 'Chelsea',
  //   lastname : 'Boling'
  // };

  // // Generate a report using the sample template provided by carbone module
  // // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
  // // Of course, you can create your own templates!
  // carbone.render('./test-template.odt', data, function(err, result){
  //   if (err) {
  //     return console.log(err);
  //   }
  //   // write the result
  //   fs.writeFileSync('result.odt', result);
  // });


const fs = require('fs');
const carbone = require('carbone');

// data object to inject
let data = {
  firstname : 'Chelsea',
  lastname : 'Boling'
};

// options object is used to pass more parameters to carbone render function 
let options = {
  convertTo: 'pdf' //can be docx, txt, ...
}

carbone.render('./test-template.odt', data, options, (err, res) => {
    if (err) {
      return console.log(err);
    }
    // fs is used to create the PDF file from the render result
    fs.writeFileSync('./result.pdf', res);
    process.exit();
});