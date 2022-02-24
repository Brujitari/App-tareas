const nuevaTarea = document.getElementById('input')
const tareasSpace = document.getElementById('tareas')
const animation = document.createElement('img')
const app = document.getElementById('app')


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






        taskComplete.setAttribute('src', 'assets/check.png')   //sets check image
        taskComplete.style.height = '20px'
        taskComplete.style.width = '20px'


        taskComplete.addEventListener('click', function () {   //event to mark as done

            if (newP.style.textDecoration !== 'line-through') {         //if task isn't done, mark as done  
                newP.style.textDecoration = 'line-through'
                newSpan.style.backgroundColor = 'rgba(83, 68, 83, 0.5)'
                
                if (tareasSpace.children === newP.style.textDecoration === 'line-through') {   //mark as undone if it's done
                    console.log('all done!')
                }
                
                animation.setAttribute('src', 'assets/animation.gif')  //adds and configs our animation
                animation.setAttribute('height', '150px')
                animation.setAttribute('width', '150px')
                app.append(animation)
                animation.style.display = 'flex'
                animation.style.position = 'absolute'
                animation.style.left = '-200px'
                animation.style.bottom = '20px'
                animation.style.zIndex = '-1'


            } else {
                newP.style.textDecoration = 'none'                          //if the task is already marked as done, unmark it
                newSpan.style.backgroundColor = 'rgba(233, 196, 106, 100%)'
                animation.remove()
            }



        })

        const taskDelete = document.createElement('img') // creates button 
        newSpan.append(taskDelete)


        taskDelete.setAttribute('src', 'assets/delete.png')   //sets bin image
        taskDelete.style.height = '20px'
        taskDelete.style.width = '20px'



        taskDelete.addEventListener('click', function () {   //event to delete
            if (newP.style.textDecoration === 'line-through') {
                newSpan.remove()
                animation.remove()
            }
        })





    }
})



