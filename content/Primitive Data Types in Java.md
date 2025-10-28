In Java, **primitive data types** are the most basic types of data. They are not objects and represent simple values. Java has **8 primitive data types**, each serving a specific purpose:

### 1. `byte`

- **Size:** 8-bit
- **Range:** -128 to 127
- **Use:** Saves memory in large arrays, especially in place of integers.

---

### 2. `short`

- **Size:** 16-bit
- **Range:** -32,768 to 32,767
- **Use:** Also used to save memory, less common than `int`.

---

### 3. `int`

- **Size:** 32-bit
- **Range:** -2,147,483,648 to 2,147,483,647
- **Use:** Default data type for integer values.

---

### 4. `long`

- **Size:** 64-bit
- **Range:** Very large range
- **Use:** When a wider range than `int` is needed.

---

### 5. `float`

- **Size:** 32-bit
- **Use:** For fractional numbers with single precision.
- **Note:** Not precise for financial calculations.

---

### 6. `double`

- **Size:** 64-bit
- **Use:** For fractional numbers with double precision.
- **Note:** Default for decimal values.

---

### 7. `char`

- **Size:** 16-bit
- **Use:** Stores a single character (Unicode).
- **Example:** `'A'`, `'9'`, `'@'`

---

### 8. `boolean`

- **Values:** `true` or `false`
- **Use:** For logical operations and conditions.

---

### Quick Tip for Interviews:

You might be asked:

- Why use primitives instead of objects?  
   ➤ Primitives are faster and use less memory.
- What’s the default value of each primitive type?  
   ➤ For example, `int` → `0`, `boolean` → `false`, `char` → `'\u0000'`.

Note: '\u0000' is a null character and it is invisible(i.e., non-printable)

### FYI

| Data Type | Size    | Default Value | Range / Description                                     |
| --------- | ------- | ------------- | ------------------------------------------------------- |
| byte      | 8-bit   | 0             | -128 to 127                                             |
| short     | 16-bit  | 0             | -32,768 to 32,767                                       |
| int       | 32-bit  | 0             | -2,147,483,648 to 2,147,483,647                         |
| long      | 64-bit  | 0L            | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float     | 32-bit  | 0.0f          | Approx ±3.4e−38 to ±3.4e+38                             |
| double    | 64-bit  | 0.0d          | Approx ±1.7e−308 to ±1.7e+308                           |
| char      | 16-bit  | '\u0000'      | Unicode characters (0 to 65,535)                        |
| boolean   | 1-bit\* | false         | true of false                                           |
