export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      // Assuming API call is successful
      const responseData = { /* Your API response data */ };
      resolve(responseData);
      // If there's an error, you can reject the promise
      // reject(new Error("API call failed"));
    }, 1000); // Simulating a 1-second delay
  });
}
