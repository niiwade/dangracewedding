"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(
	() => import("react-paystack").then((mod) => mod.PaystackButton),
	{
		ssr: false,
	},
);

const Paystack: React.FC = (): JSX.Element => {
	const [ref, setRef] = useState("");
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState(0);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		setSuccess(false);
		setRef("" + Math.floor(Math.random() * 1000000000 + 1));
	}, [success]);

	const config = {
		reference: ref,
		email: email,
		amount: amount * 100, // Convert to kobo
		publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_TEST_KEY as string,
		firstname: name,
		lastname: surname,
		currency: "GHS",
	};

	const handlePaymentSuccess = (reference: any) => {
		console.log("Payment successful", reference);
		setSuccess(true);
		setEmail("");
		setAmount(0);
		setName("");
		setSurname("");
	};

	const handlePaymentClose = () => {
		console.log("Payment window closed");
	};

	const componentProps = {
		...config,
		text: `Pay GHS ${amount | 0}`,
		onSuccess: handlePaymentSuccess,
		onClose: handlePaymentClose,
	};

	if (typeof window === "undefined") {
		return <div>
			 <div className="loader"/> 

		</div>
	}

	return (
		<div id="paymentForm" className="container mx-auto py-5 mt-5">
			<div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
				<div className="md:flex">
					<div className="w-full px-6 py-8 md:p-8">
					<h2 className="text-2xl font-bold text-gray-800">Send a gift</h2>
							<p className="mt-4 text-gray-600">
								Please fill out the form below to send your gift.
							</p>
						<div className="mt-6">
							<div className="form-group mb-6">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									id="email-address"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="johndoe@example.com"
								/>
							</div>

							<div className="form-group mb-6">
								<label htmlFor="amount">Amount</label>
								<input
									type="number"
									id="amount"
									required
									value={amount}
									onChange={(e) => setAmount(Number(e.target.value))}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder=" GHS0"
								/>
							</div>

							<div className="form-group mb-6">
								<label htmlFor="first-name">First Name</label>
								<input
									type="text"
									id="first-name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="John Doe"
								/>
							</div>
							<div className="form-group mb-6">
								<label htmlFor="last-name">Last Name</label>
								<input
									type="text"
									id="last-name"
									value={surname}
									onChange={(e) => setSurname(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="John Doe"
								/>
							</div>

							<button
								className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="button"
							>
								<PaystackButton {...componentProps} />
							</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Paystack;
