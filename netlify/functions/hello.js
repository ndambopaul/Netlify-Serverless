exports.handler = async function(event, context) {
    console.log("Hello, this is a message from the Netlify serverless function!");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Function executed successfully!" }),
    };
  };
  