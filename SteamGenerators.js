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