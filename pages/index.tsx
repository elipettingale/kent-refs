import { getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { GetStaticProps } from "next";

export default function Page({ page }: any) {
	return (
		<div>
			<h1 className="text-4xl">{page.title}</h1>
            {renderContent(page.content)}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const page = await getPageBySlug("/home");

	return {
		props: {
            page: page
        },
		revalidate: 10,
	};
};
