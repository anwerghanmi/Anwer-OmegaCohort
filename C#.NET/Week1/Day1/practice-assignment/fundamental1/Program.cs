// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
int start= 1;
int end = 255;
for (int i= start; i<=end ; i++)
{
    Console.WriteLine(i);
}
// ----------
for (var value = 1; value <= 100; value++)
{
    bool byThreeOrFive = (value % 3 == 0 || value % 5 == 0);
    bool notThreeAndFive = !(value % 3 == 0 && value % 5 == 0);

    if (byThreeOrFive && notThreeAndFive)
    {
        Console.WriteLine(value);
    }
}

// ----------------
for (var value = 1; value <= 100; value++)
{
    bool byThree = (value % 3 == 0);
    bool byFive = (value % 5 == 0);
    bool byThreeAndFive = (value % 3 == 0 && value % 5 == 0);

    if (byThreeAndFive)
    {
        Console.WriteLine($"Fizz Buzz (value:{value})");
    }
    else if (byThree)
    {
        Console.WriteLine($"Fizz (value:{value})");
    }
    else if (byFive)
    {
        Console.WriteLine($"Buzz (value:{value})");
    }
}