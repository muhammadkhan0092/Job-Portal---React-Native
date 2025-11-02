import {useCallback, useEffect, useState} from "react";

interface UseAppWriteOptions<T,P extends Record<string, string|number>>{
    fn:(params:P)=>Promise<T>
    params?:P
    skip?:boolean
}

interface UseAppWriteReturn<T,P>{
    data:T|null;
    error:string|null;
    loading:boolean,
    refetch:(newParams:P)=>Promise<void>;
}

export const useAppwrite = <T,P extends Record<string, string|number>>(
    {
        fn,
        params = {} as P,
        skip = false,
    }:UseAppWriteOptions<T,P>
):UseAppWriteReturn<T,P>=>{
    const [data,setData] = useState<T|null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string|null>(null)
    const fetchData =useCallback(
        //we are passing the parameter here because otherwise on refetech we will pass the same param which was initially passed
        async (fetchParams:P) => {
            setLoading(true);
            setError(null);
            try {
                const result = await fn(fetchParams);
                setData(result);
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
                setError(errorMessage);
            }
            finally {
                setLoading(false);
            }
        },
        [fn]
    )
    useEffect(()=>{
        if(!skip){
            fetchData(params);
        }
    },[])
    const refetch = async (newParams:P)=>fetchData(newParams);
    return {data,error,loading,refetch}
}