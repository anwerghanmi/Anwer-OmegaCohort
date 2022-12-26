using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PassGenerator.Models;

namespace PassGenerator.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index(Passcode NewCode)
    {
        return View(NewCode);
    }

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost("generate")]
    public IActionResult Generate(Passcode NewCode)
    {
        // to be contunied
        return RedirectToAction ("index", NewCode);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
