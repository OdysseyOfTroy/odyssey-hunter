type Monster = {
    id: number
    name: string
    ecology: string
    size: string
    pitfall_trap: boolean
    shock_trap: boolean
    vine_trap: boolean
}

async function getMonsters() {
    const res = await fetch('http://localhost:3333/monsters')
    return res.json() as Promise<Monster[]>

}

export default async function MonsterList() {
    const monsters = await getMonsters()

    return (
        <>
            {monsters.map((monster) => {
                return (
                    <div key={monster.id}>
                        <p>{monster.name}, {monster.ecology}, {monster.size}</p>
                    </div>)
            })}
        </>
    )
}