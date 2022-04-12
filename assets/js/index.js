const region = "https://geo.api.gouv.fr/regions";
const departement =
  "https://geo.api.gouv.fr/departements?nom=Yvelines&limit=5";

let regions = document.querySelector(".container .row .col-4 #regions"); 

//
let items_region =""
//console.log(regions);
fetch(region)
  .then((Response) => {
    //console.log(Response);
    if (Response.ok) {
      Response.json().then((data) => {
          
        for (let index = 0; index < data.length; index++)
            {
                const element = data[index];

                //creation de element;
                let region = document.createElement("option")

                //ajoute value 
                region.setAttribute("value", element.nom);

                //add content ;
                region.textContent = element.nom;
                regions.appendChild(region);

                //console.log(region)
            }
            
                //les regions objects
                //var ynnette=""
               regions.addEventListener("change", () =>{
                     console.log(regions.value);
               })
              

      });

    } 
    else {
      console.log("Erreur sur api");
    }
  })
  
  
  
    
    
    