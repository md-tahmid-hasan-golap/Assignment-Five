Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

getElementById("id") → selects one element by its unique id.

getElementsByClassName("class") → selects all elements with the given class; returns a live HTMLCollection.

querySelector("selector") → selects first element matching any CSS selector.

querySelectorAll("selector") → selects all elements matching any CSS selector; returns a static NodeList.

Q2: How do you create and insert a new element into the DOM?
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
const container = document.getElementById("container");
container.appendChild(newDiv); // adds at the end

Q3: What is Event Bubbling and how does it work?
Answer: Event Bubbling is when an event starts on the target element and propagates up to its parent elements.

Q4: What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is adding a single event listener on a parent element to handle events on its child elements.

Q5: What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() Prevents the default browser action (e.g., link navigation, form submit)
stopPropagation() Stops the event from bubbling up to parent elements
