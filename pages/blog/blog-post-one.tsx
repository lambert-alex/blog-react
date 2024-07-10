/**These are necessary imports / components for the page */
import { PageLayout } from "../../src/components";
import YouTube from 'react-youtube';

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            {/* Replace the below content with your content */}
            <a target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                <img src="/images/baldface.jpeg" alt="A picture from my time plumbing" className="rounded-lg overflow-hidden" />
            </a>
            <br/>
            Hello everybody this is my blog post #1,
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
            My name is Alex Lambert. I currently a fourth-year computer science Major. I am super interested in learning and education for a few reasons. Before I started university I did a plumbing apprenticeship. Combining both I would personally really enjoy becoming a trades school instructor. Which is one of my reasons for taking this and other courses offered by the faculty of education. The hands-on learning and the focus on job specific skills followed by intense periods of study really effected my thoughts on education. When I switched life paths and started pursuing a university degree, I realized how poorly set up university was for learning.<br/>
            <br/>
            While I understand that university is not all about learning and there is a great deal of focus on making students become better researchers, the way teaching is done in secondary and post-secondary schools still feels wrong to me. So often students are left with no context for the skills they are learning. For me personally I remember taking linear algebra in my first year at UVIC, I hated the course, and I didn’t understand why I had to take it. Now three years later after taking courses on quantum computing and machine learning the importance of learning linear algebra has been made clear to me. I guess what I am saying is that I feel like university is one extreme of learning and Trades apprenticeships are another extreme of learning. Having gone through both, I feel like there exists a happy medium between them that would benefit the most students.<br/>
            <br/>
            <a target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                <img src="/images/inclass.jpg" alt="Some time learning in class" className="rounded-lg overflow-hidden" />Time spent learning in University<br/><br/>
            </a>
            Distributed learning really feels like that special balance between the two extremes. It allows students to approach topics at their own pace more like trades school. It also however allows students to build the skills formed in university around research and other more academically rigorous processes. In my experience this is how I have always approached learning and it is something I would love to see become a bigger part of our educational institutions.<br/>
            <br/>
            In my own personal experience personal learning networks play a large role in distributed learning. Me and two of my friends are really into dodge diesel trucks. We would learn about them online and eventually we all had one. It was sort of an informal learning group. One day the flywheel broke apart on my truck and I couldn’t afford the $5000 bill that it would have cost to get it fixed at a mechanics. So, I found this video and started replacing the clutch and flywheel. I quickly got discouraged and was going to give up. However, my friends also wanted to learn how to change the clutch so they came and helped me and we learned together. I guess what I am trying to say with this personal anecdote is that distributed learning worked great and got me started but my personal learning network helped me finish.<br/>
            <br/>
            I am really excited to read everyone’s blog post and I hope everyone is having a great summer!
            </div>
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                <br/> The video that I used to learn about how to change a clutch.<br/><br/>
                <YouTube videoId="PSE274c4Icc"/>
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;