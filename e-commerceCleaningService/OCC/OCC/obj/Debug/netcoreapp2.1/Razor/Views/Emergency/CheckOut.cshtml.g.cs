#pragma checksum "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Emergency\CheckOut.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a49f992310df8dc27a941ca7656f60e67e21851a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Emergency_CheckOut), @"mvc.1.0.view", @"/Views/Emergency/CheckOut.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Emergency/CheckOut.cshtml", typeof(AspNetCore.Views_Emergency_CheckOut))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a49f992310df8dc27a941ca7656f60e67e21851a", @"/Views/Emergency/CheckOut.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bd9f1cd7b5c066a48691e930581a3bc3b3a83e81", @"/Views/_ViewImports.cshtml")]
    public class Views_Emergency_CheckOut : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Order>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/selectCleaner.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(16, 56, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "12672e48b5034381998caa75558af24d", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(72, 249, true);
            WriteLiteral("\r\n\r\n<section class=\"our-webcoderskull padding-lg\">\r\n    <div class=\"container\">\r\n        <div class=\"card\">\r\n            <div class=\"row heading heading-icon m-5 p-5\">\r\n                <h2>THANK YOU FOR YOUR ORDER!</h2>\r\n                <p>Order ID:");
            EndContext();
            BeginContext(322, 13, false);
#line 10 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Emergency\CheckOut.cshtml"
                       Write(Model.OrderId);

#line default
#line hidden
            EndContext();
            BeginContext(335, 37, true);
            WriteLiteral("</p>\r\n                <p>Shift time: ");
            EndContext();
            BeginContext(373, 15, false);
#line 11 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Emergency\CheckOut.cshtml"
                          Write(Model.ShiftTime);

#line default
#line hidden
            EndContext();
            BeginContext(388, 38, true);
            WriteLiteral("</p>\r\n                <p>Customer ID: ");
            EndContext();
            BeginContext(427, 16, false);
#line 12 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Emergency\CheckOut.cshtml"
                           Write(Model.CustomerId);

#line default
#line hidden
            EndContext();
            BeginContext(443, 35, true);
            WriteLiteral("</p>\r\n                <p>Location: ");
            EndContext();
            BeginContext(479, 14, false);
#line 13 "D:\Centennial Collegue\Fourth Semester\Software Development Project I\Project\Final\OCC (4)\OCC\OCC\Views\Emergency\CheckOut.cshtml"
                        Write(Model.Location);

#line default
#line hidden
            EndContext();
            BeginContext(493, 217, true);
            WriteLiteral("</p>\r\n                <a class=\"btn btn btn-info col-lg-12  \" href=\"/Home/Index\">New Service</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    //order id\r\n    // cleaner name\r\n    // customer name\r\n</section>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Order> Html { get; private set; }
    }
}
#pragma warning restore 1591
