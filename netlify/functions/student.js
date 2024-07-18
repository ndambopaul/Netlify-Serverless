exports.handler = async function(event, context) {
    const params = event.queryStringParameters;
    const url = params.url;

    try {
        const response = await fetch(url);
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
  