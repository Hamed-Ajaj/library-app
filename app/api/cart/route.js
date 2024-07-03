import { cart } from "@/utils/constants"
import { NextResponse } from "next/server"
export async function GET() {
    return NextResponse.json(cart)
}

export async function POST(request) {
    const data = await request.json()
    cart.push(data)
    return NextResponse.json(cart)
}

export async function PUT(request) {
    const data = await request.json()
    const index = cart.findIndex((item) => item.id == data.id)
    cart[index] = data
    return NextResponse.json(cart)
}

export async function DELETE(request) {
    const data = await request.json()
    const index = cart.findIndex((item) => item.id == data.id)
    cart.splice(index, 1)
    return NextResponse.json(cart)
}

export async function PATCH(request) {
    const data = await request.json()
    const index = cart.findIndex((item) => item.id == data.id)
    cart[index].quantity = data.quantity
    return NextResponse.json(cart)
}

