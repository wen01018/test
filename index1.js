function showexvod(){
  document.getElementById("exvod").style.display="inline";
}

function hidexvod(){
  document.getElementById("exvod").style.display="none";
}

function showovod(){
  document.getElementById("wovod").style.display="inline";
}

function hidewovod(){
  document.getElementById("wovod").style.display="none";
}
let sendButton = document.querySelector('button');

function getDepart(depar){
    
  var colleges=['文學院','理學院','工學院','電資學院','規劃與設計學院','管理學院','社會科學院','生科學院','醫學院','研究單位','行政單位'];
  return colleges[depar]
}
function getUnit(depar,unit){

  var sectors=new Array();
  sectors[0]=['中文系 ','外文系' ,'歷史系' ,'台文系' ,'考古所' ,'多元文化研究中心'];
  sectors[1]=['數學系 ','物理系','化學系','地科系','光電系','電漿所'];  
  sectors[2]=['機械系','化工系',' 資源系 ','材料系 ',' 土木系 ','水利系 ',' 工科系 ',' 醫工所 ','系統系','航太系','環工系','測量系','海事所']; 
  sectors[3]=['製造所 ',' 電機系 ',' 資工系 ','微電所 ','電通所 '];
  sectors[4]=['建築系 ',' 都計系 ',' 工設系 ',' 創產所 ']
  sectors[5]=['工資管系 ','資管所 ','交管系','企管系','國企所','會計系','財金所','統計系','國經所','體健休所'];
  sectors[6]=['政治系 ',' 經濟系 ',' 教育所 ',' 法律系 ',' 心理學系'];
  sectors[7]=['生科系 ',' 熱植所 ','生科產業系 ',];
  sectors[8]=['醫學系','解剖所','生化所','生理所','微免所','藥理所','寄生蟲科','病理科','工衛科','公衛所','內科','外科','骨科','麻醉科','婦產科','小兒科','眼科','耳鼻喉科','泌尿科','皮膚科','神經科','精神科','復健科','家醫科','急診','腫瘤醫學科','醫技系','護理系','物治系','職治系','臨藥所','基醫所','行醫所','分醫所','臨醫所','口醫所','健康照護所','老年所','藥學系','食安所','放射科','附設醫院'];
  sectors[9]=['水工所','永續所','人社中心','研究總中心','肌肉骨骼研究中心','航太中心','能策中心','前瞻醫療器材科技中心','跨維綠能材料研究中心','生物科技中心','國際傷口修復與再生中心','前瞻蝦類養殖國際研發中心','性別與婦女研究中心','越南研究中心','生醫材料研究中心','運動科學與高齡健康產業中心','電機、資訊科技及人文研發中心','精準生物醫學研究中心','再生醫學卓越研究中心','醫療效益研究中心','漁船及船舶中心','腦心智健康與發展研究中心','國家藥政法規研究中心','國際水質研究中心','衛星資訊研究中心','工程中心'];
  sectors[10]=['體育室','師資培育中心'];
   return sectors[depar][unit]
}

function send() {

  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let deparIndex = document.querySelector('#deparValue').value;
  let depar = getDepart(deparIndex)

  let unitIndex = document.querySelector('#unitValue').value;
  let   unit = getUnit(deparIndex,unitIndex);
  let exvo = document.querySelector('#exvoValue').value;
 
  console.log('unit',unit)
  let exvq1q = document.querySelector('#exvq1qValue').value;
  let exvq1type = document.querySelector('#exvq1typeValue').value;
  let exvq1poss = document.querySelector('#exvq1possValue').value;
  let exvq1sev = document.querySelector('#exvq1sevValue').value;
  let exvq1risk = document.querySelector('#exvq1riskValue').value;
  let exvq1cont = document.querySelector('#exvq1contValue').value;
  let exvq1add = document.querySelector('#exvq1addValue').value;
  let exvq1date = document.querySelector('#exvq1dateValue').value;
  let exvq2q = document.querySelector('#exvq2qValue').value;
  let exvq2type = document.querySelector('#exvq2typeValue').value;
  let exvq2poss = document.querySelector('#exvq2possValue').value;
  let exvq2sev = document.querySelector('#exvq2sevValue').value;
  let exvq2risk = document.querySelector('#exvq2riskValue').value;
  let exvq2cont = document.querySelector('#exvq2contValue').value;
  let exvq2add = document.querySelector('#exvq2addValue').value;
  let exvq2date = document.querySelector('#exvq2dateValue').value;
  let exvq3q = document.querySelector('#exvq3qValue').value;
  let exvq3type = document.querySelector('#exvq3typeValue').value;
  let exvq3poss = document.querySelector('#exvq3possValue').value;
  let exvq3sev = document.querySelector('#exvq3sevValue').value;
  let exvq3risk = document.querySelector('#exvq3riskValue').value;
  let exvq3cont = document.querySelector('#exvq3contValue').value;
  let exvq3add = document.querySelector('#exvq3addValue').value;
  let exvq3date = document.querySelector('#exvq3dateValue').value;
  let exvq4q = document.querySelector('#exvq4qValue').value;
  let exvq4type = document.querySelector('#exvq4typeValue').value;
  let exvq4poss = document.querySelector('#exvq4possValue').value;
  let exvq4sev = document.querySelector('#exvq4sevValue').value;
  let exvq4risk = document.querySelector('#exvq4riskValue').value;
  let exvq4cont = document.querySelector('#exvq4contValue').value;
  let exvq4add = document.querySelector('#exvq4addValue').value;
  let exvq4date = document.querySelector('#exvq4dateValue').value;
  let exvq5q = document.querySelector('#exvq5qValue').value;
  let exvq5type = document.querySelector('#exvq5typeValue').value;
  let exvq5poss = document.querySelector('#exvq5possValue').value;
  let exvq5sev = document.querySelector('#exvq5sevValue').value;
  let exvq5risk = document.querySelector('#exvq5riskValue').value;
  let exvq5cont = document.querySelector('#exvq5contValue').value;
  let exvq5add = document.querySelector('#exvq5addValue').value;
  let exvq5date = document.querySelector('#exvq5dateValue').value;
  let exvq6q = document.querySelector('#exvq6qValue').value;
  let exvq6type = document.querySelector('#exvq6typeValue').value;
  let exvq6poss = document.querySelector('#exvq6possValue').value;
  let exvq6sev = document.querySelector('#exvq6sevValue').value;
  let exvq6risk = document.querySelector('#exvq6riskValue').value;
  let exvq6cont = document.querySelector('#exvq6contValue').value;
  let exvq6add = document.querySelector('#exvq6addValue').value;
  let exvq6date = document.querySelector('#exvq6dateValue').value;
  let exvq7q = document.querySelector('#exvq7qValue').value;
  let exvq7type = document.querySelector('#exvq7typeValue').value;
  let exvq7poss = document.querySelector('#exvq7possValue').value;
  let exvq7sev = document.querySelector('#exvq7sevValue').value;
  let exvq7risk = document.querySelector('#exvq7riskValue').value;
  let exvq7cont = document.querySelector('#exvq7contValue').value;
  let exvq7add = document.querySelector('#exvq7addValue').value;
  let exvq7date = document.querySelector('#exvq7dateValue').value;
  let exvq8q = document.querySelector('#exvq8qValue').value;
  let exvq8type = document.querySelector('#exvq8typeValue').value;
  let exvq8poss = document.querySelector('#exvq8possValue').value;
  let exvq8sev = document.querySelector('#exvq8sevValue').value;
  let exvq8risk = document.querySelector('#exvq8riskValue').value;
  let exvq8cont = document.querySelector('#exvq8contValue').value;
  let exvq8add = document.querySelector('#exvq8addValue').value;
  let exvq8date = document.querySelector('#exvq8dateValue').value;
  let exvq9q = document.querySelector('#exvq9qValue').value;
  let exvq9type = document.querySelector('#exvq9typeValue').value;
  let exvq9poss = document.querySelector('#exvq9possValue').value;
  let exvq9sev = document.querySelector('#exvq9sevValue').value;
  let exvq9risk = document.querySelector('#exvq9riskValue').value;
  let exvq9cont = document.querySelector('#exvq9contValue').value;
  let exvq9add = document.querySelector('#exvq9addValue').value;
  let exvq9date = document.querySelector('#exvq9dateValue').value;
  let exvq10q = document.querySelector('#exvq10qValue').value;
  let exvq10type = document.querySelector('#exvq10typeValue').value;
  let exvq10poss = document.querySelector('#exvq10possValue').value;
  let exvq10sev = document.querySelector('#exvq10sevValue').value;
  let exvq10risk = document.querySelector('#exvq10riskValue').value;
  let exvq10cont = document.querySelector('#exvq10contValue').value;
  let exvq10add = document.querySelector('#exvq10addValue').value;
  let exvq10date = document.querySelector('#exvq10dateValue').value;
  let exvq11q = document.querySelector('#exvq11qValue').value;
  let exvq11type = document.querySelector('#exvq11typeValue').value;
  let exvq11poss = document.querySelector('#exvq11possValue').value;
  let exvq11sev = document.querySelector('#exvq11sevValue').value;
  let exvq11risk = document.querySelector('#exvq11riskValue').value;
  let exvq11cont = document.querySelector('#exvq11contValue').value;
  let exvq11add = document.querySelector('#exvq11addValue').value;
  let exvq11date = document.querySelector('#exvq11dateValue').value;
  let exvq12q = document.querySelector('#exvq12qValue').value;
  let exvq12type = document.querySelector('#exvq12typeValue').value;
  let exvq12poss = document.querySelector('#exvq12possValue').value;
  let exvq12sev = document.querySelector('#exvq12sevValue').value;
  let exvq12risk = document.querySelector('#exvq12riskValue').value;
  let exvq12cont = document.querySelector('#exvq12contValue').value;
  let exvq12add = document.querySelector('#exvq12addValue').value;
  let exvq12date = document.querySelector('#exvq12dateValue').value;
  let exvq13q = document.querySelector('#exvq13qValue').value;
  let exvq13type = document.querySelector('#exvq13typeValue').value;
  let exvq13poss = document.querySelector('#exvq13possValue').value;
  let exvq13sev = document.querySelector('#exvq13sevValue').value;
  let exvq13risk = document.querySelector('#exvq13riskValue').value;
  let exvq13cont = document.querySelector('#exvq13contValue').value;
  let exvq13add = document.querySelector('#exvq13addValue').value;
  let exvq13date = document.querySelector('#exvq13dateValue').value;
  let exvq14q = document.querySelector('#exvq14qValue').value;
  let exvq14type = document.querySelector('#exvq14typeValue').value;
  let exvq14poss = document.querySelector('#exvq14possValue').value;
  let exvq14sev = document.querySelector('#exvq14sevValue').value;
  let exvq14risk = document.querySelector('#exvq14riskValue').value;
  let exvq14cont = document.querySelector('#exvq14contValue').value;
  let exvq14add = document.querySelector('#exvq14addValue').value;
  let exvq14date = document.querySelector('#exvq14dateValue').value;
  let exvq15q = document.querySelector('#exvq15qValue').value;
  let exvq15type = document.querySelector('#exvq15typeValue').value;
  let exvq15poss = document.querySelector('#exvq15possValue').value;
  let exvq15sev = document.querySelector('#exvq15sevValue').value;
  let exvq15risk = document.querySelector('#exvq15riskValue').value;
  let exvq15cont = document.querySelector('#exvq15contValue').value;
  let exvq15add = document.querySelector('#exvq15addValue').value;
  let exvq15date = document.querySelector('#exvq15dateValue').value;
  let wovo = document.querySelector('#wovoValue').value;
  let wovq1q = document.querySelector('#wovq1qValue').value;
  let wovq1type = document.querySelector('#wovq1typeValue').value;
  let wovq1poss = document.querySelector('#wovq1possValue').value;
  let wovq1sev = document.querySelector('#wovq1sevValue').value;
  let wovq1risk = document.querySelector('#wovq1riskValue').value;
  let wovq1cont = document.querySelector('#wovq1contValue').value;
  let wovq1add = document.querySelector('#wovq1addValue').value;
  let wovq1date = document.querySelector('#wovq1dateValue').value;
  let wovq2q = document.querySelector('#wovq2qValue').value;
  let wovq2type = document.querySelector('#wovq2typeValue').value;
  let wovq2poss = document.querySelector('#wovq2possValue').value;
  let wovq2sev = document.querySelector('#wovq2sevValue').value;
  let wovq2risk = document.querySelector('#wovq2riskValue').value;
  let wovq2cont = document.querySelector('#wovq2contValue').value;
  let wovq2add = document.querySelector('#wovq2addValue').value;
  let wovq2date = document.querySelector('#wovq2dateValue').value;
  let wovq3q = document.querySelector('#wovq3qValue').value;
  let wovq3type = document.querySelector('#wovq3typeValue').value;
  let wovq3poss = document.querySelector('#wovq3possValue').value;
  let wovq3sev = document.querySelector('#wovq3sevValue').value;
  let wovq3risk = document.querySelector('#wovq3riskValue').value;
  let wovq3cont = document.querySelector('#wovq3contValue').value;
  let wovq3add = document.querySelector('#wovq3addValue').value;
  let wovq3date = document.querySelector('#wovq3dateValue').value;
  let wovq4q = document.querySelector('#wovq4qValue').value;
  let wovq4type = document.querySelector('#wovq4typeValue').value;
  let wovq4poss = document.querySelector('#wovq4possValue').value;
  let wovq4sev = document.querySelector('#wovq4sevValue').value;
  let wovq4risk = document.querySelector('#wovq4riskValue').value;
  let wovq4cont = document.querySelector('#wovq4contValue').value;
  let wovq4add = document.querySelector('#wovq4addValue').value;
  let wovq4date = document.querySelector('#wovq4dateValue').value;
  let wovq5q = document.querySelector('#wovq5qValue').value;
  let wovq5type = document.querySelector('#wovq5typeValue').value;
  let wovq5poss = document.querySelector('#wovq5possValue').value;
  let wovq5sev = document.querySelector('#wovq5sevValue').value;
  let wovq5risk = document.querySelector('#wovq5riskValue').value;
  let wovq5cont = document.querySelector('#wovq5contValue').value;
  let wovq5add = document.querySelector('#wovq5addValue').value;
  let wovq5date = document.querySelector('#wovq5dateValue').value;
  let wovq6q = document.querySelector('#wovq6qValue').value;
  let wovq6type = document.querySelector('#wovq6typeValue').value;
  let wovq6poss = document.querySelector('#wovq6possValue').value;
  let wovq6sev = document.querySelector('#wovq6sevValue').value;
  let wovq6risk = document.querySelector('#wovq6riskValue').value;
  let wovq6cont = document.querySelector('#wovq6contValue').value;
  let wovq6add = document.querySelector('#wovq6addValue').value;
  let wovq6date = document.querySelector('#wovq6dateValue').value;
  let wovq7q = document.querySelector('#wovq7qValue').value;
  let wovq7type = document.querySelector('#wovq7typeValue').value;
  let wovq7poss = document.querySelector('#wovq7possValue').value;
  let wovq7sev = document.querySelector('#wovq7sevValue').value;
  let wovq7risk = document.querySelector('#wovq7riskValue').value;
  let wovq7cont = document.querySelector('#wovq7contValue').value;
  let wovq7add = document.querySelector('#wovq7addValue').value;
  let wovq7date = document.querySelector('#wovq7dateValue').value;
  let wovq8q = document.querySelector('#wovq8qValue').value;
  let wovq8type = document.querySelector('#wovq8typeValue').value;
  let wovq8poss = document.querySelector('#wovq8possValue').value;
  let wovq8sev = document.querySelector('#wovq8sevValue').value;
  let wovq8risk = document.querySelector('#wovq8riskValue').value;
  let wovq8cont = document.querySelector('#wovq8contValue').value;
  let wovq8add = document.querySelector('#wovq8addValue').value;
  let wovq8date = document.querySelector('#wovq8dateValue').value;
  let wovq9q = document.querySelector('#wovq9qValue').value;
  let wovq9type = document.querySelector('#wovq9typeValue').value;
  let wovq9poss = document.querySelector('#wovq9possValue').value;
  let wovq9sev = document.querySelector('#wovq9sevValue').value;
  let wovq9risk = document.querySelector('#wovq9riskValue').value;
  let wovq9cont = document.querySelector('#wovq9contValue').value;
  let wovq9add = document.querySelector('#wovq9addValue').value;
  let wovq9date = document.querySelector('#wovq9dateValue').value;
  let wovq10q = document.querySelector('#wovq10qValue').value;
  let wovq10type = document.querySelector('#wovq10typeValue').value;
  let wovq10poss = document.querySelector('#wovq10possValue').value;
  let wovq10sev = document.querySelector('#wovq10sevValue').value;
  let wovq10risk = document.querySelector('#wovq10riskValue').value;
  let wovq10cont = document.querySelector('#wovq10contValue').value;
  let wovq10add = document.querySelector('#wovq10addValue').value;
  let wovq10date = document.querySelector('#wovq10dateValue').value;
  /*
  let guar = document.querySelector('#guarValue').value;
  let sdate = document.querySelector('#sdateValue').value;
  */


   $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzFfRdtocZ8xQWXvifI_A8_PFflWsY4SLDVLK5UtBFskiuJxtI/exec",
    data: {
      "name": name,
      "phone": phone,
      "depar": depar,
      "unit": unit,
      "exvo": exvo,
      "exvq1q": exvq1q,
      "exvq1type": exvq1type,
      "exvq1poss": exvq1poss,
      "exvq1sev": exvq1sev,
      "exvq1risk": exvq1risk,
      "exvq1cont": exvq1cont,
      "exvq1add": exvq1add,
      "exvq1date": exvq1date,
      "exvq2q": exvq2q,
      "exvq2type": exvq2type,
      "exvq2poss": exvq2poss,
      "exvq2sev": exvq2sev,
      "exvq2risk": exvq2risk,
      "exvq2cont": exvq2cont,
      "exvq2add": exvq2add,
      "exvq2date": exvq2date,
      "exvq3q": exvq3q,
      "exvq3type": exvq3type,
      "exvq3poss": exvq3poss,
      "exvq3sev": exvq3sev,
      "exvq3risk": exvq3risk,
      "exvq3cont": exvq3cont,
      "exvq3add": exvq3add,
      "exvq3date": exvq3date,
      "exvq4q": exvq4q,
      "exvq4type": exvq4type,
      "exvq4poss": exvq4poss,
      "exvq4sev": exvq4sev,
      "exvq4risk": exvq4risk,
      "exvq4cont": exvq4cont,
      "exvq4add": exvq4add,
      "exvq4date": exvq4date,
      "exvq5q": exvq5q,
      "exvq5type": exvq5type,
      "exvq5poss": exvq5poss,
      "exvq5sev": exvq5sev,
      "exvq5risk": exvq5risk,
      "exvq5cont": exvq5cont,
      "exvq5add": exvq5add,
      "exvq5date": exvq5date,
      "exvq6q": exvq6q,
      "exvq6type": exvq6type,
      "exvq6poss": exvq6poss,
      "exvq6sev": exvq6sev,
      "exvq6risk": exvq6risk,
      "exvq6cont": exvq6cont,
      "exvq6add": exvq6add,
      "exvq6date": exvq6date,
      "exvq7q": exvq7q,
      "exvq7type": exvq7type,
      "exvq7poss": exvq7poss,
      "exvq7sev": exvq7sev,
      "exvq7risk": exvq7risk,
      "exvq7cont": exvq7cont,
      "exvq7add": exvq7add,
      "exvq7date": exvq7date,
      "exvq8q": exvq8q,
      "exvq8type": exvq8type,
      "exvq8poss": exvq8poss,
      "exvq8sev": exvq8sev,
      "exvq8risk": exvq8risk,
      "exvq8cont": exvq8cont,
      "exvq8add": exvq8add,
      "exvq8date": exvq8date,
      "exvq9q": exvq9q,
      "exvq9type": exvq9type,
      "exvq9poss": exvq9poss,
      "exvq9sev": exvq9sev,
      "exvq9risk": exvq9risk,
      "exvq9cont": exvq9cont,
      "exvq9add": exvq9add,
      "exvq9date": exvq9date,
      "exvq10q": exvq10q,
      "exvq10type": exvq10type,
      "exvq10poss": exvq10poss,
      "exvq10sev": exvq10sev,
      "exvq10risk": exvq10risk,
      "exvq10cont": exvq10cont,
      "exvq10add": exvq10add,
      "exvq10date": exvq10date,
      "exvq11q": exvq11q,
      "exvq11type": exvq11type,
      "exvq11poss": exvq11poss,
      "exvq11sev": exvq11sev,
      "exvq11risk": exvq11risk,
      "exvq11cont": exvq11cont,
      "exvq11add": exvq11add,
      "exvq11date": exvq11date,
      "exvq12q": exvq12q,
      "exvq12type": exvq12type,
      "exvq12poss": exvq12poss,
      "exvq12sev": exvq12sev,
      "exvq12risk": exvq12risk,
      "exvq12cont": exvq12cont,
      "exvq12add": exvq12add,
      "exvq12date": exvq12date,
      "exvq13q": exvq13q,
      "exvq13type": exvq13type,
      "exvq13poss": exvq13poss,
      "exvq13sev": exvq13sev,
      "exvq13risk": exvq13risk,
      "exvq13cont": exvq13cont,
      "exvq13add": exvq13add,
      "exvq13date": exvq13date,
      "exvq14q": exvq14q,
      "exvq14type": exvq14type,
      "exvq14poss": exvq14poss,
      "exvq14sev": exvq14sev,
      "exvq14risk": exvq14risk,
      "exvq14cont": exvq14cont,
      "exvq14add": exvq14add,
      "exvq14date": exvq14date,
      "exvq15q": exvq15q,
      "exvq15type": exvq15type,
      "exvq15poss": exvq15poss,
      "exvq15sev": exvq15sev,
      "exvq15risk": exvq15risk,
      "exvq15cont": exvq15cont,
      "exvq15add": exvq15add,
      "exvq15date": exvq15date,
      "wovo": wovo,
      "wovq1q": wovq1q,
      "wovq1type": wovq1type,
      "wovq1poss": wovq1poss,
      "wovq1sev": wovq1sev,
      "wovq1risk": wovq1risk,
      "wovq1cont": wovq1cont,
      "wovq1add": wovq1add,
      "wovq1date": wovq1date,
      "wovq2q": wovq2q,
      "wovq2type": wovq2type,
      "wovq2poss": wovq2poss,
      "wovq2sev": wovq2sev,
      "wovq2risk": wovq2risk,
      "wovq2cont": wovq2cont,
      "wovq2add": wovq2add,
      "wovq2date": wovq2date,
      "wovq3q": wovq3q,
      "wovq3type": wovq3type,
      "wovq3poss": wovq3poss,
      "wovq3sev": wovq3sev,
      "wovq3risk": wovq3risk,
      "wovq3cont": wovq3cont,
      "wovq3add": wovq3add,
      "wovq3date": wovq3date,
      "wovq4q": wovq4q,
      "wovq4type": wovq4type,
      "wovq4poss": wovq4poss,
      "wovq4sev": wovq4sev,
      "wovq4risk": wovq4risk,
      "wovq4cont": wovq4cont,
      "wovq4add": wovq4add,
      "wovq4date": wovq4date,
      "wovq5q": wovq5q,
      "wovq5type": wovq5type,
      "wovq5poss": wovq5poss,
      "wovq5sev": wovq5sev,
      "wovq5risk": wovq5risk,
      "wovq5cont": wovq5cont,
      "wovq5add": wovq5add,
      "wovq5date": wovq5date,
      "wovq6q": wovq6q,
      "wovq6type": wovq6type,
      "wovq6poss": wovq6poss,
      "wovq6sev": wovq6sev,
      "wovq6risk": wovq6risk,
      "wovq6cont": wovq6cont,
      "wovq6add": wovq6add,
      "wovq6date": wovq6date,
      "wovq7q": wovq7q,
      "wovq7type": wovq7type,
      "wovq7poss": wovq7poss,
      "wovq7sev": wovq7sev,
      "wovq7risk": wovq7risk,
      "wovq7cont": wovq7cont,
      "wovq7add": wovq7add,
      "wovq7date": wovq7date,
      "wovq8q": wovq8q,
      "wovq8type": wovq8type,
      "wovq8poss": wovq8poss,
      "wovq8sev": wovq8sev,
      "wovq8risk": wovq8risk,
      "wovq8cont": wovq8cont,
      "wovq8add": wovq8add,
      "wovq8date": wovq8date,
      "wovq9q": wovq9q,
      "wovq9type": wovq9type,
      "wovq9poss": wovq9poss,
      "wovq9sev": wovq9sev,
      "wovq9risk": wovq9risk,
      "wovq9cont": wovq9cont,
      "wovq9add": wovq9add,
      "wovq9date": wovq9date,
      "wovq10q": wovq10q,
      "wovq10type": wovq10type,
      "wovq10poss": wovq10poss,
      "wovq10sev": wovq10sev,
      "wovq10risk": wovq10risk,
      "wovq10cont": wovq10cont,
      "wovq10add": wovq10add,
      "wovq10date": wovq10date,
      /*
      "guar": guar,
      "sdate": sdate,
      */
            },
    success: function(response) {
      /*
      if(response == "成功"){
        alert("成功!");
      }
      */
      alert(response)
    },
  });
};

sendButton.addEventListener('click', send);