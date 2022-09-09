(() => {
    interface Data {
        group: number;
        name: string;
    }
    
    const dataList: Data[] = [
        { group: 1, name: 'a'},
        { group: 1, name: 'b'},
        { group: 2, name: 'c'},
    ]
    
    type IGroupedData<T> = {
        [key: string]: T[]
    };
    
    type groupKey = string | number | symbol;
    
    function groupData<T extends Record<groupKey, any>>(data: T[], groupBy: keyof T): IGroupedData<T> 
    {
        return data.reduce<IGroupedData<T>>((map: IGroupedData<T>, item) => {
            const itemKey = item[groupBy];
            let currentElement = map[itemKey];
            if (Array.isArray(currentElement)) {
                currentElement.push(item);
            } else {
                currentElement = [item];
            }
    
            map[itemKey] = currentElement;
    
            return map;
        }, {});
    }
    
    console.log(groupData(dataList, 'group'));
})();