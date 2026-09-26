function project1(x) {

    setTimeout(() => { 

        console.log("Project1 completed")
        x()
        
    }, 2000);
    
}

function project2(x) {

    setTimeout(() => { 

        console.log("Project2 completed")
        x()
        
    }, 1000);
    
}

    
    
function project3() {

    setTimeout(() => { 

        console.log("Project3 completed")
        x()
        
    }, 400);
    
}


project1( function() {
    project2(function (){
        project3 ( function () {
            console.log("All Task Completed")
        })
    })
})

