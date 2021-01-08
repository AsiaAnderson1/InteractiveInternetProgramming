
console.log("Lab 04");
console.log("")

function CalculateCommission()
{
    var topCommission = 0;
    var topSalesPerson = "No one yet";
    var salesperson_names = [ "Brad", "Nila" , "Joseph", "Kesh", "Lydia","Devon","Miller"];
    var decemberSales = [1500,15000,30000,12000,45000,25000,8000];
    var januarySales = [10000,25000,20000,14000,30000,16000,30000];
    var februarySales = [8000,7500,45000,10000,38000,22000,15000];
    var totalSales;
    for (var i = 0; i<7; i++)
    {
        totalSales = decemberSales[i] + januarySales[i] + februarySales[i]
        
        console.log(salesperson_names[i]);
        console.log("Total Sales:" + totalSales);
        
        if (totalSales <  5001)
        {
            Commission = totalSales *.01;
        }
        if (totalSales >  5000 && totalSales <10001)
        {
            Commission = totalSales * .02;
        }
        if (totalSales >  10000 && totalSales < 15001 )
        {
            Commission = totalSales * .03;
        }
        if (totalSales > 15000 && totalSales <30001)
        {
            Commission = totalSales * .05;
        }

        if (totalSales >  30000)
        {
            Commission = totalSales * .08;
        }

        console.log("Commissions:"+ Commission);
        var AvgCommission = Commission / 3;
        console.log("Average Commission:"+ AvgCommission);
        console.log("");
       
        if (topCommission < Commission)
        {
            topSalesPerson = salesperson_names[i];
            topCommission = Commission;
            
        }
    
        
    }
    console.log("Top sales person: " + topSalesPerson + " with a Top Commission of: " + topCommission );
    
 
   

}
