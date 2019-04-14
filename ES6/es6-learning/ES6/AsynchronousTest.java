public class AsynchronousTest  {
    public static void main(String[] args) throws InterruptedException {

        System.out.println("This is First line");
        Thread.sleep(3000);


        System.out.println("This is second line");
        System.out.println("This is 3rd line");
        Thread.sleep(5000);

        System.out.println("This is 4th line");
        Thread.sleep(4000);

        System.out.println("This 5th line");

    }

}
