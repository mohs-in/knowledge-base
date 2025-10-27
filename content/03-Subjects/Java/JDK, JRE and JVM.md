### JVM (Java Virtual Machine)

- **What it is:**  
   A virtual machine that runs Java bytecode. It’s the engine that executes Java programs.
- **Responsibilities:**
  - Converts bytecode to machine code.
  - Handles memory management, garbage collection, and security.
  - Provides platform independence.
- **Key Point:**  
   JVM is part of both JRE and JDK.

### JRE (Java Runtime Environment)

- **What it is:**  
   A package that contains the JVM and libraries required to run Java applications.
- **Includes:**

  - JVM
  - Core libraries (like `java.lang`, `java.util`)
  - Other supporting files

- **Key Point:**  
   JRE is used **only to run** Java programs, not to develop them.

### JDK (Java Development Kit)

- **What it is:**  
   A full-featured software development kit for Java.
- **Includes:**
  - JRE (which includes JVM)
  - Development tools like `javac` (compiler), `javadoc`, `jar`, etc.
- **Key Point:**  
   JDK is required for **developing** Java applications.

| Component | Contains             | Purpose                             |
| --------- | -------------------- | ----------------------------------- |
| JVM       | Bytecode interpreter | Runs Java bytecode                  |
| JRE       | JVM + Libraries      | Runs Java applications              |
| JDK       | JRE + Dev tools      | Develops and runs Java applications |

### Interview Follow-ups You Might Get:

1. **"Can you run a Java program with just the JVM?"**  
   ➤ No, you need the JRE for libraries and runtime support.
2. **"What happens when you compile a Java program?"**  
   ➤ `javac` (from JDK) compiles `.java` to `.class` (bytecode), which JVM then executes.
3. **"Can you install JRE separately?"**  
   ➤ Yes, but for development, you need the JDK.
