import java.util.Scanner;
public class StringReverse
{
	public static void main (String[] args)
	{
		Scanner sc = new Scanner(System.in);
		String str, revstr;
		System.out.print("Enter a string : ");
		str = sc.next();
		revstr = ""; //take an empty string first
		
		for (int i =str.length()-1; i>=0; i--) /*run for loop backwards 
												from last string character to 0*/
		{
			revstr = revstr+ str.charAt(i);    /*add all the characters 
												in revstr in reverse manner*/
		}
		
		System.out.println("Original string is : "+str);
		System.out.println("Reverse string is : "+revstr);
	}
	
	
}
