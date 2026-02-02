import { getAuthSession } from "@/lib/auth";

import { createChapterSchema } from "@/validators/course";

export async function POST(req:Request,res:Response){
    try{
        const session=await getAuthSession();
        if(!session?.user){
            return new Response("Unauthorized",{status:401});
        }
        //check subscription here later --whether user is pro or not
        const body=await req.json();
        const {title,units}=createChapterSchema.parse(body);
        
        //create course logic will go here later
    }catch(error){
        if(error instanceof z.ZodError){
            return new Response("Invalid request data",{status:400});
        }
    }
}