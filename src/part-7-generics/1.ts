const num: Array<number> = [1, 2, 3];

async function test() {
    const a = new Promise<number>(( resolve, reject) => {
        resolve(1);
    });    
}

const check: Record<string, IField> = {
    id: {
        name: 'Id',
        type: 'id',
    },
    website: {
        name: 'Website',
        type: 'string',
        subType: 'url'
    }

}

interface IField {
    name: string,
    type: 'id' | 'string' | 'number' | 'date',
    subType?: 'url' | 'email' | 'text'
}

