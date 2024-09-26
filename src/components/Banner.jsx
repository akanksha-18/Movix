// import { useEffect, useState } from 'react';
// import { useMovieContext } from '../context/MovieContext';
// import Card from './Card';

// const Banner = () => {
//     const [backgroundImage, setBackgroundImage] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const { fetchByQuery, searchResults } = useMovieContext();

//     const images = [
//         'https://image.tmdb.org/t/p/w500/path_to_your_image1.jpg',
//         'https://image.tmdb.org/t/p/w500/path_to_your_image2.jpg',
//         'https://image.tmdb.org/t/p/w500/path_to_your_image3.jpg',
//     ];

//     useEffect(() => {
//         const randomImage = images[Math.floor(Math.random() * images.length)];
//         setBackgroundImage(randomImage);
//     }, []);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchQuery.trim()) {
//             fetchByQuery(searchQuery);
//         }
//     };

//     return (
//         <div
//             className="min-h-64 flex flex-col items-center justify-center bg-cover bg-center p-4"
//             style={{ backgroundImage: `url(${backgroundImage})` }}
//         >
//             <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-lg text-center mb-4">
//                 {/* <h1 className="text-3xl font-bold mb-4">Discover Movies and TV Shows</h1> */}
//                 <form onSubmit={handleSearch} className="flex items-center">
//                     <input
//                         type="text"
//                         placeholder="Search for a movie or TV show..."
//                         className="px-4 py-2 rounded-full shadow-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full">Search</button>
//                 </form>
//             </div>

//             {searchResults.length > 0 && (
//                 <div className="w-full bg-white bg-opacity-70 p-4 rounded-lg shadow-lg mt-4">
//                     <h2 className="text-2xl font-bold mb-2">Search Results:</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                         {searchResults.map((item) => (
//                             <Card key={item.id} movie={item} />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Banner;



// import { useEffect, useState } from "react";
// import { useMovieContext } from "../context/MovieContext";
// import Card from "./Card";

// const Banner = () => {
//   const [backgroundImage, setBackgroundImage] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const { fetchByQuery, searchResults } = useMovieContext();

//   const images = [
//     "https://image.tmdb.org/t/p/w500/path_to_your_image1.jpg",
//     "https://image.tmdb.org/t/p/w500/path_to_your_image2.jpg",
//     "https://image.tmdb.org/t/p/w500/path_to_your_image3.jpg",
//   ];

//   useEffect(() => {
//     const randomImage = images[Math.floor(Math.random() * images.length)];
//     setBackgroundImage(randomImage);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       fetchByQuery(searchQuery);
//     }
//   };

//   return (
//     <div
//       className="min-h-64 flex flex-col items-center justify-center bg-cover bg-center p-4"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-lg text-center mb-4"> */}
//       <>
//         <h1 className="text-6xl font-bold mb-2">Welcome</h1>
//         <br />
//         <p className="text-lg mb-4">
//           Millions of movies, TV shows and people to discover. Explore now.
//         </p>
//         <form onSubmit={handleSearch} className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search for a movie or TV show..."
//             className="px-8 py-5 rounded-full shadow-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="ml-2 px-6 py-4 bg-blue-500 text-white rounded-full"
//           >
//             Search
//           </button>
//           {/* <button type="button" className=" text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button> */}
//         </form>
//       </>
//       {/* </div> */}

//       {searchResults.length > 0 && (
//         <div className="w-full bg-white bg-opacity-70 p-4 rounded-lg shadow-lg mt-4">
//           <h2 className="text-2xl font-bold mb-2">Search Results:</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {searchResults.map((item) => (
//               <Card key={item.id} movie={item} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;


// import { useEffect, useState } from "react";
// import { useMovieContext } from "../context/MovieContext";
// import Card from "./Card";

// const Banner = () => {
//   const [backgroundImage, setBackgroundImage] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const { fetchByQuery, searchResults, popular } = useMovieContext();

//   useEffect(() => {
//     if (popular.length > 0) {
//       const randomImage =
//         popular[Math.floor(Math.random() * popular.length)].backdrop_path;
//       setBackgroundImage(`https://image.tmdb.org/t/p/original${randomImage}`);
//     }
//   }, [popular]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       fetchByQuery(searchQuery);
//     }
//   };

//   return (
//     <div
//       className="min-h-[70vh] flex flex-col items-center justify-center bg-cover bg-center p-4"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <h1 className="text-9xl font-bold mb-2 text-white">Welcome</h1>
//       <br />
//       <p className="text-lg font-medium mb-4 text-white">
//         Millions of movies, TV shows, and people to discover. Explore now.
//       </p>
//       <form onSubmit={handleSearch} className="flex items-center">
//         <input
//           type="text"
//           placeholder="Search for a movie or TV show..."
//           className="px-20 py-4 rounded-l-full shadow-md w-96 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//        <button
//     type="submit"
//     className="px-8 py-4 text-white font-bold rounded-r-full"
//     style={{
//         background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)'
//     }}
// >
//     Search
// </button>
//       </form>

//       {searchResults.length > 0 && (
//         <div className="w-full bg-white bg-opacity-70 p-4 rounded-lg shadow-lg mt-4">
//           <h2 className="text-2xl font-bold mb-2">Search Results:</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {searchResults.map((item) => (
//               <Card key={item.id} movie={item} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;


import { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import Card from "./Card";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { fetchByQuery, searchResults, popular } = useMovieContext();

  useEffect(() => {
    if (popular.length > 0) {
      const randomImage =
        popular[Math.floor(Math.random() * popular.length)].backdrop_path;
      setBackgroundImage(`https://image.tmdb.org/t/p/original${randomImage}`);
    }
  }, [popular]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchByQuery(searchQuery);
    }
  };

  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-9xl font-bold mb-2 text-white">Welcome</h1>
      <p className="text-lg font-medium mb-4 text-white">
        Millions of movies, TV shows, and people to discover. Explore now.
      </p>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search for a movie or TV show..."
          className="px-20 py-4 rounded-l-full shadow-md w-96 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-8 py-4 text-white font-bold rounded-r-full"
          style={{
            background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)'
          }}
        >
          Search
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="w-full bg-white bg-opacity-70 p-4 rounded-lg shadow-lg mt-4">
          <h2 className="text-2xl font-bold mb-2">Search Results:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((item) => (
              <Card key={item.id} item={item} mediaType={item.media_type} /> 
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
