const Movies = ({data}) => {
    
    console.log(data.results)
    const imgPath = 'https://image.tmdb.org/t/p/w1280'

    return ( 
        <div className="bg-black w-[100%] min-h-[100]   flex flex-row flex-wrap
         items-center gap-4 shadow-lg overflow-hidden justify-evenly">
            {data && data.results?.map((ele,ind)=>{
                return (
                <div className="w-[25rem] p-3 w-96 gap-1 rounded-lg shadow-lg 
                mt-4 mb-8 flex flex-col hover:scale-105 justify-center items-center" key={ind}>
                    <img className="rounded-lg " src={imgPath+ele.poster_path} alt="image" />
                    <p className="text-xl font-normal text-cyan-50 mb-2">{ele.original_title}</p>
                    {/* <p className="text-white">{ele.vote_average}</p> */}
                </div>)
            })}
        </div>

     );
}
 
export default Movies;  