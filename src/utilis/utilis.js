export const getDate=(date)=>{
    var newDate=new Date(date)
    var myDay = newDate.getDate();
    var myMonth = newDate.getUTCMonth();
    myMonth++;
    var year = newDate.getUTCFullYear();
    var fullDate = myDay + "." + myMonth + "." + year;
    return fullDate
  }

 export const  capitalLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)

  }