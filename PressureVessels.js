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
 