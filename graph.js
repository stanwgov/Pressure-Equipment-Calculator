  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  
  function drawChart(fig) {
  
    //** Setup Default Chart*/ 
    if (fig==undefined) {
         var data = google.visualization.arrayToDataTable(fig1);
    }

    var options = {
          hAxis: {logScale:true,minValue:0.1,maxValue:10001,viewWindow:{max:10001,min:0.1},gridlines:{count: 6},title:'Volume (V) L',titleTextStyle:{bold:true,italic:false},format:'###'},
          vAxis: {logScale:true,minValue:0.1,maxValue:1000001,viewWindow:{max:1000001,min:0.1},gridlines:{count: 8},title:'Design Pressure (PS) kPa',titleTextStyle:{bold:true,italic:false},format:'###'},
          series: [ {color:'red'}, {color:'red'}, {color:'red'}, {color:'red'}, {color:'red'}, {color:'blue',pointShape:'star',pointSize:10}],
          title: 'Figure 1',
          fontSize: 12,
          tooltip: {trigger:'focus'},
          enableInteractivity: true,
          titleTextStyle: {bold:true,fontSize:15},
          legend: { position: 'none' }
    };
        
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);

    //** Setup Fluid Selection*/ 
    var buttonF =document.getElementById('Fluid');
    buttonF.onchange = function(){
        document.getElementById("upd").style.display="inherit";
    }

    //** Setup Equipment Selection*/ 
    var buttonT =document.getElementById('Type');
    buttonT.onchange = function(){
        document.getElementById("upd").style.display="inherit";
        if ((document.getElementById("Type").value =="Steam Generator")||(document.getElementById("Type").value =="Transportable Container"))
        {
             document.getElementById("Fluid").disabled=true;
             document.getElementById("Fluid").value="Dangerous Gas";  
        }
        else
        {
             document.getElementById("Fluid").disabled=false;
        }
           
        if (document.getElementById("Type").value=="Piping")
        {
             document.getElementById("unit").innerHTML="Diameter (m)";
        }
        else
        {
             document.getElementById("unit").innerHTML="Volume (m3)";
        }
    }

    //** Update chart when Volume is changed*/    
    var buttonX =document.getElementById('X');
    buttonX.onblur = function(){
        var X = document.getElementById("X").value;
        data.setValue(11,0,X*1000);
        var P = document.getElementById("P").value;
        data.setValue(11,6,P);
        var T = document.getElementById("Type").value;
        var F = document.getElementById("Fluid").value;
        var cat = CAT(T,F,X,P);
        document.getElementById("res").innerHTML=cat;
        chart.draw(data, options);
    }

    //** Update chart when Pressure is changed*/  
    var buttonP =document.getElementById('P');
    buttonP.onblur = function(){
        var P = document.getElementById("P").value;
        data.setValue(11,6,P);
        var X = document.getElementById("X").value;
        data.setValue(11,0,X*1000);
        var T = document.getElementById("Type").value;
        var F = document.getElementById("Fluid").value; 
        document.getElementById("res").innerHTML=CAT(T,F,X,P);
        chart.draw(data, options);
    }


    //** Update Button Setup*/ 
    var buttonU =document.getElementById('upd');
    buttonU.onclick=function(){
        this.style.display="none";
        var T = document.getElementById("Type").value;
        var F = document.getElementById("Fluid").value;

        //** Figure 1*/ 
        if (T=="Pressure Vessel" && F=="Dangerous Gas")
        {
          data = google.visualization.arrayToDataTable(fig1);
          options.title="Figure 1";
          options.hAxis.viewWindow.max=10001;
          options.vAxis.viewWindow.max=1000001;
          options.hAxis.viewWindow.min=0.1;
          options.vAxis.viewWindow.min=0.1;
          options.hAxis.title="Volume (V) L";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig1");
          for (var i=0; i<elemn.length;i++)
          {
           elemn[i].style.display="inherit";
          }
        }

        //** Figure 2*/ 
        if (T=="Pressure Vessel" && F=="Non Dangerous Gas")
        {
          data = google.visualization.arrayToDataTable(fig2);
          options.title="Figure 2";
          options.hAxis.viewWindow.max=10001;
          options.vAxis.viewWindow.max=1000001;
          options.hAxis.viewWindow.min=0.1;
          options.vAxis.viewWindow.min=0.1;
          options.hAxis.title="Volume (V) L";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig2");
          for (var i=0; i<elemn.length;i++)
          {
           elemn[i].style.display="inherit";
          }
        }

        //** Figure 3*/ 
        if (T=="Pressure Vessel" && F=="Dangerous Liquid")
        {
          data = google.visualization.arrayToDataTable(fig3);
          options.title="Figure 3";
          options.hAxis.viewWindow.max=10001;
          options.vAxis.viewWindow.max=1000001;
          options.hAxis.viewWindow.min=0.1;
          options.vAxis.viewWindow.min=0.1;
          options.hAxis.title="Volume (V) L";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig3");
          for (var i=0; i<elemn.length;i++)
          {
           elemn[i].style.display="inherit";
          }
        }

        //** Figure 4*/ 
        if (T=="Pressure Vessel" && F=="Non Dangerous Liquid")
        {
          data = google.visualization.arrayToDataTable(fig4);
          options.title="Figure 4";
          options.hAxis.viewWindow.max=100001;
          options.vAxis.viewWindow.max=1000001;
          options.hAxis.viewWindow.min=0.1;
          options.vAxis.viewWindow.min=0.1;
          options.hAxis.title="Volume (V) L";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig4");
          for (var i=0; i<elemn.length;i++)
          {
           elemn[i].style.display="inherit";
          }
        }

        //** Figure 5*/ 
        if (T=="Steam Generator")
        {
          data = google.visualization.arrayToDataTable(fig5);
          options.title="Figure 5";
          options.hAxis.viewWindow.max=10001;
          options.vAxis.viewWindow.max=100001;
          options.hAxis.viewWindow.min=0.1;
          options.vAxis.viewWindow.min=0.1;
          options.hAxis.title="Volume (V) L";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig5");
          for (var i=0; i<elemn.length;i++)
          {
           elemn[i].style.display="inherit";
          }
        }

        //** Figure 6*/ 
        if (T=="Piping" && F=="Dangerous Gas")
        {
          data = google.visualization.arrayToDataTable(fig6);
          options.title="Figure 6";
          options.hAxis.viewWindow.max=10001;
          options.vAxis.viewWindow.max=100001;
          options.hAxis.viewWindow.min=0.9;
          options.vAxis.viewWindow.min=0.9;
          options.hAxis.title="Diameter (DN) mm";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig6");
          for (var i=0; i<elemn.length;i++)
          {
           elemn[i].style.display="inherit";
          }
        }

        //** Figure 7*/ 
        if (T=="Piping" && F=="Non Dangerous Gas")
        {
          data = google.visualization.arrayToDataTable(fig7);
          options.title="Figure 7";
          options.hAxis.viewWindow.max=100001;
          options.vAxis.viewWindow.max=1000001;
          options.hAxis.viewWindow.min=0.9;
          options.vAxis.viewWindow.min=0.9;
          options.hAxis.title="Diameter (DN) mm";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig7");
          for (var i=0; i<elemn.length;i++)
          {
           elemn[i].style.display="inherit";
          }
        }

        //** Figure 8*/ 
        if (T=="Piping" && F=="Dangerous Liquid")
        {
          data = google.visualization.arrayToDataTable(fig8);
          options.title="Figure 8";
          options.hAxis.viewWindow.max=10001;
          options.vAxis.viewWindow.max=1000001;
          options.hAxis.viewWindow.min=0.9;
          options.vAxis.viewWindow.min=0.9;
          options.hAxis.title="Diameter (DN) mm";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig8");
          for (var i=0; i<elemn.length;i++)
          {
             elemn[i].style.display="inherit";
          }
        }

        //** Figure 9*/ 
        if (T=="Piping" && F=="Non Dangerous Liquid")
        {
          data = google.visualization.arrayToDataTable(fig9);
          options.title="Figure 9";
          options.hAxis.viewWindow.max=10001;
          options.vAxis.viewWindow.max=1000001;
          options.hAxis.viewWindow.min=0.9;
          options.vAxis.viewWindow.min=0.9;
          options.hAxis.title="Diameter (DN) mm";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig9");
          for (var i=0; i<elemn.length;i++)
          {
             elemn[i].style.display="inherit";
          }
        }

        //** Figure 10*/ 
        if (T=="Transportable Container")
        {
          data = google.visualization.arrayToDataTable(fig10);
          options.title="Figure 10";
          options.hAxis.viewWindow.max=1500001;
          options.vAxis.viewWindow.max=1500001;
          options.hAxis.viewWindow.min=0.1;
          options.vAxis.viewWindow.min=0.1;
          options.hAxis.title="Volume (V) L";
          var elem = document.getElementsByClassName("CAT");
          for (var i=0; i<elem.length;i++)
          {
             elem[i].style.display="none";
          }
          var elemn = document.getElementsByName("fig10");
          for (var i=0; i<elemn.length;i++)
          {
             elemn[i].style.display="inherit";
          }
        }

        var P = document.getElementById("P").value;
        data.setValue(11,6,P);
        var X = document.getElementById("X").value;
        data.setValue(11,0,X*1000);
        var cat = CAT(T,F,X,P);
        document.getElementById("res").innerHTML=cat;
        chart.draw(data, options);
    }    

 }
  