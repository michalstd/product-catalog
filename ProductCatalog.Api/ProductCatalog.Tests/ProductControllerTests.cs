using Xunit;
using Moq;
using ProductCatalog.Api.Controllers;
using ProductCatalog.Api.Repositories;
using ProductCatalog.Api.Models;
using Microsoft.AspNetCore.Mvc;

public class ProductsControllerTests
{

    [Fact]
    public void Should_Return_Products()
    {

        var mockRepo = new Mock<IProductRepository>();

        mockRepo.Setup(r => r.GetAll())
            .Returns(new List<Product>
            {
                new Product { Code="P1", Name="Laptop", Price=2000 }
            });

        var controller = new ProductsController(mockRepo.Object);

        var result = controller.GetProducts() as OkObjectResult;

        Assert.NotNull(result);

    }

}