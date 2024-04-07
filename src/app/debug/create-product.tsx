import { PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';
const prisma = new PrismaClient()

export default function createProduct()
{
    //prisma insert statement function that takes formdata and parses it into the 
    //correct datatypes needed for prisma
    const addProduct = async (formData : FormData) => {
        prisma.product.create(
            {
                data: {
                    name: formData.get('name') as string,
                    description : formData.get('description') as string,
                    stock: parseInt(formData.get('stock') as string), 
                    price: parseFloat(formData.get('price') as string),
                    categoryID: parseInt(formData.get('categroyID') as string),
                    image: formData.get('image') as string,
                }
            }
        )
    };

    return (
        <div>
          <h2>Product Information Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            /><br />
    
            <label htmlFor="description">Description:</label><br />
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            /><br />
    
            <label htmlFor="stock">Stock:</label><br />
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
            /><br />
    
            <label htmlFor="stockPrice">Stock Price:</label><br />
            <input
              type="text"
              id="stockPrice"
              name="stockPrice"
              value={formData.stockPrice}
              onChange={handleChange}
              required
            /><br />
    
            <label htmlFor="categoryId">Category ID:</label><br />
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            /><br />
    
            <label htmlFor="imageLink">Image Link:</label><br />
            <input
              type="url"
              id="imageLink"
              name="imageLink"
              value={formData.imageLink}
              onChange={handleChange}
              required
            /><br /><br />
    
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
}