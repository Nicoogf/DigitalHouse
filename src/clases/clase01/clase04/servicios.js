export const getPost = async () =>{
    const response = await fetch (" https://randomuser.me/api/?page=3&results=10 ");
    const data = await response.json() ;
    return data; 
}