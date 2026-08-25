const GET_API = "https://jsonplaceholder.typicode.com/todos?_limit=10"

const POST_API = "https://jsonplaceholder.typicode.com/todos"

const form = document.querySelector("form")
const missionInput = document.querySelector("#titleInput")
const todoList = document.querySelector("#todoList")
const loadingMsg = document.querySelector("#loadingMsg")

const loadMissions = async () => {
    loadingMsg.textContent = "טוען משימות..."
    const res = await fetch(GET_API)
    const missions = await res.json()
    missions.forEach(m => {        
        addMission(m)
    });
    loadingMsg.textContent = ""
}

const toggleComplete = (li) => {
    const cb = li.querySelector("input")
    const span = li.querySelector("span")

    if (cb.checked) {
        span.style.textDecoration = "line-through"
        span.style.color = "grey"
    } else {
        span.style.textDecoration = "none"
        span.style.color = "black"
    }
}


const addMission = (mission) => {
    const li = document.createElement("li")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = mission.completed

    const label = document.createElement("label")

    const span = document.createElement("span")
    span.textContent = mission.title

    label.append(checkbox, span)
    li.append(label)
    toggleComplete(li)
    todoList.append(li)
}

const validateTitle = (title) => {
    return title.length >= 3
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const title = missionInput.value.trim()
    const errorMsg = document.querySelector(".error-msg")

    const validTitle = validateTitle(title)
    if (!validTitle) {
        errorMsg.textContent = "כותרת חייבת להיות לפחות 3 תווים"
        return
    }
    else {
        errorMsg.textContent = ""
    }
    
    try {
        const result = await fetch(POST_API, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({title, completed: false})
        })
        const newMission = await result.json()
        addMission(newMission)
        form.reset()
    } catch (error) {
        errorMsg.textContent = "נכשל ביצירת משימה חדשה"
    }
})

todoList.addEventListener("change", (e) =>{
    const li = e.target.closest("li")
    toggleComplete(li)
})

document.addEventListener("DOMContentLoaded", loadMissions)

