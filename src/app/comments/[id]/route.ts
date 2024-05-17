// import { comment } from "postcss";
import { comments } from "../data";
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";

export async function GET(request: Request
    , { params }: { params: { id: string } } // conatin the URL parameter
) {
    if(parseInt(params.id)>comments.length){
        redirect("/comments")
    }
    // Find the comment with the specified ID
    const comment = comments.find(
        (comment) => comment.id == parseInt(params.id)
    );
    // Return a JSON response containing the found comment
    return Response.json(comment);
}

export async function PATCH(request: Request,
    // {params}:{params: {id.string}}
    { params }: { params: { id: string } } // Destructure params from the context object
) {
    const body = await request.json();
    // const text = body.text;
    const { text } = body;
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );
    // Update the 'text' property of the comment at the found index
    comments[index].text = text;
    return Response.json(comments[index]);
}


export async function DELETE(request:Request,
    {params} : {params : {id:string} }
) {
    const index = comments.findIndex(
        (comment)=>comment.id === parseInt(params.id)
    );

    const deleteComment = comments[index];
    comments.splice(index,1);
    return Response.json(deleteComment)

}

