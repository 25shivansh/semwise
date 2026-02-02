import {z} from "zod";
export const createChapterSchema=z.object({
    title:z.string().min(3).max(100,"Title must be between 3 and 100 characters"),
    units:z.array(z.string()),

});