import { cart } from "@/utils/constants"
import { NextResponse } from "next/server"
export async function GET() {
    return NextResponse.json(cart)
}


export async function handler(req, res) {
    if (req.method === 'POST') {
        return res.status(201).json({
            bookName:"name1",
            price:5
        })
    }
}


// export default async function handler(req, res) {
//     if (req.method === 'DELETE') {
//       try {
//         const { params } = req.id;
//         const index = cart.findIndex((item) => item.id === params.id);
//         if (index !== -1) {
//           const deletedItem = cart.splice(index, 1)[0];
//           return res.status(200).json(deletedItem);
//         } else {
//           return res.status(404).json({ message: 'Item not found' });
//         }
//       } catch (error) {
//         console.error('Error deleting item:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//       }
//     } else {
//       return res.status(405).json({ message: 'Method not allowed' });
//     }
// //   }
// export async function PUT(request) {
//     const data = await request.json()
//     const index = cart.findIndex((item) => item.id == data.id)
//     cart[index] = data
//     return NextResponse.json(cart)
// }

// export async function DELETE({params}) {
//     const index = cart.findIndex((item) => item.id == params.id)
//     const deletedItem = cart[index]
//     cart.splice(index, 1)
//     return NextResponse.json(deletedItem)
// }

// export async function PATCH(request) {
//     const data = await request.json()
//     const index = cart.findIndex((item) => item.id == data.id)
//     cart[index].quantity = data.quantity
//     return NextResponse.json(cart)
// }

