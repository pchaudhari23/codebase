import java.util.Scanner;


public class Wordsearch 
{

	public static void main(String[] args) 
	{		
		String str, word;
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter the string : ");
		str = sc.nextLine();
		System.out.print("Enter the word : ");
		word = sc.nextLine();
		
		String[] array = str.split(" ");
		
		for (int i=0; i<array.length; i++)
		{
			if (word.equals(array[i]))	
			{
			i++;	/* increment i value because a non programmer 
					starts counting words of the sentence from 
					number 1 and not 0 */
			
			System.out.println("Word found at location : "+i);
			}
		}

	}

}

