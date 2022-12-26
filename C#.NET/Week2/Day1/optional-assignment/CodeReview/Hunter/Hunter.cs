
public class Hunter : Character
{
    public bool License {get;set;}
    public double Speed {get;set;}
    public List<String> Weapons {get;set;}

    public Hunter ( string name, int age): base (name,age)
    {
        License = true;
        Speed = 0.75;
        Weapons.Add("knife") ;
    }
}