import java.util.Scanner;
public class SquareRoot 
{
	public static void main(String[] args) 
	{
		int num;
		float squareroot, temp;
		temp = 0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number : ");
		num = sc.nextInt();
		squareroot = num/2;
		
		while (squareroot != temp)
		{
			temp = squareroot;
			squareroot = (num/temp + temp)/2;
		}
		
		System.out.print("Squareroot of "+num+" is "+squareroot);
	}

}
