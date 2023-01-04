#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace ProductAndCategories.Models;

    public class Product{
        [Key]
        public int ProductId {get;set;}
        
        [Display(Name="Name of Product")]
        [Required]
        public string Name {get;set;}

        [Display(Description="Description of Product")]
        [Required]
        public string Description {get;set;}

        [Range(1,Int32.MaxValue,ErrorMessage="Price must be 1 or larger")]
        public int Price {get;set;}


        public DateTime CreatedAt {get;set;} = DateTime.Now;

        public DateTime UpdatedAt {get;set;} = DateTime.Now;



    }

