const nuevaTarea = document.getElementById('input')



//nuevaTarea.value es el input que tenemos que recoger

const tareasSpace = document.getElementById('tareas')

nuevaTarea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && nuevaTarea.value !== '') {

        const newSpan = document.createElement('span')  // variable that creates div
        const newP = document.createElement('p')  // variable that creates p

        /* newSpan.style.display = 'flex'
        newSpan.style.justifyItems = 'right'   TRIED TO MOVE ALL TASKS TO THE RIGHT BUT DOESNT WORK*/

        tareasSpace.appendChild(newSpan)  //creates div inside tareasSpace
        newSpan.appendChild(newP)    //creates p inside div
        newP.innerText = nuevaTarea.value   //inserts user input in new p

        const completedButton = document.createElement('img')   //variable that creates button
        newSpan.append(completedButton)      //inserts button inside newSpan, after user input
        nuevaTarea.value = ''    //deletes text from input

        

        completedButton.setAttribute('src', 'assets/check.png')
        completedButton.style.height = '20px'
        completedButton.style.width = '20px'


        completedButton.addEventListener('click', function (){   //event to mark as done
            newP.style.textDecoration = 'line-through'
            newSpan.style.backgroundColor = 'rgba(83, 68, 83, 0.5)'
        })

        const borrarButton = document.createElement('img') // creates button 
        newSpan.append(borrarButton)
        

        borrarButton.setAttribute('src', 'assets/delete.png')
        borrarButton.style.height = '20px'
        borrarButton.style.width = '20px'





        borrarButton.addEventListener('click', function () {   //event to delete
            newSpan.remove()
        })

        

    }
})



