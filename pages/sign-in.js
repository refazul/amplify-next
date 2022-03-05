import { withAuthenticator } from "@aws-amplify/ui-react"
import Link from "next/link"

function SignIn() {
	return (
		<div>
			<h1>Hello</h1>
			<Link href='/'>Home</Link>
		</div>
	)
}

export default withAuthenticator(SignIn)