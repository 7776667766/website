import Directory from "../../component/directory/directory.compoenet";
import { Outlet } from "react-router-dom";
import Searchbox from "../../component/searchbox/searchbox.component";
const Home=()=>{



     const catagories=[
       
               {
                 "name": "Molecule Man",
                 "Price": 29904888499,
                 "sec": "Danes absort",
                
               },
               {
                "name": "777999Madame Uppercut",
                "Price": 39488899,
                 "sec": "Jane Wilsorlpooon",
               
               },
               {
                 "name": "3332ndjjdojd Molecule Man",
                "Price": 248804889491,
                 "sec": "nd Dankiorppes",
                
              },
              {
                "name": "4442nddhjhv Moldbjhdecule Man",
               "Price": 29488899401,
                "sec": "2nd Dan Jrooopukes",
               
             },
             {
              "name": "99992nd djjldjndMolecule Man",
             "Prics": 248884000491,
              "sec": "2nd rroprrDa",
             
           },
           {
            "name": "2sMolecule Man",
           "Price": 2938,
            "sec": "2rrrrnd Dan Jukes",
           
         },
         {
          "name": "900n Man",
         "Price": 29373,
          "sec": "2nd Dfjjflffan",
         
       },

          ]

            return(
              <div>
                <Searchbox catagory={catagories}/>
            
              </div>
           
            )
            

            

        }

export default Home;