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
            amet tellus cras adipiscing enim eu turpis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Mi in nulla posuere
            sollicitudin aliquam. Dolor sed viverra ipsum nunc aliquet bibendum enim. Sed euismod nisi porta lorem mollis aliquam ut. Lacus
            vel facilisis volutpat est velit egestas dui id. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Amet tellus cras
            adipiscing enim eu turpis egestas. Pharetra magna ac placerat vestibulum lectus. Neque laoreet suspendisse interdum consectetur
            libero. Cursus euismod quis viverra nibh cras pulvinar mattis. Rhoncus dolor purus non enim praesent. Cras pulvinar mattis nunc
            sed blandit libero volutpat. Turpis egestas integer eget aliquet. Dictum varius duis at consectetur lorem donec massa sapien.
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;