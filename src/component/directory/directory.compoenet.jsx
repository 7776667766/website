

const Directory=({filtersearcher})=>{
    console.log(filtersearcher)
    return(
     <div>
        {filtersearcher.map((cata)=>{return(
           <div> <h1>{cata.sec}</h1>
           <p>{cata.Price}</p>
            {cata.name}
            </div>
        )

        })}
     </div>
    )

}
export default Directory

    

