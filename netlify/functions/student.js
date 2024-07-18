exports.handler = async function(event, context) {
    const params = event.queryStringParameters;
    const name = params.name;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello ${name}` }),
      };

};
  