import Parse from "parse";
Parse.initialize("AiensuredID", "YOUR_JAVASCRIPT_KEY");

Parse.serverURL = "http://localhost:3030/parse";
// Parse.serverURL = "http://api-saas.aiensured.com/parse";

export default Parse;
