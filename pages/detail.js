import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Height } from "@material-ui/icons";

export default function AboutPage() {
  const router = useRouter();
  const {
    query: { id_user },
  } = router;

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
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <style jsx>{`
                text-align: center;
             }
             `}</style>
      <h1>User Detail</h1>
      <div className="flex">
        <style>{`
              body {
          background-image: url(https://img.wallpapersafari.com/desktop/1536/864/87/69/Q4RuUB.jpg);
          background-size: cover;
          }
          `}</style>
        {users.length &&
          users.map((user) => {
            return (
              <div>
                <center>
                  {id_user == user.id ? (
                    <p>
                      <strong>{user.first_name}</strong>
                      <strong>{user.last_name}</strong>
                      <br />
                      <strong>{user.email}</strong>
                      <br />
                      <img
                        key={user.avatar}
                        src={user.avatar}
                        width={300}
                        height={300}
                      />
                      <br />
                      <form action="https://reqres.in/api/users/2" method="PUT">
                        <br />
                        <br />
                        <form action="/action_page.php">
                          <label for="name">Name</label>
                        </form>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          autoFocus
                          value={user.first_name}
                          id="first_name"
                          type="text"
                          autocomplete="name"
                          required
                        />
                        <br />
                        <br />
                        <form action="/action_page.php">
                          <label for="name">lastname</label>
                        </form>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          autoFocus
                          value={user.last_name}
                          id="last_name"
                          type="text"
                          autocomplete="name"
                          required
                        />
                        <br />
                        <br />
                        <form action="/action_page.php">
                          <label for="name">Email</label>
                        </form>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          autoFocus
                          value={user.email}
                          id="email"
                          type="text"
                          autocomplete="name"
                          required
                        />
                        <br />
                        <br />
                        <form action="/action_page.php">
                          <label for="name">Avatar</label>
                        </form>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          autoFocus
                          value={user.avatar}
                          id="avatar"
                          type="text"
                          autocomplete="name"
                          required
                        />
                        <br />
                        <br />
                        <button type="submit">Submit</button>
                      </form>
                      <br />
                      <br />
                      <form
                        action="https://reqres.in/api/users/2"
                        method="DELETE"
                      >
                        <button type="submit">Delete User</button>
                      </form>
                    </p>
                  ) : (
                    ""
                  )}
                </center>
              </div>
            );
          })}
      </div>
    </div>
  );
}
