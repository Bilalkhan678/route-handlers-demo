// "use client";

// // import { ImageSlider } from "@/components/image-slider";
// import { serverSideFunction } from "@/utils/server-utils";

// export default function clientroutepage() {
//     console.log("client route render")
//   const result = serverSideFunction();
//   return (
//     <>
//       <h1>client Route</h1>
//       <p>{result}</p>
//       {/* <ImageSlider /> */}
//     </>
//   );
// }

// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import { useTheme } from "@/components/theme-provider";

// // import "./ImageSlider.css";

// export default function ClientRoutePage() {
// //   const theme = useTheme();
//     const settings = {
//         dost:true,
//     }
//   return (
//     <>
//       {/* <h1
//         style={{
//           color: theme.colors.secondary,
//         }}
//       >
//         Server Route
//       </h1> */}
//       <div className="image-slider-container">
//         <Slider>
//           <div>
//             <img src="https://picsum.photos/400/200" alt="placeholder" />
//           </div>
//           <div>
//             <img src="https://picsum.photos/400/300" alt="placeholder" />
//           </div>
//           <div>
//             <img src="https://picsum.photos/400/250" alt="placeholder" />
//           </div>
//           <div>
//             <img src="https://picsum.photos/400/350" alt="placeholder" />
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// }


"use client";

import React from "react";
import { clientSideFunction } from "@/utils/client-utils";

// import "./ImageSlider.css";

export default function ClientRoutePage() {

    const result = clientSideFunction();
    return <h1>client route {result}</h1>

}