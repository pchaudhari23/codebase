import java.util.Scanner;
public class Palindrome 
{
	public static void main(String[] args) 
	{ 
		boolean flag = true;
		Scanner sc = new Scanner(System.in);
		String str;
		System.out.print("Enter a string : ");
		str = sc.next();
		
		char[] arr = str.toCharArray();
		
		for(int i=0; i<arr.length/2;)  /* for(int i=0; i<arr.length/2; i++) <-- this 
										syntax of for loop shows 'dead code'*/
		{
			if (arr[i] != arr[arr.length-1-i])
			flag=false;
			break;
		}
		    
		if (flag == true)		
			System.out.println("It is a palindrome");		
		else
			System.out.println("It is not a palindrome");
	}

}
