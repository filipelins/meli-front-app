import { createContext, useContext, ReactNode, useState } from "react";
import Loader from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";

type ContextType = {
    categories: string[];
    loader: boolean;
    hideLoader: () => void; 
    showLoader: () => void;
    saveCategory: (param: string[]) => void;
};

const ContextDefaultValues: ContextType = {
    categories: [''],
    loader: false,
    hideLoader: () => {},
    showLoader: () => {},
    saveCategory: () => {},
};

const Context = createContext<ContextType>(ContextDefaultValues);

export function useGenericContext() {
    return useContext(Context);
}

type Props = {
    children: ReactNode;
};

export function ContextProvider({ children }: Props) {
    const [loader, setLoader] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);
    

    const showLoader = () => {
        setLoader(true);}
    const hideLoader = () =>  setLoader(false);
    
    const saveCategory = (categories: string[]) => setCategories(categories);
   
    const value = {
        categories,
        showLoader,
        hideLoader,
        saveCategory,
        loader
    };

    return (
        <>
            <Context.Provider value={value}>
                    { loader && 
                        <section className="loader">
                            <Loader type="ThreeDots" color="#00BFFF" />
                        </section>
                    }
                    { children }
                    <ToastContainer position="bottom-right" autoClose={2000}/>            
            </Context.Provider>
        </>
    );
}
