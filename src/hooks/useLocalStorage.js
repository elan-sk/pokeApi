import { useEffect, useState} from 'react';

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
    }, [itemName]);

    async function saveItem(newItem, callback) {
        if (callback && typeof callback === 'function') {
            await new Promise(resolve => {
                callback();
                resolve()
            });
        }

        await new Promise(resolve => {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
            resolve();
        });
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}
