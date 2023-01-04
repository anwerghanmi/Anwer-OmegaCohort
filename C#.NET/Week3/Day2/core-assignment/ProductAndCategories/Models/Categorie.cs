#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace ProductAndCategories.Models;

public class Categorie {
    [Key]
        public int CategorieId {get;set;}
        
        [Display(Name="Name of categorie")]
        [Required]
        public string Name {get;set;}

        
        public DateTime CreatedAt {get;set;} = DateTime.Now;

        public DateTime UpdatedAt {get;set;} = DateTime.Now;
}

