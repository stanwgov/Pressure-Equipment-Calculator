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