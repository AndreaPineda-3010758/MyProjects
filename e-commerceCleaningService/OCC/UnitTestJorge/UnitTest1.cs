using System;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;



namespace UnitTestJorge
{
    [TestClass]
    public class UnitTest1
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
