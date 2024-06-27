import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VolunteerProfileList } from "./volunteerProfile/VolunteerProfileList";
import { VolunteerProfileCreate } from "./volunteerProfile/VolunteerProfileCreate";
import { VolunteerProfileEdit } from "./volunteerProfile/VolunteerProfileEdit";
import { VolunteerProfileShow } from "./volunteerProfile/VolunteerProfileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Volunteer Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="VolunteerProfile"
          list={VolunteerProfileList}
          edit={VolunteerProfileEdit}
          create={VolunteerProfileCreate}
          show={VolunteerProfileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
