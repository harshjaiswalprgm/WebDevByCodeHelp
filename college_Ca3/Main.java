// import java.util.TreeSet;

// public class treeset {
//     public static void main(String[] args) {
//         // Creating a TreeSet
//         TreeSet<Integer> treeSet = new TreeSet<>();

//         // Adding elements to the TreeSet
//         treeSet.add(5);
//         treeSet.add(3);
//         treeSet.add(8);
//         treeSet.add(1);

//         // Displaying the TreeSet
//         System.out.println("TreeSet: " + treeSet); // Output: [1, 3, 5, 8]

//         // Checking if an element is present
//         System.out.println("Contains 5: " + treeSet.contains(5)); // Output: true

//         // Removing an element
//         treeSet.remove(3);
//         System.out.println("After removing 3: " + treeSet); // Output: [1, 5, 8]

//         // Size of the TreeSet
//         System.out.println("Size: " + treeSet.size()); // Output: 3

//         // Iterating over the TreeSet
//         System.out.print("Iterating over TreeSet: ");
//         for (Integer num : treeSet) {
//             System.out.print(num + " "); // Output: 1 5 8
//         }
//         System.out.println();
//     }
// }



import java.util.Comparator;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        // Creating a TreeSet with a custom comparator for ascending order
        TreeSet<Integer> ascendingSet = new TreeSet<>();

        // Adding elements to the TreeSet
        ascendingSet.add(5);
        ascendingSet.add(3);
        ascendingSet.add(8);
        ascendingSet.add(1);

        // Displaying the TreeSet in ascending order
        System.out.println("Ascending TreeSet: " + ascendingSet); // Output: [1, 3, 5, 8]

        // Creating a TreeSet with a custom comparator for descending order
        TreeSet<Integer> descendingSet = new TreeSet<>(Comparator.reverseOrder());

        // Adding elements to the TreeSet
        descendingSet.add(5);
        descendingSet.add(3);
        descendingSet.add(8);
        descendingSet.add(1);

        // Displaying the TreeSet in descending order
        System.out.println("Descending TreeSet: " + descendingSet); // Output: [8, 5, 3, 1]
    }
}
