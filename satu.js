function countAttendence(str) {
    var kehadiran = str.split(",")
    // console.log(kehadiran)
    var Hadir = 0
    var Izin = 0
    var Sakit = 0

    for (let i = 0; i<kehadiran.length; i++){
        if (kehadiran[i] == "Hadir"){
            Hadir++
        }
        else if (kehadiran[i] == "Sakit"){
            Sakit++
        }
        else {
            Izin++
        }
    }
   
    return "Hadir: " + Hadir + " Izin: " +Izin+ " Sakit: "+Sakit
  }
  
  console.log(countAttendence("Hadir,Sakit,Sakit,Hadir"))
  // output: Hadir: 2, Izin: 0, Sakit: 2