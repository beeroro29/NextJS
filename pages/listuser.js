import * as React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <h1>User List</h1>
      <style jsx>{`.App {
  font-family: sans-serif;
  text-align: center;
  background-image: linear-gradient(130deg,#1fb7e6,#138cdd);
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.flex > div {
  margin: 0 1rem 2rem 1rem;
  text-align: center;
}

img {
  display: inline-block;
  max-width: 100%;
}

             }
             `}</style>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
                <li>
                                    <Link
                                        href={{
                                            pathname: "/detail",
                                            query: { id_user: user.id },
                                        }}
                                    >
                                        <button>Detail</button>
                                    </Link>
                                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
}
