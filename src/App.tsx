import Starfield from "./components/Space";

import Social from "./components/Social";
import config from "./config/config";
import useAuth from "./hooks/useAuh";
import { AuthProvider } from "./context/auth";
import AppRoutes from "./routes/Routes";

function App() {
    return (
      <AuthProvider>
        <AppRoutes/>  
      </AuthProvider>
    )
}

export default App;
