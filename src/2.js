const https = require('https');
https.get('https://api.github.com/repos/github_school_project', (res) => {
  const statusCode = res.statusCode;
  console.log(`Status code: ${statusCode}`);
  if (statusCode === 200) {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(JSON.parse(data));
    });
  } else {
    console.error(`Something went wrong: ${statusCode}`);
  }
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
