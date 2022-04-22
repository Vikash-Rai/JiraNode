import fetch from 'node-fetch';

const bodyData = {
    "fields":{
        "project":{
            "key":"VR"
        },
        "summary":"Jira Rest API via NodeJS",
        "description":{
            "type":"doc",
            "version":1,
            "content":[
                {
                    "type":"paragraph",
                    "content":[
                        {
                            "type":"text",
                            "text":"description"
                        }]
                }]
        },
        "issuetype":{
            "name":"Task"             //use Epic or Task
        }
    }
}

fetch('https://.atlassian.net/rest/api/3/issue', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${Buffer.from(
       'mail:token'
    ).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(bodyData)
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));