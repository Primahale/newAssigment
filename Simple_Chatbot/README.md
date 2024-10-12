Preprocessing the input:

We clean each question by converting it to lowercase and removing special characters.
We split the string into individual words to create sets of words for easy comparison.


Finding the closest matching question:

For each predefined question, we calculate the intersection of words with the user’s question.
The question with the most shared words is selected as the closest match.


Handling unmatched questions:

If no matching question is found, we return a default response like "I'm sorry, I don't understand the question.".