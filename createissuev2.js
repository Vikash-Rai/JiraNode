// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

const bodyData = `{
  "update": {
    "worklog": [
      {
        "add": {
          "timeSpent": "60m",
          "started": "2019-07-05T11:05:00.000+0000"
        }
      }
    ]
  },
  "fields": {
    "summary": "Main order flow broken",
    "parent": {
      "key": "PROJ-123"
    },
    "issuetype": {
      "id": "10000"
    },
    "components": [
      {
        "id": "10000"
      }
    ],
    "customfield_20000": "06/Jul/19 3:25 PM",
    "customfield_40000": "Occurs on all orders",
    "customfield_70000": [
      "jira-administrators",
      "jira-software-users"
    ],
    "project": {
      "id": "10000"
    },
    "description": "Order entry fails when selecting supplier.",
    "reporter": {
      "id": "5b10a2844c20165700ede21g"
    },
    "fixVersions": [
      {
        "id": "10001"
      }
    ],
    "customfield_10000": "09/Jun/19",
    "priority": {
      "id": "20000"
    },
    "labels": [
      "bugfix",
      "blitz_test"
    ],
    "timetracking": {
      "remainingEstimate": "5",
      "originalEstimate": "10"
    },
    "customfield_30000": [
      "10000",
      "10002"
    ],
    "customfield_80000": {
      "value": "red"
    },
    "security": {
      "id": "10000"
    },
    "environment": "UAT",
    "versions": [
      {
        "id": "10000"
      }
    ],
    "duedate": "2019-03-11",
    "customfield_60000": "jira-software-users",
    "customfield_50000": "Could impact day-to-day work.",
    "assignee": {
      "id": "5b109f2e9729b51b54dc274d"
    }
  }
}`;

fetch('https://.atlassian.net/rest/api/2/issue', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      ''
    ).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: bodyData
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));