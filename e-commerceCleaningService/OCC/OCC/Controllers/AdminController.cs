﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OCC.Models;
using System.Text.Json;

namespace OCC.Controllers
{
    public class AdminController : Controller
    {
        private ICleanerRepository cleanerRepository;

        public AdminController(ICleanerRepository repo)
        {
            cleanerRepository = repo;
        }
        //public AdminController()
        //{
        //}

        public ViewResult DisplayCleanerList() => View(cleanerRepository.Cleaners);

        public ViewResult Edit(int cleanerId) =>
           View("Edit", cleanerRepository.Cleaners
               .FirstOrDefault(p => p.CleanerId == cleanerId));

        [HttpPost]
        public IActionResult Edit(Cleaner cleaner)
        {
            if (ModelState.IsValid)
            {
             
                
                byte[] jsonCleanerEdit = JsonSerializer.SerializeToUtf8Bytes(cleaner);
                HttpContext.Session.Set("AdminCleaner", jsonCleanerEdit);
                if (cleaner.CleanerId == 0)
                {
                    cleanerRepository.SaveCleaner(cleaner);
                    TempData["message"] = $"{cleaner.FirstName} has been saved!";
                    return RedirectToAction("Create", "Users");
                }
                else
                {
                    cleanerRepository.SaveCleaner(cleaner);
                    TempData["message"] = $"{cleaner.FirstName} has been saved!";
                    return RedirectToAction("SaveAdminUser", "Users");
                }
            }
            else
            {
                return View(cleaner);
            }
        }

        public ViewResult Create() => View("Edit", new Cleaner());

        [HttpPost]
        public IActionResult Delete(int CleanerId)
        {
            Cleaner deleteCleaner = cleanerRepository.DeleteCleaner(CleanerId);

            byte[] jsonCleanerEdit = JsonSerializer.SerializeToUtf8Bytes(deleteCleaner);
            HttpContext.Session.Set("AdminCleaner", jsonCleanerEdit);

            if (deleteCleaner != null)
            {
                TempData["message"] = $"{deleteCleaner.FirstName} was deleted!";
            }

            return RedirectToAction("Delete","Users");
        }


    }
}
