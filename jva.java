// Base class (Parent)
class Animal {
    String name;

    // Constructor
    Animal(String name) {
        this.name = name;
    }

    // Method
    void speak() {
        System.out.println(name + " makes a sound.");
    }
}

// Derived class (Child)
class Dog extends Animal {
    // Constructor
    Dog(String name) {
        super(name); // Call parent constructor
    }

    // Overriding the speak method
    @Override
    void speak() {
        System.out.println(name + " barks.");
    }
}

// Main class to run the program
public class InheritanceExample {
    public static void main(String[] args) {
        Animal myAnimal = new Animal("GenericAnimal");
        myAnimal.speak();  // Output: GenericAnimal makes a sound.

        Dog myDog = new Dog("Buddy");
        myDog.speak();     // Output: Buddy barks.
    }
}
