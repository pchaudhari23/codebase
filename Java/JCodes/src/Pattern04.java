public class Pattern04 
{
	public static void main(String[] args) 
	{
		int num=5;
		for (int i=1; i<=num; i++)
		{
			for(int x=num; x>=i; x--)
			{
				System.out.print(" ");
			}
			for(int x=1; x<=i; x++)
			{
				System.out.print(" "+i);
			}
			System.out.println("");
		}

	}
}
