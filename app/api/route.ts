import { NextResponse, NextRequest } from 'next/server'
import {prisma} from "@/app/db";

export async function GET() {
    const heroes = await prisma.heroes.findMany()

    return NextResponse.json({ heroes })
}

export async function POST(request: NextRequest) {

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