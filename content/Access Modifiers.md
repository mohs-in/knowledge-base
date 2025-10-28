In Java, **access modifiers** are keywords used to set the **visibility** or **access level** of classes, methods, and variables. There are **four main access modifiers**:

### 1. `private`

- **Access Level:** Only accessible **within the same class**.
- **Use Case:** To encapsulate and protect data.
- **Example**:
  ```Java
  class Person {
    private String name;  // Only accessible inside Person class
  }
  ```

### 2. `default` (no modifier, package-private)

- **Access Level:** Accessible **within the same package**.
- **Use Case:** When you want package-level access.
- **Example:**
  ```Java
  class Animal {
  	int age;  // default access
  }
  ```

### 3. `protected`

- **Access Level:** Accessible **within the same package** and **by subclasses** (even in different packages).
- **Use Case:** Useful in inheritance scenarios.
- **Example**
  ```Java
  class Animal {
  	protected void makeSound() {
  	    System.out.println("Animal sound");
  	}
  }
  ```

### 4. `public`

- **Access Level:** Accessible **from anywhere**.
- **Use Case:** For APIs or methods that need to be globally available.
- **Example:**
  ```Java
  public class Main {
    public static void main(String[] args) {
      System.out.println("Hello, world!");
    }
  }
  ```

### Summary Table

| Modifier  | Same Class | Same Package | Subclass (other package) | Other Packages |
| --------- | ---------- | ------------ | ------------------------ | -------------- |
| private   | ✅         | ❌           | ❌                       | ❌             |
| default   | ✅         | ✅           | ❌                       | ❌             |
| protected | ✅         | ✅           | ✅                       | ❌             |
| public    | ✅         | ✅           | ✅                       | ✅             |

### Interview Tip:

You might be asked:

- "Can protected members be accessed without inheritance in another package?"  
   ➤ No, only through inheritance.
