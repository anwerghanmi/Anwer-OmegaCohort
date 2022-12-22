using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurvey.Models;

namespace DojoSurvey.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("success")]
    public IActionResult Success(User NewUser)
    {
        return View(NewUser);
    }

    [HttpPost("create")]

    public IActionResult Create(User NewUser)
    {
        // ViewBag.Name = Name;
        // ViewBag.Email = Email;
        // ViewBag.Age = Age;
        // User NewUser = new User(){
        //     Name= Name,
        //     Email = Email,
        //     Age=Age
        // };
        if(ModelState.IsValid){
            return RedirectToAction("Success", NewUser);
        }
        return View("Index");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}