**Follow-up:**

> "How does destructuring help in function parameters?"

**What to say:**

```Javascript
function greet({ name, age }) {

  console.log(`Hello ${name}, age ${age}`);

}

greet({ name: "Ali", age: 25 });
```
