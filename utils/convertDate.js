const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

export const convertMonth = monthNumber => {
  
  let month
  switch (monthNumber) {
    case 1:
      month = months[0]
      break;
    case 2:
      month = months[1]
      break; 
    case 3:
      month = months[2]
      break;
    case 4:
      month = months[3]
      break;
    case 5:
      month = months[4]
      break;
    case 6:
      month = months[5]
      break;
    case 7:
      month = months[6]
      break;
    case 8:
      month = months[7]
      break;
    case 9:
      month = months[8]
      break;
    case 10:
      month = months[9]
      break; 
    case 11:
      month = months[10]
      break;
    case 12:
      month = months[11]
      break;
  }
  return month
}