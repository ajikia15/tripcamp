// "use server";
// import Card from "./reusable/Card";
// export default async function TempListings() {
//   return (
//     <div className="grid w-full place-items-center">
//       <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6 ">
//         {[...Array(5)].map((_, index) => (
//           <Card key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// const slides = [
//   "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
//   "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  
// ]



import Card from "./reusable/Card";
const slides = [
  "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
  "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
]



export default function TempListings () {
return (
  <div className="grid w-full place-items-center mb-6">
       <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6 ">
         {[...Array(8)].map((_, index) => (
           <main className="TempListings">
           <div className="max-w-lg">
             <Card autoSlide={true} key={index}>
               {slides.map((s) => (
                   <img src={s} />
               ))}
             </Card>
           </div>
         </main>
         ))}
       </div>
</div>
)

}

// export default function TempListings() {
//   // const [curr, setCurr] = useState(0)

//   const prev = () => setCurr((curr) => (curr === 0 ? 2 : curr - 1 ))
//   const next = () => setCurr((curr) => (curr === 0 ? 2 : curr + 1 ))

//   return (
//     <main className="TempListings">
//       <div> 
//         <Card>
         
//             <div className="flex relative items-center overflow-hidden w-1/2 transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
//             <svg onClick={prev} className="absolute text-white w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
//               <img
//                 src="https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80"
//               />
//             </div>
          
//         </Card>
//       </div>
//     </main>
//   )
// }