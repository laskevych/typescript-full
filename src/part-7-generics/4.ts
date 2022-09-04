

interface ILogField {
    name: string;
    uiType: 'website' | 'email' | 'text';
}

interface ILogItem {
    timeStamp: Date,
    fields: Record<string, ILogField>
}

const ItemLog: ILogItem = {
    timeStamp: new Date(),
    fields: {
        
    }
}