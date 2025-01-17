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