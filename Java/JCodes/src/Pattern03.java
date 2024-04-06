public class Pattern03 
{
	public static void main(String[] args) 
	{
		int num=5;
		for(int i=num-1; i>=0 ; i--)
		{
			for(int x=0;x<=i;x++)
			{
				System.out.print("* ");
			}
			System.out.println("");
		}

	}
}
