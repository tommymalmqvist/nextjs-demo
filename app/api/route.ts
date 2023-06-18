import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

export async function GET() {
    const prisma = new PrismaClient()

    const heroes = await prisma.heroes.findMany()

    return NextResponse.json({ heroes })
}

export async function POST(request: NextRequest) {
    const prisma = new PrismaClient()

    const json = await request.json()

    const name = json.name
    const strength = json.strength
    const dexterity = json.dexterity
    const intelligence = json.intelligence
    const health = json.health
    const mana = json.mana

    const hero = await prisma.heroes.create({
        data: {
            name,
            strength,
            dexterity,
            intelligence,
            health,
            mana,
        },
    })

    return NextResponse.json({ hero })
}