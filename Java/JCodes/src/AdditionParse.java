// java addition of numbers using command line arguments (given at run time)
public class AdditionParse
{
	public static void main(String args[]) 
	{
	  int a = Integer.parseInt(args[0]);
	  System.out.println("The first number is : "+a);
	  
	  int b = Integer.parseInt(args[1]);	  
	  System.out.println("The second number is : "+b);
	  
	  int sum = a + b;
	  System.out.println("Addition of the numbers is : " + sum);
	}
}
