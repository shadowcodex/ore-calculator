/*global $ regionInfo Option oreInfo mineralInfo itemString*/
$.each(regionInfo,function(item){
    $("#regions").append(new Option(regionInfo[item][1], regionInfo[item][0]));
});

var region = $('#regions').val();
//var oreHold = $('#oreHold').val();
//var vPrice = 0.00;

// var getMarketDataOre = function(orename, oreData, region){
    
//     $.getJSON( "http://api.eve-central.com/api/marketstat/json?typeid=" + oreData.itemtype + "&regionlimit=" + region, function( data ) {
//         oreData.price = data[0].buy.fivePercent;
//         $("#vPrice").text(oreData.price);
        
//         var batchV = oreData.price * oreData.batch;
//         var totalBatches = oreHold / oreData.volume / oreData.batch
//         var oreHoldV = oreHold / oreData.volume * oreData.price;
//         var minBatchV = (mineralInfo.tri.price * oreData.tri)
//                         + (mineralInfo.pye.price * oreData.pye)
//                         + (mineralInfo.mex.price * oreData.mex)
//                         + (mineralInfo.iso.price * oreData.iso)
//                         + (mineralInfo.noc.price * oreData.noc)
//                         + (mineralInfo.zyd.price * oreData.zyd)
//                         + (mineralInfo.meg.price * oreData.meg)
//                         + (mineralInfo.mor.price * oreData.mor)
//         var minHoldV = minBatchV * totalBatches;
//         $('#oreTable tbody').append("<tr><td>" + orename + "</td>" 
//                                     + "<td>" + oreData.batch + "</td>"
//                                     + "<td>" + oreData.volume + "</td>"
//                                     + "<td>" + oreData.tri + "</td>"
//                                     + "<td>" + oreData.pye + "</td>"
//                                     + "<td>" + oreData.mex + "</td>"
//                                     + "<td>" + oreData.iso + "</td>"
//                                     + "<td>" + oreData.noc + "</td>"
//                                     + "<td>" + oreData.zyd + "</td>"
//                                     + "<td>" + oreData.meg + "</td>"
//                                     + "<td>" + oreData.mor + "</td>"
//                                     + "<td>" + oreData.price + "</td>"
//                                     + "<td>" + batchV + "</td>"
//                                     + "<td>" + oreHoldV + "</td>"
//                                     + "<td>" + minBatchV + "</td>"
//                                     + "<td>" + minHoldV + "</td>"
//                                     + "</tr>");
//     });
// };


// var updateOre = function(){
//     oreHold = $('#oreHold').val();
//     $('#oreTable tbody').remove();
//     $('#oreTable').append('<tbody></tbody>');
//     $.getJSON( "http://api.eve-central.com/api/marketstat/json?" 
//                         + "typeid=" + mineralInfo.tri.itemtype
//                         + "," + mineralInfo.pye.itemtype
//                         + "," + mineralInfo.mex.itemtype
//                         + "," + mineralInfo.iso.itemtype
//                         + "," + mineralInfo.noc.itemtype
//                         + "," + mineralInfo.zyd.itemtype
//                         + "," + mineralInfo.meg.itemtype
//                         + "," + mineralInfo.mor.itemtype
//                     // + "typeid=" + mineralInfo.tri.itemtype
//                     // + "&typeid=" + mineralInfo.pye.itemtype
//                     // + "&typeid=" + mineralInfo.mex.itemtype 
//                     // + "&typeid=" + mineralInfo.iso.itemtype 
//                     // + "&typeid=" + mineralInfo.noc.itemtype 
//                     // + "&typeid=" + mineralInfo.zyd.itemtype 
//                     // + "&typeid=" + mineralInfo.meg.itemtype 
//                     // + "&typeid=" + mineralInfo.mor.itemtype 
//                     + "&regionlimit=" + region, function( data ) {
//         mineralInfo.tri.price = data[0].buy.fivePercent;
//         mineralInfo.pye.price = data[1].buy.fivePercent;
//         mineralInfo.mex.price = data[2].buy.fivePercent;
//         mineralInfo.iso.price = data[3].buy.fivePercent;
//         mineralInfo.noc.price = data[4].buy.fivePercent;
//         mineralInfo.zyd.price = data[5].buy.fivePercent;
//         mineralInfo.meg.price = data[6].buy.fivePercent;
//         mineralInfo.mor.price = data[7].buy.fivePercent;
//         //console.log(mineralInfo);
        
//         // start updating minerals
//         getMarketDataOre('veldspar', oreInfo.veldspar, region);    
//         getMarketDataOre('Concentrated Veldspar', oreInfo.conVeldspar, region);
//         getMarketDataOre('Scordite', oreInfo.scordite, region);
//         getMarketDataOre('Condensed Scordite', oreInfo.conScordite, region);
//         getMarketDataOre('Massive Scordite', oreInfo.massiveScordite, region);
//         getMarketDataOre('Pyroxeres', oreInfo.pyroxeres, region);
//         getMarketDataOre('Solid Pyroxeres', oreInfo.solidPyroxeres, region);
//         getMarketDataOre('Viscous Pyroxeres', oreInfo.viscousPyroxeres, region);
//         getMarketDataOre('Plagioclase', oreInfo.plagioclase, region);
//         getMarketDataOre('Azure Plagioclase', oreInfo.azurePlagioclase, region);
//         getMarketDataOre('Rich Plagioclase', oreInfo.richPlagioclase, region);
//         getMarketDataOre('Omber', oreInfo.omber, region);
//         getMarketDataOre('Silvery Omber', oreInfo.silveryOmber, region);
//         getMarketDataOre('Golden Omber', oreInfo.goldenOmber, region);
//         getMarketDataOre('Kernite', oreInfo.kernite, region);
//         getMarketDataOre('Luminous Kernite', oreInfo.luminousKernite, region);
//         getMarketDataOre('Fiery Kernite', oreInfo.fieryKernite, region);
//     })
    
// }




// updateOre();

var updateItems = function(){
    $.getJSON("https://api.eve-central.com/api/marketstat/json?typeid=" + itemString + "&regionlimit=" + region, function(data){
       $('#itemTable tbody').remove();
       $('#itemTable').append('<tbody></tbody>');
       $.each(data, function(i,v){
           $('#itemTable tbody').append("<tr><td>" + v.buy.forQuery.types[0] + "</td>" 
                                    + "<td>" + v.sell.fivePercent + "</td>"
                                    + "<td>" + v.buy.fivePercent + "</td>"
                                    + "</tr>");
       });
    });
}

updateItems();


$('#regions').on('change', function() {
  region = this.value;
  //updateOre();
  updateItems();
});

$('#refresh').on('click', function(){
    //updateOre();
  updateItems();
});


