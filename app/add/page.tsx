'use client'

import Link from "next/link";

export default async function addHero() {

    async function handleSubmit(event: any) {
        event.preventDefault()
        const hero = {
            name: String(event.target.name.value),
            strength: Number(event.target.strength.value),
            dexterity: Number(event.target.dexterity.value),
            intelligence: Number(event.target.intelligence.value),
            health: Number(event.target.health.value),
            mana: Number(event.target.mana.value),
        }

        // call ADD api on the backend
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hero),
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        } else {
            alert("Hero added successfully!")
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Add Hero</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="hero" className="block text-sm font-medium leading-6 text-gray-900 p-4">
                        Hero
                    </label>
                    <div className="mt-2">
                        <input
                            type="name"
                            name="name"
                            id="name"
                            required={true}
                            minLength={3}
                            maxLength={20}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                            placeholder="Name"
                        />
                        <input
                            type="strength"
                            name="strength"
                            id="strength"
                            required={true}
                            minLength={1}
                            maxLength={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                            placeholder="Strength"
                        />
                        <input
                            type="dexterity"
                            name="dexterity"
                            id="dexterity"
                            required={true}
                            minLength={1}
                            maxLength={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                            placeholder="Dexterity"
                        />
                        <input
                            type="intelligence"
                            name="intelligence"
                            id="intelligence"
                            required={true}
                            minLength={1}
                            maxLength={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                            placeholder="Intelligence"
                        />
                        <input
                            type="health"
                            name="health"
                            id="health"
                            required={true}
                            minLength={1}
                            maxLength={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                            placeholder="Health"
                        />
                        <input
                            type="mana"
                            name="mana"
                            id="mana"
                            required={true}
                            minLength={1}
                            maxLength={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                            placeholder="Mana"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            onSubmit={handleSubmit}
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Hero
                        </button>
                        <Link
                            href="/"
                            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                        >

                                Go Back

                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
