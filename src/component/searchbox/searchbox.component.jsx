import { useEffect } from "react";
import { useState } from "react";
import Directory from "../directory/directory.compoenet";

const Searchbox = ({ catagory }) => {

    const [filtersearch, setfiltersearch] = useState(catagory)
    const [search, setsearch] = useState("")
    const[catagory1, setcatagory1]=useState(catagory)
        //FilterMonsters
useEffect((() => {
        const Newfiltersearch = catagory.filter((proname) => {
            return proname.name.toLowerCase().includes(search)

        })
        setfiltersearch(Newfiltersearch)

    })
        , [ search , catagory1])

return (
        <div>
<input type='search' placeholder='Product'onChange={(event) => {
                const Newsearchstring = event.target.value.toLowerCase();
                setsearch(Newsearchstring)
                console.log(search)

            }} />
         
            <Directory filtersearcher={filtersearch}/>

        </div>
    )
}
export default Searchbox;