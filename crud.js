fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });



fs.readFile('employees.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })


fs.appendFile('employees.json', ' This is my text.', function (err,data) {
    if (err) throw err;
    console.log(data);
  });

fs.unlink('employees.json', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });