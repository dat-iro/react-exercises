import { React } from "react"
import { useState } from "react"

export function Login() {
    const [data, setData] = useState({
        username: 'Matteo',
        password: '',
        save: false
    })

    function handleInput (event) {
        const value = event.target.value;
        const name = event.target.name;
        const checked = event.target.checked;
        const type = event.target.type;

        setData((data)=> {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

  return (
    <div>
        <input name="username" type="text" value={data.username} onChange={handleInput} />
        <input name="password" type="password" value={data.password} onChange={handleInput} />
        <label htmlFor="save">Remember me!</label>
        <input name="save" type="checkbox" checked={data.save} onChange={handleInput} />
    </div>
  )
}