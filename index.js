const nuevaTarea = document.getElementById('input')



const tareasSpace = document.getElementById('tareas')

nuevaTarea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && nuevaTarea.value !== '') {
        
        const newSpan = document.createElement('span')  // variable that creates div
        const newP = document.createElement('p')  // variable that creates p

        tareasSpace.appendChild(newSpan)  //creates div inside tareasSpace
        newSpan.appendChild(newP)    //creates p inside div
        newP.innerText = nuevaTarea.value   //inserts user input in new p

        const taskComplete = document.createElement('img')   //variable that creates button
        newSpan.append(taskComplete)      //inserts button inside newSpan, after user input
        nuevaTarea.value = ''    //deletes text from input

        
        

        taskComplete.setAttribute('src', 'assets/check.png')   //sets image to taskComplete
        taskComplete.style.height = '20px'
        taskComplete.style.width = '20px'


        taskComplete.addEventListener('click', function (){   //event to mark as done

            if (newP.style.textDecoration !== 'line-through') {
               newP.style.textDecoration = 'line-through'
            newSpan.style.backgroundColor = 'rgba(83, 68, 83, 0.5)' 
            } else {
                newP.style.textDecoration = 'none'
            newSpan.style.backgroundColor = 'rgba(233, 196, 106, 100%)'
            }

            
    
        })

        const taskDelete = document.createElement('img') // creates button 
        newSpan.append(taskDelete)
        

        taskDelete.setAttribute('src', 'assets/delete.png')   //sets image to taskDelete
        taskDelete.style.height = '20px'
        taskDelete.style.width = '20px'





        taskDelete.addEventListener('click', function () {   //event to delete
            if (newP.style.textDecoration === 'line-through') {
                newSpan.remove()    
            }
        })

        console.log(taskComplete.getSource)

    }
})



