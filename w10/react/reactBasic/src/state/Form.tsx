import React from "react";

const Form = () => {
    const [form, setForm] = React.useState({ name: "", email: "" });
    const change = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const key = e.target.name;
        const value = e.target.value;
        setForm((prev) => ({ ...prev, [key]: value }));
    };
    return (
        <>
            <div>
                name:{form.name} | email: {form.email}
            </div>
            <form>
                <label>
                    name
                    <input type="text" name="name" onChange={change} />
                </label>
                <label>
                    email
                    <input type="text" name="email" onChange={change} />
                </label>
                <button type="submit" onSubmit={(e) => {e.preventDefault()}}>
                    submit
                </button>
            </form>
        </>
    );
};

export default Form;
