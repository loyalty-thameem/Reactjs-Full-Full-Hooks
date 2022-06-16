import React, { useState } from 'react';
export default function Usestate() {
  const [data, setData] = useState({
    Username: '',
    Password: '',
  });
  const [form, setForm] = useState({
    Username: '',
    Password: '',
  });
  const [submit, submitted] = useState(false);
  const updateField = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const printValue = (e) => {
    e.preventDefault();
    setForm({ Username: data.Username, Password: data.Password });
    submitted(true);
  };
  return (
    <div>
      <form onSubmit={printValue}>
        <label>
          Username:
          <input
            type="text"
            name="Username"
            value={data.Username}
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Passworld:
          <input
            type="password"
            name="Password"
            value={data.Password}
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <p>{submit ? form.Username : null}</p>
      <p>{submit ? form.Password : null}</p>
    </div>
  );
}
