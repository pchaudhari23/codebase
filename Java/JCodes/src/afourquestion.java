
public class afourquestion 
{

	public static void main(String[] args) 
	{
		String str1 = "Center for development of advanced computing";
		String str2 = "Advanced computer training school";
		
		String[] arr1 = str1.split(" ");
		String[] arr2 = str2.split(" ");
		
		for (int i=0; i<arr2.length; i+=2)
		{
			System.out.print(" "+arr1[i]);
			System.out.print(" "+arr1[i+1]);
			System.out.print(" "+arr2[i]);
			System.out.print(" "+arr2[i+1]);
		}

	}

}

