import java.util.Scanner;
public class Nosign 
{
	public static void main(String[] args) 
	{
		int a,b,c;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter first number : ");
		a = sc.nextInt();
		c=a;
		System.out.print("Enter second number : ");
		b = sc.nextInt();
		
		for(int i=0; i<b; i++)
		{
			c++;
		}
		
		System.out.print("Addition of the given numbers is : "+c);		
	}
}
