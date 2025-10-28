In Java, **autoboxing** and **unboxing** are features that simplify the conversion between **primitive types** and their corresponding **wrapper classes**.

### Autoboxing

**Definition:**  
Automatic conversion of a **primitive type** to its **wrapper class**.

**Example:**

```Java
int num = 10;

Integer obj = num; // autoboxing: int → Integer
```

**Why it's useful:**  
It allows primitives to be used in contexts that require objects, like collections (`ArrayList`, `HashMap`, etc.).

### Unboxing

**Definition:**  
Automatic conversion of a **wrapper class object** back to its **primitive type**.

**Example:**

```Java
Integer obj = 20;

int num = obj;  // unboxing: Integer → int
```

### Wrapper Classes for Primitives

| Primitive | Wrapper Class |
| --------- | ------------- |
| `byte`    | `Byte`        |
| `short`   | `Short`       |
| `int`     | `Integer`     |
| `long`    | `Long`        |
| `float`   | `Float`       |
| `double`  | `Double`      |
| `char`    | `Character`   |
| `boolean` | `Boolean`     |

### Interview Tip:

You might be asked:

- Why does Java need wrapper classes? ➤ To use primitives in object-based APIs like collections.
- Can autoboxing cause performance issues? ➤ Yes, excessive boxing/unboxing can lead to memory overhead and slower performance.
