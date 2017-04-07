using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Threading;

namespace Bench.AngularCLINtml.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("api/[controller]")]
        public IActionResult Data()
        {
            return Json(new
            {
                toto = 5,
                user = this.HttpContext.User?.Identity.Name
            });
        }

        [Route("api/[controller]/action1")]
        public IActionResult Action1()
        {
            for(var i =0; i < 1000; i++)
            {
                Console.WriteLine("test");
            }

            return Json(new
            {
                tutu = "action1",
                user = this.HttpContext.User?.Identity.Name
            });
        }

        [Route("api/[controller]/action10")]
        public IActionResult Action10()
        {
            return Json(new
            {
                tutu = "action1",
                user = this.HttpContext.User?.Identity.Name
            });
        }

        [Route("api/[controller]/action12")]
        public IActionResult Action12()
        {
            return Json(new
            {
                tutu = "action1",
                user = this.HttpContext.User?.Identity.Name
            });
        }

        [Route("api/[controller]/action13")]
        public IActionResult Action13()
        {
            return Json(new
            {
                tutu = "action1",
                user = this.HttpContext.User?.Identity.Name
            });
        }

        [Route("api/[controller]/action14")]
        public IActionResult Action14()
        {
            return Json(new
            {
                tutu = "action1",
                user = this.HttpContext.User?.Identity.Name
            });
        }

        [Route("api/[controller]/action2")]
        [HttpPost]
        public IActionResult Action2()
        {
            return Json(new
            {
                tutu = "action2",
                user = this.HttpContext.User?.Identity.Name
            });
        }
    }
}
