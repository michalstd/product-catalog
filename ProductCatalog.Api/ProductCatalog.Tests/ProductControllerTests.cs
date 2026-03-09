using Xunit;
using Moq;
using ProductCatalog.Api.Controllers;
using ProductCatalog.Api.Services;
using ProductCatalog.Api.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

public class ProductsControllerTests
{

    [Fact]
    public void GetProducts_Should_Return_Status200_And_Products()
    {
        var mockService = new Mock<IProductService>();

        var products = new List<ProductDto>
        {
            new ProductDto
            {
                Code = "P1",
                Name = "Laptop",
                Price = 2000
            }
        };

        mockService.Setup(s => s.GetAll()).Returns(products);

        var controller = new ProductsController(mockService.Object);

        var result = controller.GetProducts();

        var okResult = Assert.IsType<OkObjectResult>(result);

        var returnedProducts = Assert.IsType<List<ProductDto>>(okResult.Value);

        Assert.Single(returnedProducts);
        Assert.Equal("Laptop", returnedProducts[0].Name);
    }

}