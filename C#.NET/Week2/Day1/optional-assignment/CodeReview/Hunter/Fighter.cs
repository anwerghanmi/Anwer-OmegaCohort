
public class Fighter : Hunter
{
    public double Skills {get;set;}

    public Fighter (string name, int age, double s ) : base (name, age)
    {
        Skills = s;
    }
}