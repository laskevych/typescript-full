const data = [
    { id: 1, name: 'Jhon' },
    { id: 2, name: 'Andy' },
    { id: 3, name: 'Rick' }
]

interface ID {
    id: number;
}

function sort<T extends ID>(data: T[], type: 'asc' | 'desc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id
            case 'desc': {
                return b.id - a.id
            }
        }
    })
}