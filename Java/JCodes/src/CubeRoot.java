import java.util.Scanner;
public class CubeRoot 
{

	public static void main(String[] args) 
	{
		int num;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number : ");
		num = sc.nextInt();
		
		double i, precision = 0.000001;
		
		for (i=1; (i*i*i) <= num; i++); //Integer part
		
		for(--i; (i*i*i) < num; i += precision); //Fractional part
		
		System.out.println("Cuberoot of "+num+" is : "+i);
	}

}


