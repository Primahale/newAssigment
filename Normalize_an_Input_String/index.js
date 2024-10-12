
function normalizeInputString(input) {

    // Trim spaces from the beginning and end

    let trimStr = input.trim();
  
    // Remove special characters and punctuation, leaving only alphanumeric and spaces
    let numericStr = trimStr.replace(/[^a-zA-Z0-9 ]/g, "");
  
    // Replace multiple spaces with a single space
    let SpacedStr = numericStr.replace(/\s+/g, " ");
  
    // Convert to camel case
    let camelCaseStr = SpacedStr
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  
    return camelCaseStr;
  }
  

  const input = " Hello! World@ This is a Test!. ";
  const result = normalizeInputString(input);
  console.log(result); 
  