// export const fetchTrendingTV = async (page) => {
//     const apiKey = "0b8a4c91c1e64ce24b7f7e25277836b2";
//     const apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}&page=${page}";
  
//     try {
//       const response = await fetch(apiUrl);
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//       throw error;
//     }
//   };
