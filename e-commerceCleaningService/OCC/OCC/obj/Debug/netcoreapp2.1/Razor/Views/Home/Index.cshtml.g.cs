#pragma checksum "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b5b2fcf582419ad640e166e454f066bf8dca4130"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 2 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\_ViewImports.cshtml"
using OCC.Models;

#line default
#line hidden
#line 3 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\_ViewImports.cshtml"
using OCC.Models.ViewModels;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b5b2fcf582419ad640e166e454f066bf8dca4130", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bd9f1cd7b5c066a48691e930581a3bc3b3a83e81", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Cleaner>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(16, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Home\Index.cshtml"
   
    Layout = "_Layout";

#line default
#line hidden
            BeginContext(51, 85, true);
            WriteLiteral("\r\n    <section id=\"mainpage\" style=\"text-align:right\">\r\n        <div class=\"row\">\r\n\r\n");
            EndContext();
#line 10 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Home\Index.cshtml"
             if (User.Identity.IsAuthenticated)
            { 

#line default
#line hidden
            BeginContext(201, 107, true);
            WriteLiteral("                <div class=\"col-lg-6\">\r\n                    <h3>\r\n                        <br /><b>Welcome ");
            EndContext();
            BeginContext(309, 15, false);
#line 14 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Home\Index.cshtml"
                                    Write(Model.FirstName);

#line default
#line hidden
            EndContext();
            BeginContext(324, 57, true);
            WriteLiteral("</b>\r\n                    </h3>\r\n                </div>\r\n");
            EndContext();
#line 17 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Home\Index.cshtml"
                }

#line default
#line hidden
            BeginContext(400, 1076, true);
            WriteLiteral(@"        </div>
      
    </section>
<section id=""mainpage"">
    <p>Place the main banner here</p>
</section>

<section id=""aboutus"">
    <p>About us content</p>
</section>
 
<section id=""features"">

    
    <div class=""justify-content-center"">
        <h1>List of Service</h1>
        <br /><br />
    </div>

    <div class=""row"">

        <div class=""col-lg-6"">
            <h3>
                <a href=""/Emergency/ServiceDetail""><i class=""fas fa-ambulance fa-4x""></i></a>
                <br /><b>Emergency Service</b>
            </h3>
            <p class=""p1"">We are ready to help you, request your service now.</p>
        </div>
        <div class=""col-lg-6"">
            <h3>
                <a href=""/Booking/ServiceDetail""><i class=""far fa-calendar-alt fa-4x""></i></a>
                <br /><b>Booking service</b>
            </h3>
            <p class=""p1"">Book your cleaner service in the day that you wish.</p>
        </div>
    </div>

</section>

<section id=""contac");
            WriteLiteral("tus\">\r\n    <p>Contact us content</p>\r\n</section>\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Cleaner> Html { get; private set; }
    }
}
#pragma warning restore 1591
