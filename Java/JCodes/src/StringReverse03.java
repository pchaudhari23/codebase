import java.util.Scanner;
public class StringReverse03 
{
	public static void main(String[] args) 
	{
		String str;
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter a string : ");
		str = sc.next();
				
		char[] arr = str.toCharArray();
		
		for(int i=0; i<arr.length; i++)
		{
			char temp = arr[i];
			arr[i] = arr[arr.length-1-i];
			arr[arr.length-1-i] = temp;
			
			if (i== (arr.length-1-i) || (arr.length%2==0 && i==(arr.length/2)-1))
			{
				break;
			}
		}
		
		String revstr = new String(arr);
		System.out.println("The reversed string : "+revstr);
	}

}
