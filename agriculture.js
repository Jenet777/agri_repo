var wbook = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1ZUWUCOWABN4LkkdwiNfvIroWR5ZGGhsy5EI8uI0oZB4/edit#gid=0')
var sheet = wbook.getSheetByName('agriculture');

function doGet(e)
{
  var action = e.parameter.action;

  if(action == "getUsers")
  {
    return getUsers(e);
  }
}

function getUsers(e)
{
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues();
  var data = [];

  for(var i=0;i<rows.length;i++)
  {
    var row = rows[i];
    var record = {};

    record['State_Name'] = row[0];
    record['District_Name'] = row[1];
    record['Crop_Year'] = row[2];
    record['Season'] = row[3];
    record['Crop'] = row[4];
    record['Area'] = row[5];
    record['Production'] = row[6];

    data.push(record);
  }

  var result = JSON.stringify(data);

  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON)
}