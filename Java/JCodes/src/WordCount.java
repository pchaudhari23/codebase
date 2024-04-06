import java.util.Scanner;
public class WordCount 
{

	public static void main(String[] args) 
	{
		int count = 0;
		String str, word;
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter the string : ");
		str = sc.nextLine();
		System.out.print("Enter the word : ");
		word = sc.nextLine();
		
		String[] array = str.split(" ");
		
		for (int i=0; i< array.length; i++)
		{
			if (word.equals(array[i]))
			count++;
		}
		
		System.out.println("The number of times "+word+" has occured is : "+count);

	}

} 

