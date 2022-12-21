using Microsoft.AspNetCore.Mvc;
namespace Portfolio.Controllers;
public class HelloController : Controller
{
    // Route declaration Option A
    // This will go to "localhost:5XXX"
    [HttpGet]
    [Route("")]
    public string Index()
    {
        return "This is my index";
    }
    // Route declaration Option B
    // This will go to "localhost:5XXX/user/more"
    [HttpGet("projects")]
    public string projects()
    {
        return "these are my projects";
    }
    
    [HttpGet("contact")]
    public string contact()
    {
        return "these are my contacts";
    }
    
    // Post request example
    // This will go to "localhost:5XXX/submission"

}