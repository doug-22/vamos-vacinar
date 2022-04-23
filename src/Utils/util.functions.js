// eslint-disable-next-line
export default {
  documentTitle: (title) => {
    document.title = "Vamos vacinar" + title;
  },
  formatDate: (date) => {
    let day = "" + date.getDate();
    let month = "" + (date.getMonth() + 1);
    let year = date.getFullYear();

    if(day.length < 2) day = "0" + day;
    if(month.length < 2) month = "0" + month;

    return [day, month, year].join("-");
  },
  getDateTomorrow: () => {
    let currentDate = new Date();
    let tomorrowDate = new Date();
    tomorrowDate.setDate(currentDate.getDate() + 1)
    return tomorrowDate;
  },
  getDateYesterday: () => {
    let currentDate = new Date();
    let yesterdayDate = new Date();
    yesterdayDate.setDate(currentDate.getDate() - 1)
    return yesterdayDate;
  },
  filterHours: (list) => {
    let listFilter = ["07:00", "08:00", "09:00", "10:00","11:00","12:00","14:00","15:00","16:00","17:00"];
    if(!(list === undefined)){
      // eslint-disable-next-line
      list.map((hour) => {
        if(listFilter.includes(hour)){
          let count = list.filter(x => x === hour).length;
          if(count === 2){
            let index = listFilter.indexOf(hour);
            listFilter.splice(index, 1);
          }
        }
      });
    }
    return listFilter;
  }
}