import Header from "@/components/Header";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
	title: "Air Hostess Academy",
	description: "Air Hostess Academy",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="">
				<EnquiryForm />
				<Header />
				<Navbar />
				{children}
				<FloatingActionButtons />
				<Footer />
			</body>
		</html>
	);
}
