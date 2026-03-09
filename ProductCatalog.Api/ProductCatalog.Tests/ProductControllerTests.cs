using Moq;
using ProductCatalog.Api.DTO;
using Microsoft.AspNetCore.Mvc;

public class ProductsControllerTests
{

    [Fact]
    public void GetProducts_Should_Return_200_And_Data()
    {
        var mockService = new Mock<IProductService>();

        mockService.Setup(s => s.GetAll())
            .Returns(new List<ProductDto>
            {
            new ProductDto { Code="P1", Name="Laptop", Price=2000 }
            });

        var controller = new ProductsController(mockService.Object);

        var result = controller.GetProducts();

        var ok = Assert.IsType<OkObjectResult>(result.Result);

        var data = Assert.IsType<List<ProductDto>>(ok.Value);

        Assert.Single(data);
    }

}