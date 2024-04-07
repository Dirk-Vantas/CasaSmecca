import { PrismaClient } from '@prisma/client'
import createProduct from './create-product';
const prisma = new PrismaClient()

//define server functions

export default function Debug() {
    console.log("I dont even know anymore")
    //prisma insert statement function that takes formdata and parses it into the 
    //correct datatypes needed for prisma
    const addProduct = async (formData : FormData) => {
        "use server";
        await prisma.product.create(
            {
                data: {
                    name: formData.get('name') as string,
                    description : formData.get('description') as string,
                    stock: parseInt(formData.get('stock') as string), 
                    price: parseFloat(formData.get('price') as string),
                    categoryID: parseInt(formData.get('categoryID') as string),
                    image: formData.get('image') as string,
                }
            }
        )
        console.log("testing json :)")
    };

    return (
        <main>
          <div>
          <h2>Product Information Form</h2>
          <form action={addProduct}>
            <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              required
            /><br />
    
            <label htmlFor="description">Description:</label><br />
            <textarea
              id="description"
              name="description"
              required
            /><br />
    
            <label htmlFor="stock">Stock:</label><br />
            <input
              type="number"
              id="stock"
              name="stock"
              
              
              required
            /><br />
    
            <label htmlFor="price">Price:</label><br />
            <input
              type="text"
              id="price"
              name="price"
              
              
              required
            /><br />
    
            <label htmlFor="categoryID">Category ID:</label><br />
            <input
              type="text"
              id="categoryID"
              name="categoryID"
              
              
              required
            /><br />
    
            <label htmlFor="image">Image Link:</label><br />
            <input
              type="text"
              id="image"
              name="image"
              
              
              required
            /><br /><br />
    
            <input type="submit" value="Submit" />
          </form>
        </div>
      
        </main>
        
        
    );
}