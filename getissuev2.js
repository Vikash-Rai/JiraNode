fetch('https://.atlassian.net/rest/api/2/events', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      ''
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));