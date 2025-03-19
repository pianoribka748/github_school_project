const https = require('https');

https.get('https://api.github.com/repos/username/github_school_project', (res) => {
  const statusCode = res.statusCode;
  if (statusCode === 200) {
    console.log("Success!");
  } else {
    console.error("Request failed with status code: " + statusCode);
  }
}).on('error', (e) => {
  console.error(e);
});
