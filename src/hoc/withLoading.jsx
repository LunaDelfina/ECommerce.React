import {useState,useEffect} from 'react';

export const withLoading= (Component) =>{
    function ComponentWithLoading ({items}){
        return(
            <>
            {items.length <=0 ? <h2>Cargando...</h2>:<Component items={items}/>}
            </>
        )
    }
    return ComponentWithLoading;
}