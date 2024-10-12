Normalize an Input String.

Trim: We remove leading and trailing spaces using trim().

Remove special characters: Using a regular expression /[^a-zA-Z0-9 ]/g, we eliminate all characters except letters, digits, and spaces.

Replace multiple spaces: The regex /\s+/g matches consecutive spaces and replaces them with a single space.

Camel Case Conversion:

Split the string into words.
Capitalize the first letter of each word and convert the rest to lowercase.
Join the words back with spaces to get the final result