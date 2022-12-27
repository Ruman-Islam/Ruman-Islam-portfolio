// import { useEffect, useState } from "react";

// const useClock = () => {
//     const [time, setTime] = useState();

//     useEffect(() => {
//       setInterval(() => {
//         const dateObject = new Date();
//         let h = dateObject.getHours();
//         let m = dateObject.getMinutes();
//         let s = dateObject.getSeconds();
//         let session = "AM";
  
//         if (h === 0) {
//           h = 12;
//         }
  
//         if (h > 12) {
//           h = h - 12;
//           session = "PM";
//         }
  
//         h = h < 10 ? "0" + h : h;
//         m = m < 10 ? "0" + m : m;
//         s = s < 10 ? "0" + s : s;
  
//         const currentTime = h + ":" + m + ":" + s + " " + session;
//         setTime(currentTime);
//       }, 1000);
//     }, []);

//   return { time };
// };

// export default useClock;
