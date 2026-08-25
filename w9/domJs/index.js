const API = "https://jsonplaceholder.typicode.com/users";

const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const roleSelector = document.querySelector("#role");
const agreeBox = document.querySelector("#agree");
const userList = document.querySelector("#userList");
const msg = document.querySelector("#msg");

const loadUsers = async () => {
    const result = await fetch(API);
    const users = await result.json();
    users.forEach((user) => addUserRow(user));
};

const addUserRow = (user) => {
    const li = document.createElement("li");
    li.textContent += `${user.name} -- ${user.email}`;
    userList.prepend(li);
};

const showMessage = (text, className) => {
    msg.textContent = text;
    msg.classList.add(className);
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const role = roleSelector.value;
    const agree = agreeBox.checked;    

    if (!email.includes("@")) {
        msg.textContent = "חסר @";
        msg.classList.add("ok");
        return;
    }

    if (name.length < 2) {
        msg.textContent = "שם קצר מ-2";
        msg.classList.add("bad");
    }

    const result = await fetch(API, {
        method: "POST",
        headers: { "Content-type": "applocation/json" },
        body: JSON.stringify({ name, email, role }),
    });

    if (result.ok) {
        const created = await result.json();
        addUserRow({
            name: created.id,
            email: created.email,
        });
        form.reset();
    } else {
        showMessage("error" + result.status, "bad");
    }
});

document.addEventListener("DOMContentLoaded", loadUsers);
