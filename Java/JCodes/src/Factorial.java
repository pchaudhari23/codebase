import java.util.Scanner;
public class Factorial 
{
	public static void main(String[] args) 
	{
		int num;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number : ");
		num = sc.nextInt();
		int fac=num;
		for(int i = num; i>1; i--)
		{
			fac=fac*((i-1));
		}
		
		System.out.println("Factorial of "+num+ " is "+ fac);
	}	
}
 