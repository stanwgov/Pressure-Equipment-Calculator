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




//** Transport Calc */
 function Transp(Fluid,X,P) {
  var V = X*1000;
  if (Fluid == "Dangerous Gas"){
     if (P < 50)
     { 
       return "Not Regulated"
     }
     else if ( P*V <= 30000)
     {
       return "Category I"
     }
     else if (P*V <= 150000)
     {
       return "Category II"
     }
     else 
     {
       return "Category III"
     }
  }
  else{
    return "Not Regulated";
  }
}

//** Steam Generator Calc */
function SG(X,P) {
  var V = X*1000;
 
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if (V<=2)
    { 
      return "SEP"
    }
    else if ( P*V <= 5000)
    {
      return "Category I"
    }
    else if (P*V <= 20000 && P<=3200)
    {
      return "Category II"
    }
    else if ((P*V <= 300000 && V<=1000 && P<=3200))
    {
      return "Category III"
    }
    else 
    {
      return "Category IV"
    } 
}


//** Piping Calc */
function Pipe(Fluid,X,P) {
  var D = X*1000;
  if (Fluid == 'Dangerous Gas')
  { 
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if (D <= 25)
    { 
      return "SEP"
    }
    else if ( P*D <= 100000 && D<=100)
    {
      return "Category I"
    }
    else if ((P*D <= 350000 && D<=350) || (D<=100))
    {
      return "Category II"
    }
    else 
    {
      return "Category III"
    }
  }
  else if (Fluid == 'Non Dangerous Gas')
  {
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if ((P*D <= 100000) || ( D <= 32))
    { 
      return "SEP"
    }
    else if (( P*D <= 350000) ||(D<=100))
    {
      return "Category I"
    }
    else if ((P*D <= 500000) ||(D<=250))
    {
      return "Category II"
    }
    else 
    {
      return "Category III"
    }
  }
  else if (Fluid == 'Dangerous Liquid')
  {
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if (((P*D) <= 200000) || ( D <= 25))
    { 
      return "SEP"
    }
    else if ( P<=1000)
    {
      return "Category I"
    }
    else if (P<=50000)
    {
      return "Category II"
    }
    else 
    {
      return "Category III"
    }
  }
  else if (Fluid == 'Non Dangerous Liquid')
  {
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if ((P <= 1000) || ( P*D <= 500000) || ( D<=200))
    { 
      return "SEP"
    }
    else if (P<=50000)
    {
      return "Category I"
    }
    else 
    {
      return "Category II"
    }
  }
 
}


//** Pressure Vessel Calc */
function PV(Fluid,X,P) {
  var V = X*1000;
  if (Fluid == 'Dangerous Gas')
  { 
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if ((P <= 20000 && V <= 1) || ( P*V <= 2000 && V >1))
    { 
      return "SEP"
    }
    else if ( P*V <= 5000 && V>1)
    {
      return "Category I"
    }
    else if (P*V <= 20000 && V>1)
    {
      return "Category II"
    }
    else if ((P*V <= 100000 && V>1) || (P<=100000 && V<=1))
    {
      return "Category III"
    }
    else 
    {
      return "Category IV"
    }
  }
  else if (Fluid == 'Non Dangerous Gas')
  {
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if ((P <= 100000 && V <= 1) || ( P*V <= 5000 && V >1))
    { 
      return "SEP"
    }
    else if ( P*V <= 20000 && V>1)
    {
      return "Category I"
    }
    else if (P*V <= 100000 && V>1)
    {
      return "Category II"
    }
    else if ((P*V <= 300000 && V>1 && V<=750) || (P<=300000 && V<=1) || (P<=400 && V>750))
    {
      return "Category III"
    }
    else 
    {
      return "Category IV"
    }
  }
  else if (Fluid == 'Dangerous Liquid')
  {
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if ((P <= 50000 && V <= 1) || ( P*V <= 20000 && V >1))
    { 
      return "SEP"
    }
    else if ( P*V > 20000 && P<=1000)
    {
      return "Category I"
    }
    else if ((P*V > 20000 && V >1 && P<=50000) || (P>50000 && V<=1))
    {
      return "Category II"
    }
    else 
    {
      return "Category III"
    }
  }
  else if (Fluid == 'Non Dangerous Liquid')
  {
    if (P < 50)
    { 
      return "Not Regulated"
    }
    else if ((P <= 100000 && V <= 10) || ( P*V <= 1000000 && V >1) || ( P<=1000 && V>1000))
    { 
      return "SEP"
    }
    else if (( P> 100000 && V<=10) || (P*V>100000 && P<=50000))
    {
      return "Category I"
    }
    else 
    {
      return "Category II"
    }
  }
 
}


/** Main Calculation */
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