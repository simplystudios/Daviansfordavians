var d = new Date();
         var day = d.getDay
            var date = d.getDate();
            var year = d.getFullYear();
            var month = d.getMonth();
            var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
            month = monthArr[month];
            document.getElementById("date").innerHTML= "<i class='bx bx-copyright'></i> Copyright 2021 - " +" "+ year;