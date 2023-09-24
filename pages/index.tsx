import { GetStaticProps } from "next";

export default function Page(props: any) {
	return (
		<div>
			<h1 className="text-4xl">Home</h1>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return {
		props: {},
		revalidate: 10,
	};
};
