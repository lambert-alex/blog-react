/**These are necessary imports / components for the page */
import { PageLayout } from "../../src/components";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            {/* Replace the below content with your content */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quis viverra nibh cras pulvinar mattis nunc. Aliquet eget sit
                amet tellus cras adipiscing enim eu turpis.
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;