import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (request) => {
    try {
        await connectToDB();

        const allPrompts = await Prompt.find({}).populate('creator');
        console.log(allPrompts);
        return new Response(JSON.stringify(allPrompts),{
            status:200})
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status:500})
    }
}