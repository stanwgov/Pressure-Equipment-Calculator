/**
 * Determines The SANS 347 (PED) Hazard Category
 *
 * @param {number} Type Equipment Type being categorized ("Pressure Vessel", "Steam Generator", "Piping", "Transportable Container")
 * @param {string} Fluid Fluid Group (Non Dangerous Gas, Dangerous Gas, Non Dangerous Liquid, Dangerous Liquid)
 * @param {number} X Vol Volume (Cubic Meters) for Pressure Vessels and Steam Generators OR Nominal Diameter (Meters) for Piping
 * @param {number} P Maximum Pressure (KPa)
 * @return {string}
 * @customfunction
 */
 function CAT(Type,Fluid,X,P){
  
    if ((Fluid=="Non Dangerous Gas") || (Fluid=="Dangerous Gas") || (Fluid=="Non Dangerous Liquid") || (Fluid=="Dangerous Liquid")){
    if (isNaN(X) || isNaN(P)){ 
      return "Error: Numeric Values Expected";
    }
    else{
     if (Type == "Steam Generator"){
      return SG(X,P);
     }
      else if (Type == "Pressure Vessel"){
       return PV(Fluid,X,P); 
      }
       else if (Type == "Piping"){
        return Pipe(Fluid,X,P); 
       }
        else if (Type == "Transportable Container"){
          return Transp(Fluid,X,P);
        }        
      else{
        return "Error: "+Type+" not a recognized type";
      }
    }
   }
   else{
     return "Error: Fluid "+Fluid+" Not Recognized";
   }
 }