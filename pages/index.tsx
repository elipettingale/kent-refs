import { getGlobal, getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";

interface Props {
	page: PageType
}

export default function Page({ page }: Props) {
	return (
		<div>
			<h1 className="text-4xl">{page.title}</h1>
            {renderContent(page.content)}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const global = await getGlobal();
    const page = await getPageBySlug("/home");

	return {
		props: {
			global: global,
            page: page,
			seo: page?.seo,
        },
		revalidate: 10,
	};
};
