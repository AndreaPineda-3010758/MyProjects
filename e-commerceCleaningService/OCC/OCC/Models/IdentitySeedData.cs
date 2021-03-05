using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using OCC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OCC.Models
{
    public static class IdentitySeedData
    {
        private const string cleaner1 = "Mary";
        private const string cleaner1Email = "mary_smith@gmail.com";
        private const string cleaner1Password = "Cleaner123@";

        private const string cleaner2 = "Jhosua";
        private const string cleaner2Password = "Cleaner123@";
        private const string cleaner2Email = "jhosua@gmail.com";

        private const string cleaner3 = "Rob";
        private const string cleaner3Password = "Cleaner123@";
        private const string cleaner3Email = "rob@gmail.com";

        private const string cleaner4 = "Peter";
        private const string cleaner4Password = "Cleaner123@";
        private const string cleaner4Email = "peter@gmail.com";

        private const string cleaner5 = "Maria";
        private const string cleaner5Password = "Cleaner123@";
        private const string cleaner5Email = "maria@gmail.com";

        private const string cleaner6 = "Jake";
        private const string cleaner6Password = "Cleaner123@";
        private const string cleaner6Email = "jake@gmail.com";

        private const string cleaner7 = "Sophy";
        private const string cleaner7Password = "Cleaner123@";
        private const string cleaner7Email = "sophy@gmail.com";

        private const string cleaner8 = "Noah";
        private const string cleaner8Password = "Cleaner123@";
        private const string cleaner8Email = "noah@gmail.com";

        private const string cleaner9 = "Mia";
        private const string cleaner9Password = "Cleaner123@";
        private const string cleaner9Email = "miasw@gmail.com";

        private const string cleaner10 = "Federic ";
        private const string cleaner10Password = "Cleaner123@";
        private const string cleaner10Email = "federic@gmail.com";

        private const string cleaner11 = "Emma ";
        private const string cleaner11Password = "Cleaner123@";
        private const string cleaner11Email = "emma@gmail.com";

        private const string cleaner12 = "George";
        private const string cleaner12Password = "Cleaner123@";
        private const string cleaner12Email = "george@gmail.com";

        private const string cleaner13 = "Jhon";
        private const string cleaner13Password = "Cleaner123@";
        private const string cleaner13Email = "jhonb@gmail.com";

        private const string cleaner14 = "Annie";
        private const string cleaner14Password = "Cleaner123@";
        private const string cleaner14Email = "annie@gmail.com";

        private const string cleaner15 = "Steven";
        private const string cleaner15Password = "Cleaner123@";
        private const string cleaner15Email = "steven@gmail.com";

        private const string cleaner16 = "Ava";
        private const string cleaner16Password = "Cleaner123@";
        private const string cleaner16Email = "avaa@gmail.com";

        private const string cleaner17 = "Amanda";
        private const string cleaner17Password = "Cleaner123@";
        private const string cleaner17Email = "amy@gmail.com";

        private const string cleaner18 = "Paola";
        private const string cleaner18Password = "Cleaner123@";
        private const string cleaner18Email = "paola@gmail.com";

        private const string cleaner19 = "Alejandro";
        private const string cleaner19Password = "Cleaner123@";
        private const string cleaner19Email = "alej@gmail.com";

        private const string cleaner20 = "Mike";
        private const string cleaner20Password = "Cleaner123@";
        private const string cleaner20Email = "mike@gmail.com ";

        private const string cleaner21 = "James";
        private const string cleaner21Password = "Cleaner123@";
        private const string cleaner21Email = "james@gmail.com";

        private const string cleaner22 = "Eric";
        private const string cleaner22Password = "Cleaner123@";
        private const string cleaner22Email = "eric@gmail.com";

        public static async void EnsurePopulated(IApplicationBuilder app)
        {
            UserManager<AppUser> userManager = app.ApplicationServices
            .GetRequiredService<UserManager<AppUser>>();

            //clean1 user
            AppUser user1 = await userManager.FindByNameAsync(cleaner1);

            if (user1 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner1,
                    Email = cleaner1Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner1Password);
            }
            //clean2 user
            AppUser user2 = await userManager.FindByNameAsync(cleaner2);

            if (user2 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner2,
                    Email = cleaner2Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner2Password);
            }

            //clean3 user
            AppUser user3 = await userManager.FindByNameAsync(cleaner3);

            if (user3 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner3,
                    Email = cleaner3Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner3Password);
            }
            //clean4 user
            AppUser user4 = await userManager.FindByNameAsync(cleaner4);

            if (user4 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner4,
                    Email = cleaner4Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner4Password);
            }
            //clean3 user
            AppUser user5 = await userManager.FindByNameAsync(cleaner5);

            if (user5 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner5,
                    Email = cleaner5Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner5Password);
            }
            //clean6 user
            AppUser user6 = await userManager.FindByNameAsync(cleaner6);

            if (user6 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner6,
                    Email = cleaner6Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner6Password);
            }
            //clean3 user
            AppUser user7 = await userManager.FindByNameAsync(cleaner7);

            if (user7 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner7,
                    Email = cleaner7Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner7Password);
            }
            //clean3 user
            AppUser user8 = await userManager.FindByNameAsync(cleaner8);

            if (user8 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner8,
                    Email = cleaner8Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner8Password);
            }
            //clean3 user
            AppUser user9 = await userManager.FindByNameAsync(cleaner9);

            if (user9 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner9,
                    Email = cleaner9Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner9Password);
            }
            //clean3 user
            AppUser user10 = await userManager.FindByNameAsync(cleaner10);

            if (user10 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner10,
                    Email = cleaner10Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner10Password);
            }
            //clean3 user
            AppUser user11 = await userManager.FindByNameAsync(cleaner11);

            if (user11 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner11,
                    Email = cleaner11Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner11Password);
            }
            //clean3 user
            AppUser user12 = await userManager.FindByNameAsync(cleaner12);

            if (user12 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner12,
                    Email = cleaner12Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner12Password);
            }
            //clean3 user
            AppUser user13 = await userManager.FindByNameAsync(cleaner13);

            if (user13 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner13,
                    Email = cleaner13Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner13Password);
            }
            //clean3 user
            AppUser user14 = await userManager.FindByNameAsync(cleaner14);

            if (user14 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner14,
                    Email = cleaner14Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner14Password);
            }
            //clean3 user
            AppUser user15 = await userManager.FindByNameAsync(cleaner15);

            if (user15 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner15,
                    Email = cleaner15Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner15Password);
            }
            //clean3 user
            AppUser user16 = await userManager.FindByNameAsync(cleaner16);

            if (user16 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner16,
                    Email = cleaner16Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner16Password);
            }
            //clean3 user
            AppUser user17 = await userManager.FindByNameAsync(cleaner17);

            if (user17 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner17,
                    Email = cleaner17Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner17Password);
            }

            AppUser user18 = await userManager.FindByNameAsync(cleaner18);

            if (user18 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner18,
                    Email = cleaner18Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner18Password);
            }

            AppUser user19 = await userManager.FindByNameAsync(cleaner19);

            if (user19 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner19,
                    Email = cleaner19Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner19Password);
            }

            AppUser user20 = await userManager.FindByNameAsync(cleaner20);

            if (user20 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner20,
                    Email = cleaner20Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner20Password);
            }
            AppUser user21 = await userManager.FindByNameAsync(cleaner21);

            if (user21 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner21,
                    Email = cleaner21Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner21Password);
            }
            AppUser user22 = await userManager.FindByNameAsync(cleaner22);

            if (user22 == null)
            {
                AppUser appUser = new AppUser
                {
                    UserName = cleaner22,
                    Email = cleaner22Email
                };
                IdentityResult result = await userManager.CreateAsync(
                       appUser, cleaner22Password);
            }
        }
    }
}
