import java.util.*;

public class Sample {
  public static void printIt(Iterator<Integer> iterator) {
    while(iterator.hasNext()) {
      System.out.println(iterator.next());
    }

    System.out.println(iterator.getClass());
    //Java and C# use the solution 2 approach for implementing the iterators!
  }

  public static void main(String[] args) {
    List<Integer> numbers1 = new ArrayList<Integer>(List.of(1, 2, 3));
    Set<Integer> numbers2 = new HashSet<Integer>(List.of(1, 2, 3));

    printIt(numbers1.iterator());
    System.out.println("------");
    printIt(numbers2.iterator());
  }
}
