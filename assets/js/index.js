const region = "https://geo.api.gouv.fr/regions";
const departement =
  "https://geo.api.gouv.fr/departements";
//https://geo.api.gouv.fr/departements?nom=Yvelines&limit=5
let regions = document.querySelector(".container .row .col-4 #regions"); 
let code_region ="", region_nom= "";
let laRegion = {}
//DEPARTEMENTS VARIABLES
let departs = {}

//

//console.log(regions);
fetch(region)
  .then((Response) => {
    //console.log(Response);
    if (Response.ok) {
      Response.json().then((data) => {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          
          //creation de element;
          let region = document.createElement("option");

          //ajoute value
          region.setAttribute("value", element.nom);
          //add content ;
          region.textContent = element.nom;
          //i get code religion
          code_region = element.code;
          //add the child to parent
          regions.appendChild(region);

          // //value
          // region_value = region.value;

          // //adding
          // laRegion["nom"] = region.value;
          // laRegion["code"] = code_region;

          //console.log(laRegion["nom"]);
        } //end of region fetching
        //mon test
        //regions.value
        laRegion = data

        regions.addEventListener("change", () => {
            // console.log(regions.value);
            // console.log(laRegion);
            

            for (let index = 0; index < laRegion.length; index++) {
              const element = laRegion[index];

              //console.log(element.nom);
              if (element.nom === regions.value){
                code_region = element.code
                region_nom = element.nom;
              }
            }
            console.log(code_region, region_nom);
            //instruction 
            

        });
        
        

        //end test

        //les regions objects
        // let n = ApiDepartement(departement);
        //console.log(n.nom)
      }); //end if
    } //end response
    else {
      console.log("Erreur sur api");
    }

  })//end fetch

  function ApiDepartement(url) {
      let tabDepart = new Object()
      //tabDepart["nom"]="john"
      //console.log(tabDepart.nom);
      fetch(url).then((answer)=>answer.json().then((data)=>{
            //console.log(data[0].codeRegion);
            
            for (let index = 0; index < data.length; index++) {
              let element = data[index];
             //console.log(element.code)
             //saving 
             tabDepart.nom = element.nom
             tabDepart.code = element.code;
             tabDepart.code_religion_depart = element.codeRegion;

             console.log(tabDepart.nom);
            }
      }))
      

      //return tabDepart;
  }

 
  
 
  
  
    
    
    