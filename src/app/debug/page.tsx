import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//define server functions

function createProduct() {
    return (
        <div>this worked aswell</div>
    )
    
}

export default function Debug() {
    createProduct();
    return (
        
        <div>
            <h1>testdebugpage</h1>
        </div>
    );
}