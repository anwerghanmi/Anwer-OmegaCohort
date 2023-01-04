﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductAndCategories.Models;

namespace ProductAndCategories.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        // Product AllProducts = _context.Products.ToList();
        ViewBag.AllProducts = _context.Products.ToList();
        return View();
    }
    // create new product

    public IActionResult Add (Product newProduct) {
        if (ModelState.IsValid){
        Console.WriteLine(newProduct);
        _context.Add(newProduct);
        _context.SaveChanges();
        return RedirectToAction("Index");
        } else {
            return View("Index");
        }

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
