#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace DojoSurvey.Models;

public class User 
{
    [Required(ErrorMessage ="Name is required ❌❌❌")]
    [MinLength(3)]
    public string Name {get;set;}

// -----------------------------------------


    [Required(ErrorMessage ="location is required ❌❌❌")]
    // [EmailAddress]
    public string location {get;set;}

// -----------------------------------------


    [Required(ErrorMessage ="language is required ❌❌❌")]
    public string language {get;set;}

// --------------------------------------------
    [Required(ErrorMessage ="comment is required ❌❌❌")]
    public string comment {get;set;}
}