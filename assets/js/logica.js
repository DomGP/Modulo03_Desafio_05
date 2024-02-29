const inputTarea = document.getElementById('inputTarea') //Input donde se anotan las tareas
const btnAgregar = document.getElementById('btnTarea') //Boton para agregar las tareas
const body = document.querySelector('tbody') //Etiqueta donde aparecen las nuevas tareas
const alerta = document.getElementById('alertMensaje') //Mensaje de input en blanco


//Variables contadores
const contadorTarea = document.getElementById('contadorTareas') //Etiqueta donde aparece el total de tareas
const contadorTareaLista = document.getElementById('contadorRealizadas') //Etiqueta donde aparece el total de tareas realizadas

const tareas = [
    {id: 604, tarea: 'Realizar el Desafio', completado: false },
    {id: 605, tarea: 'Realizar el Desafio', completado: false },
    {id: 606, tarea: 'Realizar el Desafio', completado: false },
]

const render = (tareas) =>{
    let html = ''
    tareas.forEach((tarea) => {
        html += 
        `
            <tr>
                
                <td>${tarea.completado ? `<span class='styleRealizada'>${tarea.id}</span>` : tarea.id}</td>
                <td>${tarea.completado ? `<span class='styleRealizada'>${tarea.tarea}</span>` : tarea.tarea}</td>
                <td>${tarea.completado ? `<i class="fa-regular fa-circle" style="color: #63E6BE;" onclick='completar(${tarea.id})'></i>` : `<i class="fa-solid fa-circle-check" style="color: #63E6BE;" onclick='completar(${tarea.id})'></i>` }</td>
                <td><i class="fa-solid fa-circle-xmark" style="color: #ff0000;" onclick='borrar(${tarea.id})'></i></td>
            </tr>
        `
        
        
    })
    body.innerHTML = html
    contadorTarea.textContent = `Total de tareas: ${tareas.length}`
        contadorTareaLista.textContent = ` Tareas Realizadas: ${tareas.filter(tarea => tarea.completado).length}`
}
render(tareas)

btnAgregar.addEventListener('click', () => {
    const nuevaTarea = inputTarea.value;
    const nuevoId = tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1;
    if(nuevaTarea === ''){
        btnAgregar.style.disabled
        /* alert('Debes agregar una tarea') */
        let mensaje = `<p class= 'alertaMensaje'>Debes agregar una tarea</p>`
        alerta.innerHTML = mensaje
    }else {
        tareas.push({ id: nuevoId, tarea: nuevaTarea, completado: false });
        alerta.innerHTML = ''
        inputTarea.value = ''
    }
    render(tareas)
    
})

const borrar = (id) =>{
    const indexBorrar = tareas.findIndex((ele)=> ele.id == id);
    tareas.splice(indexBorrar,1)
    render(tareas)
}

const completar = (id) => {
    const indexCompletar = tareas.findIndex((ele) => ele.id == id)
    /* tareas[indexCompletar].completado = !tareas[indexCompletar.completado] */
    tareas[indexCompletar].completado = !tareas[indexCompletar].completado;
    render(tareas)
}