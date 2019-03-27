var fs = require('fs');
function deleteJson(){
    fs.readFile('./dataNew.json',function(err,data){
        if(err){
            return console.error(err);
        }
        var person = data.toString();
        person = JSON.parse(person);
        let arr = []
        for(var i = 0; i < person.length;i++){
            delete person[i].center
            
            // person[i].center = person[i].center.split(',')
            // arr.push(person[i].center)
            // person[i].mainPosition = {
            //     lng:person[i].center[0],
            //     lat:person[i].center[1]
            // }
            for(var x = 0;x<person[i].districts.length;x++){
                delete person[i].districts[x].center

                // person[i].districts[x].center = person[i].districts[x].center.split(',')
                // arr.push(person[i].districts[x].center)
                // person[i].districts[x].mainPosition = {
                //     lng:person[i].districts[x].center[0],
                //     lat:person[i].districts[x].center[1]
                // }

                for(var y = 0;y<person[i].districts[x].districts.length;y++){
                    delete person[i].districts[x].districts[y].center

                    // for(var z = 0;z<person[i].districts[x].districts[y].districts.length;z++){
                    //     delete person[i].districts[x].districts[y].districts[z]
                    //     console.log(person[i].districts[x].districts[y].districts[z])
                    // }
                }
            }
            // console.log(person[i].lat,person[i].lng)
            // person[i].mainPosition = {
            //     lng:person[i].lng,
            //     lat:person[i].lat
            // }
        }
        
        console.log(person)
        var str = JSON.stringify(person);
        fs.writeFile('./dataNew.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log("----------成功------------");
        })
    })
}
deleteJson()
