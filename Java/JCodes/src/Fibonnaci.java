import java.util.Scanner;
public class Fibonnaci 
{
	public static void main(String[] args) 
	{
		int length;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the length of the series : ");
		length = sc.nextInt();
		
		int a = 0;
		int b = 1;
		
		System.out.println("Fibbonacci series upto "+length+" places is : ");
		
		System.out.print("0 1 ");
		
		for(int i=2 ; i<length; i++)
		{
			int sum = a+b;
			a=b;
			b=sum;
			System.out.print(sum+" ");
		}
	}
}


