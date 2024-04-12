import { useEffect, useState } from 'react';
//ASK: как убрать импорт типа из фаербейз при использовании апи
import { DocumentData } from 'firebase/firestore';
import bouquetsApi from '../api/bouquetsApi';



export function useGetBouquets() {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [ bouquets, setBouquets ] = useState<DocumentData[]>([]);

    useEffect(() => {
        bouquetsApi
          .fetchBouquets()
          .then((bouqs) => {
            setBouquets(bouqs);
            setIsLoading(false);
          })
          .catch((e) => {
            console.log(e);
            setIsLoading(false);
            setError(e.name);
          });
      }, []);
    
      return {
        bouquets,
        isLoading,
        error,
      };

}


