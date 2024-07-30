/**These are necessary imports / components for the page */
import Link from "next/link";
import { LinkTo, PageLayout } from "../../src/components";
import CommentForm from "../../src/components/CommentComponents/CommentSection";
import 'react-h5-audio-player/lib/styles.css';

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            {/* Replace the below content with your content */}
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
            <br/> <title className="font-bold">Privacy and Ethics in Digital Learning</title> <br/>
            <h2 className="font-bold">Privacy in Digital Learning:</h2>
            <br/>Privacy in digital learning is something I have switched sides on a couple of times throughout my life. I think it is easy to take education as something that will always be available and what is acceptable today will always be acceptable into the future. Therefor students should have the expectation that any work they create will remain private and the rights to that work remains under their control, if the assignments they complete are not going to remain this way it should be explained succinctly in plain English some of the consequences of allowing to work to be used publicly. I believe that this is a reasonable expectation that students should have at least until they reach the age of majority. I believe this for two reasons:<br/>
            <br/>
            <ol>
                <p><li>1. It is the same problem as the “I agree to the terms and conditions” problem. Students are often not aware of the consequences of allowing companies to collect their schoolwork especially in such a large way.</li></p><br/>
                <p><li>2. Most of the companies that operate these tools have legal obligations to maximize their profits and thus the students' best interests might not be the interests of the companies running these programs <LinkTo href="https://www.eff.org/deeplinks/2021/06/long-overdue-reckoning-online-proctoring-companies-may-finally-be-here" className="dark:text-blue-300 text-blue-800">(ProtorU security vulnerability's expose students to hacking)</LinkTo>. Also, the Canadian Government does not have the best track record in regards to education, especially minority groups.</li></p>
            </ol>
            <br/>
            <br/><h2 className="font-bold">Privacy vs Educational Needs:</h2><br/>
            Ultimately privacy is such a difficult and complex subject that creating a guideline to cover every eventuality is a futile project.  Instead of schools or educators should have to provide a written justification as to why sacrificing student privacy is necessary. By having to give a written justification for sacrificing student privacy teachers and school are providing accountability for their decision. This also allows teachers to have discretion over their courses while forcing them to consider student privacy. Students should also always have an avenue for appealing issues which relate to their privacy.<br/>
            <br/>
            <br/><h2 className="font-bold">Universal Design for Learning:</h2><br/>
            Universal Design seems like a collection of common-sense principles that act as a good starting place to design an inclusive educational environment. I think UDL principles could be leveraged to tailor a course to the neediest students and then build the learning environment from there. By having this standard, the most neediest students are cared for and students with lesser needs are still able to navigate the course easily as it as been made accessible to all.<br/>
            <br/>
            <br/><h2 className="font-bold">Ethics and Digital Tools in Education:</h2><br/>
            <br/>A big ethical question with all digital tools is they cater to the majority. AI is the perfect place to examine this problem. Currently a huge issue with how AI is trained right now is the normalization problem. In short outliers in the data used to train AI break the models, so outliers (The bottom 5% and top 5%) of the normalization in the training data is thrown out. As most data is collected on majority populations the outliers often end up being minorities and the data that could help them ends up being thrown out. This is  one way we can end up with <LinkTo href='https://www.media.mit.edu/articles/artificial-intelligence-has-a-problem-with-gender-and-racial-bias-here-s-how-to-solve-it/' className="dark:text-blue-300 text-blue-800"> racist AI</LinkTo>. Another issue is baked in biases to the training data (like under preforming schools being in poorer neighbourhoods). This is also an issue with UX/UI design, where people designing the UI's are often not disabled and thus create ableist designs. Like using privacy violating tools educators and schools should be required to provide justification for the ethical considerations that they made when choosing to use a tool where they specifically consider how minorities will be affected by the tool and how the data that the tool collects will be used and the justification for why that is okay.  This is truly the only way without creating a 1,000,000 page document for every eventuality.  As I mentioned in the privacy section of this weeks blog there must always be an avenue for quick and fair appeal for a student as no system created will be perfect and that must be rectified quickly and fairly for a just system.<br/>
            <br/>
            <Link href="https://github.com/lambert-alex/blog-react/blob/main/pages/blog/blog-post-four.tsx/" className="my-2 py-2 px-4 mx-w-fit border rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white font-semibold">This blog is an example of accessible web design. See the code and look at the uses of h2, title, list, br, LinkTo, Link and button elements on this page.</Link>
            <LinkTo href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"  className="my-2 py-2 px-4 mx-w-fit border rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white font-semibold">Mozilla guide to accessible web design and how the changes in the link above help screen readers.</LinkTo>
            </div>
            {/* Replace the above content with your content */}
            <CommentForm blog_id={3}/>
        </PageLayout>
    )
}

export default Article;