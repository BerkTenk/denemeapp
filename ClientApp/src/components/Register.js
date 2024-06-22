import React, { useState, useEffect } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('danışan'); // Default role
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!passwordsMatch) {
      return;
    }

    const response = await fetch("https://localhost:44418/api/Account/Register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password, role })
    });

    if (response.ok) {
      alert("Kayıt başarılı");
      // Başarılı kayıt durumunda başka bir işlem yapabilirsiniz, örneğin giriş yapabilirsiniz.
    } else {
      alert("Kayıt başarısız!");
    }
  };

  return (
    <div className="container" style={{backgroundColor:'lightgreen',maxWidth:"850px"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleRegister} className="mt-4">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı Adı"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Şifre Tekrar"
                required
              />
              {!passwordsMatch && (
                <div className="text-danger mt-1">
                  Şifreler eşleşmiyor!
                </div>
              )}
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="danışan">Danışan</option>
                <option value="danışman">Danışman</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mt-1 mb-4 rounded-pill px-3" type="submit">Kayıt Ol</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}