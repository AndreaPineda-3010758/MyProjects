#pragma checksum "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Cleaner\CleanerCheckOut.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "43fe80e34b3e3471610617fe227309a79e8daa96"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Cleaner_CleanerCheckOut), @"mvc.1.0.view", @"/Views/Cleaner/CleanerCheckOut.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Cleaner/CleanerCheckOut.cshtml", typeof(AspNetCore.Views_Cleaner_CleanerCheckOut))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"43fe80e34b3e3471610617fe227309a79e8daa96", @"/Views/Cleaner/CleanerCheckOut.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bd9f1cd7b5c066a48691e930581a3bc3b3a83e81", @"/Views/_ViewImports.cshtml")]
    public class Views_Cleaner_CleanerCheckOut : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Cleaner>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 1, true);
            WriteLiteral("\n");
            EndContext();
            BeginContext(16, 48, true);
            WriteLiteral("\n<p>THANK YOU FOR applying!</p>\n\n<p>First Name: ");
            EndContext();
            BeginContext(65, 15, false);
#line 6 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Cleaner\CleanerCheckOut.cshtml"
          Write(Model.FirstName);

#line default
#line hidden
            EndContext();
            BeginContext(80, 5, true);
            WriteLiteral("</p>\n");
            EndContext();
            BeginContext(116, 13, true);
            WriteLiteral("<p>Location: ");
            EndContext();
            BeginContext(130, 14, false);
#line 8 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Cleaner\CleanerCheckOut.cshtml"
        Write(Model.Location);

#line default
#line hidden
            EndContext();
            BeginContext(144, 21, true);
            WriteLiteral("</p>\n<p>Certificate: ");
            EndContext();
            BeginContext(166, 17, false);
#line 9 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Cleaner\CleanerCheckOut.cshtml"
           Write(Model.Certificate);

#line default
#line hidden
            EndContext();
            BeginContext(183, 26, true);
            WriteLiteral("</p>\n<p>Experience Level: ");
            EndContext();
            BeginContext(210, 21, false);
#line 10 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Cleaner\CleanerCheckOut.cshtml"
                Write(Model.ExperienceLevel);

#line default
#line hidden
            EndContext();
            BeginContext(231, 44, true);
            WriteLiteral("</p>\n\n<a href=\"/Home/Index\">New Service</a>\n");
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
