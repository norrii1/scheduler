let d = new Date
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.getElementById('currentDay').innerHTML= days[d.getDay()]

for(let i = 9; i < 18; i++){ 
  let j = document.getElementById(`hour-${i}`)
    if(i == d.getHours()) { 
      j.className = 'present'
    } else if  (i < d.getHours()) { 
      j.className = 'past'
    } else { 
      j.className = 'future'
    }
}

for (let i = 9; i < 18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) { 
    let text = $(event.target).prev('.description').val()
    let time = $(event.target).parent().attr('id')
    console.log(time)
    localStorage.setItem(time, text)
  }
})