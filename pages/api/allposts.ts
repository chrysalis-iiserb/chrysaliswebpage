import { getAllPosts, getClient } from "lib/sanity.client"

export default async function handler(req, res){
    try{
        const sanityClient = getClient();
        const data = await getAllPosts(sanityClient)
        res.status(200).json(data)
    }catch(error){
        res.status(500).json("Error in fetching all posts...")
    }
}