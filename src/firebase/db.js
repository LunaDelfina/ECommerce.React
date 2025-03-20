import {app} from './config'
import {getFirestore,
    collection,
    getDocs,
    query,
    addDoc,
    where}
    from "firebase/firestore";

const db = getFirestore(app);

export const getProducts = async ()=>{
    const querySnapshot= await getDocs(collection(db,"Products"))
    const Products=[]

    querySnapshot.forEach((doc)=>{
        Products.push({...doc.data(), id: doc.id})
    })
    return Products
}

export const getProductsByCategory = async (category) => {
    try {
        const q = query(collection(db, "Products"), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        const Products = [];

        querySnapshot.forEach((doc) => {
            Products.push({ ...doc.data(), id: doc.id });
        });

        return Products;
    } catch (error) {
        console.error("Error obteniendo productos por categoría:", error);
        return [];
    }
};

export const createOrder =async(order)=>{
    try{
        const docRef =await addDoc(collection(db,"orders"), order);
        return docRef.id
    }catch(e){
        console.error("error", e)
    }
}
