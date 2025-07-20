import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import './index.css'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SignIn />
		<SignUp />
	</StrictMode>
);
