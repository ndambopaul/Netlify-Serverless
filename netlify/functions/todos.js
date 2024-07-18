const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const params = event.queryStringParameters;
  const apiUrl = params.url;

  if (!apiUrl) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing 'url' query parameter" }),
    };
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching data: ", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
