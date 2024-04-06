import java.util.Scanner;
public class Factorial02 
{
	public static void main(String[] args) 
	{
		int num;
	//	int fac = 1;
		long fac=1;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number : ");
		num = sc.nextInt();
		
		for(int i=1; i<=num; i++)
		{
			fac=fac*i;
		}
		
		System.out.println("Factorial of "+num+ " is "+ fac);

	}
}
