/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function StageFour() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Data Types
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Alex's programming journey continued, they found themselves intrigued
        by the concept of "data types." It was another piece of the programming
        puzzle they wanted to understand better. So, they turned to Professor
        Bytes, their trusted mentor, for guidance.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Professor," Alex began, "I keep hearing about 'data types' in
        programming. What are they, and why are they important?"
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes nodded, appreciating Alex's curiosity. "Great question,
        Alex. Data types are like categories that define what kind of data a
        variable can hold. They're essential in programming because they help
        the computer understand how to store and manipulate data. Think of them
        as labels that tell us what's inside the container, our variable."
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was eager to learn more. "Can you give me some examples of data
        types?"
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Certainly," Professor Bytes replied. "Here are some common data types
        in C++, and I'll provide examples for each:
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        1. **int (Integer)**: This data type is used to store whole numbers like
        -3, 0, 42, or 1001.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`int myAge = 25;`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        2. **double (Double)**: This data type holds numbers with decimal
        points, like 3.14, -0.5, or 99.99.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`double pi = 3.14;`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        3. **char (Character)**: Short for 'character,' it stores a single
        character like 'A,' 'b,' or '1.'
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`char grade = 'A';`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        4. **bool (Boolean)**: Short for 'boolean,' it can have only two values:
        'true' or 'false.' It's used for making decisions, like in conditions.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`bool isRaining = true;`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        5. **string (String)**: This is used to store text, like names,
        sentences, or any sequence of characters. For example, 'Hello, World!'
        can be stored in a string variable.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`string greeting = "Hello, World!";`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "These data types help you specify what kind of data a variable can
        hold," Professor Bytes explained. "For instance, if you want to store
        someone's age, you'd use an 'int' because age is a whole number. If
        you're storing their name, you'd use a 'string' because it's text."
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex thought for a moment and asked, "But why is it important to choose
        the right data type?"
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Choosing the right data type is crucial for a few reasons," Professor
        Bytes elaborated. "First, it helps with memory efficiency. Using the
        appropriate data type ensures you're not wasting memory by using a
        container that's too big. Second, it helps prevent errors. If you try to
        store text in an 'int,' it won't work correctly, and the program might
        break. So, data types help us write safe and efficient code."
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was starting to grasp the significance of data types. They were
        like labels on the containers, ensuring that what was stored inside was
        appropriately handled by the program.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With this newfound knowledge about data types, Alex continued their
        programming adventure, making informed choices about the kind of data
        they were working with and ensuring their code was efficient and
        error-free. What new stories would they create with this deeper
        understanding of programming elements?
      </Typography>
    </main>
  );
}
