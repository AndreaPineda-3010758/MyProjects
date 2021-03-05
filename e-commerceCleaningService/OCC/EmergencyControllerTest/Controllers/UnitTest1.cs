using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OCC;


namespace EmergencyControllerTest.Controllers
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestDetailsView()
        {
            var controller = new EmergencyController();
            var result = controller.ServiceDetail() as ViewResult;
            Assert.AreEqual("ServiceDetail", result.ViewName);
        }
    }
}
