using System;
using Microsoft.AspNetCore.Mvc;
namespace superherogen
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        public HeroesController()
        {
        }

        [HttpGet("{firstName}/{lastName}")]
        public Person Get(string firstName, string lastName) 
        {
            var p = new Person() { FirstName = firstName, LastName = lastName };

            p.SetHeroName();

            return p;
        }

        /*
        [HttpPost()]
        public IActionResult Create(Person per)
        {
            return CreatedResult("Get", per);
        }
        */
    }
}
