import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Nav = () => {
  const handleLogout = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    signOut(auth)
      .then(() => {
        toast.success("Has cerrado sesión");
      })
      .catch((error) => {
        toast.error(`Ha ocurrido un error al cerrar sesión: ${error.message}`);
      });
  };

  return (
    <div>
      <nav>
        <ul>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
