using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OCC;

namespace OCCUnitTestProject1
{
    [TestClass]
    public class UnitTest1C
    {
        [TestMethod]
        public void TestMethod1()
        {
            var controller = new EmergencyController();
            var result = controller.ServiceDetail() as ViewResult;
            Assert.AreEqual("ServiceDetail", result.ViewName);
        }
        
    }
}
