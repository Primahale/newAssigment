function chatbot(qustionPairs, userQuestion) {
    
    const normalizeAndSplit = (str) => 
      str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
  
  
    const userWords = new Set(normalizeAndSplit(userQuestion));
  
    let bestMatch = null;
    let maxMatchCount = 0;
  
    for (let [question, answer] of qustionPairs) {
      const questionWords = new Set(normalizeAndSplit(question));
      const commonWords = [...userWords].filter(word => questionWords.has(word));
  
      if (commonWords.length > maxMatchCount) {
        maxMatchCount = commonWords.length;
        bestMatch = answer;
      }
    }
  
    return bestMatch || "I'm sorry, I don't understand the question.";
  }
  
  const qustionPairs = [
    ["What is your name?", "My name is Chatbot."],
    ["How can I help you?", "I can assist you with your queries."],
    ["What is the weather today?", "The weather is sunny."]
  ];
  
  const userQuestion = "What's the weather like today?";
  const response = chatbot(qustionPairs, userQuestion);
  console.log(response);
  