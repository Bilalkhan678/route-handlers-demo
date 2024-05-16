// import { headers } from "next/headers";
import { headers } from "next/headers";
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";



export async function GET(request: NextRequest) {

  // console.log("API route accessed."); // Add this log statement


  const headersList = headers();
  const requestHeaders = new Headers(request.headers);


    cookies().set("resultsPerPage", "20");
  const theme = request.cookies.get("theme");

  //This line logs the value of the "Authorization" header from the headersList
  //. It helps in debugging and understanding the data received in the request headers.
  console.log(headersList.get("Authorization"));

  //This line logs the value of the "Authorization" header from the requestHeaders.
  console.log(requestHeaders.get("Authorization"));
  
  console.log(theme);
  console.log(cookies().get("resultsPerPage"));


  return new Response("<h1>Profile API data</h1>" ,
  {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": `theme=dark`,
    },
  }
);
}