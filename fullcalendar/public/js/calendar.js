$(document).ready(function() {
   var date = new Date();
   var d = date.getDate();
   var m = date.getMonth();
   var y = date.getFullYear();
   var x = new Date();
   var y = new Date();
   var z = new Date();
   var u = new Date();
   x.setDate(1);
   x.setMonth(x.getMonth() - 1);
   y.setDate(1);
   y.setMonth(y.getMonth()+1)
   z.setDate(1);
   z.setMonth(z.getMonth()-2)
   u.setDate(1);
   u.setMonth(u.getMonth())

   var cal0 = $('#calendar0');
   var cal1 = $('#calendar1');
   var cal2 = $('#calendar2')
   var cal3 = $('#calendar3')

   cal0.fullCalendar({
    header: {
      left: 'title',
      center: '',
      right: 'prev,next today'
    },
    defaultDate: z,
    
  });

  cal1.fullCalendar({
    header: {
      left: 'title',
      center: '',
      right: ''
    },
    defaultDate: x,
    
  });

  cal2.fullCalendar({
    header: {
      left: 'title',
      center: '',
      right: ''
    },
    defaultDate: date,
    
  });

  cal3.fullCalendar({
    header: {
      left: 'title',
      center: '',
      right: ''
    },
    defaultDate: y,
    
  });






  `enter code here`
});